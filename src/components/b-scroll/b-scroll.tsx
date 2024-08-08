import React, { forwardRef, memo, useMemo } from "react";
import classNames from "classnames";

import type { IBs } from "./type";
import ScrollWrapper from "./style";

import { useBScroll } from "@/hooks";

const BScroll: React.FC<IBs> = (props, ref) => {
  // console.log("--- b-scroll 渲染 --- ");
  const { $bsWidth, style, children, ...rest } = props;
  // console.log("rest ===>", rest);

  const [scrollRef, bs] = useBScroll(rest);

  if (ref) {
    ref.current = bs;
  }
  const contentStyle = useMemo(() => {
    if ($bsWidth == "auto") {
      return {
        justifyContent: "center",
        alignItems: "center"
      };
    } else {
      return {};
    }
  }, [$bsWidth]);
  return (
    <ScrollWrapper
      $bsWidth={$bsWidth ?? "100%"}
      className={classNames("scroll-wrap")}
      ref={scrollRef}
      style={{ width: "100%", height: "100%", ...style }}
    >
      <div className="bs-content" style={{ ...contentStyle }}>
        {children ?? null}
      </div>
    </ScrollWrapper>
  );
};

export default memo(forwardRef((props?: IBs, ref?: React.Ref<any>) => BScroll(props as IBs, ref)));
