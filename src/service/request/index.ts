import axios from "axios";
import type { AxiosInstance } from "axios";
import type { RequestConfig } from "./type";
import { Msg } from "@/utils/ant-methods";
import { localCache } from "@/utils/comm";
import { ALL_Menu, FM_TOKEN, USER_INFO } from "@/global/constants";
import fullLoading from "@/service/loading/loading";

class MyRequest {
  instance: AxiosInstance;

  // request实例 => axios的实例
  constructor(config: RequestConfig) {
    this.instance = axios.create(config);

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        fullLoading.show();
        return config;
      },
      (err) => {
        fullLoading.hide();
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        // reqCount -= 1;
        fullLoading.hide();
        // console.log("on fulfilled", res);
        const { status, data } = res;
        const message = data?.rtnMessage;
        if (status == 200 && (data?.rtnCode == "9999" || toString.call(data) === "[object Blob]")) {
          return data;
        } else {
          if (data?.rtnCode == "1005") {
            localCache.removeCache(FM_TOKEN);
            localCache.removeCache(USER_INFO);
            localCache.removeCache(ALL_Menu);
            window.location.pathname = "/login";
          } else {
            Msg.error(message);
            return Promise.reject(message);
          }
        }
      },
      (err) => {
        // reqCount -= 1;
        // fullLoading.hide(reqCount);
        fullLoading.hide();
        // console.log("on rejected", err);
        const { status, data } = err.response;
        if (status != 200) {
          const message = data.rtnMessage || err?.message;

          Msg.error(message);
          return Promise.reject(message);
        }
      }
    );

    // 针对特定的Request实例添加拦截器
    this.instance.interceptors.request.use(
      config?.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    );
  }

  // 封装网络请求的方法
  // T => IHomeData
  request<T = any>(config: RequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config);
    }

    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单词响应的成功拦截处理
          if (config?.interceptors?.responseSuccessFn) {
            res = config?.interceptors?.responseSuccessFn(res);
            console.log("单词 ---------------------", res);
          }
          resolve(res);
        })
        .catch((err) => {
          console.log("----------err", err);
          reject(err);
        });
    });
  }

  get<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "GET" });
  }
  post<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "POST" });
  }
  delete<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "DELETE" });
  }
  patch<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "PATCH" });
  }
  put<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "PUT" });
  }
}

export default MyRequest;
