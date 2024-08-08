import React, { memo } from "react";
import StyledBtnPrimary from "./style";
import { generateIcon } from "@/utils/comm";
import type { IPageButton } from "@/components/page-cpns";

export const BtnPrimary: React.FC<IPageButton> = memo((props) => {
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
    <StyledBtnPrimary
      type={"primary"}
      autoInsertSpace={true}
      icon={generateIcon(icon)}
      onClick={btnClick}
      {...rest}
    >
      {props.name}
    </StyledBtnPrimary>
  );
});

export default BtnPrimary;
