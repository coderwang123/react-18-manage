import React, { memo, useMemo } from "react";

import BScroll from "@/components/b-scroll/b-scroll";

import { ATabs } from "@/components/ant-data-show-cpns";

import { PageDetail } from "@/components/page-cpns";
import { pageDetailConfig } from "./config/page-dateil.config";

const Detail = () => {
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
    <>
      <ATabs
        items={[
          {
            key: "1",
            label: "响应式详情"
          }
        ]}
      />
      <BScroll style={{ height: "calc(100% - 65px)" }}>
        <PageDetail {...pageDetailConfig} detailInfo={detailInfo} />;
      </BScroll>
    </>
  );
};

export default memo(Detail);
