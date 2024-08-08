import { useEffect, useRef } from "react";
import BScroll from "@better-scroll/core";

import type { IBs } from "@/components/b-scroll/type";
import type { BScrollConstructor } from "@better-scroll/core/dist/types/BScroll";
import type { EventEmitter } from "@better-scroll/shared-utils";

import MouseWheel from "@better-scroll/mouse-wheel";
import ScrollBar from "@better-scroll/scroll-bar";
import Pullup from "@better-scroll/pull-up";
import Pulldown from "@better-scroll/pull-down";
import ObserveDOM from "@better-scroll/observe-dom";
import NestedScroll from "@better-scroll/nested-scroll";

BScroll.use(MouseWheel); //鼠标滚轮
BScroll.use(ScrollBar); //滚动条
BScroll.use(Pullup); // 触发了下拉
BScroll.use(Pulldown); // 触发了上拉
BScroll.use(ObserveDOM); // 触发了上拉
BScroll.use(NestedScroll); // 协调嵌套的 BetterScroll 滚动行为

export function useBScroll(props?: IBs) {
  const scrollRef = useRef<any>(null);

  let hooks: EventEmitter;
  let bs: BScrollConstructor | null = null;

  useEffect(() => {
    // console.log(" ----------- useBScroll useEffect 初始化 -----------", props);
    // 初始化 scroll
    bs = new BScroll(scrollRef.current, {
      scrollY: props?.scrollY ?? true, // 沿 y轴 滚动
      scrollX: props?.scrollX ?? false, // 沿 x轴 滚动
      probeType: props?.probeType, // 反向偏移量
      click: props?.click ?? false, // 派发点击事件

      pullDownRefresh: props?.isUsePullingDown ?? false, // 下拉刷新
      pullUpLoad: props?.isUsePullingUp ?? false, // 上拉加载

      mouseWheel: true, // 开启鼠标滚轮插件
      scrollbar: true, // 开启滚动条插件
      preventDefault: false,
      autoBlur: false,
      bounce: props?.bounce,
      bounceTime: props?.bounceTime,
      stopPropagation: false,
      observeDOM: true, // 开启 observe-dom 插件
      nestedScroll: true

      // ------ test
      // bindToTarget: true
    });
    // // 初始化 hooks
    hooks = bs?.scroller?.hooks;
    // 触发时机：window 尺寸发生改变
    hooks?.on("resize", () => {
      console.log(" ----------- useBScroll 窗口改变 -----------");
      bs?.refresh(); // 更新 BScroll
    });

    bs?.refresh(); // 更新 BScroll
    return () => {
      bs?.destroy();
    };
  }, [
    props?.scrollX,
    props?.scrollY,
    props?.probeType,
    props?.click,
    props?.isUsePullingDown,
    props?.isUsePullingUp,
    props?.bounce,
    props?.bounceTime
  ]);

  useEffect(() => {
    // 监听右键点击事件并阻止默认行为
    document.addEventListener("contextmenu", (e) => {
      if (bs!.enabled) {
        e.preventDefault();
      }
    });
  }, []);

  // // 方法
  // // 开启 滚动前 监听事件，触发时机：content 元素 满足 滚动条件，即将 开始 滚动
  function handleScrollStart() {
    if (props?.isUseScrollStart) {
      // bs?.on("scrollStart", () => {
      //   // emit("handleScrollStart");
      // });
    }
  }
  //
  // 开启 滚动中 监听事件，触发时机：正在滚动
  function handleScroll() {
    if (props?.isUserScroll) {
      // bs?.on("scroll", (position: { x: number; y: number }) => {
      //   // emit("handleScroll", position);
      // });
    }
  }

  // 开启 滚动后 监听事件，触发时机：滚动结束，或者让一个正在滚动的 content 强制停止
  function handleScrollEnd() {
    if (props?.isUseScrollEnd) {
      // bs?.on("scrollEnd", () => {
      //   // emit("handleScrollEnd");
      // });
    }
  }

  // 开启 下拉刷新，触发时机：当顶部 下拉距离 超过阈值
  function handlePullingDown() {
    if (props?.isUsePullingDown) {
      // bs?.on("pullingDown", () => {
      //   console.log("触发了上拉");
      //   // emit("handlePullingDown");
      //   bs?.finishPullDown();
      // });
    }
  }

  // 开启 上拉加载，触发时机：当底部 下拉距离 超过阈值
  function handlePullingUp() {
    if (props?.isUsePullingUp) {
      // bs?.on("pullingUp", () => {
      //   console.log("触发了下拉");
      //   // emit("handlePullingUp");
      //   bs?.finishPullUp();
      // });
    }
  }
  //
  // // console.log("定义 props bs ref ===> ", scrollRef);
  // console.log(" ----------- useBScroll scrollRef -----------", scrollRef);

  return [scrollRef, bs];
}
