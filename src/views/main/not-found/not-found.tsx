import React, { memo } from "react";
import StyledNotFound from "@/views/main/not-found/style";

const NotFound: React.FC = () => {
  return (
    <StyledNotFound>
      <img src={require("@/assets/images/404.png")} alt="" />
      <h2> 暂无权限 </h2>
    </StyledNotFound>
  );
};

export default memo(NotFound);
