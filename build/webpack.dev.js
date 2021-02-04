const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: '../dist',
    port: 3000,
    stats: 'errors-only',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'localhost:3001',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^api/': ''
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'postcss-loader',
        'less-loader'
      ]
    }]
  },
  plugins: [
    new ESLintPlugin({
      context: path.join(__dirname, '..', 'src'),
      extensions: ['ts', 'js', 'tsx', 'jsx']
    }),
    new Webpack.HotModuleReplacementPlugin()
  ]
}
