export declare namespace IApiThird {
  // OCR识别
  interface ocr_recognize {
    url: string | number; // 	图片链接
    recognizeType: string; // 阿里云OCR类型，取数据字典中的数据
  }

  // 车300 根据 车架号 进行估值
  interface car300_estimated_value {
    VIN: string; // 	辆识别码
    cityId: string; // 城市代码
    cityName: string; // 	城市名称
    carNo: string; // ⻋牌号
    regDate: string; // 	辆上牌⽇期
    mileAge: string; // ⻋辆⾏驶⾥程
    makeDate: string; // ⻋辆出⼚⽇期
  }

  // 车300 事故车 分析接口
  interface car300_accident_analysis {
    // vin: string; // 	17 位完整⻋架号	LE4ZG4JB3HL066704
    // regDate: string; // 	上牌年 	年-⽉
    // engineNo: string; // 	发动机号
    orderId: string | number;
  }

  // 车300 车况定价
  interface car300_case_price {
    vin: string; // 车架号
    mile_age: string; // 	行驶里程
    reg_date: string; // 上牌年月(yyyy-MM)
    city_name: string; // 	城市名称
    callback_url: string; // 	购买报告后回调地址
    brand_name: string; // 	品牌名称
    series_name: string; // 	车系名称
    model_name: string; // 	车型名称
    engine_no: string; // 	发动机号
    model_id: string; // 	车型ID
    city_id: string; // 	城市ID
    image: string; // 	行驶证或登记证照片地址
    color: string; // 	车辆颜色
    transfer_times: string; // 	过户次数
    use_type: string; // 车架号
  }

  // 车300 车况获取报告
  interface car300_case_report {
    order_no: string; // 订单号
  }

  // 车300 购买车况定价 回调接口
  interface car300_buy_price {
    order_no: string; // 	订单号
    ret_code: string; // 	结果状态码
  }
}
