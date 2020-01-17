/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const express = require('express');
const PATH = require('../config/path')

module.exports = {
  port: 3000,
  hot: true,
  hotOnly: true,
  historyApiFallback: true,
  contentBase: path.join(__dirname, '../dist'),
  openPage: PATH.PUBLIC_PATH.replace(/^\//, ''),
  before: app => {
    app.use('/static', express.static(path.resolve(__dirname, '../static')));
  },
};
