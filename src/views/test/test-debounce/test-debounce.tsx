import React, { useEffect } from "react";
import { debounce } from "@/utils/comm";

const TestDebounce = () => {
  useEffect(() => {
    const inputEl = document.querySelector("#iii") as HTMLInputElement;
    console.log("inputEl ===>", inputEl);
    let counter = 0;

    const inputChange = function (this: any, event: Event) {
      console.log(`发送了第${++counter}次网络请求`);

      console.log("this ===> ", this); // 解决

      console.log("event ===> ", event); // 解决

      return "我是-inputChange-返回值";
    };

    // 通过回调函数 拿到结果
    const debounceChange = debounce(inputChange, 2000, false, (res) => {
      console.log("回调函数-拿到真正-执行-函数-返回值 ===> ", res);
    });

    // 通过Promise 拿到结果
    function tempCallback(...args: any[]) {
      debounceChange.apply(inputEl, args).then((res) => {
        console.log("Promise-拿到真正-执行-函数-返回值 ===> ", res);
      });
    }

    // 防抖处理
    inputEl.oninput = tempCallback;

    // 取消功能
    const cancelBtn = document.querySelector("#cancel") as HTMLButtonElement;
    cancelBtn.onclick = function () {
      debounceChange.cancel();
    };
  }, []);

  return (
    <div className={"app-container"} style={{ width: "100%", height: "100%" }}>
      about 测试功能函数逻辑 测试防抖
      <input id="iii" type="text" />
      <button id="cancel">取消</button>
    </div>
  );
};

export default TestDebounce;
