// 记录第一个被匹配的菜单
// type , 0: 目录 , 1: 菜单, 2: 按钮

import { generateIcon, generateIconSvg } from "@/utils/comm";

// 菜单 tree结构： { key: "/about", icon: <DesktopOutlined />, label: "关于" } []
export let firstMenu: any = null;

export function mapMenusToMenus(reqMenu: any[]) {
  const newMenus: any[] = [];
  function recurve(list: any, newItem: any, isChild?: boolean) {
    for (const item of list) {
      if (item.menuType != "2" && item.hidden == 1) {
        if (isChild) {
          newItem.children.push(resetMenu(item));
        } else {
          newItem = resetMenu(item);
          newMenus.push(newItem);
        }

        if (item.menuType != "1" && item?.child && item?.child?.length > 0) {
          newItem.children = [];
          recurve(item.child, newItem, true);
        }
      }
    }
  }
  recurve(reqMenu, {});
  return newMenus;
}

function resetMenu(item: any) {
  if (!firstMenu && item) {
    if (item?.menuType == "0") {
      firstMenu = item[0];
    }

    if (item?.menuType == "1") {
      firstMenu = item;
    }
  }

  return {
    key: item?.menuPath,
    label: item?.menuName,
    icon: item?.icon ? generateIconSvg(item.icon) : generateIcon("DesktopOutlined"),
    // icon: DesktopOutlined,
    // icon: getSvgIcon("svg-audit"),
    id: item?.id,
    type: item?.menuType,
    parentid: item?.parentId

    // meta: { title: menuItem.name, hidden: menuItem?.remark == "1" },
    // children: []
  };
}
