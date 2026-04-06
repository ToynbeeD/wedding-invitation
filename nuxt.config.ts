// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    preset: 'static'
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
        {property: 'og:url', content: 'https://toynbeed.github.io/wedding-invitation/'},
        {property: 'og:image', content: 'https://toynbeed.github.io/wedding-invitation/img/countdown-bg.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:locale', content: 'ru_RU'},
      ]
    }
  }
})