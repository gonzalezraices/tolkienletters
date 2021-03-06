export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Tolkien Letters",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/prismic",
  ],
  googleFonts: {
    families: {
      Alegreya: [400, 700],
    },
  },
  prismic: {
    endpoint: "https://tolkienletters.cdn.prismic.io/api/v2",
    preview: false,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxt/content",
    "@nuxtjs/pwa",
    "@nuxtjs/gtm",
  ],
  content: {
    liveEdit: false,
    fullTextSearchFields: ["title", "slug", "address", "recipient", "context", "text"],
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },
  gtm: {
    id: "GTM-59DF9PH",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
