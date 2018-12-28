const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../static/index.html')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development'
    )
  })
]