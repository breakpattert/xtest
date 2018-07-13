module.exports = {
  /*
  ** Headers of the page
  */

  plugins: [
  // {src: '~plugins/ElementUI',ssr: false},
  // "~plugins/axios",
    {src: '~plugins/YDUI',ssr: false},
   {src: '~plugins/MintUI',ssr: true},
// {src: 'http://dev.dcloud.net.cn/mui/dist/js/mui.min.js',ssr: false},
  ],
css: [
  // 'element-ui/lib/theme-chalk/index.css',
  'vue-ydui/dist/ydui.rem.css',
  'mint-ui/lib/style.css',
{ src: '~assets/stylus/index.styl', lang: 'stylus' },
  {src:'~static/css/mui/css/mui.min.css'}
],
  head: {
    title: 'beta',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
	      // { src: 'https://unpkg.com/vue-ydui/dist/ydui.flexible.js' }
//	      {src:'https://dev.dcloud.net.cn/mui/dist/js/mui.min.js'}
	    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
     vendor:['vue-ydui','mint-ui'],
  },

  env: {
    baseUrl: 'https://bmkapi.bigmk.ph/api/v1/'
  }
}
