import React, { ComponentType, memo } from "react";
import type { ILoadImage } from "./type";
import StyledLoadImage from "./style";

import { Spin } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const LoadImage: React.FC<ILoadImage> = memo((props) => {
  return (
    <StyledLoadImage
      style={{ width: props?.width ?? "136px", height: props?.height ?? "136px", ...props.style }}
      $time={props.$time ?? 0.1}
    >
      <LazyLoadImage
        delayTime={3000}
        width={"100%"}
        height={"100%"}
        src={props.url}
        alt={""}
        effect="blur"
        wrapperProps={{
          // If you need to, you can tweak the effect transition using the wrapper style.
          style: { transitionDelay: props.$time ? `${props.$time}s` : "0.1s" }
        }}
        placeholder={
          <div className={"file-loading"}>
            <Spin size="large" />
          </div>
        }
      />
    </StyledLoadImage>
  );
});

export default LoadImage;
