import RequestService from "@/service";
import { IApiThird } from "@/apis/third-party/type";

export default class ApiThird {
  // OCR识别
  static ocr_recognize(data?: IApiThird.ocr_recognize) {
    return RequestService.post({
      url: "/carcredit/ocr/v1/ocrRecognize",
      data
    });
  }

  // 车300 根据 车架号 进行估值
  static car300_estimated_value(data?: IApiThird.car300_estimated_value) {
    return RequestService.post({
      url: "/carcredit/che300Api/v1/evalPriceByVIN",
      data
    });
  }

  // 车300 事故车 分析接口
  static car300_accident_analysis(data?: IApiThird.car300_accident_analysis) {
    return RequestService.post({
      url: "/carcredit/pc-order/v1/accident",
      data
    });
  }
  // 车300 车况定价
  static car300_case_price(data?: IApiThird.car300_case_price) {
    return RequestService.post({
      url: "/carcredit/che300Api/v1/buyReport",
      data
    });
  }
  // 车300 车况获取报告
  static car300_case_report(data?: IApiThird.car300_case_report) {
    return RequestService.post({
      url: "/carcredit/che300Api/v1/getReport",
      data
    });
  }

  // 车300 购买车况定价 回调接口
  static car300_buy_price(params?: IApiThird.car300_buy_price) {
    return RequestService.get({
      url: "/carcredit/callback/che300Api/buyReportCallBack",
      params
    });
  }
}
