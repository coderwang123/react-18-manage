export declare namespace IApiComm {
  type TListArea = { areaCode?: string | number; level?: number | string };

  //  字典中的key product_type 产品类型 product_periods 产品期数 mortgage_type 抵押类型 repay_type 还款类型
  type TListDictProduct = "mortgage_type" | "repay_type" | "product_type" | "product_periods";
}
