import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@ant-design/icons";

import { useModal } from "@/hooks";
import { modal, Msg } from "@/utils/ant-methods";

import BScroll from "@/components/b-scroll/b-scroll";

import { PageSearch, PageTable, ModalForm } from "@/components/page-cpns";
import { pageSearchConfig } from "./config/page-search.config";
import { pageTableConfig } from "./config/page-table.config";
import { modalFormConfig } from "./config/modal-form.config";

import { fakeTestTable } from "@/fake-data";

const TestPage: React.FC = () => {
  const navigate = useNavigate();
  const [isShowModelForm, setIsShowModelForm] = useState(false);

  const [contextModal, handleModal] = useModal();
  function handleModalFormSure(params: any) {
    console.log("handleOk ===> ", params);
    setIsShowModelForm(false);
  }

  function handleModalFormCancel() {
    setIsShowModelForm(false);
  }

  const handleCustomBtn = useCallback((params: any) => {
    console.log("handleCustomBtn params", params);
    const { code, row } = params;
    console.log("handleCustomBtn rowData ===?>", row);

    switch (code) {
      case "add:modal":
        console.log("add:modal =========");
        setIsShowModelForm(true);
        break;

      case "add:page":
        navigate("/test/test-page/add");
        break;

      case "edit:modal":
        console.log("edit =========");
        setIsShowModelForm(true);
        break;

      case "edit:page":
        navigate("/test/test-page/edit");
        setIsShowModelForm(true);
        break;

      case "detail":
        navigate("/test/test-page/detail");
        // setIsShowModelForm(true);
        break;
      case "detail:module":
        navigate("/test/test-page/detail-module");
        // setIsShowModelForm(true);
        break;

      case "remove":
        modal({
          content: `是否删除${row.id}?`,
          handleModalSure: () => {
            console.log("钱钱钱");
            Msg.success("我是 success");
          },

          handleModalCancel: () => {
            console.log("handleCancel");

            Msg.success("我是 error");
          }
        });
        break;
    }
  }, []);

  const backData = {
    a1: "1",
    a2: undefined,
    bbb: undefined,
    c1: undefined,
    c2: undefined,
    c3: undefined,
    c4: undefined,
    d1: undefined,
    e1: undefined,
    f1: "1",
    g1: undefined,
    h1: undefined,
    i1: 26
  };

  return (
    <BScroll>
      <div className={"app-container"}>
        <h2>
          测试 hooks写法 modal
          {contextModal}
        </h2>

        <h2>
          静态资源
          <img className={"back"} src={require("@/assets/images/back.png")} alt="" />
          <img className={"back"} src={require("../../../assets/images/back.png")} alt="" />
        </h2>

        <h2>封装基础--响应式搜索布局</h2>
        <PageSearch {...pageSearchConfig} />

        <h2>封装基础--表格 + handle 按钮</h2>
        <PageTable {...pageTableConfig} data={fakeTestTable} handleCustomBtn={handleCustomBtn} />

        <h2>
          {isShowModelForm && (
            <ModalForm
              {...modalFormConfig}
              initialValues={backData}
              handleModalFormSure={handleModalFormSure}
              handleModalFormCancel={handleModalFormCancel}
            />
          )}
        </h2>
      </div>
    </BScroll>
  );
};

export default memo(TestPage);
