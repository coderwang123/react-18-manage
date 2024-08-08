import styled from "styled-components";
import { Layout } from "antd";

const StyleLayoutWrap = styled(Layout)`
  width: 100%;
  height: 100vh;

  // 菜单sider
  .ant-layout-sider {
    flex: 0 0 220px !important;
    max-width: 220px !important;
    min-width: 220px !important;
    width: 220px !important;
    box-sizing: border-box;
    height: 100%;
    box-shadow: 2px 0px 6px 0px rgba(0, 21, 41, 0.35);
    &.ant-layout-sider-collapsed {
      flex: 0 0 80px !important;
      max-width: 80px !important;
      min-width: 80px !important;
      width: 80px !important;
    }
  }

  // 内容
  .ant-layout {
    height: 100%;
    .ant-layout-header {
      box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12);
      z-index: 999;
    }
  }
`;
export default StyleLayoutWrap;
