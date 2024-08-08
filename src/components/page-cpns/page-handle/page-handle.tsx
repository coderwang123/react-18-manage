import React, { memo, useMemo } from "react";
import { Space } from "antd";

import StyledPageHandle from "./style";
import type { IPageHandle } from "./type";

import { BtnPrimary } from "@/components/ant-comm-cpns";
import withPerBtn from "@/hoc/with-per-btn";
import useLoginStore from "@/store/login";
import { useShallow } from "zustand/react/shallow";

const PerButton = withPerBtn(BtnPrimary);

export const PageHandle: React.FC<IPageHandle> = memo((props) => {
  const { configList = [], isShowPadding = true } = props;
  // console.log("pageHandle", props);
  const permissionButton = useLoginStore(useShallow((state) => state.permissionButton));
  const paddingBottom = useMemo(() => {
    const noPerBtnList = configList.filter((btn) => !btn.permission);
    const perBtnList = configList.filter((btn) => btn.permission != "");
    let flag = true;
    for (const conf of perBtnList) {
      flag = permissionButton?.some((per) => per == conf.permission);
    }
    return flag || noPerBtnList.length > 0 ? "20px" : "0px";
  }, [configList, permissionButton]);
  return (
    <StyledPageHandle $paddingBottom={isShowPadding ? paddingBottom : "0px"} className={"page-handle"}>
      {props.title && (
        <div className={"title-wrap"}>
          <span className={"shu"}></span>
          <p>{props.title ?? ""}</p>
        </div>
      )}

      {configList?.map((item, index) => {
        // console.log("------------------item ", item);
        return (
          <Space wrap={false} key={index}>
            {item.permission ? (
              <PerButton {...item} handleCustomBtn={props.handleCustomBtn} />
            ) : (
              <BtnPrimary {...item} handleCustomBtn={props.handleCustomBtn} />
            )}
          </Space>
        );
      })}
    </StyledPageHandle>
  );
});

export default PageHandle;
