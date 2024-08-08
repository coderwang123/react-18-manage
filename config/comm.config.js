const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const { merge } = require("webpack-merge");
const devConfig = require("./dev.config");
const prodConfig = require("./prod.config");

const smp = new SpeedMeasurePlugin();

const getCommonConfig = function (isProduction) {
  return {
    entry: "./src/main.tsx",
    output: {
      clean: true,
      path: path.resolve(__dirname, "../build"),
      // placeholder
      filename: isProduction ? "js/[name]-bundle.[contenthash:8].js" : "js/[name]-bundle.js",
      // 单独针对分包的文件进行命名
      chunkFilename: isProduction ? "js/[name]-chunk.[contenthash:8].js" : "js/[name]-chunk.js",
      publicPath: "/"
    },
    resolve: {
      alias: {
        // 将src 设置别名
        "@": path.resolve(__dirname, "../src")
      },
      extensions: [".js", ".json", ".wasm", ".jsx", ".ts", ".tsx"]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.tsx$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.less$/i,
          use: [isProduction ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "less-loader"]
        },
        {
          test: /\.css$/i,
          use: [
            // // 'style-loader', //开发阶段
            // MiniCssExtractPlugin.loader, // 生产阶段
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader"
          ]
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "@svgr/webpack",
              options: {
                babel: false,
                icon: true
              }
            }
          ]
        },
        {
          test: /\.(jpg|JPG|png|PNG|gif|GIF|jpeg|JPEG)$/,
          type: "asset/resource",
          generator: {
            filename: "images/[name].[hash:7][ext]"
          }
        },
        {
          test: /\.(pdf|PDF|mp4|MP4)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "media/[name].[hash:7][ext]",
                esModule: false
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "泛米信科",
        cache: true,
        favicon: path.resolve("./public/favicon.ico"), //未加入的
        minify: isProduction
          ? {
              caseSensitive: true, //是否对大小写敏感，默认false

              collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
              collapseWhitespace: true, // 折叠空白字符

              preventAttributesEscaping: true, //Prevents the escaping of the values of attributes
              removeAttributeQuotes: true, //是否移除属性的引号 默认false
              removeCommentsFromCDATA: true, //从脚本和样式删除的注释 默认false
              removeOptionalTags: false, //  若开启此项，生成的html中没有 body 和 head，html也未闭合
              removeScriptTypeAttributes: true, //删除script的类型属性，在h5下面script的type默认值：text/javascript 默认值false
              removeStyleLinkTypeAttributes: true, //删除style的类型属性， type="text/css" 同上
              useShortDoctype: true, //使用短的文档类型，默认false

              removeComments: true, // 移除注释

              removeEmptyAttributes: true, // 移除属性

              removeRedundantAttributes: true, // 移除默认属性

              minifyCSS: true, // 压缩内联的CSS

              minifyJS: {
                // 压缩JavaScript
                mangle: {
                  toplevel: true
                }
              }
            }
          : false
      })
    ]
  };
};

// webpack允许导出一个函数
module.exports = function (env) {
  const isProduction = env.production;
  let mergeConfig = isProduction ? prodConfig : devConfig;
  const finalConfig = merge(getCommonConfig(isProduction), mergeConfig);
  return smp.wrap(finalConfig);
};
