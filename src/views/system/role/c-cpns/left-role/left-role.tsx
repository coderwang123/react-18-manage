import React, { forwardRef, memo, useImperativeHandle, useState } from "react";
import { Tooltip } from "antd";
import classNames from "classnames";
import { useShallow } from "zustand/react/shallow";

import { LeftRoleWrap } from "./style";
import type { ILeftRole } from "./type";

import BScroll from "@/components/b-scroll/b-scroll";

import useCommStore from "@/store/comm/comm";
import { withPerBtn } from "@/hoc";
import { BtnLink } from "@/components/ant-comm-cpns";

const PerButton = withPerBtn(BtnLink);
const LeftRole: React.MemoExoticComponent<
  React.ForwardRefExoticComponent<ILeftRole & React.RefAttributes<any>>
> = memo(
  forwardRef((props, ref) => {
    const listRole = useCommStore(useShallow((state) => state.listRole));
    const [currentIndex, setCurrentIndex] = useState<number>();
    function handleRoleClick(index: number) {
      setCurrentIndex(index);
      props.handleRoleClick(listRole?.[index]);
    }

    function handCustomBtn(index: number, code: string, row?: any) {
      handleRoleClick(index);
      props.handleCustomBtn({
        code,
        row
      });
    }

    function handleResetRoleClick() {
      setCurrentIndex(-1);
    }
    useImperativeHandle(ref, () => {
      return {
        handleResetRoleClick: handleResetRoleClick
      };
    });
    return (
      <LeftRoleWrap>
        <h2>角色列表</h2>

        <ul>
          <BScroll>
            {listRole?.map((item: any, index) => (
              <li
                className={currentIndex === index ? "active" : ""}
                key={index}
                onClick={() => handleRoleClick(index)}
              >
                <div className={"name-wrap"}>
                  <Tooltip title={item.roleName} color={"#f50"} key={index}>
                    <span className={classNames(["name", "line-1"])}>{item.roleName}</span>
                  </Tooltip>
                  <span className={"count"}>{item?.count ?? 0}人</span>
                </div>
                <div className={"icon-wrap"}>
                  <PerButton
                    className={"edit"}
                    icon={"FormOutlined"}
                    code={"edit"}
                    permission={"web:role:edit"}
                    handleCustomBtn={({ code }) => handCustomBtn(index, code, item)}
                  />

                  {item?.count == 0 && (
                    <PerButton
                      className={"remove"}
                      icon={"DeleteOutlined"}
                      code={"remove"}
                      permission={"web:role:del"}
                      handleCustomBtn={({ code }) => handCustomBtn(index, code, item)}
                    />
                  )}
                </div>
              </li>
            ))}
          </BScroll>
        </ul>
      </LeftRoleWrap>
    );
  })
);

export default LeftRole;
