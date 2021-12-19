const { name } = require('./package.json')

module.exports = {
  configureWebpack: {
    output: {
      // 把微应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  devServer: {
    headers: {
      // 本地开发解决跨域问题
      'Access-Control-Allow-Origin': '*'
    }
  }
}