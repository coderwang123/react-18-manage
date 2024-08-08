import styled from "styled-components";

const StyledCTripartiteData = styled.div`
  width: 100%;
  height: 200px;
  background: #fafafa;
  box-shadow: 0px 1px 5px 0px rgba(38, 38, 38, 0.1);
  border-radius: 4px;
  margin-bottom: 15px;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 44px;
    background: #ffece6;
    border-radius: 8px 8px 0px 0px;

    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #fe4301;
    line-height: 16px;
    text-align: left;
    font-style: normal;
  }

  .table-wrap {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    table {
      border: 1px solid #000;
      width: 100%;
      border-collapse: collapse;
      td,
      th {
        border: 1px solid #f0f0f0;
        text-align: center;
        font-family:
          PingFangSC,
          PingFang SC;
        font-weight: 400;
        font-style: normal;
        line-height: 22px;
        padding: 5px 0px;
      }

      th {
        font-size: 13px;
        color: #666666;
      }

      td {
        font-size: 12px;
        color: #000000;
        text-align: center !important;
        .ant-btn {
          display: inline-block !important;
          color: var(--color-primary);
          font-size: 12px;
          line-height: 22px;
          text-decoration: underline;
          text-underline-offset: 3px; /* 文字与下划线之间的间距 */
          padding: 0 !important;
          height: auto !important;
          span {
            text-decoration: underline;
            text-underline-offset: 3px; /* 文字与下划线之间的间距 */
          }
          &:disabled {
            color: #e0e0e0;
          }
        }
      }
    }
  }
`;
export default StyledCTripartiteData;
