import styled from "styled-components";

const StyledMenu = styled.div`
  height: 100vh;
  .top {
    width: calc(100%);
    height: 73px;
    //background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: FZY4JW--GB1, FZY4JW--GB1;
    font-weight: normal;
    font-size: 24px;
    color: #ffffff;
    line-height: 24px;
    letter-spacing: 2px;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    .menu-logo-and-span {
      width: 174px;
      height: 24px;
    }
    .menu-logo {
      width: 61px;
      height: 24px;
    }
  }
  //.center {
  //  height: 40px;
  //  display: flex;
  //  justify-content: center;
  //  align-items: center;
  //  .ant-btn {
  //    color: #fff;
  //    &:hover {
  //      color: rgba(255, 255, 255, 0.65);
  //    }
  //  }
  //}
  .bottom {
    height: calc(100% - 73px);
  }
`;

export default StyledMenu;
