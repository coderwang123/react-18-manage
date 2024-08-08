import { IModuleItem } from "@/components/page-cpns";
import { dict_status_comm } from "@/dicts/dicts";

export const modulePublicAccountConfig: IModuleItem = {
  title: "公户信息（30万以上必填）",
  column: 3,
  configList: [
    {
      type: "normal",
      label: "公户名称",
      prop: "publicAccountName"
    },
    {
      type: "normal",
      label: "公户联系地",
      prop: "publicLocation"
    },
    {
      type: "normal",
      label: "公户联系详细地址",
      prop: "publicDetailedAddress"
    },
    {
      type: "normal",
      label: "公户联系电话",
      prop: "publicPhoneNumber"
    },
    {
      type: "normal",
      label: "统一社会信用代码",
      prop: "unifiedSocialCreditCode"
    },
    {
      type: "normal",
      label: "法定代表人",
      prop: "legalRepresentative"
    },
    {
      type: "normal",
      label: "注册资本(万元）",
      prop: "registeredCapital"
    },
    {
      type: "normal",
      label: "成立日期",
      prop: "dateOfIncorporation"
    },
    {
      type: "normal",
      label: "营业截止日期",
      prop: "businessDeadline"
    },
    {
      type: "normal",
      label: "经营范围",
      prop: "businessScope"
    },
    {
      type: "normal",
      label: "法人代表证件号",
      prop: "legalRepresentativeIdNumber"
    },
    {
      type: "normal",
      label: "所属行业",
      prop: "publicIndustry"
    },
    {
      type: "normal",
      label: "实收资本(元)",
      prop: "paidUpCapital"
    },
    {
      type: "normal",
      label: "总资产(元)",
      prop: "publicTotalAssets"
    },
    {
      type: "normal",
      label: "年收入(元)",
      prop: "publicAnnualIncome"
    },
    {
      type: "normal",
      label: "员工人数",
      prop: "employeeNumber"
    },
    {
      type: "translate",
      label: "是否挂靠",
      prop: "isAffiliated", // 0挂靠，1没挂靠
      configOptionsTranslate: {
        options: dict_status_comm
      }
    }
  ]
};
