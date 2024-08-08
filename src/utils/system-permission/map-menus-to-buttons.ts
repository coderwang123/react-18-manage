/**
 * 从菜单映射到按钮的权限
 * @param menuList 菜单的列表
 * @returns 按钮权限的数组(字符串数组)
 */
export function mapMenusToButtons(menuList: any[]) {
  const buttonPermissions: string[] = [];

  function recurve(menus: any[]) {
    for (const item of menus) {
      if (item?.menuType == 2 && item?.menuPermission) {
        buttonPermissions.push(item?.menuPermission);
      } else {
        recurve(item?.child ?? []);
      }
    }
  }
  recurve(menuList);

  return buttonPermissions;
}
