import React, { memo, Suspense, useContext, useLayoutEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import PerRouter from "./router/per-router";
import { ConfigProvider } from "antd";

const App: React.FC = () => {
  const { locale, theme } = useContext(ConfigProvider.ConfigContext);
  useLayoutEffect(() => {
    ConfigProvider.config({
      holderRender: (children) => (
        <ConfigProvider iconPrefixCls="icon" locale={locale} theme={theme}>
          {children}
        </ConfigProvider>
      )
    });
  }, [locale, theme]);

  return (
    <BrowserRouter>
      <PerRouter />
    </BrowserRouter>
  );
};

export default memo(App);
