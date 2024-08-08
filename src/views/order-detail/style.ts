import styled from "styled-components";

const StyledApplyDetail = styled.div`
  height: calc(100% - 65px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border: 2px solid red;
  box-sizing: border-box;
  .left {
    max-width: calc(100% - 400px);
    //background-color: sienna;
    height: 100%;
    flex: 1;
  }
  .right {
    box-sizing: border-box;
    padding: 15px 15px 15px 0;
    box-sizing: border-box;
    max-width: 400px;
    width: 400px;
    height: 100%;
    //background-color: antiquewhite;
  }
`;
export default StyledApplyDetail;
