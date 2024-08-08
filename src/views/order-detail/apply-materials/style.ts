import styled from "styled-components";

const StyledApplyMaterials = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  .type-wrap {
    width: 295px;
    height: 100%;
    background: #fafcff;
    border-radius: 2px;
    border-top: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    border-left: 1px solid #d9d9d9;

    li {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border-bottom: 1px solid #d9d9d9;
      box-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.05);
      cursor: pointer;
      color: var(--color-666);

      &:hover {
        background: rgba(var(--color-primary-16), 0.5);
        color: #fff;
      }

      &.active {
        background: var(--color-primary);
        color: #fff;
      }
    }
  }

  .content-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    //flex: 1;
    width: calc(100% - 295px);
    height: 100%;
    //background-color: aquamarine;
  }
`;
export default StyledApplyMaterials;
