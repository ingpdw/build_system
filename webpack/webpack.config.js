var webpack = require( 'webpack' );

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './js/module.js'
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/src/dist',
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  module: {
    loaders: [{test: /\.js/, loaders: ['babel-loader']}]
  }
}
