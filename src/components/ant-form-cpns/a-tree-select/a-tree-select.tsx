import React, { memo, SyntheticEvent } from "react";
import StyledTreeSelect from "./style";
import { IATreeSelect } from "@/components/ant-form-cpns";

export const ATreeSelect: React.FC<IATreeSelect> = memo((props) => {
  const onPopupScroll = (e: SyntheticEvent) => {
    console.log("onPopupScroll", e);
  };

  return (
    <StyledTreeSelect
      id={props?.prop ?? ""}
      style={{ width: "100%" }}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      allowClear
      treeDefaultExpandAll
      treeData={props?.treeData ?? []}
      onPopupScroll={onPopupScroll}
      {...props}
      getPopupContainer={(triggerNode) => triggerNode.parentElement || document.body}
    />
  );
});

export default ATreeSelect;
