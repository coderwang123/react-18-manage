import React, { useCallback, useState } from "react";
import { useRef, useEffect } from "react";
import CommSwiper from "@/components/comm-swiper/comm-swiper";

const TestSwiper = () => {
  useEffect(() => {
    // listen for Swiper events using addEventListener
  }, []);

  const [count, setCount] = useState(0);

  const handleCount_1 = useCallback(() => {
    if (count > 10) {
      console.log("我是 大于10---- 2");
    }
  }, [count]);

  const handleCount_2 = useCallback(() => {
    if (count > 10) {
      console.log("我是 大于10---- 2");
    }
  }, []);
  return (
    <div style={{ width: "700px", height: "500px", border: "1px solid black" }}>
      <CommSwiper
        $wrapHeight={"300px"}
        $itemWidth={"300px"}
        slotContent={({ item, index }) => <li key={index}>{item}</li>}
      />
    </div>
  );
};

export default TestSwiper;
