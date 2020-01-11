/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const PATH = require('../config/path');

module.exports = [
  new ProgressBarPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(PATH.TEMPLATE_SRC, 'index.html'),
  }),
  new webpack.DefinePlugin({
    'process.env.BASE_URL': PATH.PUBLIC_PATH,
  }),
];
