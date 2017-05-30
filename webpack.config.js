const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(njk|nunjucks|html)$/,
        use: 'nunjucks-loader'
      },
      {
        test: /\.(jpe?g|png|dig|svg)$/,
        use: [
          'file-loader',
          'image-webpack-loader',
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.yaml$/,
        use: [
          'json-loader',
          'yaml-loader'
        ]
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'cv'
    })
  ]
};
