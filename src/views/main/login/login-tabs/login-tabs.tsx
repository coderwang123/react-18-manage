import React, { memo } from "react";
import StyledLoginTabs from "@/views/main/login/login-tabs/style";

const tabs = ["验证码登录"];
const LoginTabs: React.FC = () => {
  return (
    <StyledLoginTabs className={"tab-wrap"}>
      {tabs.map((tab, index) => (
        <span key={index}>{tab}</span>
      ))}
    </StyledLoginTabs>
  );
};

export default memo(LoginTabs);
