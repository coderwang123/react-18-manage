import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import type { IApplyInfo } from "./type";
import StyledApplyInfo from "./style";

import { type IPageDetail, PageDetail, PageForm } from "@/components/page-cpns";
import BScroll from "@/components/b-scroll/b-scroll";

import { getPageFormConfig } from "@/views/order-detail/config/page-form-config/page-form.config";
import { moduleOrderConfig } from "@/views/order-detail/config/page-detail-config/module-order.config";
import { moduleBasicConfig } from "@/views/order-detail/config/page-detail-config/module-basic.config";
import { moduleWorkConfig } from "@/views/order-detail/config/page-detail-config/module-work.config";
import { moduleCarConfig } from "@/views/order-detail/config/page-detail-config/module-car.config";
import { moduleContactPersonConfig } from "@/views/order-detail/config/page-detail-config/module-contact-person";
import { moduleRelatedPersonConfig } from "@/views/order-detail/config/page-detail-config/module-related-person.config";
import { modulePublicAccountConfig } from "@/views/order-detail/config/page-detail-config/module-public-account.config";
import { moduleGPSGuarantyConfig } from "@/views/order-detail/config/page-detail-config/module-gps-guaranty.config";

import { Msg } from "@/utils/ant-methods";

import useLoginStore from "@/store/login";
import ApiAudit from "@/apis/audit";

const ApplyInfo: React.FC<IApplyInfo> = (props) => {
  const navigate = useNavigate();
  const userInfo = useLoginStore(useShallow((state) => state.userInfo));

  const pageDetailConfig: IPageDetail = useMemo(() => {
    return {
      configModule: [
        moduleOrderConfig,
        moduleBasicConfig,
        moduleWorkConfig,
        moduleCarConfig,
        moduleContactPersonConfig,
        moduleRelatedPersonConfig,
        modulePublicAccountConfig,
        moduleGPSGuarantyConfig
      ]
    };
  }, []);

  const pageFormConfig = useMemo(() => {
    return getPageFormConfig(props.taskType);
  }, [props.taskType]);

  const handlePageFormSure = useCallback(async (params: any) => {
    const { status, reason } = params;
    switch (status) {
      case "1": // 通过
        await ApiAudit.agree({ orderId: props.orderId, reason });
        Msg.success("审批已成功通过~");
        break;
      case "0": // 拒绝
        if (!userInfo?.employeeName) return Msg.error("请先登录~");
        await ApiAudit.reject({
          orderId: props.orderId,
          reason,
          creatorId: userInfo?.id,
          creator: userInfo?.employeeName
        });
        Msg.success("审批已成功拒绝~");
        break;
    }
    navigate(-1);
  }, []);

  const handlePageFormCancel = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <StyledApplyInfo>
      <BScroll style={{ height: props?.isAudit ? "calc(100% - 202px)" : "100%" }}>
        <PageDetail {...pageDetailConfig} detailInfo={props.detailInfo} />
      </BScroll>

      {props.isAudit && (
        <div className={"page-form-wrap"}>
          <PageForm
            {...pageFormConfig}
            title={""}
            handlePageFormSure={handlePageFormSure}
            handlePageFormCancel={handlePageFormCancel}
          />
        </div>
      )}
    </StyledApplyInfo>
  );
};

export default memo(ApplyInfo);
