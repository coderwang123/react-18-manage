export declare namespace IApiUser {
  type TBase = {
    employeeId?: string | number;
    employeeName?: string | number; // employeeName
    phone?: string | number; // 手机号
    organizationId?: string | number; // 所属组织id
    roleIds?: string; // 角色id列表
    password?: string | number; // 重置密码
    status?: string | number; // 员工状态
  };

  // 列表
  type TList = TBase & {
    page: number;
    size: number;
    roleId?: number;
  };

  // 详情
  type TDetail = Pick<TBase, "employeeId">;

  // 新增员工
  type TAdd = Omit<TBase, "employeeId">;

  // 编辑员工
  type TEdit = TBase;

  // 重置密码
  type TEditPassword = Pick<TBase, "employeeId" | "password">;

  // 启用禁用员工帐号
  type TEditStatus = Pick<TBase, "employeeId" | "status">;
}
