const path = require('path');
function resolve(dir){
  return path.join(__dirname, '..', dir);
}

module.exports = {
  pages:{
    index:{
      entry:'examples/main.js',
      template:'public/index.html',
      filename:'index.html'
    }
  }
  // chainWebpack:config => {
  //   config.module.rule('compile')
  //   .test(/\.js$/)
  //   .include.add(resolve('packages')).end()
  //   .use('babel-loader').loader('babel-loader')
  //   .options({
  //       presets: [
  //         ['@babel/preset-env', { modules: false }]
  //       ]
  //     })
  // }
}
