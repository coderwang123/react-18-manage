import React, { memo } from "react";
import { Slider } from "antd";
import { IASlider } from "@/components/ant-form-cpns";

export const ASlider: React.FC<IASlider> = memo((props) => {
  return <Slider {...props} />;
});

export default ASlider;
