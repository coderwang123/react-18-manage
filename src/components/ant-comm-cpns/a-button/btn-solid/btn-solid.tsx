import React, { memo } from "react";
import StyledBtnSolid from "./style";
import { generateIcon } from "@/utils/comm";
import type { IPageButton } from "@/components/page-cpns";

export const BtnSolid: React.FC<IPageButton> = memo((props) => {
  const { handleCustomBtn, permission, code, icon, ...rest } = props;

  function btnClick(event?: React.MouseEvent<HTMLElement, MouseEvent>) {
    event?.stopPropagation();
    event?.preventDefault();
    handleCustomBtn?.({
      code,
      event
    });
  }

  return (
    <StyledBtnSolid
      autoInsertSpace={true}
      icon={generateIcon(icon)}
      ghost={true}
      onClick={btnClick}
      {...rest}
    >
      {props.name}
    </StyledBtnSolid>
  );
});

export default BtnSolid;
