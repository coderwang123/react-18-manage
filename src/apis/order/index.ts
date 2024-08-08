import RequestService from "@/service";
import type { IApiOrder } from "@/apis/order/type";

export default class ApiOrder {
  // 订单 查询
  static list(data?: IApiOrder.TList) {
    return RequestService.post({
      url: "/carcredit/order-base-entity/queryOrderByCondition",
      data
    });
  }

  // 订单 详情
  static detail(data?: IApiOrder.TDetail) {
    return RequestService.post({
      url: "/carcredit/order-base-entity/queryOrderByOrderId",
      data,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
  }

  // 关闭订单
  static close(data?: IApiOrder.TClose) {
    return RequestService.post({
      url: "/carcredit/order-base-entity/closeOrder",
      data,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
  }

  // 订单 导出
  static export(data?: IApiOrder.TExport) {
    return RequestService.post({
      url: "/carcredit/order-base/orderBaseDownload",
      data,
      responseType: "blob"
    });
  }

  // 订单 操作日志
  static opLog(data?: IApiOrder.TOpLog) {
    return RequestService.post({
      url: "/carcredit/approvalStepDetails/getDetail",
      data,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
  }
}
