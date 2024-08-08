import React, { memo } from "react";
import { IATextarea } from "@/components/ant-form-cpns";
import StyledATextarea from "./style";
import classNames from "classnames";

export const ATextarea: React.FC<IATextarea> = memo((props) => {
  // console.log("a-input props ===>", props);
  console.log("AInput props ====>", props);

  return (
    <StyledATextarea
      id={props?.prop ?? ""}
      allowClear
      rows={4}
      autoSize={false}
      className={"no-resize"}
      {...props}
    />
  );
});

export default ATextarea;
