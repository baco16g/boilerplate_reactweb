const path = require('path')

const ROOT = path.join(__dirname, '../')
const STATIC = path.resolve(`${ROOT}/static`)
const SRC = path.resolve(`${ROOT}/src`)
const DEST = path.resolve(`${ROOT}/dist`)
const SERVER = path.resolve(`${ROOT}/server`)

exports.ROOT = ROOT
exports.SRC = SRC
exports.DEST = DEST
exports.SERVER = SERVER
exports.JS_SRC = path.resolve(`${SRC}/scripts`)
exports.JS_DEST = path.resolve(`${DEST}/assets/javascripts`)
exports.ENTRY_POINTS = path.resolve(`${SRC}/scripts/entrypoints`)