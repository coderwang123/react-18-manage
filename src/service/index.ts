// import { Base64 } from "js-base64";
import MyRequest from "./request";

import { BASE_URL, TIME_OUT } from "./config";
// import website from "./config/website";

import { localCache } from "@/utils/comm";
import { FM_TOKEN } from "@/global/constants";
import { Msg } from "@/utils/ant-methods";

const RequestService = new MyRequest({
  // baseURL: "/api",
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      if (config && config.headers) {
        // config.headers["Authorization"] = `Basic ${Base64.encode(
        //   `${website.clientId}:${website.clientSecret}`
        // )}`;
      }

      // 每一个请求都自动携带token
      const fm_token = localCache.getCache(FM_TOKEN);
      if (config.headers && fm_token) {
        // 类型缩小
        config.headers["Authorization"] = fm_token;
        // console.log("config ====>", config);
      }
      return config;
    }
  }
});

export default RequestService;
