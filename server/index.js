const express = require('express')
const app = express()
const webpack = require('webpack')
const path = require('path')
const url = require('url')

const PATH = require('../config/path')
const compiler = webpack(require('../webpack/webpack.config.js'))

const getHtmlSrcPath = req => {
  const reqPath = url.parse(req.url).pathname
  if (!reqPath || !reqPath.match(/(\/|\.html)$/)) return false
  const reqExtname = path.extname(path.basename(reqPath))
  return reqExtname === '.html' ?
    reqPath.replace(reqExtname, '.html') :
    path.join(`${reqPath}`, 'index.html')
}

const renderHTML = (req, res, next) => {
  const srcPath = getHtmlSrcPath(req)
  if (typeof srcPath !== 'string') {
    next()
    return false
  }
  const filename = path.resolve(compiler.outputPath, srcPath)
  compiler.outputFileSystem.readFile(filename, function (err, result) {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
}

app
  .use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: '/'
  }))
  .use(renderHTML)
  .use(express.static(PATH.DEST))
  .listen(3000, () => {
    console.log('Server is running')
  })