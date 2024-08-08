import { Table } from "antd";
import styled from "styled-components";

// 使用styled-components创建一个新的组件，它继承自Ant Design的Table组件
interface IStyledPageTable {
  $tableWrapHeight?: string;
  $tableBodyHeight?: string;
  $isEmpty?: boolean;
}
const StyledPageTable = styled(Table).attrs<IStyledPageTable>((props) => ({
  $tableWrapHeight: props.$tableWrapHeight || "auto",
  $tableBodyHeight: props.$tableBodyHeight || "100%"
}))`
  height: ${(props) => props.$tableWrapHeight};
  .ant-table {
    scrollbar-width: auto !important;
    scrollbar-color: auto !important;
    cursor: pointer;
    ::-webkit-scrollbar {
      width: 5px !important;
      height: 6px !important;
    }
    ::-webkit-scrollbar-track {
      background: #f0f0f0; /* 滚动条轨道的颜色 */
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.1);
      background: #c1c1c1; /* 滚动条实际可拖动部分的颜色 */
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #a8a8a8; /* 滚动条在鼠标悬停时的颜色 */
    }
    ::-webkit-scrollbar-thumb:window-inactive {
      background: rgb(219, 219, 219);
    }
  }

  .ant-table-container {
    border-inline-start: 1px solid var(--color-table-border-body) !important;
    //border-top: 1px solid green !important;
    border-start-start-radius: 2px;
    border-start-end-radius: 2px;
    &::before {
      border-start-start-radius: 2px;
    }
    &::after {
      border-start-end-radius: 2px;
    }
    .ant-table-thead {
      overflow: hidden !important;
      tr {
        th {
          border-inline-end: 1px solid var(--color-table-border-header) !important;
          border-bottom: 1px solid var(--color-table-border-body);
          font-family:
            PingFangSC,
            PingFang SC;
          font-weight: 500;
          font-size: 14px;
          color: #000000;
          line-height: 22px;
          font-style: normal;
          background: var(--color-minor) !important;
        }
      }
    }

    .ant-table-body {
      overflow: ${(props) => (props.$isEmpty ? "auto hidden" : "auto scroll")} !important;
      transition: all 1.5s ease-in-out;
      tr {
        &:nth-child(2n + 1) td {
          background: var(--color-minor);
        }
        td {
          border-inline-end: 1px solid var(--color-table-border-body) !important;
          border-bottom: 1px solid var(--color-table-border-body);
          font-family:
            PingFangSC,
            PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #000000;
          line-height: 22px;
          text-align: left;
          font-style: normal;

          .ant-tag {
            font-size: 14px;
            line-height: 22px;
            height: 24px;
          }
        }
      }
    }

    .ant-table-expanded-row-fixed {
      padding: 0 !important;

      &::after {
        inset-inline-end: ${(props) => (props.$isEmpty ? 0 : 1)}px !important;
        border-inline-end: ${(props) => (props.$isEmpty ? 0 : 1)}px solid #f0f0f0 !important;
      }
    }
  }
`;
export default StyledPageTable;
