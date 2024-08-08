import React, { useState } from "react";
import useSetState from "@/hooks/use-set-state";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { localCache } from "@/utils/comm";
import { ALL_Menu, FM_TOKEN, USER_INFO } from "@/global/constants";

const TestHooks = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useSetState({ name: "老五", age: 20 });
  const changeAge = () => setUserInfo((prev: any) => ({ age: (prev.age += 1) }));

  const [userInfo2, setUserInfo2] = useState({ name: "老刘", age: 200 });
  const changeAge2 = () => setUserInfo2((prev: any) => ({ ...prev, age: (prev.age += 1) }));
  return (
    <div>
      <h2>{userInfo.age}</h2>
      <Button onClick={changeAge}></Button>

      <h2>{userInfo2.age}</h2>
      <Button onClick={changeAge2}></Button>

      <Button
        onClick={() => {
          localCache.removeCache(FM_TOKEN);
          localCache.removeCache(USER_INFO);
          localCache.removeCache(ALL_Menu);

          window.location.pathname = "/login";
        }}
      >
        去登录啊
      </Button>
      <Button
        onClick={() => {
          localCache.removeCache(FM_TOKEN);
          localCache.removeCache(USER_INFO);
          localCache.removeCache(ALL_Menu);
          navigate("/login");
        }}
      >
        去登录啊222
      </Button>
    </div>
  );
};

export default TestHooks;
