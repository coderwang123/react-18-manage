import styled from "styled-components";

export const StyledAppHeader = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;

  .left {
    display: flex;
    align-items: center;
    padding-left: 13px;
    .ant-btn {
      font-size: 16px;
      width: 30px;
      height: 30px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    align-self: flex-end;
    height: 100%;
    padding-right: 20px;
    .ant-dropdown-trigger {
    }
  }
`;
