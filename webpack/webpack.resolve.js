const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const PATH = require('../config/path')

module.exports = {
  plugins: [
    new TsconfigPathsPlugin()
  ],
  extensions: [
    '.ts',
    '.tsx',
    '.js',
    '.jsx'
  ],
}
