import React, { memo } from "react";
import { ICommTitle } from "./type";
import StyledCommTitle from "./style";
import { useNavigate } from "react-router-dom";
import { loadAssets } from "@/utils/comm/load-assets";

const CommTitle: React.FC<ICommTitle> = (props) => {
  const navigate = useNavigate();
  return (
    <StyledCommTitle>
      <div className={"img-wrap"} onClick={() => navigate(-1)}>
        <img className={"back"} src={loadAssets("back.png")} alt="" />
      </div>
      <span>{props?.title}</span>
    </StyledCommTitle>
  );
};

export default memo(CommTitle);
