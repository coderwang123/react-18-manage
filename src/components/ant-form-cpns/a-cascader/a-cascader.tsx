import React, { memo, useEffect, useMemo, useState } from "react";
import StyledCascader from "./style";

import { IACascader } from "@/components/ant-form-cpns";

export const ACascader: React.FC<IACascader> = memo((props) => {
  // console.log("ACascader props ====>", props);
  const { options = [], handleLoadData, ...rest } = props ?? {};
  const [currentOptions, setCurrentOptions] = useState<any[]>(options);

  useEffect(() => {
    // console.log("11");
    setCurrentOptions(options);
  }, [options]);

  return (
    <StyledCascader
      id={props?.prop ?? ""}
      allowClear
      options={currentOptions ?? []}
      loadData={(selectedOptions: any[]) => {
        handleLoadData?.(currentOptions, setCurrentOptions, selectedOptions);
      }}
      {...rest}
      getPopupContainer={(triggerNode) => triggerNode.parentElement || document.body}
    />
  );
});

export default ACascader;
