import { IModuleItem } from "@/components/page-cpns";

export const moduleGPSGuarantyConfig: IModuleItem = {
  title: "GPS及抵押信息",
  column: 3,
  configList: [
    {
      type: "normal",
      label: "GPS安装数量",
      prop: "gpsNumber"
    },
    {
      type: "normal",
      label: "有线GPS编号",
      prop: "wired_gps_number_1"
    },
    {
      type: "normal",
      label: "有线GPS品牌",
      prop: "wired_gps_branch_1"
    },
    {
      type: "normal",
      label: "有线GPS安装方",
      prop: "wired_gps_support_1"
    },
    {
      type: "normal",
      label: "无线GPS1编号",
      prop: "wireless_gps_number_1"
    },
    {
      type: "normal",
      label: "无线GPS1品牌",
      prop: "wireless_gps_branch_1"
    },
    {
      type: "normal",
      label: "无线GPS1安装方",
      prop: "wireless_gps_support_1"
    },
    {
      type: "normal",
      label: "无线GPS2编号",
      prop: "wireless_gps_number_2"
    },
    {
      type: "normal",
      label: "无线GPS2品牌",
      prop: "wireless_gps_branch_2"
    },
    {
      type: "normal",
      label: "无线GPS2安装方",
      prop: "wireless_gps_support_2"
    },
    {
      type: "normal",
      label: "抵押开始日期",
      prop: "mortgageStartTime"
    },
    {
      type: "normal",
      label: "抵押截止日期",
      prop: "mortgageEndTime"
    },
    {
      type: "normal",
      label: "车管所",
      prop: "vehicleManageOffice"
    },
    {
      type: "normal",
      label: "车管所编码",
      prop: "vehicleManageOfficeCode"
    }
  ]
};
