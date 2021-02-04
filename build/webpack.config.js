const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

module.exports = env => {
  if (env && env.NODE_ENV) {
    return merge(commonConfig, prodConfig)
  }
  return merge(commonConfig, devConfig)
}
