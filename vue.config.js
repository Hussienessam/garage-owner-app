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
    proxy: 'http://164.92.174.146/',
  }
}
