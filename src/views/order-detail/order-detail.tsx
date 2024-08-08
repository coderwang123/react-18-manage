import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import StyledApplyDetail from "./style";
import { ATabs } from "@/components/ant-data-show-cpns";

import ApplyInfo from "./apply-info/apply-info";
import ApplyMaterials from "./apply-materials/apply-materials";
import type { TMaterialsFileList } from "./apply-materials/type";

import CTripartiteData from "./comm/c-tripartite-data/c-tripartite-data";
import COperationLog from "./comm/c-operation-log/c-operation-log";

import { getConfigDetailPer300 } from "@/views/audit/comm/config/button-detail.config";
import { fileListConfig, getUrlInfo } from "./config/file-list-config/file-list.config";

import ApiOrder from "@/apis/order";
import ApiAudit from "@/apis/audit";
import ApiThird from "@/apis/third-party";

const ApplyDetail: React.FC = () => {
  const [curtTab, setCurtTab] = useState("1");

  const { state } = useLocation();

  const [detailInfo, setDetailInfo] = useState<any>({});
  const [logList, setLogList] = useState<any[]>([]);

  async function initDetail() {
    try {
      const res = await ApiOrder.detail({ orderId: state?.orderId });
      const { data: detail } = res ?? {};

      const {
        wiredGps,
        wirelessGps,
        commercialInsuranceUrl,
        compulsoryTrafficInsurance,
        drivingLicensePhoto,
        driverLicenseUrl,
        incomeProofUrl,
        registrationCertificateUrl,
        mortgagePicsUrl,
        gpsInstallationPicsUrl,
        evaluationReportUrl,

        marriageCertificateUrl,
        divorceCertificateUrl,
        residenceCertificateUrl,
        mileageUrl,
        vehicleFrontUrl,
        leftFrontVehicleUrl,
        rightRearVehicleUrl,
        engineFrontUrl,
        vinNumberUrl,
        vehicleFrontSeatUrl,
        centralControlViewUrl,
        groupPhotoUrl,
        otherCreditMaterialsUrl
      } = detail ?? {};
      // 解析 有线gps
      if (wiredGps?.length > 0 && wiredGps?.includes("[{")) {
        detail.wiredGps = JSON.parse(wiredGps ?? "") ?? [];
        detail?.wiredGps?.forEach((item: any, index: number) => {
          detail[`wired_gps_number_${index + 1}`] = item?.gpsNumber ?? ""; // 编号
          detail[`wired_gps_branch_${index + 1}`] = item?.gpsBranch ?? ""; // 品牌
          detail[`wired_gps_support_${index + 1}`] = item?.gpsSupport ?? ""; // 安装方
        });
      }

      // 解析 无线 gps
      if (wirelessGps?.length > 0 && wirelessGps?.includes("[{")) {
        console.log("wirelessGps ===>", wirelessGps);
        detail.wirelessGps = JSON.parse(wirelessGps ?? "") ?? [];
        detail?.wirelessGps?.forEach((item: any, index: number) => {
          detail[`wireless_gps_number_${index + 1}`] = item?.gpsNumber ?? ""; // 编号
          detail[`wireless_gps_branch_${index + 1}`] = item?.gpsBranch ?? ""; // 品牌
          detail[`wireless_gps_support_${index + 1}`] = item?.gpsSupport ?? ""; // 安装方
        });
      }

      // 解析 商业险 url
      detail.commercialInsuranceUrl = commercialInsuranceUrl && JSON.parse(commercialInsuranceUrl ?? "");

      // 解析 交强险 url
      detail.compulsoryTrafficInsurance =
        compulsoryTrafficInsurance && JSON.parse(compulsoryTrafficInsurance ?? "");

      // 解析 行驶证 url
      if (drivingLicensePhoto) {
        if (drivingLicensePhoto.includes("[")) {
          detail.drivingLicensePhoto = JSON.parse(drivingLicensePhoto ?? "");
        } else {
          detail.drivingLicensePhoto = drivingLicensePhoto;
        }
      }

      // 解析 驾驶证 url
      detail.driverLicenseUrl = driverLicenseUrl && JSON.parse(driverLicenseUrl ?? "");

      // 解析 收入证明 url
      detail.incomeProofUrl = incomeProofUrl && JSON.parse(incomeProofUrl ?? "");

      // 解析 登记证书（抵押前） url
      detail.registrationCertificateUrl =
        registrationCertificateUrl && JSON.parse(registrationCertificateUrl ?? "");

      // 解析 登记证书（抵押后） url
      detail.mortgagePicsUrl = mortgagePicsUrl && JSON.parse(mortgagePicsUrl ?? "");

      // 解析 GPS安装照 url
      detail.gpsInstallationPicsUrl = gpsInstallationPicsUrl && JSON.parse(gpsInstallationPicsUrl ?? "");

      // 解析 车辆评估报告 url
      detail.evaluationReportUrl = evaluationReportUrl && JSON.parse(evaluationReportUrl ?? "");
      detail.marriageCertificateUrl = marriageCertificateUrl && JSON.parse(marriageCertificateUrl ?? "");
      detail.divorceCertificateUrl = divorceCertificateUrl && JSON.parse(divorceCertificateUrl ?? "");
      detail.residenceCertificateUrl = residenceCertificateUrl && JSON.parse(residenceCertificateUrl ?? "");
      detail.mileageUrl = mileageUrl && JSON.parse(mileageUrl ?? "");
      detail.vehicleFrontUrl = vehicleFrontUrl && JSON.parse(vehicleFrontUrl ?? "");
      detail.leftFrontVehicleUrl = leftFrontVehicleUrl && JSON.parse(leftFrontVehicleUrl ?? "");
      detail.rightRearVehicleUrl = rightRearVehicleUrl && JSON.parse(rightRearVehicleUrl ?? "");
      detail.engineFrontUrl = engineFrontUrl && JSON.parse(engineFrontUrl ?? "");
      detail.vinNumberUrl = vinNumberUrl && JSON.parse(vinNumberUrl ?? "");
      detail.vehicleFrontSeatUrl = vehicleFrontSeatUrl && JSON.parse(vehicleFrontSeatUrl ?? "");
      detail.centralControlViewUrl = centralControlViewUrl && JSON.parse(centralControlViewUrl ?? "");
      detail.groupPhotoUrl = groupPhotoUrl && JSON.parse(groupPhotoUrl ?? "");
      detail.otherCreditMaterialsUrl = otherCreditMaterialsUrl && JSON.parse(otherCreditMaterialsUrl ?? "");

      console.log("real detail", detail);
      setDetailInfo(detail ?? {});
    } catch {}

    try {
      const resLog = await ApiOrder.opLog({ orderId: state?.orderId });
      setLogList(resLog?.data ?? []);
    } catch {}
  }

  useEffect(() => {
    initDetail();
  }, [state?.orderId]);

  const fileList: TMaterialsFileList = useMemo(() => {
    return fileListConfig.map((item: any) => {
      item.urlVals = [];

      item.urlKeys.forEach((key: string) => {
        if (detailInfo?.[key] instanceof Array) {
          detailInfo?.[key].forEach((url: string) => {
            const info = getUrlInfo(url);
            info && item.urlVals?.push(info);
          });
        }

        if (typeof detailInfo?.[key] === "string") {
          const info = getUrlInfo(detailInfo?.[key]);
          info && item.urlVals?.push(info);
        }
      });

      item.curt = item.urlVals.length;

      return item;
    });
  }, [detailInfo]);

  // 车三百 车300车况定价 发起查询
  const handleSendSearch = useCallback(async () => {
    const res = await ApiAudit.buyReport({ orderId: state.orderId });
    if (res.rtnCode == "9999") {
      await getListExternal();
    }
  }, [detailInfo]);

  // 车三百 车300车况定价 报告数据
  const [car300Info, setCar300Info] = useState<{
    che300DealerPrice: any;
    che300QueryTime: any;
    orderNo: string;
    che300Accident: string;
  }>({
    che300DealerPrice: "",
    che300QueryTime: "",
    orderNo: "",
    che300Accident: ""
  });

  // 车三百 车300车况定价 查看报告
  const handleCheckReport = useCallback(async () => {
    const res = await ApiAudit.getReport({ orderId: state.orderId });
    if (res.rtnCode == "9999") {
      await getListExternal();
    }

    if (res?.data?.che300ReportUrl) {
      window.open(res?.data?.che300ReportUrl);
    }
  }, [state?.orderId]);

  // 车三百 车300车况定价 查看报告
  async function getListExternal() {
    const res = await ApiAudit.listExternal({ orderId: state.orderId });
    res.data.che300DealerPrice = res?.data?.che300DealerPrice?.toString();
    setCar300Info((prevState) => {
      return {
        ...prevState,
        ...(res?.data ?? {}),
        che300Accident:
          res.data?.che300AccidentCode == 0
            ? "通过"
            : [1, 2, 3, "1", "2", "3"].includes(res?.data?.che300AccidentCode)
              ? "拒绝"
              : ""
      };
    });
  }

  const handleSendSearchAccident = useCallback(async () => {
    const res = await ApiThird.car300_accident_analysis({ orderId: state.orderId });
    if (res.rtnCode == "9999") {
      await getListExternal();
    }
  }, [state?.orderId]);

  useEffect(() => {
    getListExternal();
  }, []);

  const per300List = useMemo(() => {
    return getConfigDetailPer300(state?.taskType);
  }, [state?.taskType]);
  return (
    <>
      <ATabs
        handleTabChange={(e) => setCurtTab(e)}
        defaultActiveKey={curtTab}
        items={[
          {
            key: "1",
            label: "客户申请信息"
          },
          {
            key: "2",
            label: "申贷材料"
          }
        ]}
      />

      <StyledApplyDetail>
        <div className={"left"}>
          {curtTab == "1" ? (
            <ApplyInfo
              detailInfo={detailInfo}
              orderId={state?.orderId}
              isAudit={state?.isAudit}
              taskType={state?.taskType ?? ""}
            />
          ) : (
            <ApplyMaterials detailInfo={detailInfo} fileList={fileList} />
          )}
        </div>
        <div className={"right"}>
          <CTripartiteData
            orderId={state?.orderId}
            car300Info={car300Info}
            per300List={per300List}
            handleSendSearch={handleSendSearch}
            handleCheckReport={handleCheckReport}
            handleSendSearchAccident={handleSendSearchAccident}
          />
          <COperationLog logList={logList} />
        </div>
      </StyledApplyDetail>
    </>
  );
};

export default memo(ApplyDetail);
