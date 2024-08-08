import React, { memo } from "react";

import AppCrumb from "@/layout/app-crumb/app-crumb";
import FullScreen from "./child-cpns/full-screen/full-screen";
import UserInfo from "./child-cpns/user-info/user-info";
import { StyledAppHeader } from "./style";
import { Button, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { modal } from "@/utils/ant-methods";
import { useNavigate } from "react-router-dom";
import useLoginStore from "@/store/login";
import { useShallow } from "zustand/react/shallow";
interface IProps {
  collapsed: boolean;
  setCollapsed: any;
}

const AppHeader: React.FC<IProps> = (props) => {
  const navigate = useNavigate();
  const loginStore = useLoginStore(
    useShallow((state) => {
      return {
        userInfo: state.userInfo,
        cacheLogout: state.cacheLogout
      };
    })
  );

  const { collapsed, setCollapsed } = props;
  function handleLogout() {
    modal({
      title: "提示",
      content: "确定要退出登录吗？",
      okText: "退出",
      cancelText: "取消",
      handleModalSure() {
        loginStore.cacheLogout();
        navigate("/login", { replace: true });
      }
    });
  }

  const items: MenuProps["items"] = [
    {
      label: <span onClick={handleLogout}>退出登录</span>,
      key: "3"
      // disabled: true
    }
  ];

  return (
    <StyledAppHeader>
      <div className={"left"}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
        <AppCrumb />
      </div>
      <div className={"right"}>
        {/*<FullScreen />*/}
        <UserInfo userInfo={loginStore.userInfo} />

        <Dropdown menu={{ items }} placement="bottom">
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </StyledAppHeader>
  );
};

export default memo(AppHeader);
