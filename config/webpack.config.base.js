const path = require('path')
const webpack = require('webpack');
// 排除处理插件
const nodeExcternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const utils = require('./utils');

// debugger

const webpackconfig = {
  target: 'node',
  entry: {
    // 如果传入一个字符串或字符串数组，chunk 会被命名为 main。如果传入一个对象，则每个属性的键(key)会是 chunk 的名称，该属性的值描述了 chunk 的入口点。
    server: path.join(utils.APP_PATH, 'index.js')
  },
  output: {
    // 这个name 是根据 entry的 key值。
    filename: '[name].bundle.js',
    path: utils.DIST_PATH
  },
  // devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ?
          "'production'" : "'development'"
      }
    })
  ],
  node: {
    // console: true,
    global: true,
    // process: true,
    // Buffer: true,
    __filename: true,
    __dirname: true,
    // setImmediate: true,
    // path: true
  }
}

// console.log(webpackconfig)

module.exports = webpackconfig
