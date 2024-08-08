/**
 * 根据路径去匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
  let menuItem: any;

  function recurve(path: string, list: any[]) {
    for (const menu of list) {
      if (menu.menuPath === path) {
        menuItem = menu;
        break;
      } else {
        if (menu?.children) recurve(path, menu?.children);
      }
    }
  }

  recurve(path, userMenus);
  return menuItem;
}
