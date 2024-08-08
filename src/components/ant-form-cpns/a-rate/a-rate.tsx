import React, { memo } from "react";
import { Rate } from "antd";
import { IARate } from "@/components/ant-form-cpns";

export const ARate: React.FC<IARate> = memo((props) => {
  return <Rate {...props} />;
});

export default ARate;
