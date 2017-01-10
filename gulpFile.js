'use strict'

var argv = require('yargs').argv
var debug = require('debug')('gulpfile')
var gulp = require('gulp')
var mkdirp = require('mkdirp')
var path = require('path')

var browserSync = require('browser-sync').create()
var reload = browserSync.reload

var $ = require('gulp-load-plugins')()

var config = {
  outFolder: 'out',
  tmpFolder: '.tmp',
  srcFolder: 'src',
  outVendorFolder: 'out/vendor',

  criticalCss: [
    'node_modules/normalize.css/normalize.css',
    'node_modules/font-awesome/css/font-awesome.css',
  ],

  dependencies_endpoints: [
    // css
    'node_modules/normalize.css/normalize.css',
    'node_modules/font-awesome/css/*',
    'node_modules/font-awesome/fonts/*',
    'node_modules/modernizr/modernizr.js',
    'node_modules/yepnope/dist/*',

    // js
    'node_modules/dio.js/dio.js',
    'node_modules/dio.js/dio.min.js'
  ]
}

var env = argv.prod ? 'prod' : 'dev'

// ////////////////////////////////////////////////////////////////////////////
// TASK
// ////////////////////////////////////////////////////////////////////////////

gulp.task('default', ['eslint'])

gulp.task('serve', ['_serve'])

gulp.task('dist', ['js_min', 'css_min', 'copy'])

// ////////////////////////////////////////////////////////////////////////////
// SASS
// ////////////////////////////////////////////////////////////////////////////

