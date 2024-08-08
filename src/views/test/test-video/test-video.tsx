import React, { useEffect, useRef, useState } from "react";
import PreviewVideo from "@/components/preview-files/load-video/load-video";
import { Image, Space } from "antd";
import {
  DownloadOutlined,
  UndoOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined
} from "@ant-design/icons";
import fullLoading from "@/service/loading/loading";
import { getVideoBase64 } from "@/utils/comm";

const src = "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";
const TestVideo = () => {
  // fullLoading.hide();
  // useEffect(() => {
  //   fullLoading.show();
  // }, []);
  return (
    <div>
      <h2>预览 video</h2>
      {/*<PreviewVideo fileUrl={require("@/assets/videos/file-v-1.mp4")} />*/}
      <VideoCover
        videoUrl={"https://w1234567.oss-cn-hangzhou.aliyuncs.com/c39915d6659cda5fd72a044b66be10c3.mp4"}
      />
      <Image
        width={200}
        src={src}
        preview={{
          toolbarRender: (
            _,
            {
              transform: { scale },
              actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn, onReset }
            }
          ) => (
            <Space size={12} className="toolbar-wrapper">
              <SwapOutlined rotate={90} onClick={onFlipY} />
              <SwapOutlined onClick={onFlipX} />
              <RotateLeftOutlined onClick={onRotateLeft} />
              <RotateRightOutlined onClick={onRotateRight} />
              <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
              <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
              <UndoOutlined onClick={onReset} />
            </Space>
          )
        }}
      />
    </div>
  );
};
const VideoCover: React.FC<{ videoUrl: string }> = (props) => {
  const videoRef = useRef<any>(null);
  const [poster, setPoster] = useState<any>();
  useEffect(() => {
    getVideoBase64(props.videoUrl).then((res) => {
      setPoster(res);
    });
  }, [props.videoUrl]);
  return (
    <div>
      <video
        ref={videoRef}
        src={props.videoUrl}
        muted
        playsInline
        style={{ width: "300px", height: "200px" }}
        poster={poster}
      />
      {/* 在这里使用firstFrame，例如 */}
      {/*<img src={firstFrame.src || "default-cover"} alt="Video Cover" />*/}
    </div>
  );
};

export default TestVideo;
