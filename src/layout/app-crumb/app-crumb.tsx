import React, { memo, useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { useShallow } from "zustand/react/shallow";

import useLoginStore from "@/store/login";

import { mapPathToBreadcrumbs } from "@/utils/system-permission";

interface IProps {}
function AppCrumb(props: IProps) {
  const [crumbs, setCrumbs] = useState<any[]>();
  const allMenu = useLoginStore(useShallow((state) => state.allMenu));
  const location = useLocation();

  const itemRender = useCallback((currentRoute: any, params: any, items: any) => {
    const isLast = currentRoute?.path === items[items.length - 1]?.path;

    return isLast ? <span>{currentRoute.title}</span> : <span>{currentRoute.title}</span>;
  }, []);

  useEffect(() => {
    setCrumbs(mapPathToBreadcrumbs(location.pathname, allMenu));
  }, [location]);
  return (
    <div>
      <Breadcrumb itemRender={itemRender} items={crumbs} />
    </div>
  );
}

export default memo(AppCrumb);
