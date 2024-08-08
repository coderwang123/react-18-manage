import React, { memo, useMemo } from "react";
import type { ICOperationLog } from "./type";
import StyledCOperationLog from "./style";

import { ATimeLine, ITimeLineItem } from "@/components/ant-data-show-cpns";
import BScroll from "@/components/b-scroll/b-scroll";
import { formatTime } from "@/utils/comm";

const COperationLog: React.FC<ICOperationLog> = (props) => {
  const configList = useMemo(() => {
    const infoByTime: any = {};
    props.logList.forEach((item: any, index: number) => {
      const yyyy_mm_dd =
        index == 0
          ? formatTime(new Date(item.createdTime), "YYYY-MM-DD")
          : formatTime(props?.logList?.[index - 1]?.createdTime, "YYYY-MM-DD");

      item.label =
        index == 0
          ? formatTime(item?.createdTime, "HH:mm:ss")
          : formatTime(props?.logList?.[index - 1]?.createdTime, "HH:mm:ss");

      item.daoJianTime =
        index == 0 ? formatTime(item?.createdTime) : formatTime(props?.logList?.[index - 1]?.createdTime);

      item.isShowWanCheng = index != 0; // 取 formatTime(item?.modifiedTime)
      item.wanChengTime = formatTime(item?.modifiedTime);

      item.isShowRenLing = !!(item?.claimTime && item.status != null); // 取 formatTime(item?.claimTime)
      item.renLingTime = formatTime(item?.claimTime);

      if (!infoByTime.hasOwnProperty(yyyy_mm_dd)) {
        infoByTime[yyyy_mm_dd] = [];
        item.labelH2 = yyyy_mm_dd;
        infoByTime[yyyy_mm_dd].push(item);
      } else {
        item.labelH2 = "";
        infoByTime[yyyy_mm_dd].push(item);
      }
    });
    console.log("listByTime ===>", infoByTime);

    const realList: ITimeLineItem[] = [];
    for (const time in infoByTime) {
      console.log("info", time);
      infoByTime[time].forEach((item: any, index: number) => {
        realList.push({
          label: (
            <div>
              <p className={"label-h2"}>{item.labelH2}</p>
              <span className={"label-time"}>{item.label}</span>
            </div>
          ),
          dot: <img className={"cont-dot"} src={require("@/assets/images/time-line-dot-log.png")} alt={""} />,
          children: (
            <div>
              <h3 className={"cont-title"}>
                {item?.approvalStep}
                {item.status == 0 ? "通过" : item.status == 1 ? "退回" : ""} （{item.creator}）
              </h3>

              {item?.remarks && (
                <div
                  className={"cont-module"}
                  style={{
                    paddingBottom:
                      item?.daoJianTime || item?.isShowRenLing || item?.isShowWanCheng ? "5px" : ""
                  }}
                >
                  <p>{item?.remarks}</p>
                </div>
              )}

              {item?.daoJianTime && (
                <div
                  className={"cont-module"}
                  style={{
                    paddingBottom: item?.isShowRenLing || item?.isShowWanCheng ? "5px" : ""
                  }}
                >
                  <span> 到件时间：</span>
                  <p>{item?.daoJianTime}</p>
                </div>
              )}

              {item?.isShowRenLing && (
                <div
                  className={"cont-module"}
                  style={{
                    paddingBottom: item?.isShowWanCheng ? "5px" : ""
                  }}
                >
                  <span>认领时间：</span>
                  <p>{item?.renLingTime}</p>
                </div>
              )}

              {item?.isShowWanCheng && (
                <div className={"cont-module"}>
                  <span>完成时间：</span>
                  <p>{item?.wanChengTime}</p>
                </div>
              )}
            </div>
          )
        });
      });
    }
    return realList;
  }, [props.logList]);
  return (
    <StyledCOperationLog>
      <h2>操作日志</h2>
      <div className={"content"}>
        <BScroll>
          <ATimeLine configList={configList} className={"operation-log-time-line"} />
        </BScroll>
      </div>
    </StyledCOperationLog>
  );
};

export default memo(COperationLog);
