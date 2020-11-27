Make use of WebComponents and Flask to create nicely server side rendered
Webpages with Jinja2.

### Getting started
Clone this repository
Install the python dependencies
````shell script
poetry install
````

Install node dependencies
````
cd src
npm install
```` 

### Development
Start the flask server
`````shell script
flask run
`````
Start the snowpack dev server
````shell script
cd src
npm run dev
````
This will rebuild the components and place them in your flask static folder and create ``index.html`` inside your
templates folder. We use snowpack because it's way faster at rebuilding the files for flask.

If you want to change ``ìndex.html`` edit it inside `src/public`.

Create your WebComponents inside `src/components` and import them into `index.html` they should be usable afterwards inside
all your html files which extend ``index.html``.

If you just want to edit the components without needing flask for dynamic content you can run 
````shell script
cd src
npm run start 
````

If you want to build for production use
````shell script
npm run build
```` 
For optimizing the build or bundeling have a look at the options [snowpack](https://www.snowpack.dev/#optimized-builds)
 provides