import React, { memo, useCallback } from "react";
import { Pagination } from "antd";

import StyledPagePagination from "./style";
import type { IPagePagination } from "./type";

export const PagePagination: React.FC<IPagePagination> = memo((props) => {
  // console.log("渲染了 --- Page Pagination props---", props);
  const { handleChangePagination } = props;

  const handleChange = useCallback((page: number, size: number) => {
    // console.log("handleChange page, pageSize ===>", page, size);
    handleChangePagination?.({ page, size });
  }, []);

  // const handleShowSizeChange = useCallback((current: number, size: number) => {
  //   console.log("handleShowSizeChange current, size ===>", current, size);
  // }, []);

  return (
    <StyledPagePagination className={"page-pagination"}>
      <Pagination
        showSizeChanger
        showQuickJumper
        hideOnSinglePage={false}
        showTotal={(total) => `共 ${total} 条`}
        onChange={(page, pageSize) => handleChange(page, pageSize)}
        pageSizeOptions={[10, 20, 30, 40]}
        {...props}
      />
    </StyledPagePagination>
  );
});

export default PagePagination;
