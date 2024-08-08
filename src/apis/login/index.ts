import RequestService from "@/service";
import { IApiLogin } from "@/apis/login/type";

export default class ApiLogin {
  // 登录
  static login(data: IApiLogin.TLogin) {
    return RequestService.post({
      url: "/carcredit/web/login",
      data
    });
  }

  // 获取验证码
  static code(data: IApiLogin.TCode) {
    return RequestService.post({
      url: "/carcredit/web/getCode",
      data
    });
  }

  // 获取图形验证码
  static imgCode(data: IApiLogin.TImgCode) {
    return RequestService.post({
      url: "/carcredit/web/getImgCode",
      data
    });
  }

  static userInfo() {
    return RequestService.get({
      url: "/carcredit/h5/emp/simpleInfo"
    });
  }

  // 获取权限
  static permission() {
    return RequestService.get({
      url: "/carcredit/web/menuTree"
    });
  }
}
