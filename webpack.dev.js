
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'game-time-query': './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'GameTimeQuery',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `test/index.html`),
      filename: 'index.html',
      chunks: ['game-time-query'],
      inject: false
    })
  ],
  devServer: {
    port: 3000,
    hot: true,
    contentBase: './dist',
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://pulsar.mgame.360.cn',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
        headers: {
          referer: 'https://pay.wan.360.cn/',
          origin: 'https://pay.wan.360.cn/'
        }
      },
    }
  },
  devtool: 'inline-source-map'
}