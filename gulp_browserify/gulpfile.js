'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

gulp.task('build', function () {
  browserify({
    entries: './src/js/class.js',
    debug: false
  })
  .transform( babelify )
  .bundle()
  .pipe(source( 'app.js' ))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./src/dist/'))
});

gulp.task('watch', ['build'], function() {
  gulp.watch(['./src/js/*.js' ],['build'] );
  gulp.watch(['./views/**/*.ejs' ], ['build'] );
});

gulp.task('default', ['watch']);
