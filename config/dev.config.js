module.exports = {
  mode: "development",
  devServer: {
    host: "0.0.0.0",
    port: 8003,
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,

    client: {
      overlay: {
        errors: false,
        warnings: false,
        runtimeErrors: false
      }
    },
    proxy: [
      {
        context: ["/api"],
        target: "https://tdevapi.fanchentech.com/",
        // target: "http://192.168.110.26:9998",
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      }

      // {
      //   "/api": {
      //     target: "http://tapi.fanmi99.com/",
      //     pathRewrite: {
      //       "^/api": ""
      //     },
      //     changeOrigin: true
      //   }
      // }
    ]
  },
  plugins: []
};
