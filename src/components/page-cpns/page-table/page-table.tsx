import React, { Fragment, memo, useEffect, useMemo, useState } from "react";

import StyledPageTable from "./style";
import type { IPageTable } from "./type";

import { PageHandle, PagePagination } from "@/components/page-cpns";

import { generateTableItem } from "@/components/page-cpns/generate-item";
import { AEmpty } from "@/components/ant-data-show-cpns";

export const PageTable: React.FC<IPageTable> = memo((props) => {
  console.log("渲染了 --- Page Table props---", props);
  const {
    data,
    handleCustomBtn,
    isShowPagination = true,
    scroll,
    wrapHeight = 200,
    bodyHeight = 100,
    configList,
    pageConfigHandle,
    pageConfigPagination,
    ...rest
  } = props;
  const [handleWidth, setHandleWidth] = useState<number>(0);
  useEffect(() => {
    if (data && data?.length > 0) {
      // 获取操按钮组元素
      let widthArr: any[] = [];
      const opts = document.getElementsByClassName("table-handle-wrap");
      Array.prototype.forEach.call(opts, (item) => {
        if (item.innerText) {
          widthArr.push(item.offsetWidth);
        }
      });
      console.log("widthArr 231211111111111111111111 ===>", widthArr);
      let wh = 0;
      if (widthArr.length > 0) {
        wh = Math.max(...widthArr) + 32;
        // wh = Math.max(...widthArr) > 90 ? Math.max(...widthArr) : 90;
      } else {
        wh = 0;
      }
      setHandleWidth(wh);
    }
  }, [data]);
  const renderList = useMemo(() => {
    return configList?.map((item, index) => {
      return (
        <Fragment key={index}>
          {generateTableItem({
            handleCustomBtn: props.handleCustomBtn,
            tableItem: item,
            handleWidth,
            dataLength: data?.length ?? 0
          })}
        </Fragment>
      );
    });
  }, [data, handleWidth]);
  return (
    <>
      {pageConfigHandle?.configList && <PageHandle {...pageConfigHandle} handleCustomBtn={handleCustomBtn} />}

      <StyledPageTable
        $isEmpty={data?.length == 0}
        $tableBodyHeight={`${bodyHeight}px`}
        $tableWrapHeight={`${wrapHeight}px`}
        dataSource={data}
        rowKey={"id"}
        bordered={true}
        tableLayout="fixed"
        scroll={{
          scrollToFirstRowOnChange: true,
          x: "100%",
          y: bodyHeight
        }}
        pagination={false}
        expandable={{
          showExpandColumn: true
        }}
        locale={{
          emptyText: <AEmpty height={`${bodyHeight}px`} />
        }}
        {...rest}
      >
        {renderList}

        {/*{configList?.map((item, index) => {*/}
        {/*  return (*/}
        {/*    <Fragment key={index}>*/}
        {/*      {generateTableItem({*/}
        {/*        handleCustomBtn: props.handleCustomBtn,*/}
        {/*        tableItem: item,*/}
        {/*        handleWidth,*/}
        {/*        dataLength: data?.length ?? 0*/}
        {/*      })}*/}
        {/*    </Fragment>*/}
        {/*  );*/}
        {/*})}*/}
      </StyledPageTable>

      {isShowPagination && <PagePagination {...pageConfigPagination} />}
    </>
  );
});

export default PageTable;
