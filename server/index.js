const PATH = require('../config/path')
const path = require('path')
const express = require("express")
const app = express()
const renderPugAsHtml = require(path.join(
  PATH.SERVER,
  '/middlewares/renderPugAsHtml'
))

app
  .use(renderPugAsHtml)
  .use(express.static(PATH.DEST))
  .listen(3000, () => {
    console.log('Server is running')
  })
