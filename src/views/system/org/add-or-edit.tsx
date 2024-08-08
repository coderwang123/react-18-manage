import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import { useTitle } from "@/hooks";
import { HandleTree } from "@/utils/comm";
import { Msg } from "@/utils/ant-methods";

import { PageForm } from "@/components/page-cpns";
import { pageFormConfig } from "./config/page-form.config";

import useCommStore from "@/store/comm/comm";
import ApiOrg from "@/apis/system/org";
import ApiComm from "@/apis/comm";

const AddOrEdit: React.FC = () => {
  const [title] = useTitle("组织");

  const navigate = useNavigate();
  const location = useLocation();
  const { code, row = {} } = location?.state;

  const commStore = useCommStore(
    useShallow((state) => {
      return {
        treeOrg: state.treeOrg,
        apiTreeOrg: state.apiTreeOrg
      };
    })
  );

  // 初始化 --- options 数据
  const [optionsInfo, setOptionsInfo] = useState<any>({
    area: []
  });

  // 初始化 --- options
  async function initOptions() {
    commStore.apiTreeOrg();
    const resP = await ApiComm.listArea({ level: 1 });
    setOptionsInfo((prevState: any) => ({
      ...prevState,
      area: resP?.data.map((item: any) => {
        item.isLeaf = false;
        return item;
      })
    }));
  }

  // 初始化 --- options
  useEffect(() => {
    initOptions();
  }, []);

  // 初始化 --- 详情 数据
  const [initFormValue, setInitFormValue] = useState<any>({});
  const parentId = useRef<string | number>(0);
  // 初始化 --- 详情
  useEffect(() => {
    switch (code) {
      case "add":
        parentId.current = 0;
        setInitFormValue({ parentName: "根组织" });
        break;
      case "addChild":
        parentId.current = row?.id;
        setInitFormValue({ parentName: row.orgName });
        break;
      case "edit":
        initDetail();
        break;
    }
  }, [code]);

  // 初始化 --- 详情
  async function initDetail() {
    const res = await ApiOrg.detail({ id: row.id });
    const obj = res?.data ?? {};
    obj.orgName = row.orgName;

    if (obj.province && obj.city) {
      obj.area = [obj.province, obj.city];

      const resCity = await ApiComm.listArea({ areaCode: obj.province, level: 2 });
      setOptionsInfo((prevState: any) => ({
        ...prevState,
        area: prevState?.area?.map((item: any) => {
          item.isLeaf = false;
          if (item?.areaCode == obj?.province) {
            item.children = resCity?.data ?? [];
            return item;
          }
          return item;
        })
      }));
    }
    console.log("obj ====>", obj);

    parentId.current = obj.parentId;
    obj.parentName = parentId.current == 0 ? "根组织" : obj.parentOrgName;
    setInitFormValue(obj);
  }

  // 初始化 --- 表单
  const newPageFormConfig = useMemo(() => {
    const { configList = [], ...rest } = pageFormConfig;
    const newConfigList = configList?.map((item) => {
      if (item.prop === "area") {
        console.log("----optionsInfo?.area", optionsInfo?.area);
        item!.configACascader!.options = optionsInfo?.area ?? [];
        return item;
      } else {
        return item;
      }
    });
    return {
      configList: newConfigList,
      ...rest
    };
  }, [commStore.treeOrg, optionsInfo?.area]);

  // 确认
  const handlePageFormSure = useCallback(async (params: any) => {
    try {
      console.log("父亲id ===>", parentId.current);
      const { area, ...rest } = params;
      rest.orgLevel =
        HandleTree.getNodeInfoByValue(
          [{ orgName: "根组织", id: 0, orgLevel: 0, childList: [...(commStore.treeOrg ?? [])] }],
          "id",
          "childList",
          parentId.current
        )?.orgLevel + 1;

      if (rest.orgLevel > 3) {
        return Msg.error("组织目前最多只能三级");
      }

      rest.province = area[0];
      rest.city = area[1];
      rest.parentId = parentId.current;
      await sendApi(code, rest);
    } catch {}
  }, []);

  // 取消
  function handlePageFormCancel() {
    navigate("/system/org", { replace: true });
  }

  // 确认 发送请求
  async function sendApi(code: string, params: any) {
    switch (code) {
      case "add":
      case "addChild":
        await ApiOrg.add(params);
        Msg.success("新增组织成功~");
        break;

      case "edit":
        params.id = row?.id;
        await ApiOrg.edit(params);
        Msg.success("修改组织成功~");
    }
    navigate("/system/org", { replace: true });
  }

  return (
    <PageForm
      {...newPageFormConfig}
      title={title}
      initialValues={initFormValue}
      handlePageFormSure={handlePageFormSure}
      handlePageFormCancel={handlePageFormCancel}
    />
  );
};

export default memo(AddOrEdit);
