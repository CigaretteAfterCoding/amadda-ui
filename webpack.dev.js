/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true,
  },
});
