import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { modal, Msg } from "@/utils/ant-methods";

import BScroll from "@/components/b-scroll/b-scroll";

import AddOrEdit from "./add-or-edit";
import { modalFormWebConfig, moreModalFormWebConfig } from "./config/modal-form-web.config";
import { modalFormH5Config, moreModalFormH5Config } from "./config/modal-form-h5.config";

import { ATabs } from "@/components/ant-data-show-cpns";

import { PageHandle, PageTable, SuperPage } from "@/components/page-cpns";
import { pageConfigHandle } from "./config/page-handle.config";
import { pageTableWebConfig } from "./config/page-table-web.config";
import { pageTableH5Config } from "./config/page-table-h5.config";

import { getParams, dynamicCont } from "./utils/index";

import ApiMenu from "@/apis/system/menu";

import useCommStore from "@/store/comm/comm";

const Menu: React.FC = () => {
  const [isShowAddOrEdit, setIsShowAddOrEdit] = useState(false);
  const title = useRef<string>("");

  const initFormValue = useRef<any>({
    menuType: 0, // 类型 1目录 2菜单 3按钮

    hidden: 1, // 是否显示 1显示 0隐藏
    menuSort: "", // 排序
    menuSource: "1", // 菜单来源 1 web 2app
    path: "",
    parentId: 0, // 上级 （目录、菜单、按钮）
    menuName: "", // 名称（目录、菜单、按钮）
    menuPath: "", // 路由地址（菜单）
    componentPath: "", // 组件路径（菜单）
    menuPermission: "", // 按钮权限（按钮）
    icon: "" // 图标 (目录、菜单)
  });

  const [currentSource, setCurrentSource] = useState<string>(initFormValue?.current?.menuSource);

  console.log("渲染了 menu , initFormValue", initFormValue, currentSource);

  const [newModalFormConfig, setNewModalFormConfig] = useState(modalFormWebConfig);

  const commStore = useCommStore(
    useShallow((state) => {
      return {
        treeMenuWeb: state.treeMenuWeb,
        treeMenuH5: state.treeMenuH5,
        apiTreeMenuBySource: state.apiTreeMenuBySource
      };
    })
  );

  useEffect(() => {
    commStore.apiTreeMenuBySource();
  }, []);

  useEffect(() => {
    if (currentSource == "1") {
      const { configList = [], ...rest } = modalFormWebConfig;
      const newConfigList = configList?.map((item) => {
        if (item.prop === "parentId") {
          console.log("item ============>", item);
          item!.configATreeSelect!.treeData = [
            { menuName: "主目录", id: 0, child: [...commStore.treeMenuWeb] }
          ];
          return item;
        } else {
          return item;
        }
      });

      setNewModalFormConfig({
        configList: newConfigList,
        ...rest
      });
    }
    if (currentSource == "2") {
      const { configList = [], ...rest } = modalFormH5Config;
      const newConfigList = configList?.map((item) => {
        if (item.prop === "parentId") {
          console.log("item ============>", item);
          item!.configATreeSelect!.treeData = [
            { menuName: "主目录", id: 0, child: [...commStore.treeMenuH5] }
          ];
          return item;
        } else {
          return item;
        }
      });

      setNewModalFormConfig({
        configList: newConfigList,
        ...rest
      });
    }
  }, [commStore.treeMenuWeb, currentSource]);

  const handleTabChange = useCallback((key: string) => {
    initFormValue.current.menuSource = key;
    setCurrentSource(key);
  }, []);

  const btnCode = useRef();
  const handleCustomBtn = useCallback((params: any) => {
    console.log("handleCustomBtn params ============================> ", params);
    const { code, row } = params;
    btnCode.current = code;
    getParams("reset", initFormValue.current);

    switch (code) {
      case "add":
        if (initFormValue.current.menuSource == 2) {
          initFormValue.current.menuType = 0;
        }
        if (initFormValue.current.menuSource == 2) {
          initFormValue.current.menuType = 1;
        }
        console.log("add initFormValue.current", initFormValue.current);
        title.current = "新增菜单";
        setIsShowAddOrEdit(true);
        break;

      case "addChild":
        initFormValue.current.parentId = row.id;
        if (row.menuType == 0) {
          initFormValue.current.menuType = 1;
        }
        if (row.menuType == 1) {
          initFormValue.current.menuType = 2;
        }
        console.log("addChild initFormValue.current", initFormValue.current);

        title.current = "新增子菜单";
        setIsShowAddOrEdit(true);
        break;

      case "edit":
        Object.assign(initFormValue.current, row);
        title.current = "编辑菜单";
        setIsShowAddOrEdit(true);
        break;

      case "delete":
        if (row.child && row.child.length > 0) {
          return Msg.error("请先删除子集");
        }

        modal({
          content: `是否删除 id：${row.id}， 名称：${row.menuName}?`,

          handleModalSure: async () => {
            await ApiMenu.remove({ menuId: row.id });
            Msg.success("删除成功");
            commStore.apiTreeMenuBySource();
          },

          handleModalCancel: () => {
            Msg.error("当前操作已取消");
          }
        });
        break;
    }
  }, []);

  const handleModalFormSure = useCallback(async (formData?: any) => {
    if (btnCode.current == "add" || btnCode.current == "addChild") {
      const params = getParams("add", initFormValue.current, formData);
      console.log("新增 ----》 准备提交 ===》", params);
      await ApiMenu.add(params);
      Msg.success(`${dynamicCont(params?.menuType ?? -1)}新增成功`);
    }

    if (btnCode.current == "edit") {
      const params = getParams("edit", initFormValue.current, formData);
      console.log("修改 ----》 准备提交 ===》", params);
      await ApiMenu.edit(params);
      Msg.success(`${dynamicCont(params?.menuType ?? -1)}修改成功`);
    }

    setIsShowAddOrEdit(false);
    commStore.apiTreeMenuBySource();
  }, []);

  const handleModalFormCancel = useCallback((params?: any) => {
    setIsShowAddOrEdit(false);
  }, []);

  return (
    <>
      <ATabs
        destroyInactiveTabPane={true}
        defaultActiveKey={currentSource}
        handleTabChange={handleTabChange}
        items={[
          {
            key: "1",
            label: "web"
          },
          {
            key: "2",
            label: "h5"
          }
        ]}
        tabBarExtraContent={{
          right: <PageHandle {...pageConfigHandle} handleCustomBtn={handleCustomBtn} isShowPadding={false} />
        }}
      />

      <div className={"app-container"} style={{ height: "calc(100% - 65px)" }}>
        {currentSource == "1" ? (
          <SuperPage
            otherHeight={[32]}
            configTable={{
              ...pageTableWebConfig,
              data: commStore.treeMenuWeb,
              isShowPagination: false
            }}
            handleCustomBtn={handleCustomBtn}
          />
        ) : (
          <SuperPage
            configTable={{
              ...pageTableH5Config,
              data: commStore.treeMenuH5,
              isShowPagination: false
            }}
            handleCustomBtn={handleCustomBtn}
          />
        )}
      </div>
      {/*<BScroll style={{ height: "calc(100% - 65px)" }}>*/}
      {/*  <div className={"app-container"}>*/}
      {/*    {currentSource == "1" ? (*/}
      {/*      <PageTable*/}
      {/*        {...pageTableWebConfig}*/}
      {/*        data={commStore.treeMenuWeb}*/}
      {/*        isShowPagination={false}*/}
      {/*        handleCustomBtn={handleCustomBtn}*/}
      {/*      />*/}
      {/*    ) : (*/}
      {/*      <PageTable*/}
      {/*        {...pageTableH5Config}*/}
      {/*        data={commStore.treeMenuH5}*/}
      {/*        isShowPagination={false}*/}
      {/*        handleCustomBtn={handleCustomBtn}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*</BScroll>*/}

      {isShowAddOrEdit && (
        <AddOrEdit
          {...newModalFormConfig}
          title={title.current}
          moreConfigList={
            currentSource == "1"
              ? moreModalFormWebConfig.moreConfigList
              : moreModalFormH5Config.moreConfigList
          }
          initialValues={initFormValue.current}
          handleModalFormSure={handleModalFormSure}
          handleModalFormCancel={handleModalFormCancel}
        />
      )}
    </>
  );
};

export default memo(Menu);
