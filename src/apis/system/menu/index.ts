import RequestService from "@/service";
import type { IApiMenu } from "./type";

export default class ApiMenu {
  // 获取 树 菜单（只能获取 web端）
  static tree() {
    return RequestService.get({
      url: "/carcredit/menu/findMenu"
    });
  }

  //  获取 树 菜单 （根据来源分组）
  static treeBySource() {
    return RequestService.get({
      url: "/carcredit/menu/findMenuGroup"
    });
  }

  // 新增菜单
  static add(data?: IApiMenu.TAdd) {
    return RequestService.post({
      url: "/carcredit/menu/addMenu",
      data
    });
  }

  // 编辑菜单
  static edit(data?: IApiMenu.TEdit) {
    return RequestService.post({
      url: "/carcredit/menu/updateMenu",
      data
    });
  }

  // 删除菜单
  static remove(data?: IApiMenu.TRemove) {
    return RequestService.post({
      url: "/carcredit/menu/delete",
      data
    });
  }
}
