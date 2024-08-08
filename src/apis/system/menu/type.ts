export declare namespace IApiMenu {
  type TBase = {
    id?: string | number;

    menuType?: string | number; // 类型 1 目录 2菜单 3按钮

    hidden?: 1 | 0; // 是否显示 1显示 0隐藏
    menuSort?: string | number; // 排序
    menuSource?: string | number; // 菜单来源 1 web 2app

    parentId?: string | number; // 上级 （目录、菜单、按钮）
    menuName?: string | number; // 名称（目录、菜单、按钮）
    menuPath?: string | number; // 路由地址（菜单）
    componentPath?: string | number; // 组件路径（菜单）
    menuPermission?: string | number; // 按钮权限（按钮）
    icon?: string | number; // 图标 (目录、菜单)

    path?: string;
    child?: TBase[];
  };

  // 菜单 新增
  type TAdd = Omit<TBase, "children" | "id">;

  // 菜单 编辑
  type TEdit = TBase;

  // 菜单 删除
  type TRemove = { menuId?: string | number };
}
