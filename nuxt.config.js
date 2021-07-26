import path from 'path'
import fs from 'fs'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'myapp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', { css: true, materialDesignIcons: false }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/cloudinary'
  ],

  cloudinary: {
    cloudName: 'lionbit',
    apiKey: '696335595921666',
    apiSecret: 'pfljlBWkD58Pem0_z03-DG9E1R4',
    useComponent: true
  },
  hooks: {
    build: {
      before() {
        const { $cloudinary } = require('@nuxtjs/cloudinary')
        const assetsFolder = path.join(__dirname, 'static/slides')

        fs.readdir(assetsFolder, async (err, files) => {
          if (err) return

          /* Upload to Cloudinary */
          const uploadedAssets = await Promise.all(
            files.map((file) =>
              $cloudinary.upload(path.join(assetsFolder, file))
            )
          )

          /* Do something with the assets' info returned */
          console.log(uploadedAssets)
        })
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
