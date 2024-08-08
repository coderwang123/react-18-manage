import React, { memo, useMemo } from "react";

import BScroll from "@/components/b-scroll/b-scroll";

import { PageDetail } from "@/components/page-cpns";
import { pageDetailModuleConfig } from "./config/page-detail-module.config";

const DetailModule: React.FC = () => {
  const detailInfo = useMemo(() => {
    return {
      id: "1",
      a1: "掌声",
      a2:
        "掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声" +
        "掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声",
      a3:
        "掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声" +
        "掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声掌声",
      a4: "掌声",
      a5: "张三,李四,王五",
      a6: ["张三", "李四", "王五"],
      a7: ["张三", "李四", "王五"]
    };
  }, []);
  return (
    <BScroll>
      <PageDetail {...pageDetailModuleConfig} detailInfo={detailInfo} />
    </BScroll>
  );
};

export default memo(DetailModule);
