import React, { memo } from "react";
import { SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import StyledCommSwiper from "@/components/comm-swiper/style";
import { ICommSwiper } from "@/components/comm-swiper/type";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const CommSwiper: React.FC<ICommSwiper> = (props) => {
  return (
    <StyledCommSwiper
      $wrapWidth={props.$wrapWidth}
      $wrapHeight={props.$wrapHeight}
      $itemWidth={props.$itemWidth}
      $itemHeight={props.$itemHeight}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={22}
      slidesPerView={"auto"}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {props?.list?.map((item, index) => (
        <SwiperSlide key={index}>{props?.slotContent?.({ item, index })}</SwiperSlide>
      ))}
    </StyledCommSwiper>
  );
};

export default memo(CommSwiper);
