import RequestService from "@/service";
import type { IApiRole } from "./type";

export default class ApiRole {
  // 列表
  static list() {
    return RequestService.get({
      url: "/carcredit/role/list"
    });
  }

  // 新增角色
  static add(data?: IApiRole.TAdd) {
    return RequestService.post({
      url: "/carcredit/role/add",
      data
    });
  }

  // 编辑角色
  static edit(data?: IApiRole.TEdit) {
    return RequestService.post({
      url: "/carcredit/role/update",
      data
    });
  }

  // 删除角色
  static remove(data?: IApiRole.TRemove) {
    return RequestService.post({
      url: "/carcredit/role/delete",
      data
    });
  }

  // 根据 roleId 获取 当前角色权限
  static getCurtPerByRoleId(params?: IApiRole.TGetCurtPerByRoleId) {
    return RequestService.get({
      url: "/carcredit/role/authByRole",
      params
    });
  }

  // 根据 roleId 编辑 当前角色权限
  static editCurtPerByRoleId(data?: IApiRole.TEditCurtPerByRoleId) {
    return RequestService.post({
      url: "/carcredit/role/editRolePermission",
      data
    });
  }
}
