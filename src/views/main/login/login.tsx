import React, { memo } from "react";
import { StyledLogin } from "./style";
import LoginTabs from "./login-tabs/login-tabs";
import LoginForm from "./login-form/login-form";

const Login: React.FC = () => {
  return (
    <StyledLogin className="login-wrap">
      <img className={"login-span"} src={require("@/assets/images/login-span.png")} alt="" />
      <div className={"login-content"}>
        <h2>欢迎登录泛米信科</h2>
        <LoginTabs />
        <LoginForm />
      </div>
      <div className={"icp"}>
        <p>安徽泛宸信息科技有限公司技术支持</p>
        <span>皖ICP备2024039677号</span>
      </div>
    </StyledLogin>
  );
};

export default memo(Login);
