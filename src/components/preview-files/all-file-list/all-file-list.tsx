import React, { memo, useCallback, useEffect, useState } from "react";
import { Spin } from "antd";
import classNames from "classnames";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

import BScroll from "@/components/b-scroll/b-scroll";
import { LoadImage, PreviewFileModal } from "@/components/preview-files";

import StyledAllFileList from "./style";
import type { IAllFileList } from "./type";

export const AllFileList: React.FC<IAllFileList> = memo((props) => {
  const [curtIndex, setCurtIndex] = useState(0);
  const [isShowPreviewFileModal, setIsShowPreviewFileModal] = useState(false);

  useEffect(() => {
    setCurtIndex(0);
  }, [props?.fileList]);

  const handleClickItem = useCallback((index: number) => {
    setCurtIndex(index);
    setIsShowPreviewFileModal(true);
  }, []);

  const handleClosePreview = useCallback(() => {
    setIsShowPreviewFileModal(false);
  }, []);

  const handlePrev = useCallback(() => {
    if (curtIndex == 0) {
      return;
    }
    setCurtIndex(curtIndex - 1);
  }, [curtIndex]);

  const handleNext = useCallback(() => {
    if (curtIndex > props?.fileList.length - 1) {
      return;
    }
    setCurtIndex(curtIndex + 1);
  }, [curtIndex]);

  return (
    <StyledAllFileList>
      <BScroll>
        <div className={"file-wrap"}>
          {props?.fileList?.map((item, index) => (
            <li
              key={index}
              className={classNames(["file-item", index == curtIndex && "active"])}
              onClick={() => handleClickItem(index)}
            >
              {item?.type == "image" && (
                <LoadImage $time={0.6} url={item.url} key={index} width={"136px"} height={"136px"} />
              )}

              {item.type == "pdf" && (
                <Document file={item.url} loading={<Spin size="large" />}>
                  <Page
                    pageNumber={1}
                    width={136}
                    height={136}
                    loading={<Spin size="large" />}
                    renderAnnotationLayer={false} // 去除纯文本留白
                    renderTextLayer={false} // 不显示纯文本
                  />
                </Document>
              )}

              {item.type == "video" && <video width={136} height={136} src={item.url} />}
            </li>
          ))}
        </div>
      </BScroll>

      {isShowPreviewFileModal && (
        <PreviewFileModal
          curtIndex={curtIndex}
          fileList={props.fileList}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleClose={handleClosePreview}
        />
      )}
    </StyledAllFileList>
  );
});

export default AllFileList;
