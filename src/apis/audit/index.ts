import RequestService from "@/service";
import { IApiAudit } from "@/apis/audit/type";

export default class ApiAudit {
  // 审批 list
  static list(params?: IApiAudit.TList) {
    return RequestService.get({
      url: "/carcredit/pc-order/v1/listTask",
      params
    });
  }

  // 审批 订单 认领
  static claim(params?: IApiAudit.TClaimOrClaimReturn) {
    return RequestService.put({
      url: "/carcredit/pc-order/v1/claim",
      params
    });
  }

  // 审批 订单 退认领
  static claimReturn(params?: IApiAudit.TClaimOrClaimReturn) {
    return RequestService.put({
      url: "/carcredit/pc-order/v1/reClaim",
      params
    });
  }

  // 审批 出发审批流接口
  static create(data?: any) {
    return RequestService.post({
      url: "/carcredit/task/v1/create",
      data
    });
  }

  // 审批 通过
  static agree(data?: IApiAudit.TAgree) {
    return RequestService.post({
      url: "/carcredit/task/v1/agree",
      data
    });
  }

  // 审批 驳回
  static reject(data?: IApiAudit.TReject) {
    return RequestService.post({
      url: "/carcredit/task/v1/reject",
      data
    });
  }

  // 查询报告（车况定价）
  static getReport(params?: IApiAudit.TAgree) {
    return RequestService.get({
      url: "/carcredit/pc-order/v1/getReport",
      params
    });
  }

  // 发起查询报告（车况定价）
  static buyReport(data?: IApiAudit.TAgree) {
    return RequestService.post({
      url: "/carcredit/pc-order/v1/buyReport",
      data
    });
  }
  // 发起查询报告（车况定价）
  static listExternal(params?: IApiAudit.TAgree) {
    return RequestService.get({
      url: "/carcredit/pc-order/v1/listExternal",
      params
    });
  }
}
