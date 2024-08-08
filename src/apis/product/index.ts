import RequestService from "@/service";
import type { IApiProduct } from "./type";

export default class ApiProduct {
  // 列表 产品
  static list(params?: IApiProduct.TList) {
    return RequestService.get({
      url: "/carcredit/web/product/list",
      params
    });
  }

  // 新增 产品
  static add(data?: IApiProduct.TAdd) {
    return RequestService.post({
      url: "/carcredit/web/product/add",
      data
    });
  }

  // 编辑 产品
  static edit(data?: IApiProduct.TEdit) {
    return RequestService.post({
      url: "/carcredit/web/product/edit",
      data
    });
  }

  // 删除 产品
  static del(data?: IApiProduct.TDel) {
    return RequestService.post({
      url: "/carcredit/web/product/delete",
      data
    });
  }

  // 详情 产品
  static detail(params?: IApiProduct.TDetail) {
    return RequestService.get({
      url: "/carcredit/web/product/detail",
      params
    });
  }

  // 编辑 产品 状态
  static editStatus(data?: IApiProduct.TEditStatus) {
    return RequestService.post({
      url: "/carcredit/web/product/editStatus",
      data
    });
  }
}
