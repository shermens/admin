module.exports = {
  devServer: {
    proxy: {
      '/': {
        "target":'https://dev.netpg.co.kr:8443',
        "pathRewrite":{'^/':''},
        "changeOrigin":true,
        "secure":false
    }
  }
  },
  pluginOptions: {
    i18n: {
      locale: "ko_KR",
      fallbackLocale: "ko_KR",
      localeDir: "locales",
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true,
    },
  },

  transpileDependencies: ["vuetify"],
};
