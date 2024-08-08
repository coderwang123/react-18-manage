import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import { useTitle } from "@/hooks";

import { PageForm } from "@/components/page-cpns";
import { pageFormConfig } from "./config/page-form.config";

import useCommStore from "@/store/comm/comm";
import ApiUser from "@/apis/system/user";
import { Msg } from "@/utils/ant-methods";
import useSetState from "@/hooks/use-set-state";
import { HandleTree } from "@/utils/comm";

const AddOrEdit: React.FC = () => {
  const [title] = useTitle("员工");

  const navigate = useNavigate();
  const location = useLocation();
  const { code, row = {} } = location?.state;

  // 初始化 --- options store 数据
  const commStore = useCommStore(
    useShallow((state) => {
      return {
        treeOrg: state.treeOrg,
        listRole: state.listRole,
        apiTreeOrg: state.apiTreeOrg,
        apiListRole: state.apiListRole
      };
    })
  );

  // 初始化 --- options
  useEffect(() => {
    commStore.apiTreeOrg();
    commStore.apiListRole();
  }, []);

  // 初始化 --- 详情 数据
  const [initFormValue, setInitFormValue] = useSetState<any>({});

  // 初始化 --- 详情
  useEffect(() => {
    switch (code) {
      case "add":
        setInitFormValue({});
        break;

      case "edit":
        initDetail();
        break;
    }
  }, [commStore.treeOrg]);

  // 初始化 --- 详情
  async function initDetail() {
    const res = await ApiUser.detail({ employeeId: row.id });
    const obj = { ...row, ...res?.data };
    obj.organizationId = row.orgId;

    const curtOrgInfo = HandleTree.getNodeInfoByValue(commStore.treeOrg, "id", "childList", row?.orgId);
    if (curtOrgInfo.status == 0) {
      obj.oldOrgName = obj.orgName;
      obj.organizationId = undefined;
    }

    setInitFormValue(obj);
  }

  // 初始化 --- 表单
  const newPageFormConfig = useMemo(() => {
    const { configList = [], ...rest } = pageFormConfig;

    const newConfigList = configList?.map((item) => {
      if (item.prop == "employeeName") {
        item.configAInput!.disabled = code == "edit";
      }

      if (item.prop == "phone") {
        item.configAInputNumber!.disabled = code == "edit";
      }

      if (item.prop === "organizationId") {
        item!.configATreeSelect!.treeData = HandleTree.delNodeInfoByValue(
          commStore.treeOrg,
          "status",
          "childList",
          0
        );
        return item;
      }

      if (item.prop === "roleIds") {
        item!.configASelect!.options = commStore.listRole;
        return item;
      }

      return item;
    });

    if (code == "edit") {
      const curtOrgInfo = HandleTree.getNodeInfoByValue(commStore.treeOrg, "id", "childList", row?.orgId);
      console.log("curtOrgInfo ===>", curtOrgInfo);
      if (curtOrgInfo.status == 0) {
        const n = newConfigList?.findIndex((item) => item.prop === "organizationId");
        newConfigList?.splice(n, 0, {
          type: "a-input",
          label: "原组织(已禁用)",
          prop: "oldOrgName",
          required: false,
          configAInput: {
            disabled: true
          }
        });
      }
    }
    return {
      configList: newConfigList,
      ...rest
    };
  }, [commStore.treeOrg, commStore.listRole, code, row?.orgId]);

  // 确认
  const handlePageFormSure = useCallback(async (params: any) => {
    switch (code) {
      case "add":
        await ApiUser.add(params);
        Msg.success("新增成功");
        break;

      case "edit":
        params.employeeId = row?.id;
        await ApiUser.edit(params);
        Msg.success("修改成功");
        break;
    }
    navigate("/system/user", { replace: true });
  }, []);

  // 取消
  function handlePageFormCancel() {
    navigate("/system/user", { replace: true });
  }

  return (
    <PageForm
      {...newPageFormConfig}
      initialValues={initFormValue}
      title={title}
      handlePageFormSure={handlePageFormSure}
      handlePageFormCancel={handlePageFormCancel}
    />
  );
};

export default memo(AddOrEdit);
