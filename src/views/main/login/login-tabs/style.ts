import styled from "styled-components";

const StyledLoginTabs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0 50px;
  margin-bottom: 24px;

  span {
    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: var(--color-primary);
    line-height: 24px;
    text-align: left;
    font-style: normal;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--color-primary);
  }
`;

export default StyledLoginTabs;
