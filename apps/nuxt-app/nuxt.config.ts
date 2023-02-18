
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  builder: 'webpack',
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  // The second way of import solves the issues, still don't know the root cause
  tailwindcss: {
    cssPath: '@acme/tailwind-preset/tailwind.css'
    // cssPath: './tailwind.css'
  },
  experimental: {
    asyncEntry: true
  }
})
