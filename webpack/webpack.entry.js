const PATH = require('../config/path')
const getEntries = require('./utils/getEntries')
const pkg = require('../package')
const deps = Object.keys(pkg.dependencies)

module.exports = getEntries(PATH.ENTRY_POINTS, {
  vendor: deps
})
