const webpack = require('webpack')
module.exports = {
  mode: 'universal',
  router: {
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    middleware: 'auth'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {src: 'static/css/reset.scss',lang: 'scss'},
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/http',
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/web': {
      target: 'http://39.106.54.190:8089', //页面仍然显示 http://localhost:3000,但实际上是
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {'^/web': '/'}    //前面是一个正则表达式,后面是替换后的内容

    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    extractCSS: { allChunks: true },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
