'use strict'

const fs = require('fs')
const path = require('path')

const async = require('async')
const mkdirp = require('mkdirp')
const debug = require('debug')('html')
const dio = require('dio.js')
const {preprocess} = require('preprocess')

//

exports.htmlBuilder = htmlBuilder

/*
main({
  base: 'src/index.html',
  outputDir: 'out',
  pages: [
    {
      dest: 'index.html',
      source: require('../src/me.js').Me,
      title: 'me'
    },
    {
      dest: 'contact.html',
      source: require('../src/contact.js').Contact,
      title: 'contact'
    }
  ]
})
*/

//

function htmlBuilder ({base, outputDir, pages, preprocessOptions}, callback) {
  debug('start')
  
  const templateFile = base
  const reflected = async.reflectAll(
    pages.map((page) => _runDioRender.bind(null, {
      templateFile,
      outputDir,
      preprocessOptions
    }, page))
  )

  async.series([
    async.apply(mkdirp, outputDir),
    async.apply(async.parallel, reflected)
    // async.parallel(pages.map((page) => async.apply(__foo, page)))
    // async.parallel(reflected)
  ], function () {
    debug('end')
    callback()
  })
}

//

function _template (templateFile, body, stylesheet) {
  return fs.readFileSync(templateFile)
    .toString('utf8')
    .replace(/<!--\s*@body\s*-->/, body)
    .replace(/\/\*\s*@stylesheet\s*\*\//, stylesheet)
}

function _runDioRender ({outputDir, preprocessOptions, templateFile}, page, cb) {
  debug('_runDioRender', page)
  const content = dio
    .renderToString(page.source, _template.bind(null, templateFile))
    .replace(/<!--\s*@title\s*-->/, page.title)
  debug(preprocessOptions)
  const preprocessedContent = preprocess(content, preprocessOptions)
  fs.writeFile(path.join(outputDir, page.dest), preprocessedContent, cb)
}

