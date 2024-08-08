// 假数据
// menuType: 1目录 2菜单 3按钮
// hidden: 是否隐藏

import { IApiMenu } from "@/apis/system/menu/type";
import { configTest } from "./config-test";

export const fakeMenuWeb: IApiMenu.TBase[] = [...configTest];
