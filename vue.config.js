// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
// })

const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true), // или false, в зависимости от того, используете ли вы Options API
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false), // отключение devtools в продакшн
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false), // установка флага, чтобы устранить предупреждение
      }),
    ],
  },
});
