import React, { useCallback, useRef, useState } from "react";
import { Button } from "antd";
import useQueryState from "@/hooks/use-query-state";

const TestTimeLine = () => {
  const [params, setParams, getParams] = useQueryState<any>({
    page: 1,
    size: 10
  });

  // const params = useRef();

  const handleClick = useCallback((params?: any) => {
    setParams({ ...params });
  }, []);

  const handleSetOther = useCallback((params: any) => {
    const newParams = { page: 1, size: 10, ...params };
    setParams(newParams);
  }, []);

  const [isFlag, setIsFlag] = useState(true);
  const handleChange = useCallback(() => {
    console.log("params ===============?>", params);
    console.log("getParams ===============?>", getParams());
    // setIsFlag((prevState) => !prevState);
  }, []);
  return (
    <div>
      <Button onClick={() => handleClick({ page: params.page + 1 })}></Button>
      <Button onClick={() => handleSetOther({ other: Math.random() })}>设置其他参数</Button>
      <Button onClick={handleChange}>改变状态 获取</Button>

      <h2>{params.page}</h2>
      <h2>{params.size}</h2>
      <h2>{params.other}</h2>
      <h2>{isFlag + ""}</h2>
    </div>
  );
};

export default TestTimeLine;
