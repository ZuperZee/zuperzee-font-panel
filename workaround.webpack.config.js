// Rename to webpack.config.js

const pluginJson = require('./src/plugin.json');

/**
 * @type {import("@grafana/toolkit/src/config").CustomWebpackConfigurationGetter}
 */
module.exports.getWebpackConfig = (config, options) => {
  config.module.rules.push(
    ...[
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          publicPath: `public/plugins/${pluginJson.id}/img/`,
          outputPath: 'img/',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          publicPath: `public/plugins/${pluginJson.id}/fonts/`,
          outputPath: 'fonts/',
        },
      },
    ]
  );

  return config;
};
