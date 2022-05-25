module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        
      }
    }
  },
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
  }
}
