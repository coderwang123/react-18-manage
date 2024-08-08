import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { Button, Input, Space, Tooltip } from "antd";
import {
  DownloadOutlined,
  UndoOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  LeftOutlined,
  RightOutlined
} from "@ant-design/icons";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { trackWindowScroll } from "react-lazy-load-image-component";
import BScroll from "@/components/b-scroll/b-scroll";
import { LoadPdf, LoadImage } from "@/components/preview-files";

import type { IPreviewFileModal } from "./type";
import StyledPreviewFileModal from "./style";

export const PreviewFileModal = memo(
  trackWindowScroll((props: IPreviewFileModal) => {
    const { fileList, curtIndex = 0 } = props;

    const fileInfo = useMemo(() => {
      return fileList?.[curtIndex];
    }, [fileList, curtIndex]);

    const pdfRef = useRef<any>();

    const [fipVal, setFipVal] = useState({
      y: false,
      x: false
    });
    function handleSetFip(direction: "Y" | "X") {
      switch (direction) {
        case "Y":
          setFipVal((prevState) => ({
            ...prevState,
            y: !prevState.y
          }));
          break;
        case "X":
          setFipVal((prevState) => ({
            ...prevState,
            x: !prevState.x
          }));
          break;
      }
    }

    const [scale, setScale] = useState<number>(1);
    function handleSetScale(isZoomBig: boolean) {
      isZoomBig ? handleZoomBig() : handleZoomSmall();
    }
    // 放大
    function handleZoomBig() {
      if (fileInfo?.type == "pdf") {
        pdfRef.current?.handlePDFZoomIn?.();
      } else {
        if (scale >= 50) {
          setScale(50);
        } else {
          setScale(scale + 0.5);
        }
      }
    }

    // 缩小
    function handleZoomSmall() {
      if (fileInfo?.type == "pdf") {
        pdfRef.current?.handlePDFZoomOut?.();
      } else {
        if (scale <= 1) {
          setScale(1);
        } else {
          setScale(scale - 0.5);
        }
      }
    }

    const [rotate, setRotate] = useState(0);
    function handleSetRotate(direction: "Left" | "Right") {
      if (direction == "Left") {
        setRotate(rotate - 90);
      } else {
        setRotate(rotate + 90);
      }
    }

    function handleReset() {
      setFipVal({ x: false, y: false });

      setRotate(0);

      setScale(1);
    }

    function handleDownLoad() {
      window.open(fileInfo?.url);
    }

    const customStyle = useMemo(() => {
      return {
        translate3d: "translate3d(0px, 0px, 0px)",
        scale3d: `scale3d(${fipVal.x ? -scale : scale}, ${fipVal.y ? -scale : scale}, 1)`,
        rotate: `rotate(${rotate}deg)`
      };
    }, [fipVal, scale, rotate]);

    const [pageCurrent, setPageCurrent] = useState<number>();
    const [pageTotal, setPageTotal] = useState<number>();

    const prevPage = useCallback(() => {
      pdfRef.current?.handlePDFPrevPage?.();
    }, []);

    const nextPage = useCallback(() => {
      pdfRef.current?.handlePDFNextPage?.();
    }, []);

    const pageNumChange = useCallback(() => {
      pdfRef.current?.handlePDFPageNumChange?.();
    }, []);

    const toPage = useCallback((e: any) => {
      pdfRef.current?.handlePDFToPage?.(e);
    }, []);

    function handleGetPDFPageInfo(params: { curtPage: number; total: number }) {
      setPageCurrent(params.curtPage);
      setPageTotal(params.total);
    }

    return (
      <StyledPreviewFileModal
        width="100vw"
        height={"100%"}
        title=""
        centered
        closable={true}
        maskClosable={false}
        keyboard={false}
        open={true}
        onCancel={() => props?.handleClose()}
        footer={
          <div className={"handle"}>
            <Space size={12} className="toolbar-wrapper">
              {fileInfo?.type == "pdf" && (
                <div className="pageTool">
                  <Tooltip title={pageCurrent == 1 ? "已是第一页" : "上一页"}>
                    <LeftOutlined onClick={() => prevPage()} />
                  </Tooltip>
                  <Input value={pageCurrent} onChange={pageNumChange} onPressEnter={toPage} type="number" /> /
                  {pageTotal}
                  <Tooltip title={pageCurrent == pageTotal ? "已是最后一页" : "下一页"}>
                    <RightOutlined onClick={() => nextPage()} />
                  </Tooltip>
                </div>
              )}

              <Button type={"link"} onClick={() => handleDownLoad()}>
                <DownloadOutlined />
              </Button>

              <Button type={"link"} onClick={() => handleSetFip("Y")}>
                <SwapOutlined rotate={90} />
              </Button>

              <Button type={"link"} onClick={() => handleSetFip("X")}>
                <SwapOutlined />
              </Button>

              <Button type={"link"} onClick={() => handleSetRotate("Left")}>
                <RotateLeftOutlined />
              </Button>

              <Button type={"link"} onClick={() => handleSetRotate("Right")}>
                <RotateRightOutlined />
              </Button>

              <Button
                type={"link"}
                disabled={scale === 1 && fileInfo?.type != "pdf"}
                onClick={() => handleSetScale(false)}
              >
                <ZoomOutOutlined />
              </Button>

              <Button
                type={"link"}
                disabled={scale === 50 && fileInfo?.type != "pdf"}
                onClick={() => handleSetScale(true)}
              >
                <ZoomInOutlined />
              </Button>

              <Button type={"link"} onClick={() => handleReset()}>
                <UndoOutlined />
              </Button>
            </Space>
          </div>
        }
      >
        <Button
          type={"link"}
          className={"left"}
          disabled={curtIndex == 0}
          onClick={() => {
            props.handlePrev();
            handleReset();
          }}
        >
          <LeftOutlined style={{ fontSize: "100px" }} />
        </Button>

        <Button
          type={"link"}
          className={"right"}
          disabled={curtIndex == fileList.length - 1}
          onClick={() => {
            props.handleNext();
            handleReset();
          }}
        >
          <RightOutlined style={{ fontSize: "100px" }} />
        </Button>

        <div className={"p-content"}>
          {fileInfo?.type == "image" && (
            <LoadImage
              url={fileInfo.url}
              width={"auto"}
              height={"80%"}
              style={{
                transform: `${customStyle.translate3d} ${customStyle.scale3d} ${customStyle.rotate}`,
                maxWidth: " calc(100% - 200px)"
              }}
            />
          )}

          {fileInfo?.type == "video" && (
            <video
              muted
              controls
              src={fileInfo.url}
              style={{
                transform: `${customStyle.translate3d} ${customStyle.scale3d} ${customStyle.rotate}`,

                cursor: "move",
                position: "absolute",
                maxWidth: "70%",
                maxHeight: "70%"
              }}
            />
          )}

          {fileInfo?.type == "pdf" && (
            <BScroll scrollX={true} scrollY={true} style={{ height: "100%" }} $bsWidth={"auto"}>
              <div
                style={{
                  display: "inline-block",
                  transform: `${customStyle.translate3d} ${customStyle.scale3d} ${customStyle.rotate}`,
                  cursor: "move"
                }}
              >
                <LoadPdf fileUrl={fileInfo.url} ref={pdfRef} handleGetPDFPageInfo={handleGetPDFPageInfo} />
              </div>
            </BScroll>
          )}
        </div>
      </StyledPreviewFileModal>
    );
  })
);

export default PreviewFileModal;
