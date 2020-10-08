const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV !== 'production';
const isProd = NODE_ENV === 'production';

const config = {
  entry: { 
    main: './src/index.tsx',
  },
  mode: isDev ? 'development' : 'production',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common/'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: isDev ? 'source-map' : false,
  target: 'web',
  devServer: {
    port: 3333,
    hot: true,
  },
  module: {
    rules: [
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
      {
        test: /\.[jt]sx?$/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: { 
              presets: ['@emotion/babel-preset-css-prop'],
              plugins: ['emotion', isDev && 'react-refresh/babel'].filter(Boolean),
            },
          },
          'awesome-typescript-loader',
        ].filter(Boolean),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'cv'
    }),
    new LodashModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  },
};

if (isProd) {
  config.plugins = [
    ...config.plugins,
  ];
}

if (isDev) {
  config.plugins = [
    ...config.plugins,
    new ReactRefreshWebpackPlugin(),
  ];
}

module.exports = config;
