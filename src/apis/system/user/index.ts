import RequestService from "@/service";
import type { IApiUser } from "./type";

export default class ApiUser {
  // 列表 用户
  static list(params?: IApiUser.TList) {
    return RequestService.get({
      url: "/carcredit/employee/listPage",
      params
    });
  }

  // 详情 用户
  static detail(params?: IApiUser.TDetail) {
    return RequestService.get({
      url: "/carcredit/employee/detail",
      params
    });
  }

  // 新增 用户
  static add(data?: IApiUser.TAdd) {
    return RequestService.post({
      url: "/carcredit/employee/add",
      data
    });
  }

  // 编辑 用户
  static edit(data?: IApiUser.TEdit) {
    return RequestService.post({
      url: "/carcredit/employee/update",
      data
    });
  }

  // 编辑 用户 密码
  static editPassword(data?: IApiUser.TEditPassword) {
    return RequestService.post({
      url: "/carcredit/employee/resetPassword",
      data
    });
  }

  // 编辑 用户 状态
  static editStatus(data?: IApiUser.TEditStatus) {
    return RequestService.post({
      url: "/carcredit/employee/changeStatus",
      data
    });
  }
}
