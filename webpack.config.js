const path = require('path')
const webpack = require('webpack')
const htmlplugin = require('html-webpack-plugin')
const cleanplugin = require('clean-webpack-plugin')
const extractplugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[hash:4]-boundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif|svg|webp)$/,
        use: ['file-loader']
      },
      {
        test: /\.(html|ejs)$/,
        use: ['html-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    overlay: true,
    hot: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new cleanplugin(),
    new htmlplugin({
      template: path.join(__dirname, 'src', 'index.html'),
    })
  ]
}
