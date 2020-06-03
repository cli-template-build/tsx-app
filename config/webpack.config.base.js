const path = require('path');
const paths = require('./paths');
const tsImportPluginFactory = require('ts-import-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: path.resolve(paths.PATH_SRC, 'index'),
  },
  output: {
    path: path.resolve(paths.PATH_DIST),
    publicPath: '/',
    filename: path.join('js', '[name].js'),
    chunkFilename: path.join('js', '[name]-chunk.js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
        include: paths.PATH_SRC,
      },
      {
        test: /antd.*\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
        include: /node_modules/,
      },
      {
        test: /\.(j|t)sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            // 缓存上次编译结果，避免每次重新编译，减少打包时间
            cacheDirectory: true,
          },
        },
        include: [paths.PATH_SRC],
        exclude: /node_modules/,
      },
      {
        test: /\.(?:png|jpe?g|gif|svg|woff|eot|ttf)\??.*$/,
        use: ['url-loader?limit=10000&name=img/[name]-[sha512:hash:base64:7].[ext]'],
        include: [paths.PATH_SRC],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendor: {
          // 将第三方模块提取出来
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10, // 优先
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(paths.PATH_SRC), path.resolve('node_modules')],
    alias: {
      '@src': path.resolve(__dirname, '../src'), // 这样配置后 @ 可以指向 src 目录
    },
  },
};
