import { IModuleItem } from "@/components/page-cpns";

export const moduleRelatedPersonConfig: IModuleItem = {
  title: "关联人信息",
  column: 3,
  configList: [
    {
      type: "normal",
      label: "关联人姓名",
      prop: "relatedPersonName"
    },
    {
      type: "normal",
      label: "关联人手机号",
      prop: "relatedPersonPhoneNumber"
    },
    {
      type: "normal",
      label: "身份证号",
      prop: "relatedPersonCardNumber"
    },
    {
      type: "normal",
      label: "身份证起始日",
      prop: "relatedPersonCardStartDate"
    },
    {
      type: "normal",
      label: "身份证截止日",
      prop: "relatedPersonCardExpiryDate"
    },
    {
      type: "normal",
      label: "签发机关",
      prop: "relatedPersonCardIssuingAuthority"
    },
    {
      type: "normal",
      label: "与主贷人关系",
      prop: "relatedPersonRelationship"
    },
    {
      type: "normal",
      label: "关联人类型",
      prop: "relatedPersonType"
    },
    {
      type: "normal",
      label: "户籍所在地",
      prop: "relatedPersonRegisterLocation"
    },
    {
      type: "normal",
      label: "户籍详细地址",
      prop: "relatedPersonRegisterAddress"
    },
    {
      type: "normal",
      label: "单位名称",
      prop: "relatedPersonCompanyName"
    },
    {
      type: "normal",
      label: "月收入(元)",
      prop: "relatedPersonMonthlyIncome"
    },
    {
      type: "normal",
      label: "现单位所在地",
      prop: "relatedPersonCompanyLocation"
    },
    {
      type: "normal",
      label: "现单位地址",
      prop: "relatedPersonCompanyAddress"
    }
  ]
};
