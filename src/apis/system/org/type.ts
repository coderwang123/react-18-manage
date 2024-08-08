export declare namespace IApiOrg {
  type TBase = {
    id?: string; //	组织id
    parentId?: string; // 	父组织id 一级组织就是0
    orgName?: string; // 	组织名称
    orgLevel?: string; // 	组织级别
    headName?: string; // 	组织负责人姓名
    headPhone?: string; // 	组织负责人电话
    headIdCrad?: string; // 组织负责人身份证号
    province?: string; // 	组织所在省
    city?: string; // 	组织所在市
    status?: string | number; // 组织启用或者禁用
  };

  // 查询
  type TTree = Pick<TBase, "status">;

  // 详情
  type TDetail = Pick<TBase, "id">;

  // 新增
  type TAdd = Omit<TBase, "id" | "status">;

  // 编辑
  type TEdit = TBase;

  // 编辑状态
  type TEditStatus = Required<Pick<TBase, "id" | "status">>;
}
