import React, { memo, useCallback, useState } from "react";
import { Layout, theme } from "antd";
import StyleLayoutWrap from "./style";

import AppHeader from "./app-header/app-header";
import AppMenu from "./app-menu/app-menu";
import AppView from "./app-view/app-view";

const { Header, Footer, Sider, Content } = Layout;

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const handleOnBreakpoint = (broken: boolean) => {};
  return (
    <StyleLayoutWrap>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint={"lg"}
        collapsedWidth={80}
        onBreakpoint={handleOnBreakpoint}
      >
        <AppMenu collapsed={collapsed} setCollapsed={setCollapsed} />
      </Sider>

      <Layout>
        {/* 头部 */}
        <Header>
          <AppHeader setCollapsed={setCollapsed} collapsed={collapsed} />
        </Header>

        {/* 内容 */}
        <Content>
          <AppView />
        </Content>

        {/* 脚丫子 */}
        {/*<Footer>Footer</Footer>*/}
      </Layout>
    </StyleLayoutWrap>
  );
}

export default memo(AppLayout);
