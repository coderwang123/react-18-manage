import React, { memo } from "react";
import StyledAEmpty from "@/components/ant-data-show-cpns/a-empty/style";
import { IAEmpty } from "@/components/ant-data-show-cpns";
import { loadAssets } from "@/utils/comm/load-assets";

export const AEmpty: React.FC<IAEmpty> = memo((props) => {
  return (
    <StyledAEmpty
      $height={props.height ?? "auto"}
      image={loadAssets("not-data.png")}
      imageStyle={{ width: 217, height: 178 }}
      description={<span>暂无信息~</span>}
    />
  );
});
