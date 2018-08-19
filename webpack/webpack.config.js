module.exports = {
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : '',
  entry: require('./webpack.entry'),
  output: require('./webpack.output'),
  module: require('./webpack.module'),
  resolve: require('./webpack.resolve'),
  optimization: require('./webpack.optimization'),
  plugins: require('./webpack.plugins')
}
