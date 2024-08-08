import React, { memo, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import type { ILoadVideo } from "./type";
import StyledLoadVideo from "./style";

import videojs from "video.js";
import "video.js/dist/video-js.css";
const zh = require("video.js/dist/lang/zh-CN.json");
zh["Picture-in-Picture"] = "画中画";
videojs.addLanguage("zh-CN", zh);

export const LoadVideo: React.FC<ILoadVideo> = memo((props) => {
  let intervalHandle = useRef<any>();
  const videoRef = useRef<any>();
  //刚进入页面通过接口获取视屏的url
  // const [videoUrl, setVideoUrl] = useState<any>(require("@/assets/videos/file-v-1.mp4"));
  //获取看到的视屏的详情（包括进度）
  const [dataDetail, setDataDetail] = useState<any>({});
  //state为其他页面穿参，优先级考前，看你当前需求 可以删除
  const { state } = useLocation();

  //useEffect中配置video.js
  // useEffect(() => {
  //   let optiones = {
  //     controls: true,
  //     autoplay: false, //视频是否自动播放安卓12无效
  //     preload: "auto",
  //     language: "zh-CN",
  //     contextmenu: false,
  //     width: document.body.clientWidth,
  //     playbackRates: [0.5, 1, 1.5, 2],
  //     controlBar: {
  //       // timeDivider: true,//是否显示时间控制条，默认为true
  //       // remainingTimeDisplay: false,//是否显示剩余时间，默认为true
  //       // fullscreenToggle: true // 全屏按钮
  //       children: [
  //         //自定义
  //         { name: "playToggle" }, // 播放按钮
  //         {
  //           name: "volumePanel", // 音量控制
  //           inline: false // 不使用水平方式
  //         },
  //         { name: "currentTimeDisplay" }, // 当前已播放时间
  //         { name: "durationDisplay" }, // 总时间
  //         { name: "progressControl" }, // 播放进度条
  //         {
  //           name: "pictureInPictureToggle" //支持画中画
  //         },
  //         {
  //           name: "playbackRateMenuButton"
  //         },
  //         {
  //           name: "FullscreenToggle" //支持全屏
  //         }
  //       ]
  //     }
  //   };
  //   if (videoUrl) {
  //     //判断之前开到的最大时间
  //     let maxTime = state?.watchProgress || dataDetail?.view_duration || 0;
  //     const player = videojs(videoRef.current, optiones, function onPlayerReady() {
  //       this.src(videoUrl); //视频url
  //       this.poster(""); //视频封面图
  //       // this.landscapeFullscreen(); // github上说解决横屏播放 但是没起作用
  //       let lastProgress;
  //       //第二种增加倍速的方法
  //       // addTool();
  //       console.log(dataDetail?.view_duration, "123");
  //       this.currentTime(maxTime);
  //       // 监听播放进度事件
  //       player.on("timeupdate", function () {
  //         let currentTime = this.currentTime();
  //         let duration = this.duration();
  //         if (currentTime - maxTime > 2) {
  //           this.currentTime(maxTime);
  //         } else {
  //           if (currentTime > maxTime) {
  //             maxTime = this.currentTime();
  //           }
  //         }
  //         lastProgress = currentTime / duration;
  //       });
  //       //每五秒触发一次更新接口更新看到的视屏进度
  //       intervalHandle.current = setInterval(() => {
  //         upDateProgress(lastProgress, maxTime);
  //       }, 5000);
  //     });
  //
  //     return () => {
  //       //销毁控制视频高度
  //       if (player) {
  //         player.dispose();
  //       }
  //     };
  //   }
  // }, [videoUrl]);
  //离开页面取消更新
  useEffect(() => {
    return () => {
      clearInterval(intervalHandle.current);
    };
  }, []);

  //挂载并且播放视屏
  return (
    <StyledLoadVideo>
      <video ref={videoRef} id="videoId" className="video-js"></video>
    </StyledLoadVideo>
  );
});

export default LoadVideo;
