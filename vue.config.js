module.exports = {
  lintOnSave: false,
  devServer:{
    host:'localhost',
    port:8080,
    
    proxy:{
      '/api':{
        target:'https://order.imooc.com',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}