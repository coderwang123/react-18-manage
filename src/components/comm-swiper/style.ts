import styled from "styled-components";
import { Swiper } from "swiper/react";

export interface IStyledCommSwiper {
  $wrapWidth?: string;
  $wrapHeight?: string;
  $itemHeight?: string;
  $itemWidth?: string;
}

const StyledCommSwiper = styled(Swiper).attrs<IStyledCommSwiper>((props) => ({
  $wrapWidth: props.$wrapWidth ?? "100%",
  $wrapHeight: props.$wrapHeight ?? "200px",

  $itemWidth: props.$itemWidth ?? "200px",
  $itemHeight: props.$itemHeight ?? "100%"
}))`
  width: ${(props) => props.$wrapWidth};
  height: ${(props) => props.$wrapHeight};

  .swiper-slide {
    width: ${(props) => props.$itemWidth};
    height: ${(props) => props.$itemHeight};

    //background-color: rebeccapurple;
  }
`;
export default StyledCommSwiper;
