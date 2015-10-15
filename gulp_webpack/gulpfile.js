'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task('webpack', function() {

    webpack({
      context: __dirname + '/src',
      entry: {
        javascript: './js/class.js'
      },
      output: {
        filename: 'app.js',
        path: __dirname + '/src/dist',
      },
      plugins: [new webpack.optimize.UglifyJsPlugin()],
      module: {
        loaders: [{test: /\.js/, loaders: ['babel-loader']}]
      }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
    });
});
gulp.task('default', ['webpack']);
