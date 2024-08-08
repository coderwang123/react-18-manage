import { Spin } from "antd";
import React from "react";
import { createRoot } from "react-dom/client";
import { debounce } from "@/utils/comm";
import ASpin from "../../components/ant-feedback-cpns/a-spin/a-spin";

let loadingReqCount: any = 0;
let loadingStatus = false;

console.log("渲染了 -------------------------------- ");
const show = () => {
  if (loadingReqCount === 0 && !loadingStatus) {
    const dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
    createRoot(dom).render(<ASpin />);
  }
  loadingStatus = true;
  loadingReqCount++;
};

const hide = () => {
  loadingReqCount--;
  loadingReqCount = Math.max(loadingReqCount, 0); // 保证大于等于0
  if (loadingReqCount === 0 || loadingStatus) {
    hideDebounceFn();
  }
};
function hideDebounceFnCallback() {
  // loadingReqCount 需要二次判断，因为后续接口调用会增加这个值，就不能直接关闭
  if (loadingReqCount === 0) {
    const dom = document.getElementById("loading");
    if (dom) {
      document.body.removeChild(dom as HTMLElement);
    }
    loadingStatus = false;
  }
}
// 关闭loading防抖，延迟400ms执行，合并该时延内的间断请求。
const hideDebounceFn = debounce(hideDebounceFnCallback, 400);

const fullLoading = {
  show,
  hide
};

export default fullLoading;
