'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('build', function () {
  return gulp.src('./src/js/*.js' )
    .pipe(sourcemaps.init())
    .pipe( babel() )
    .pipe( uglify() )
    .pipe( concat('app.js') )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('./src/dist') );
});

gulp.task('watch', ['build'], function() {
  gulp.watch(['./src/**/*.js' ],['build']);
});

gulp.task('default', ['build']);
