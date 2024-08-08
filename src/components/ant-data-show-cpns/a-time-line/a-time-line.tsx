import React, { memo, useState } from "react";
import { IATimeLine } from "./type";
import StyledATimeLine from "./style";

export const ATimeLine: React.FC<IATimeLine> = memo((props) => {
  const { configList, ...rest } = props;
  return <StyledATimeLine mode={"left"} items={configList} {...rest} />;
});

export default ATimeLine;
