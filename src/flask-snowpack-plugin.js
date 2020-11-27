const jsdom = require("jsdom");
const path = require('path');

/**
 * @param {HTMLLinkElement|HTMLScriptElement|HTMLImageElement} tag - Tag to edit the attribute
 * @param {String} attr - Name of the html attribute
 * @param {String} folder - folder to give url_for
 */
function getNewAttribute(tag, attr, folder) {
  let value = tag.getAttribute(attr);
  if (value.startsWith('/')) {
    value = value.replace('/', '')
  }
  return `{{ url_for('${folder}', filename='${value}') }}`;
}

/*
* This plugin changes all src and href links in a given file to use flasks url_for
* @param pluginOptions.folder - Foldername which is given to flasks url_for as folder parameter
* @param {Array} pluginOptions.included - Array of files to be processed if empty every html file is transformed
* */
function main (snowpackConfig, pluginOptions) {
  return {
    name: 'flask-snowpack',
    async transform({id, contents, isDev, fileExt}) {

      const filename = path.basename(id);
      let processFile = false;

      // check if this file is set by the user to be processed
      if (fileExt === '.html') {
        if (pluginOptions.included !== undefined) {
          if (pluginOptions.included.includes(filename)) {
            processFile = true;
          }
        }
      }

      if (processFile) {
        // Create a virtual dom to attribute value
        const dom = new jsdom.JSDOM(contents);
        const document = dom.window.document;

        // Change all src attributes
        for (const tag of document.querySelectorAll('[src]')) {
          const attr = getNewAttribute(tag, 'src', pluginOptions.folder);
          tag.setAttribute('src', attr);
        }
        // Change all href attributes
        for (const tag of document.querySelectorAll('[href]')) {
          const attr = getNewAttribute(tag, 'href', pluginOptions.folder);
          tag.setAttribute('href', attr);
        }

        // return the updated html file
        return `${dom.serialize()}`;
      }
    }
  }
}

module.exports = main;