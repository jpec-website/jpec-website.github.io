// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr:false,

  app:{
    head:{
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link:[
        {rel:'stylesheet',href:'https://cdn.jsdelivr.net/npm/bulma@1.0.1/css/bulma.min.css'},
      ],
      script:[
        {src:"https://sdk.form.run/js/v2/embed.js"}
      ]}
  },
  devtools: { enabled: true },
  css:['~/assets/css/style.css'],

  devServer: {
    port: 3000,
    host:'0.0.0.0',
  },
  modules: ['nuxt-swiper','nuxt-easy-lightbox']
})