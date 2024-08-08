import styled from "styled-components";
import { Descriptions, Row } from "antd";

export const StyledPageDetailTitle = styled.div`
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

export const StyledPageDetail = styled(Row).attrs<{ $marginBottom?: string }>((props) => ({
  $marginBottom: props.$marginBottom || "20px"
}))`
  margin-bottom: ${(props) => props.$marginBottom};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border-radius: 2px;
  overflow: hidden;
  .ant-col {
    //border: 1px solid red;
    padding: 0 !important;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .label,
    .value {
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      text-align: left;
      font-style: normal;
      word-break: break-all;
    }
    .label {
      height: 100%;
      width: 86px;
      padding: 5px;

      word-break: break-all;
      color: rgba(0, 0, 0, 0.85);
      background: rgba(0, 0, 0, 0.06);
      border-radius: 1px 0px 0px 1px;
    }
    .value {
      flex: 1;
      color: #000000;
      padding: 5px;
    }
  }
`;
