import { create } from "zustand";
import type { IActionsLogin, IStatesLogin } from "@/store/login/type";
import type { IApiLogin } from "@/apis/login/type";
import ApiLogin from "@/apis/login";

import { ALL_Menu, FM_TOKEN, USER_INFO } from "@/global/constants";
import { localCache } from "@/utils/comm";
import { firstMenu, mapMenusToButtons, mapMenusToMenus, mapMenusToRoutes } from "@/utils/system-permission";
import { configTest } from "@/fake-data/fake-menu/config-test";

const useLoginStore = create<IStatesLogin & IActionsLogin>()((setState, getState) => ({
  token: localCache.getCache(FM_TOKEN),
  userInfo: localCache.getCache(USER_INFO),
  allMenu: localCache.getCache(ALL_Menu),

  disabledLogin: false,
  // 登录
  apiLogin: async (params: IApiLogin.TLogin) => {
    setState({ disabledLogin: true });
    try {
      // token 获取 设置
      const resToken = await ApiLogin.login(params);
      getState().setCache({ token: resToken?.data?.token });
      // getState().setCache({
      //   token:
      //     "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiODAiLCJleHAiOjE3MTc5Nzk2MzAsImlhdCI6MTcxNzk0MzYzMH0.SmgBghh7Xjupnd1wxQKDWpvhBpT6raPJ_MFNSHPT08yFGtyJ59ZRvGYK7ckT8OLl5MDQJfEaLr-a5DSZORuxdxkyM1I66szDlr83L-GWLVlC8uXaxqn0rOTn5XSITrKvsVKpHdcHLjCMD-8cdCA8EQJrjju0sJZHrPhtY8GpDK1bzBdxflkK1ntGo8zcAqGZP0Jg0Gs6sgBPi-K5WNk-Ls6vjPnLciif1pFOtyxRNZoEobE2WLB_zbxCf7MDfbAjlIWd8i3em5bou5BYwl0xITfIer-R3ymPekt8WmgEjWZhJ7nqD_2hfYSgVR_pYCL6vVrQhKANhwHm1AMcEzI8zw"
      // });

      await getState().apiUserInfo();

      await getState().apiPermission();

      return "success";
    } catch {
    } finally {
      // 最终
      setState({ disabledLogin: false });
    }
  },
  apiUserInfo: async () => {
    const resUserInfo = await ApiLogin.userInfo();
    console.log("resUserInfo ===> ", resUserInfo);
    getState().setCache({ userInfo: resUserInfo?.data ?? {} });
  },

  // 设置权限
  firstMenu: {},
  permissionMenu: [],
  permissionRoute: [],
  permissionButton: [],

  // api 菜单 ==》 set权限
  apiPermission: async () => {
    // 权限 获取 设置
    const resPerMenu = await ApiLogin.permission();

    const allMenu =
      process.env.NODE_ENV == "production"
        ? [...resPerMenu?.data?.filter((menu: any) => menu.menuSource != "2")]
        : [...resPerMenu?.data?.filter((menu: any) => menu.menuSource != "2"), ...configTest];

    getState().setCache({
      allMenu
    });

    getState().setPermission();
  },

  //  缓存 菜单 ==》 set权限
  cachePermission: () => {
    const allMenu = localCache.getCache(ALL_Menu);
    getState().setCache({ allMenu });
    getState().setPermission();
  },

  // 设置权限
  setPermission() {
    const orgMenu = getState().allMenu;

    setState({
      permissionMenu: mapMenusToMenus(orgMenu),
      permissionRoute: mapMenusToRoutes(orgMenu),
      permissionButton: mapMenusToButtons(orgMenu),
      firstMenu: firstMenu
    });
  },

  // 设置缓存（token, userInfo allMenu）
  setCache: ({ token, userInfo, allMenu }) => {
    if (token) {
      localCache.setCache(FM_TOKEN, token);
      setState({ token });
    }

    if (userInfo) {
      localCache.setCache(USER_INFO, userInfo);
      setState({ userInfo });
    }

    if (allMenu) {
      localCache.setCache(ALL_Menu, allMenu);
      setState({ allMenu });
    }
  },

  // 获取缓存（token, userInfo allMenu）
  getCache: () => {
    return {
      token: localCache.getCache(FM_TOKEN),
      userInfo: localCache.getCache(USER_INFO),
      allMenu: localCache.getCache(ALL_Menu)
    };
  },

  // 退出缓存
  cacheLogout() {
    localCache.removeCache(FM_TOKEN);
    localCache.removeCache(USER_INFO);
    localCache.removeCache(ALL_Menu);
  }
}));

export default useLoginStore;
