/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const BitBarWebpackProgressPlugin = require('bitbar-webpack-progress-plugin');

module.exports = {
  devServer: {
    contentBase: [
      path.join(__dirname, ".")
    ],
    compress: true,
    overlay: true,
    port: 9000,
    publicPath: "/public/"
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'riot-bs.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery'
    }),
    new BitBarWebpackProgressPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riot-tag-loader',
        query: {
          type: 'es6', // transpile the riot tags using babel
          hot: true,
          debug: true
        }
      }, {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: 'babel-loader'
      }
    ]
  }
}