gulp.task('scss', function () {
  return gulp.src('scss/*.scss', { cwd: config.srcFolder })
    // .pipe($.changed(config.outFolder + '/css', { extension: '.css' })) 
    .pipe($.debug({title: 'scss:'}))
    .pipe($.sass({
      style: 'expanded',
      lineNumbers: true,
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer('last 1 version', '> 1%', 'ie 8'))
    .pipe(reload({stream: true}))
    .pipe(gulp.dest(config.outFolder + '/css'))
})

// ////////////////////////////////////////////////////////////////////////////
// COPY
// ////////////////////////////////////////////////////////////////////////////

gulp.task('_preprocess_html', function () {
  return gulp.src(['*.html'], { cwd: config.srcFolder, base: config.srcFolder })
    .pipe($.changed(config.outFolder))
    .pipe($.debug({title: '_preprocess_html:'}))
    .pipe($.preprocess({context: { NODE_ENV: env, DEBUG: true }}))
    .pipe(gulp.dest(config.outFolder))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('_copy-other', function () {
  return gulp.src(['js/*', 'views/*', 'icons/*', 'images/*'], { cwd: config.srcFolder, base: config.srcFolder })
    .pipe($.changed(config.outFolder))
    .pipe($.debug({title: '_copy-other:'}))
    .pipe(gulp.dest(config.outFolder))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('_copy-vendor', function () {
  return gulp.src(config.dependencies_endpoints, { base: './node_modules' })
    .pipe($.changed(config.outFolder))
    .pipe($.debug({title: '_copy-vendor:'}))
    .pipe(gulp.dest(config.outVendorFolder))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('copy', ['js2html', 'rollup', '_copy-other', '_copy-vendor'])// ['_preprocess_html', '_copy-other', '_copy-vendor'])


gulp.task('rollup', function () {
  const rollup = require('rollup-stream')
  const nodeResolve = require('rollup-plugin-node-resolve')
  const commonjs = require('rollup-plugin-commonjs')
  const source = require('vinyl-source-stream')

  return rollup({
    entry: path.join(config.srcFolder, 'browser.js'),
    format: 'iife',
    moduleName: 'MyWebsite',
    plugins: [
      commonjs()
    ],
    external: [ 
      'dio.js'
    ],
    globals: {
      'dio.js': 'dio'
    }
  })
  .pipe(source('browser.js'))
  .pipe(gulp.dest(config.outFolder))
})

// ////////////////////////////////////////////////////////////////////////////
// JS->HTML
// ////////////////////////////////////////////////////////////////////////////

gulp.task('js2html', function (cb) {
  const fs = require('fs')
  const htmlBuilder = require('./build/html.js').htmlBuilder

  const concatContent = (memo, file) => 
    memo.concat(fs.readFileSync(file).toString('utf8'))
    .replace(/\.\.\/fonts/g, 'vendor/font-awesome/fonts')

  const stylesheetContents = config.criticalCss.reduce(concatContent, '')
  const criticalCss = `<style>${stylesheetContents}</style>`
  const pages = [
    {
      criticalCss,
      dest: 'index.html',
      source: './src/index.js',
      title: 'me'
    },
    //
    {
      criticalCss,
      dest: 'achievements.html',
      source: './src/achievements.js',
      title: 'achievements'
    },
    {
      criticalCss,
      dest: 'rocket.html',
      source: './src/rocket.js',
      title: 'rocket'
    },
    {
      criticalCss,
      dest: 'contact.html',
      source: './src/contact.js',
      title: 'contact'
    }
  ]

  // REMOVE CACHED SCRIPTS
  const targets = Object.keys(require.cache)
    .filter(fpath => fpath.includes(path.resolve('./', config.srcFolder)))
  debug('js2html delete from cache %j', targets)
  targets.forEach((source) => {
    delete require.cache[require.resolve(source)]
  })

  htmlBuilder({
    base: path.join(config.srcFolder, 'base.html'),
    outputDir: config.outFolder,
    pages: pages.map((page) => Object.assign({}, page, {source: require(page.source)})),
    preprocessOptions: {
      NODE_ENV: env,
      DEBUG: true
    }
  }, function (errors) {
    if (errors && errors.length) {
      errors.forEach((err) => $.util.log(err))
    }

    cb()
  })
})

// ////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////////////////////////////////

gulp.task('browser-sync', function () {
  browserSync.init({
    ghostMode: false,
    ui: false,
    server: {
      https: true,
      baseDir: config.outFolder
    }
  })
})

gulp.task('_serve', ['copy', 'scss', 'modernizr', 'browser-sync'], function () {
  gulp.watch(config.srcFolder + '/scss/**', ['scss'])

  gulp.watch(config.srcFolder + '/**/*', ['copy'])
})

// ////////////////////////////////////////////////////////////////////////////
// Min JS (HTML)
// ////////////////////////////////////////////////////////////////////////////

gulp.task('html_min', function () {
  return gulp.src(config.srcFolder + '/views/*.html')
    .pipe($.debug({title: 'html_min:'}))
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: 'x'
    }))
    .pipe($.concat('script-partials.js'))
    .pipe(gulp.dest(config.tmpFolder))
})

gulp.task('ngAnnotate', function () {
  return gulp.src(config.srcFolder + '/js/*.js')
    .pipe($.debug({title: 'ngAnnotate:'}))
    .pipe($.ngAnnotate({
      remove: true,
      add: true,
      single_quotes: true
    }))
    .pipe($.concat('script-app.js'))
    .pipe(gulp.dest(config.tmpFolder))
})

gulp.task('js_min', ['ngAnnotate', 'html_min'], function () {
  return gulp.src([config.tmpFolder + '/script-app.js', config.tmpFolder + '/script-partials.js'])
    .pipe($.debug({title: 'js_min:'}))
    .pipe($.concat('script.min.js'))
    .pipe($.uglify())
    .pipe(gulp.dest(config.outFolder))
})

// ////////////////////////////////////////////////////////////////////////////
// Min CSS
// ////////////////////////////////////////////////////////////////////////////

gulp.task('css_min', ['scss'], function () {
  return gulp.src(config.outFolder + '/css/*')
    .pipe($.debug({title: 'css_min:'}))
    .pipe($.cssmin())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(config.outFolder + '/css'))
})

// ////////////////////////////////////////////////////////////////////////////
// Lint
// ////////////////////////////////////////////////////////////////////////////

gulp.task('eslint', function () {
  return gulp.src([
    config.srcFolder + '/**/*',
    'gulpFile.js'
  ])
    .pipe($.debug({title: 'eslint:'}))
    .pipe($.eslint())
})

// ////////////////////////////////////////////////////////////////////////////
// Modernizr
// ////////////////////////////////////////////////////////////////////////////

gulp.task('modernizr', function (cb) {
  debug('modernizr')

  var fs = require('fs')
  var modernizr = require('modernizr')

  mkdirp.sync('out/vendor')
  modernizr.build(
    require('./modernizr-config.json'),
    function (result) {
      debug('modernizr built')
      mkdirp.sync('out')

      fs.writeFile(
        path.join(config.outVendorFolder, 'modernizr.js'),
        result,
        cb
      )
    })
})

// ////////////////////////////////////////////////////////////////////////////
// Deploy
// ////////////////////////////////////////////////////////////////////////////

gulp.task('deploy', function (cb) {
  const Deployor = require('node-git-deployor')
  Deployor.verbose = true
  const distWorkspace = Deployor.cloneRepoBranch({
    branch: 'master'
  })

  distWorkspace.extraCleanUp()
  distWorkspace.copy(config.outFolder)
  distWorkspace.commit('Update ' + new Date().toISOString())
  // distWorkspace.push()
})
