module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  },
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        "/",
        "/contact",
        "/about",
        "/startup",
        "/cloud-crew",
        "/engineer-recruitment",
        "/offshore-development"
      ],
      useRenderEvent: true,
      onlyProduction: true,
      headless: true
    },
    i18n: {
      locale: "ja",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    }
  },
  transpileDependencies: ["vuetify"]
};
