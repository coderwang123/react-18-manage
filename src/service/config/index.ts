// 1.区分开发环境和生产环境
// export const BASE_URL = 'http://coderwhy.dev:8000'
// export const BASE_URL = 'http://codercba.prod:8000'

// 2.代码逻辑判断, 判断当前环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)
// console.log(import.meta.env.DEV) // 是否开发环境
// console.log(import.meta.env.PROD) // 是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)

// import * as process from "node:process";

let BASE_URL = "";
if (process.env.NODE_ENV == "production") {
  // 生产环境
  // BASE_URL = "https://dgp.deepin-ai.com";
  BASE_URL = "";
} else {
  // 开发环境
  // BASE_URL = "http://localhost:5173/";
  // BASE_URL = "http://192.168.110.26:9998";
  BASE_URL = "/api";
}

// 3.通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_URL)

export const TIME_OUT = 10000;
export { BASE_URL };
