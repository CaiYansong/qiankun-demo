const { name } = require('./package');

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    // webpack@4.x
    // config.output.jsonpFunction = `webpackJsonp_${name}`;
    // webpack@5.x
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    // webpack@4.x
    // config.watchContentBase = false;
    // webpack@5.x
    config.static.watch = false;
    config.liveReload = false;

    return config;
  },
};