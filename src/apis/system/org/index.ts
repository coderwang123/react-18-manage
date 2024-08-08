import RequestService from "@/service";
import type { IApiOrg } from "./type";

export default class ApiOrg {
  static tree(params?: IApiOrg.TTree) {
    return RequestService.get({
      url: "/carcredit/org/list",
      params
    });
  }

  static detail(params?: IApiOrg.TDetail) {
    return RequestService.get({
      url: "/carcredit/org/detail",
      params
    });
  }

  static add(data?: IApiOrg.TAdd) {
    return RequestService.post({
      url: "/carcredit/org/addOrg",
      data
    });
  }

  static edit(data?: IApiOrg.TEdit) {
    return RequestService.post({
      url: "/carcredit/org/updateOrg",
      data
    });
  }

  static editStatus(data?: IApiOrg.TEditStatus) {
    return RequestService.post({
      url: "/carcredit/org/changeStatus",
      data
    });
  }
}
