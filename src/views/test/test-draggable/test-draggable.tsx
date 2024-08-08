import React from "react";

// 引入拖拽插件

import Draggable from "react-draggable";

export default function Tuo() {
  return (
    <div>
      <div
        className="app"
        style={{ backgroundColor: "red", width: "800px", height: "500px", position: "relative" }}
      >
        {/* 限制范围另一个方式*/}

        {/*<Draggable bounds={".app"}>*/}
        {/*  <div*/}
        {/*    className="box4"*/}
        {/*    style={{*/}
        {/*      backgroundColor: "rgb(174, 103, 160)",*/}

        {/*      width: "300px",*/}

        {/*      height: "300px"*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    我移动ye受限制box4*/}
        {/*  </div>*/}
        {/*</Draggable>*/}
      </div>
    </div>
  );
}
