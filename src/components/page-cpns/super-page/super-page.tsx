import React, { Fragment, memo, useCallback, useEffect, useRef, useState } from "react";
import { ISuperPage, PageHandle, PagePagination, PageSearch, PageTable } from "@/components/page-cpns";
import { debounce } from "@/utils/comm";

export const SuperPage: React.FC<ISuperPage> = memo((props) => {
  const [tableWrapHeight, setTableWrapHeight] = useState(0);
  const [tableBodyHeight, setTableBodyHeight] = useState(0);
  const [curtExpand, setCurtExpand] = useState(false);

  function getTableHeight() {
    const elApp = document.getElementsByClassName("app-container")?.[0] as HTMLInputElement;
    const elAppHeight = elApp?.offsetHeight ?? 0;

    const elSearch = document.getElementsByClassName("page-search")?.[0] as HTMLInputElement;
    const elSearchHeight = elSearch?.offsetHeight ?? 0;

    const elHandle = document.getElementsByClassName("page-handle")?.[0] as HTMLInputElement;
    const elHandleHeight = elHandle?.offsetHeight ?? 0;
    console.log("elHandleHeight ===============", elHandleHeight);

    const elPagination = document.getElementsByClassName("page-pagination")?.[0] as HTMLInputElement;
    const elPaginationHeight = elPagination?.offsetHeight ?? 0;
    console.log("elPaginationHeight ===============", elPaginationHeight);

    let elTableWrapHeight = elAppHeight - elSearchHeight - elHandleHeight - 30;

    if (elPaginationHeight) {
      elTableWrapHeight = elTableWrapHeight - elPaginationHeight - 20;
    }

    const elTableHead = document.getElementsByClassName("ant-table-thead")?.[0] as HTMLInputElement;
    const elTableHeadHeight = elTableHead?.offsetHeight ?? 0;
    console.log("elTableHeadHeight ===============", elTableHeadHeight);

    if (props?.otherHeight) {
      props?.otherHeight?.forEach((h) => {
        elTableWrapHeight += h;
      });
    }

    let elTableBodyHeight = elTableWrapHeight - elTableHeadHeight;

    console.log("wrap h ===============", elTableWrapHeight);
    console.log("body h ===============", elTableBodyHeight);
    setTableWrapHeight(elTableWrapHeight);
    setTableBodyHeight(elTableBodyHeight);
  }

  // 关闭loading防抖，延迟400ms执行，合并该时延内的间断请求。
  const debounceGetTableHeight = debounce(getTableHeight, 300);
  useEffect(() => {
    debounceGetTableHeight();

    window.addEventListener("resize", debounceGetTableHeight);
    return () => {
      window.removeEventListener("resize", debounceGetTableHeight);
    };
  }, [curtExpand]);

  const handleChangeExpand = useCallback((params: boolean) => {
    setCurtExpand(params);
  }, []);

  return (
    <>
      {props?.configSearch && <PageSearch {...props.configSearch} handleChangeExpand={handleChangeExpand} />}
      {props?.configHandle && <PageHandle {...props.configHandle} handleCustomBtn={props.handleCustomBtn} />}
      {props?.configTable && (
        <PageTable
          {...props.configTable}
          handleCustomBtn={props.handleCustomBtn}
          wrapHeight={tableWrapHeight}
          bodyHeight={tableBodyHeight}
        />
      )}
      {props?.configPagination && <PagePagination {...props.configPagination} />}
    </>
  );
});

export default SuperPage;
