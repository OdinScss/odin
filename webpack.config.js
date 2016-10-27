var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var paths = {
  indexUrl: './app/index.html',
  indexUrlDest: 'index.html',
  imagesUrl: './app/assets/images/',
  imagesUrlDest: 'images',
  entryUrl: './app/assets/index.scss',
  build: 'build'
};

module.exports = {
  devServer: {
    inline: true,
    contentBase: paths.build,
    port: 3000
  },
  name: 'css',
  entry: {
    styles: [paths.entryUrl]
  },
  output: {
    path: paths.build,
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: ['', '.scss', 'sass']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'build'], { }),
    new CopyWebpackPlugin([
      {
        from: paths.indexUrl,
        to: paths.indexUrlDest
      },
      {
        from: paths.imagesUrl,
        to: paths.imagesUrlDest
      }
    ]),
    new ExtractTextPlugin('css/app.css')
  ]
};
