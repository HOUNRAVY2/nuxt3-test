// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from "path";
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode'
  ],
  i18n: {
  strategy: 'prefix_except_default',
  locales: [
    { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    { code: 'vn', iso: 'vi-VN', name: 'Tiếng Việt', file: 'vn.json' }
  ],
  lazy: true,
  defaultLocale: 'en'
},
colorMode: {
    classSuffix: '' 
  },
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiSecret: '', 
    public: {
      getStrapiDomain: process?.env?.NUXT_PUBLIC_CMS_URL || '', 
      getAPIToken: process?.env?.NUXT_PUBLIC_API_TOKEN || '',
    }
  },
    routeRules: {
    '/': { isr: 60 },
    '/vn': { isr: 60 }
  }
  
})