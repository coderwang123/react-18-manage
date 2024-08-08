export declare namespace IApiAudit {
  type TList = {
    taskType: number | string; // 	类型
    orderNumber?: number | string; // 订单号
    customerName?: number | string; // 	客户姓名
    idcardNumber?: number | string; // 身份证号
    organizationId?: number | string; // 所属组织
    page: number | string;
    size: number | string;
  };

  type TClaimOrClaimReturn = {
    orderId: number | string;
    employeeId: number | string;
    taskType: number | string;
  };

  type TAgree = {
    orderId: string | number; // 订单id
    reason?: string; // 原因
  };

  type TReject = {
    orderId: string | number; // 订单id
    reason: string; // 原因
    creatorId: string | number; // 创建人id
    creator: string | number; // 	创建人
  };
}
