import styled from "styled-components";

const StyledLoadPdf = styled.div`
  //background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px 0;
  //border: 3px solid red;
  box-sizing: border-box;
  .pageContainer {
    z-index: 1;
    //box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px;
    width: max-content;
    width: 100%;
    height: 100%;
    overflow: auto;

    .react-pdf__Page {
      background-color: transparent !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .react-pdf__Document {
      margin: 0 auto;
      width: 100%;
      height: 100%;
    }
    //.react-pdf__Page__canvas {
    //
    //}
  }

  .empty-wrapper {
    padding: 100px 0 50px;
    text-align: center;
    font-size: 20px;
    letter-spacing: 2px;
    color: #999;
  }
  //
`;
export default StyledLoadPdf;
