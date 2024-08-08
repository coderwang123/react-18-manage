import styled from "styled-components";

const ScrollWrapper = styled.div.attrs<{ $bsWidth?: string }>((props) => ({
  $bsWidth: props.$bsWidth || "100%"
}))`
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  z-index: 1;
  // 是否允许复制
  //-webkit-user-select: none;
  //-moz-user-select: none;
  //-ms-user-select: none;
  //user-select: none;
  //background: rgba(200, 193, 210, 0.9);

  //padding: 10px;
  //background: antiquewhite;

  .bs-content {
    height: auto;
    width: ${(props) => props.$bsWidth};
    //border: 2px solid red;
    box-sizing: border-box;
    display: ${(props) => (props.$bsWidth != "auto" ? "block" : "inline-flex")};
  }

  :deep(.bscroll-vertical-scrollbar) {
    width: 3px !important;

    .bscroll-indicator {
      border: none !important;
    }
  }
`;
export default ScrollWrapper;
