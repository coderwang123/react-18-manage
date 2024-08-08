import React, { memo } from "react";
import { Tabs } from "antd";
import { IATabs } from "./type";
import StyledATabs from "./style";

export const ATabs: React.FC<IATabs> = memo((props) => {
  const { handleTabChange, ...rest } = props;
  function handleOnChange(key: string) {
    handleTabChange?.(key);
  }
  return (
    <StyledATabs>
      <Tabs onChange={handleOnChange} {...rest} />
    </StyledATabs>
  );
});

export default ATabs;
