import React from "react";
import { createRoot } from "react-dom/client";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "normalize.css";
import "@/assets/styles/index.less";
import "./components/svg/index";
dayjs.locale("zh-cn");
import App from "./App";
import { ConfigProvider } from "antd";

const root = createRoot(document.getElementById("root")!);

root.render(
  <ConfigProvider
    locale={zhCN}
    theme={{
      token: {
        colorPrimary: "#FE4301",
        borderRadius: 2,
        colorLink: "#FE4301"
      },
      components: {
        Form: {
          itemMarginBottom: 20
        },
        Button: {
          defaultGhostBorderColor: "#FE4301",
          defaultGhostColor: "#FE4301"
        },
        Pagination: {
          itemActiveBg: "#FE4301"
        },
        Menu: {
          itemBg: "#172149",
          itemColor: "rgba(255, 255, 255, 0.65)",

          itemSelectedBg: "#FE4301",
          itemSelectedColor: "#fff",

          itemHoverBg: "rgba(254,67,1, 0.5)",
          itemHoverColor: "#fff",

          subMenuItemBg: "#172149",
          popupBg: "#172149",
          itemMarginBlock: 0,
          itemMarginInline: 0,
          iconMarginInlineEnd: 12
        },
        Layout: {
          headerBg: "#fff",
          headerHeight: 48,
          headerPadding: "0",
          siderBg: "#172149"
        }
      }
    }}
  >
    <App />
  </ConfigProvider>
);
