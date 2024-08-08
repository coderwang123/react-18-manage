import styled from "styled-components";
import { Spin } from "antd";

const StyledASpin = styled(Spin)`
  background-color: rgba(0, 0, 0, 0.2) !important;
  width: 180px !important;
  height: 180px !important;
  background: #fff8f8 !important;
  border-radius: 24px !important;
  border: 2px solid #fff1eb !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;

  .ant-spin-dot-holder {
    color: var(--color-primary) !important;
    font-size: 40px !important;
    margin-bottom: 20px !important;
  }
  .ant-spin-text {
    font-family:
      PingFangSC,
      PingFang SC !important;
    font-weight: 400 !important;
    font-size: 22px !important;
    color: var(--color-primary) !important;
    line-height: 22px !important;
    text-align: left !important;
    font-style: normal !important;
  }
`;
export default StyledASpin;
