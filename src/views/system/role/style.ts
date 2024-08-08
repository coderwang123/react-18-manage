import styled from "styled-components";

const StyledRole = styled.div`
  height: 100%;
  .content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: calc(100% - 52px);
    color: var(--color-primary);
    //background-color: rebeccapurple;
  }
  .btn-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
export default StyledRole;
