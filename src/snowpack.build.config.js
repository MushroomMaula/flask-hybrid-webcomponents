/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/../templates',
    src: '/js',
    assets: '/assets'
  },
  plugins: [
    ['@snowpack/plugin-typescript'],
    /*["@snowpack/plugin-webpack", {
    sourceMap: true
    }]*/
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: "../static"
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
