const EslintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: '../dist',
    port: 3000,
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /.less$/,
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
      }
    ]
  },
  plugins: [
    new EslintPlugin({
      context: '../src'
    })
  ]
}
