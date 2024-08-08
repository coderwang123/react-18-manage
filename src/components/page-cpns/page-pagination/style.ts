import styled from "styled-components";

// 使用styled-components创建一个新的组件，它继承自Ant Design的 Pagination 组件
const StyledPagePagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15px;
  z-index: 999;
  background-color: #fff;
  .ant-pagination {
    .ant-pagination-item-active {
      //background: var(--color-primary) !important;
      //border: none;
      color: #fff !important;
      a {
        color: #fff !important;
      }
    }
    li {
      //height: 100%;
      //line-height: 28px;
      //font-family:
      //  PingFangSC,
      //  PingFang SC;
      //font-weight: 400;
      //font-size: 14px;
      //color: var(--color-pagination);
      //line-height: 20px;
      //text-align: center;
      a {
        color: var(--color-pagination);
      }
    }

    //// 左右图标
    //.anticon {
    //  color: var(--color-pagination);
    //}
    //
    //.ant-pagination-options {
    //  .ant-select-selector {
    //    color: #595959 !important;
    //    border-color: rgba(38, 38, 38, 0.17) !important;
    //    box-shadow: none !important;
    //    //border-color: red !important;
    //    &:hover {
    //      border-color: var(--color-primary) !important;
    //      //border-color: green !important;
    //    }
    //    .ant-select-selection-search input {
    //      //border: 2px solid darkgrey !important;
    //      &:focus {
    //        border-color: var(--color-primary) !important;
    //      }
    //    }
    //  }
    //
    //  .ant-pagination-options-quick-jumper input {
    //    color: #595959 !important;
    //    &:hover {
    //      border-color: var(--color-primary);
    //    }
    //    &:focus {
    //      border-color: var(--color-primary);
    //    }
    //  }
    //}
  }
`;
export default StyledPagePagination;
