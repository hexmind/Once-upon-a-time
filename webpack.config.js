'use strict';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var PATHS = {
  app: __dirname + '/app',
  dist: __dirname + '/dist'
};

module.exports = {
  context: PATHS.app,
  entry: "./entry.js",
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    resolve: {
      modulesDirectories: [PATHS.app]
    },
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'file?name=[path][name].[ext]'
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9.]+)?$/,
      loader: 'file-loader?name=res/[name].[ext]?[hash]'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ]
};
