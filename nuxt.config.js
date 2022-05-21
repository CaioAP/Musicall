export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Musicall',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-signin-client_id', content: '350901632232-6h2mgsub8eorabc21mn2tftol84e8jeb.apps.googleusercontent.com' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { 
        src: 'https://apis.google.com/js/platform.js', 
        async: true, 
        defer: true 
      },
      { 
        src: 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v13.0&appId=537855767871509&autoLogAppEvents=1', 
        crossorigin: 'anonymous',
        nonce: 'H8MfMxzw',
        async: true, 
        defer: true 
      },
    ]
  },

  env: {
    baseUrl: process.env.BASE_URL
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/utils.js',
    '@/plugins/vue-select.js',
    { src: '@/plugins/vue-datepicker.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/style-resources',
    ['nuxt-gmaps', {
      key: process.env.MAPS_KEY,
      //you can use libraries: ['places']
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  image: {
    // Options
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
