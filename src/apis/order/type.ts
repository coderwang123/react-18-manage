export declare namespace IApiOrder {
  type TList = {
    orderNumber?: number | string; // 	订单号
    customerName?: number | string; // 客户姓名
    idcardNumber?: number | string; // 身份证号
    organizationId?: number | string; // 组织id
    status?: number | string; // 订单状态
    isClosed?: number | string; // 是否关闭 0否 1是
    beginCreatedAt?: string; // 预审提交开始时间
    endCreatedAt?: string; // 预审提交结束时间
    page: number | string;
    size: number | string;
  };

  type TDetail = {
    orderId: number | string;
  };

  type TClose = Pick<IApiOrder.TDetail, "orderId">;

  type TExport = Omit<IApiOrder.TList, "page" | "size">;

  type TOpLog = Pick<IApiOrder.TDetail, "orderId">;
}
