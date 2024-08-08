export declare namespace IApiProduct {
  type TBase = {
    productId?: string | number;
    productStatus?: string | number;

    productName?: string; // 产品名称
    productType?: string; // 产品类型
    periodsStr?: string; // 产品期数
    mortgageType?: string; // 抵押方式
    repayType?: string | number; // 还款方式
    interestList?: {
      // 利率列表
      productPeriods: string;
      productRate: string;
    }[];
  };

  // 列表
  type TList = TBase & {
    page: number;
    size: number;
  };

  // 详情
  type TDetail = Pick<TBase, "productId">;

  // 新增
  type TAdd = Omit<TBase, "productId">;

  // 编辑
  type TEdit = TBase;

  // 删除
  type TDel = Pick<TBase, "productId">;

  // 启用 禁用
  type TEditStatus = Pick<TBase, "productId" | "productStatus">;
}
