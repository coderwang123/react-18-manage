import styled from "styled-components";

const StyledCommTitle = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-right: 30px;
  background-color: var(--color-minor);
  height: 65px;
  cursor: pointer;
  .img-wrap {
    height: 100%;
    padding: 0 10px 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    //border: 1px solid red;
    img {
      width: 7px;
      height: 12px;
    }
  }

  span {
    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    line-height: 16px;
    font-style: normal;
  }
`;
export default StyledCommTitle;
