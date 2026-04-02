// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["@netlify/nuxt"],
  nitro: { 
    preset: 'netlify',
    output: {
      publicDir: 'dist'
    }
  },

  app: {
    head: {
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        {property: 'og:site_name', content: 'Электронное приглашение'},
        {property: 'og:title', content: 'Свадьба Дениса и Ксении'},
        {property: 'og:description', content: 'Приглашаем Вас на торжество, посвященное нашему бракосочетанию'},
        {property: 'og:url', content: 'https://wedding-dk.netlify.app/'},
        {property: 'og:image', content: 'https://wedding-dk.netlify.app/img/countdown-bg.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:locale', content: 'ru_RU'},
      ]
    }
  }
})