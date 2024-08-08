import styled from "styled-components";
import { Empty } from "antd";
interface IStyledAEmpty {
  $height?: string;
}
const StyledAEmpty = styled(Empty).attrs<IStyledAEmpty>((props) => ({
  $height: props.$height || "auto"
}))`
  padding: 80px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.$height};

  .ant-empty-image {
    margin-bottom: 32px;
  }
  .ant-empty-description {
    span {
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: rgba(89, 89, 89, 0.65);
      line-height: 22px;
      text-align: left;
      font-style: normal;
    }
  }
`;
export default StyledAEmpty;
