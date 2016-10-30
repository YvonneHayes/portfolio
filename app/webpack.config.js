const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: '../server/public',
    filename: 'scripts/bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!sass?sourceMap'
      },
      {
        test: /\.html$/,
        loader: 'html?minimize',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
  sassLoader: {
    includePaths: [ './src/scss/includes']
  },
  devtool: 'source-map',
  plugins: [
    new HtmlPlugin({template: './src/index.html'}),
    new ExtractTextPlugin('styles/bundle.css')
  ]
};
