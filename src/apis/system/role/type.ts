export declare namespace IApiRole {
  type TBase = {
    roleId?: string | number; // 角色

    roleName?: string; // 角色名称

    dataPermission?: string | number; // 角色名称
    menuIds?: (string | number)[]; // 角色名称
  };

  // 新增
  type TAdd = Omit<TBase, "roleId">;

  // 编辑
  type TEdit = Pick<TBase, "roleId" | "roleName">;

  // 删除
  type TRemove = Pick<TBase, "roleId">;

  // 获取角色权限 根据 roleId
  type TGetCurtPerByRoleId = Pick<TBase, "roleId">;

  // 编辑角色权限 根据 roleId
  type TEditCurtPerByRoleId = Omit<TBase, "roleName">;
}
