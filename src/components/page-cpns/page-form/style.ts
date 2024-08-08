import styled from "styled-components";

export const StyledModuleTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 19px;
  span {
    width: 4px;
    height: 19px;
    background: #ff8a61;
    border-radius: 2px;
    margin-right: 10px;
  }

  p {
    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    line-height: 22px;
    text-align: left;
    font-style: normal;
  }
`;

export const StyledPageForm = styled.div`
  width: 100%;
  height: 100%;
  .handle-wrap {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .ant-btn:nth-child(1) {
      margin-right: 30px;
    }
  }
`;
