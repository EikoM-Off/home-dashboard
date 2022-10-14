const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Home Dashboard',
    themeColor: '#DAA2FF',
    msTileColor: '#3D3D3D',
    manifestOptions: {
      short_name: 'h-dash',
      start_url: '/'
    }
  }
})
