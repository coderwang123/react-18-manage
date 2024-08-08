import React, { useEffect, useState, useRef, memo, forwardRef, useImperativeHandle } from "react";
import { Spin, Tooltip, Input } from "antd";

import type { ILoadPDF } from "./type";
import StyledLoadPdf from "./style";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

export const LoadPdf: React.MemoExoticComponent<
  React.ForwardRefExoticComponent<ILoadPDF & React.RefAttributes<any>>
> = memo(
  forwardRef((props: ILoadPDF, ref) => {
    const [fileUrl, setFileUrl] = useState<string | null>(null);

    const [pageCurrent, setPageCurrent] = useState(1);
    const pageCurrentRef = useRef(pageCurrent);

    const [pageTotal, setPageTotal] = useState(1);
    const pageTotalRef = useRef(pageTotal);

    const [pageWidth, setPageWidth] = useState(700);
    const pageWidthRef = useRef(pageWidth);

    useEffect(() => {
      setPageCurrent(1);
      pageCurrentRef.current = 1;

      setFileUrl(props.fileUrl);
    }, [props.fileUrl]);

    const prevPage = () => {
      if (pageCurrentRef.current == 1) {
        return;
      }
      setPageCurrent(pageCurrentRef.current - 1);
      pageCurrentRef.current = pageCurrentRef.current - 1;
    };

    const nextPage = () => {
      if (pageCurrentRef.current == pageTotalRef.current) {
        return;
      }

      setPageCurrent(pageCurrentRef.current + 1);
      pageCurrentRef.current = pageCurrentRef.current + 1;
    };

    const pageNumChange = (e: any) => {
      let value = Number(e.target.value);
      let value2 = 1;

      if (value <= 0) {
        value2 = 1;
      } else if (value >= pageTotalRef.current) {
        value2 = pageTotalRef.current;
      } else {
        value2 = value;
      }

      setPageCurrent(value);
      pageCurrentRef.current = value;
    };

    const toPage = (e: any) => {
      console.log("toPage====", e);
      let value = Number(e.target.value);
      let value2 = value;

      if (value <= 0) {
        value2 = 1;
      } else if (value >= pageTotalRef.current) {
        value2 = pageTotalRef.current;
      } else {
        value2 = value;
      }
      setPageCurrent(value2);
      pageCurrentRef.current = value2;
    };

    const pageZoomOut = () => {
      console.log("进来 pageZoomOut");
      if (pageWidthRef.current <= 700) {
        return;
      }
      const pageWidth = pageWidthRef.current * 0.8;
      setPageWidth(pageWidth);
      pageWidthRef.current = pageWidth;
    };

    const pageZoomIn = () => {
      console.log("进来 pageZoomIn");
      const pageWidth = pageWidthRef.current * 1.2;
      setPageWidth(pageWidth);
      pageWidthRef.current = pageWidth;
    };

    const onDocumentLoadSuccess = (args: any) => {
      setPageTotal(args.numPages);
      pageTotalRef.current = args.numPages;
    };
    useEffect(() => {
      props?.handleGetPDFPageInfo({ curtPage: pageCurrentRef.current, total: pageTotalRef.current });
    }, [pageCurrentRef.current, pageTotalRef.current]);
    useImperativeHandle(ref, () => {
      return {
        handlePDFZoomOut: pageZoomOut,
        handlePDFZoomIn: pageZoomIn,
        handlePDFPrevPage: prevPage,
        handlePDFNextPage: nextPage,
        handlePDFPageNumChange: pageNumChange,
        handlePDFToPage: toPage
      };
    });

    return (
      <StyledLoadPdf>
        {fileUrl ? (
          <>
            <div className="pageContainer">
              <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess} loading={<Spin size="large" />}>
                <Page
                  pageNumber={pageCurrent}
                  width={pageWidth}
                  loading={<Spin size="large" />}
                  renderAnnotationLayer={false} // 去除纯文本留白
                  renderTextLayer={false} // 不显示纯文本
                />
              </Document>
            </div>

            {/*<div className="pageTool">*/}
            {/*  <Tooltip title={pageCurrent == 1 ? "已是第一页" : "上一页"}>*/}
            {/*    <LeftOutlined onClick={prevPage} />*/}
            {/*  </Tooltip>*/}
            {/*  <Input value={pageCurrent} onChange={pageNumChange} onPressEnter={toPage} type="number" /> /{" "}*/}
            {/*  {pageTotal}*/}
            {/*  <Tooltip title={pageCurrent == pageTotal ? "已是最后一页" : "下一页"}>*/}
            {/*    <RightOutlined onClick={nextPage} />*/}
            {/*  </Tooltip>*/}
            {/*  <Tooltip title="放大">*/}
            {/*    <ZoomInOutlined onClick={pageZoomIn} />*/}
            {/*  </Tooltip>*/}
            {/*  <Tooltip title="缩小">*/}
            {/*    <ZoomOutOutlined onClick={pageZoomOut} />*/}
            {/*  </Tooltip>*/}
            {/*</div>*/}
          </>
        ) : (
          <div className="empty-wrapper">未生成报告文件！</div>
        )}
      </StyledLoadPdf>
    );
  })
);

export default LoadPdf;
