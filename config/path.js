const path = require('path');

const ROOT = path.join(__dirname, '../');
const STATIC = path.resolve(`${ROOT}/static`);
const SRC = path.resolve(`${ROOT}/src`);
const DEST = path.resolve(`${ROOT}/dist`);
const PUBLIC_PATH = '/boilerplate_reactweb/';
const OUTPUT = path.join(DEST, PUBLIC_PATH);

exports.ROOT = ROOT;
exports.SRC = SRC;
exports.DEST = DEST;
exports.PUBLIC_PATH = PUBLIC_PATH;
exports.OUTPUT = OUTPUT;
exports.TEMPLATE_SRC = path.resolve(`${SRC}/templates`);
exports.JS_SRC = path.resolve(`${SRC}/scripts`);
exports.ENTRY_POINTS = path.resolve(`${SRC}/scripts/entrypoints`);