/* eslint-disable @typescript-eslint/no-var-requires */
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
  mode: 'production',
});
