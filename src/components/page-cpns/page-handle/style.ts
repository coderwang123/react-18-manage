import styled from "styled-components";
export interface IStyledPageHandle {
  $paddingBottom?: string;
}
const StyledPageHandle = styled.div.attrs<IStyledPageHandle>((props) => ({
  $paddingBottom: props.$paddingBottom ?? "0"
}))`
  width: 100%;
  padding-bottom: ${(props) => props.$paddingBottom};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .title-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;

    .shu {
      width: 4px;
      height: 19px;
      background: #ff8a61;
      border-radius: 2px;
      margin-right: 10px;
    }

    p {
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #000000;
      line-height: 22px;
      text-align: left;
      font-style: normal;
    }
  }
  .ant-btn {
    margin-right: 10px;
  }
`;
export default StyledPageHandle;
