const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js)$/, use: 'babel-loader' },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Polls', template: 'public/index.html' }),
    new CopyPlugin([
      {
        from: '_redirects',
      },
    ]),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    historyApiFallback: true,
  },
};
