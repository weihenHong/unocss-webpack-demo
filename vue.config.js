const UnoCSS = require('@unocss/webpack').default
const path = require('path')
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    configureWebpack: {
        name: "test",
        resolve: {
          alias: {
            '@':path.resolve(__dirname,'src'),
          },
        },
        plugins: [
          UnoCSS({}),
        ],
      },
      chainWebpack(config) {
        /* config.module.rule('vue').uses.delete('cache-loader')
        config.merge({
          cache: false,
        }) */
        config.when(process.env.ENV !== 'development', (config) => {
          config.module.rule('vue').uses.delete('cache-loader')
          config.merge({
            cache: false,
          })
        })
      },
}