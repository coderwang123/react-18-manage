import RequestService from "@/service";
import ApiMenu from "@/apis/system/menu";
import ApiRole from "@/apis/system/role";
import ApiOrg from "@/apis/system/org";
import ApiUser from "@/apis/system/user";

import type { IApiOrg } from "@/apis/system/org/type";
import type { IApiUser } from "@/apis/system/user/type";
import { IApiComm } from "@/apis/comm/type";

export default class ApiComm {
  // 获取 树 菜单（只能获取 web端）
  static treeMenu() {
    return ApiMenu.tree();
  }

  //  获取 树 菜单 （根据来源分组）
  static treeMenuBySource() {
    return ApiMenu.treeBySource();
  }

  // 获取 列表 角色
  static listRole() {
    return ApiRole.list();
  }

  // 获取 树 组织
  static treeOrg(params?: IApiOrg.TTree) {
    return ApiOrg.tree(params);
  }

  // 获取 列表 用户
  static listUser(params?: IApiUser.TList) {
    return ApiUser.list(params);
  }

  // 获取 省市区
  static listArea(params?: IApiComm.TListArea) {
    return RequestService.get({
      url: "/carcredit/web/area/getArea",
      params
    });
  }

  // 获取产品模块字典 --> product_type 产品类型 product_periods 产品期数 mortgage_type 抵押类型 repay_type 还款类型
  static dictProduct(params: { key: IApiComm.TListDictProduct }) {
    return RequestService.get({
      url: "/carcredit/dictCommon/list",
      params
    });
  }
}
