import React, { memo } from "react";
import StyledNotFound from "@/views/main/not-found/style";
import { loadAssets } from "@/utils/comm/load-assets";

const NotFound: React.FC = () => {
  return (
    <StyledNotFound>
      <img src={loadAssets("404.png")} alt="" />
      <h2> 暂无权限 </h2>
    </StyledNotFound>
  );
};

export default memo(NotFound);
