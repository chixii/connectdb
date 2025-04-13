const { injectBabelPlugin } = require('react-app-rewired');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.plugins.push(
      new WorkboxPlugin.InjectManifest({
        swSrc: './public/custom-service-worker.js',
        swDest: 'service-worker.js',
      })
    );
  }
  return config;
};
