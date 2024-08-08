import styled from "styled-components";

export const RightPerWrap = styled.div`
  height: 100%;
  //background: #5a5c9f;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 30px;

  header {
    width: 100%;
    height: 40px;
    background: #fff9f9;
    border-radius: 2px 2px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-left: 20px;
    //background: #E8E8E8;
    border-bottom: 1px solid #e8e8e8;

    .role-name {
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 400;
      font-size: 14px;
      color: #000000;
      line-height: 22px;
      text-align: left;
      font-style: normal;
    }
  }

  .ant-row {
    width: 100%;
    height: calc(100% - 70px);
    //background-color: #ccc;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .left,
    .right {
      //width: 50%;
      height: 100%;
      box-sizing: border-box;
      //border-right: 1px solid #e8e8e8;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .right-module {
        width: 100%;
        height: 50%;
      }
    }
    //.left {
    //  width: 30%;
    //}
    //.right {
    //  width: 70%;
    //}

    .per-cont {
      height: calc(100% - 24px);
      width: 100%;
      box-sizing: border-box;
      //background-color: rosybrown;
    }
    //height: "calc(100% - 70px)", width: "100%"
  }
`;
