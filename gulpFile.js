'use strict';

var argv = require('yargs').argv;
var gulp = require('gulp');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var $ = require('gulp-load-plugins')();


var config = {
  outFolder : 'out',
  tmpFolder : '.tmp',
  srcFolder : 'src',

  bower_endpoints : [
    // css
    'bower_components/normalize.css/normalize.css',
    'bower_components/fontawesome/css/*',
    'bower_components/fontawesome/fonts/*',
    'bower_components/modernizr/modernizr.js',
    'bower_components/yepnope/dist/*',

    // js
    'bower_components/angular/angular.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-ui-router/release/*'
  ]
};


var env = !! argv.prod ? 'prod' : 'dev';

//////////////////////////////////////////////////////////////////////////////
// TASK
//////////////////////////////////////////////////////////////////////////////

gulp.task('default', ['jshint']);

gulp.task('serve', ['_serve']);

gulp.task('dist', ['js_min', 'css_min', 'copy']);


//////////////////////////////////////////////////////////////////////////////
// SASS
//////////////////////////////////////////////////////////////////////////////

gulp.task('scss', function () {
  return gulp.src('scss/*.scss', { cwd: config.srcFolder })
    .pipe($.changed(config.outFolder + '/css', { extension: '.css' }))
    .pipe($.rubySass({
      style: 'expanded',
      lineNumbers: true,
      precision: 10
    }))
    .pipe($.autoprefixer("last 1 version", "> 1%", "ie 8"))
    .pipe(reload({stream:true}))
    .pipe(gulp.dest(config.outFolder + '/css'));
});



//////////////////////////////////////////////////////////////////////////////
// COPY
//////////////////////////////////////////////////////////////////////////////

gulp.task('_preprocess_html', function () {
  return gulp.src(['*.html'], { cwd: config.srcFolder, base: config.srcFolder  })
    .pipe($.changed(config.outFolder))
    .pipe($.preprocess({context: { NODE_ENV: env, DEBUG: true}}))
    .pipe(gulp.dest(config.outFolder))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('_copy-other', function () {
  return gulp.src([ 'js/*', 'views/*', 'icons/*'], { cwd: config.srcFolder, base: config.srcFolder  })
    .pipe($.changed(config.outFolder))
    .pipe(gulp.dest(config.outFolder))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('_copy-vendor', function () {
  return gulp.src(config.bower_endpoints, { base: './' })
    .pipe($.changed(config.outFolder))
    .pipe(gulp.dest(config.outFolder))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('copy', ['_preprocess_html', '_copy-other', '_copy-vendor']);

//////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: config.outFolder
    }
  });
});


gulp.task('_serve', ['copy', 'scss', 'browser-sync'], function () {

  gulp.watch(config.srcFolder + '/scss/**', ['scss']);

  gulp.watch(config.srcFolder + '/**/*', ['copy']);


});


//////////////////////////////////////////////////////////////////////////////
// Min JS (HTML)
//////////////////////////////////////////////////////////////////////////////

gulp.task('html_min', function (){
  return gulp.src(config.srcFolder + '/views/*.html')
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: 'x'
    }))
    .pipe($.concat('script-partials.js'))
    .pipe(gulp.dest(config.tmpFolder));
});

gulp.task('ngAnnotate', function () {
  return gulp.src(config.srcFolder + '/js/*.js')
    .pipe($.ngAnnotate({
      remove: true,
      add: true,
      single_quotes: true
    }))
    .pipe($.concat('script-app.js'))
    .pipe(gulp.dest(config.tmpFolder));
});

gulp.task('js_min', ['ngAnnotate', 'html_min'], function (){
  return gulp.src([config.tmpFolder + '/script-app.js', config.tmpFolder + '/script-partials.js'])
    .pipe($.concat('script.min.js'))
    .pipe($.uglify())
    .pipe(gulp.dest(config.outFolder));
});



//////////////////////////////////////////////////////////////////////////////
// Min CSS
//////////////////////////////////////////////////////////////////////////////

gulp.task('css_min', ['scss'], function () {
  return gulp.src(config.outFolder + '/css/*')
    .pipe($.cssmin())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(config.outFolder + '/css'));
});

//////////////////////////////////////////////////////////////////////////////
// Deploy
//////////////////////////////////////////////////////////////////////////////

var deploy = require('dd-deploy');

gulp.task('deploy', function (cb) {
  return deploy({
    dirSrc: 'out',
    push: false,
    verbose: true
  }, cb)
});
