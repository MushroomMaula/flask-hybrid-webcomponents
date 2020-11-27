/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    assets: '/assets',
    public: '/',
    src: '/js',
  },
  plugins: ['@snowpack/plugin-typescript'],
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
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
