import React from "react";
import useLoginStore from "@/store/login";
import { useShallow } from "zustand/react/shallow";
import type { IPageButton } from "@/components/page-cpns";

export function withPerBtn(
  OriginalComponent: React.FunctionComponent<IPageButton> | React.ComponentClass<IPageButton>
) {
  return (props: IPageButton) => {
    const permissionButton = useLoginStore(useShallow((state) => state.permissionButton));

    const flag = permissionButton?.some((per) => per == props?.permission);
    return flag ? <OriginalComponent {...props} /> : <></>;
  };
}

export default withPerBtn;
