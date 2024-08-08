import React, { lazy, memo, Suspense, useEffect } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import useLoginStore from "@/store/login";

import Login from "@/views/main/login/login";
import NotFound from "@/views/main/not-found/not-found";

// const NotFound = React.lazy(() => import("@/views/main/not-found/not-found"));

const PerRouter: React.FC = () => {
  // console.log("PerRouter ======= > 渲染了");
  const navigate = useNavigate();
  const location = useLocation();
  const loginStore = useLoginStore(
    useShallow((state) => {
      return {
        apiPermission: state.apiPermission,
        cachePermission: state.cachePermission,
        getCache: state.getCache,
        firstMenu: state.firstMenu,
        permissionRoute: state.permissionRoute
      };
    })
  );

  const normalRouters = [
    {
      path: "/",
      element: <Login />
    },

    {
      path: "/login",
      element: <Login />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ];

  // 路径变化时候 判断
  useEffect(() => {
    if (!loginStore.getCache().token) {
      navigate("/login");
    }

    if (loginStore.getCache().token) {
      loginStore.getCache().allMenu ? loginStore.cachePermission() : loginStore.apiPermission();
      if (location.pathname == "/login" || location.pathname == "/") {
        return navigate(loginStore.firstMenu.menuPath);
      }
    }
  }, [location.pathname, loginStore.firstMenu, loginStore.getCache().token]);

  // 有 token 时候 刷新权限
  useEffect(() => {
    // console.log("2", location.pathname);
    if (loginStore.getCache().token) {
      // console.log("PerRouter -------- 有 token 时候 刷新权限");
      loginStore.apiPermission();
    }
  }, []);
  return useRoutes([...normalRouters, ...loginStore.permissionRoute]);
};

export default memo(PerRouter);
