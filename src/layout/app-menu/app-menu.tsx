import React, { memo, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Menu } from "antd";

import type { IPropsMenu } from "@/layout/app-menu/type";
import useLoginStore from "@/store/login";
import StyledMenu from "@/layout/app-menu/style";
import classNames from "classnames";
import BScroll from "@/components/b-scroll/b-scroll";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const AppMenu: React.FC<IPropsMenu> = (props) => {
  const { collapsed } = props;
  const navigate = useNavigate();

  const location = useLocation();

  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  const [openKeys, setOpenKeys] = useState<string[]>([]); // 当前需要被展开的项

  useEffect(() => {
    const paths = location.pathname.split("/").filter((item) => !!item);
    setSelectedKeys([location.pathname]);
    setOpenKeys(paths.map((item) => `/${item}`));
  }, [location.pathname, collapsed]);

  function handleItemClick(e: any) {
    const path = e?.key;
    if (path) {
      navigate(path);
    }
  }

  const permissionMenu = useLoginStore((state) => state.permissionMenu);

  return (
    <StyledMenu>
      <div className={"top"}>
        {collapsed ? (
          <img className={"menu-logo"} src={require("@/assets/images/menu-logo.png")} alt={"泛米信科"} />
        ) : (
          <img
            className={"menu-logo-and-span"}
            src={require("@/assets/images/menu-logo-and-span.png")}
            alt={"泛米信科"}
          />
        )}
      </div>
      {/*<div className={"center"}>*/}
      {/*  <Button*/}
      {/*    type="text"*/}
      {/*    color={"#fff"}*/}
      {/*    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}*/}
      {/*    onClick={() => props?.setCollapsed(!collapsed)}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className={classNames(["bottom"])}>
        <BScroll>
          <Menu
            theme="light"
            mode="inline"
            items={permissionMenu}
            onSelect={handleItemClick}
            selectedKeys={selectedKeys}
            {...(props.collapsed ? {} : { openKeys })}
            onOpenChange={(keys: string[]) => setOpenKeys(keys)}
          />
        </BScroll>
      </div>
    </StyledMenu>
  );
};

export default AppMenu;
