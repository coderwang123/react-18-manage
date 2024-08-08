import React, { memo } from "react";
import StyledASpin from "@/components/ant-feedback-cpns/a-spin/style";

export const ASpin: React.FC = memo(() => {
  return <StyledASpin tip="加载中..." size="large" fullscreen />;
});

export default ASpin;
