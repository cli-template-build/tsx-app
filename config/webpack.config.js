const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ApiMocker = require('webpack-api-mocker2');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const paths = require('./paths');
const baseConfig = require('./webpack.config.base.js');

const mockPath = path.resolve(__dirname, '../mock');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:7]',
            },
          },
          'postcss-loader',
          'less-loader',
        ],
        include: paths.PATH_SRC,
      },
      {
        test: /\.(ts|tsx)?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        include: paths.PATH_SRC,
      },
    ],
  },
  plugins: [
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: 'index.html',
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    new MiniCssExtractPlugin('css/[name].css'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HardSourceWebpackPlugin({
      cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/hard-source/[confighash]'),
      configHash: function(webpackConfig) {
        return require('node-object-hash')({ sort: false }).hash(webpackConfig);
      },
      environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ['package-lock.json', 'yarn.lock'],
      },
      info: {
        mode: 'none',
        level: 'debug',
      },
      cachePrune: {
        maxAge: 6 * 24 * 60 * 60 * 1000,
        sizeThreshold: 50 * 1024 * 1024,
      },
    }),
  ],
  optimization: {
    runtimeChunk: true,
  },
  devServer: {
    before(app) {
      ApiMocker(app, mockPath);
    },
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
        logLevel: 'debug',
      },
    },
    clientLogLevel: 'error',
    port: 3001,
    contentBase: paths.PATH_DIST,
    inline: true,
    hot: false,
    open: false,
    // host: '0.0.0.0',
    disableHostCheck: true,
    progress: true,
    historyApiFallback: true,
    // https: true,
  },
});
