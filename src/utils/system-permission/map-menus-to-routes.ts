/**
 * // type , 3: 系统 , 4: 目录 , 1: 菜单 , 2: 按钮
 * 从菜单映射到路由的权限
 * @param menuList 菜单的列表
 * @returns 路由的数组
 */

import loadable from "@loadable/component";

import AppLayout from "@/layout/index";
import { withPerRoute } from "@/hoc";

export function mapMenusToRoutes(menuList: any) {
  if (!menuList) return [];
  const routers: any[] = [];
  function recurve(list: any[], rItem: any, isChild?: boolean) {
    for (const item of list) {
      if (item?.menuType != "2") {
        if (isChild) {
          rItem.children.push(resetRouterItem(item, isChild));
        } else {
          rItem = resetRouterItem(item, isChild);
          routers.push(rItem);
        }
        if (item?.child && item?.child?.length > 0) {
          recurve(item?.child, rItem, true);
        }
      }
    }
  }

  recurve(menuList, {});
  return routers;
}

function resetRouterItem(item: any, isChild?: boolean) {
  const Cpn = loadable(() => {
    return import(`@/views${item?.componentPath}`);
  });
  const newItem: any = {
    path: item?.menuPath,
    name: item?.menuName,
    meta: { title: item?.menuName },
    element: item?.menuType == "0" ? withPerRoute(AppLayout) : withPerRoute(Cpn),
    children: []
  };

  if (!isChild && item.menuType == "1") {
    newItem.path = item?.menuPath;
    newItem.redirect = `${item?.menuPath}`;
    newItem.element = withPerRoute(AppLayout);
    newItem.children = [
      {
        // path: menuItem.path,
        path: "",
        element: withPerRoute(Cpn),
        meta: { title: item?.menuName }
      }
    ];
  }
  return newItem;
}
