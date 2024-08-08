import React, { Fragment, memo, useEffect, useRef, useState } from "react";
import { Col, Row, Space } from "antd";
import { useShallow } from "zustand/react/shallow";

import { RightPerWrap } from "./style";
import type { IRightPer } from "./type";

import BScroll from "@/components/b-scroll/b-scroll";
import CommTitle from "@/views/system/role/c-cpns/comm-title/comm-title";

import { ATree } from "@/components/ant-data-show-cpns";

import { BtnLink, BtnPrimary } from "@/components/ant-comm-cpns";
import type { TBtnParams } from "@/components/page-cpns";

import { ARadio } from "@/components/ant-form-cpns";

import useCommStore from "@/store/comm/comm";

const leftCol = {
  xs: { span: 12 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 12 },
  xl: { span: 10 },
  xxl: { span: 7 }
};

const rightCol = {
  xs: { span: 12 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 12 },
  xl: { span: 14 },
  xxl: { span: 17 }
};

const RightPer: React.FC<IRightPer> = (props) => {
  console.log("right -----> props ", props);
  const { isDisabled } = props;

  const commStore = useCommStore(
    useShallow((state) => {
      return {
        treeMenuWeb: state.treeMenuWeb,
        treeMenuH5: state.treeMenuH5
      };
    })
  );

  const curtPerInfo = useRef<any>();

  const [dataPermission, setDataPermission] = useState<number | string>();

  useEffect(() => {
    curtPerInfo.current = props.curtPerInfo;
    setDataPermission(props.curtPerInfo.dataPermission);
  }, [props.curtPerInfo]);

  function handleCustomBtn(params?: TBtnParams) {
    const { code } = params ?? {};
    switch (code) {
      case "sure":
        props?.handlePerSure?.(curtPerInfo.current);
        break;
      case "cancel":
        props?.handlePerCancel?.();
        break;
    }
  }

  function handlePerChange(
    type: "idsWeb" | "idsH5" | "dataPermission",
    ids: (string | number)[] | string | number
  ) {
    curtPerInfo.current[type] = ids;
    if (type == "dataPermission") {
      setDataPermission(ids as string | number);
    }
  }
  return (
    <RightPerWrap>
      <header>{props?.slotHeader?.()}</header>

      <Row>
        <Col {...leftCol} className={"left"}>
          <CommTitle name={"web"} />
          <div className={"per-cont"}>
            <BScroll>
              {commStore?.treeMenuWeb?.length > 0 && (
                <ATree
                  treeData={commStore?.treeMenuWeb}
                  fieldNames={{
                    title: "menuName",
                    key: "id",
                    children: "child"
                  }}
                  defaultCheckedKeys={props.curtPerInfo.idsWeb}
                  disabled={isDisabled}
                  handleCheck={(ids) => handlePerChange("idsWeb", ids)}
                />
              )}
            </BScroll>
          </div>
        </Col>

        <Col {...rightCol} className={"right"}>
          <div className={"right-module"}>
            <CommTitle name={"h5"} />
            <div className={"per-cont"}>
              <BScroll>
                {commStore?.treeMenuH5.length > 0 && (
                  <ATree
                    treeData={commStore?.treeMenuH5}
                    fieldNames={{
                      title: "menuName",
                      key: "id",
                      children: "child"
                    }}
                    defaultCheckedKeys={props.curtPerInfo.idsH5}
                    disabled={isDisabled}
                    handleCheck={(ids) => handlePerChange("idsH5", ids)}
                  />
                )}
              </BScroll>
            </div>
          </div>
          <div className={"right-module"}>
            <CommTitle name={"数据权限"} />
            <div className={"per-cont"}>
              <BScroll>
                <ARadio
                  value={dataPermission}
                  defaultValue={props.curtPerInfo.dataPermission}
                  onChange={(e: any) => handlePerChange("dataPermission", e.target.value)}
                  disabled={isDisabled}
                  options={[
                    {
                      label: "个人数据权限",
                      value: 10
                    },
                    {
                      label: "组织内数据权限",
                      value: 20
                    },
                    {
                      label: "所有数据权限",
                      value: 30
                    }
                  ]}
                />
              </BScroll>
            </div>
          </div>
        </Col>
      </Row>

      {!isDisabled && (
        <div className={"btn-wrap"}>
          <Space>
            <BtnLink name={"取消"} code={"cancel"} handleCustomBtn={handleCustomBtn} />
            <BtnPrimary name={"提交"} code={"sure"} handleCustomBtn={handleCustomBtn} />
          </Space>
        </div>
      )}
    </RightPerWrap>
  );
};

export default memo(RightPer);
