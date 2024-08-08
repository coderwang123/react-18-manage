import styled from "styled-components";

export const StyledFnItem = styled.div`
  padding: 0 24px;
  cursor: pointer;
  //background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: all 0.3s;
  //&:hover {
  //  background-color: rgba(0, 0, 0, 0.3);
  //
  //  //background: rgba(var(--color-primary-16), 0.5);
  //}

  .ant-badge {
    display: inline !important;
    .ant-badge-count {
      top: -15px;
    }
  }
  .icon {
    font-size: 20px;
    padding: 4px;
  }

  .user-name {
    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 14px;
    margin-left: 8px;
  }
`;
