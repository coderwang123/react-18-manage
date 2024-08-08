import styled from "styled-components";

const StyledCOperationLog = styled.div`
  width: 100%;
  height: calc(100% - 200px - 15px);
  //background-color: darkgrey;
  box-sizing: border-box;
  background: #fafcff;
  box-shadow: 0px 1px 5px 0px rgba(38, 38, 38, 0.1);
  border-radius: 4px;
  h2 {
    height: 52px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 0 20px;

    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 16px;
    color: #666666;
  }

  .content {
    height: calc(100% - 52px);
    //background-color: aqua;
  }

  .operation-log-time-line {
    .label-h2 {
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: bold;
      font-size: 14px;
      color: #262626;
      line-height: 20px;
      text-align: right;
      font-style: normal;
    }
    .label-time {
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 400;
      font-size: 12px;
      color: #8c8c8c;
      line-height: 20px;
      text-align: right;
      font-style: normal;
    }
    .cont-title {
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: bold;
      font-size: 14px;
      color: #262626;
      line-height: 20px;
      text-align: left;
      font-style: normal;
    }
    .cont-module {
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 400;
      font-size: 12px;
      color: #8c8c8c;
      line-height: 20px;
      text-align: left;
      font-style: normal;
    }

    .cont-dot {
      width: 20px;
      height: 20px;
    }

    .ant-timeline-item-label {
      width: calc(30% - 12px) !important;
    }
    .ant-timeline-item-tail {
      width: 2px;
      background: #f0f0f0;
    }
    .ant-timeline-item-tail,
    .ant-timeline-item-head {
      inset-inline-start: 30% !important;
    }

    .ant-timeline-item-content {
      inset-inline-start: calc(30% - 4px) !important;
      width: calc(65% - 12px) !important;
    }
  }
`;
export default StyledCOperationLog;
