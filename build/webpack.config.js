const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

module.exports = env => {
  switch (env) {
    case 'production':
      return merge(commonConfig, prodConfig)
    default:
      return merge(commonConfig, devConfig)
  }
}

