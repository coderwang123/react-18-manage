interface IBreadcrumbs {
  name: string;
  path: string;
  id: number | string;
  parentId: number | string;
}
export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
  // 1.定义面包屑
  const breadcrumbs: any[] = [];
  // if (path === "/main/home") {
  //   breadcrumbs.push({ name: "首页", path: "/main/home", id: -1, parentId: 0 });
  //   return breadcrumbs;
  // }
  // 2.遍历获取面包屑层级
  let innerMenu: any;
  function recurveInner(list: any[]) {
    for (const el of list) {
      if (el?.menuPath === path) {
        innerMenu = { title: el?.menuName, path: el?.menuPath, id: el?.id, parentId: el?.parentId };
        // 找到最里面菜单
        breadcrumbs.push({
          title: el?.menuName,
          path: el?.menuPath,
          id: el?.id,
          parentId: el?.parentId
        });
        if (el?.parentId != 0) {
          recurveWrap(innerMenu, userMenus, userMenus);
        }
      } else {
        if (el?.child) recurveInner(el?.child);
      }
    }
  }

  // const;
  function recurveWrap(innerMenu: IBreadcrumbs, userMenus: any[], allMenus?: any[]) {
    // console.log("userMenus userMenus", userMenus);
    for (const el of userMenus) {
      if (innerMenu?.parentId == el.id) {
        breadcrumbs.unshift({
          title: el?.menuName,
          path: el?.menuPath,
          id: el?.id,
          parentId: el?.parentId
        });
        // console.log("recurveWrap recurveWrap el", el);
        if (el?.parentId != 0) {
          recurveWrap(el, allMenus ?? []);
        } else {
          break;
        }
      } else {
        if (el?.child && el?.child.length > 0) recurveWrap(innerMenu, el?.child, allMenus);
      }
    }
  }

  recurveInner(userMenus);
  // console.log("breadcrumbs breadcrumbs", breadcrumbs);
  return breadcrumbs;
}
