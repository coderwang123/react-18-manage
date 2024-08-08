import React, { memo } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { StyledUserInfo } from "@/layout/app-header/child-cpns/user-info/style";
const UserInfo: React.FC<{ userInfo: any }> = (props) => {
  return (
    <StyledUserInfo>
      <Avatar size="default" icon={<UserOutlined />} />
      <span className={"user-name"}>{props.userInfo?.employeeName}</span>
    </StyledUserInfo>
  );
};

export default memo(UserInfo);
