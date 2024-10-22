const path = require("path");
const glob = require("glob");
const webpack = require("webpack");

const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

console.log(glob.sync(`${path.resolve(__dirname, "./src")}/**/*`, { nodir: true }));

module.exports = {
  mode: "production",
  devtool: false,
  // 优化配置
  optimization: {
    // 导入模块时, 分析模块中的哪些函数有被使用, 哪些函数没有被使用.
    usedExports: true,

    chunkIds: "deterministic",
    // runtime的代码是否抽取到单独的包中(早Vue2脚手架中)
    runtimeChunk: {
      name: "runtime"
    },
    // 分包插件: SplitChunksPlugin
    splitChunks: {
      chunks: "all",
      minSize: 10,

      // 自己对需要进行拆包的内容进行分包
      cacheGroups: {
        utils: {
          priority: 0, // 优先级
          test: /utils/,
          filename: "js/[id]_utils.js"
        },
        vendors: {
          // /node_modules/
          // window上面 /\
          // mac上面 /
          priority: 1, // 权限更高，优先抽离，重要！！！
          test: /[\\/]node_modules[\\/]/,
          filename: "js/[id]_vendors.js"
        }
      }
    },
    minimize: true,
    // 代码优化: TerserPlugin => 让代码更加简单 => Terser
    minimizer: [
      // JS压缩的插件: TerserPlugin
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: true,
            unused: true
          },
          mangle: true,
          // toplevel: false
          keep_fnames: true
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),

    // 完成css的提取
    new MiniCssExtractPlugin({
      filename: `css/[name]-bundle.[contenthash:8].css`,
      chunkFilename: `css/[name]-chunk.[contenthash:8].css`
    }),

    // 对CSS进行TreeShaking
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.resolve(__dirname, "../src")}/**/*`, { nodir: true })
    }),

    // 作用域提升(这里有问题)
    // new webpack.optimize.ModuleConcatenationPlugin(),

    // 对打包后的文件(js/css)进行压缩
    new CompressionPlugin({
      test: /\.(js|css)$/,
      algorithm: "gzip"
    })
    // 对打包后的结果进行分析
    // new BundleAnalyzerPlugin()
  ]
};
