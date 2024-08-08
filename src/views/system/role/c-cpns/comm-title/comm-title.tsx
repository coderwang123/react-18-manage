import React, { memo } from "react";
import { CommTitleWrap } from "./sytle";
import type { ICommTitle } from "./type";

const CommTitle: React.FC<ICommTitle> = (props) => {
  const { name } = props;
  return (
    <CommTitleWrap>
      <div>
        <span></span>
        <p>{name}</p>
      </div>
    </CommTitleWrap>
  );
};

export default memo(CommTitle);
