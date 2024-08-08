import { IModuleItem } from "@/components/page-cpns";

export const moduleContactPersonConfig: IModuleItem = {
  title: "联系人信息",
  column: 3,
  configList: [
    {
      type: "normal",
      label: "直系亲属姓名",
      prop: "relativeName"
    },
    {
      type: "normal",
      label: "与主贷人关系",
      prop: "relativeRelationship"
    },
    {
      type: "normal",
      label: "直系亲属手机号",
      prop: "relativePhoneNumber"
    },
    {
      type: "normal",
      label: "联系人姓名",
      prop: "contactName"
    },
    {
      type: "normal",
      label: "联系人与主贷人关系",
      prop: "contactRelationship"
    },
    {
      type: "normal",
      label: "联系人手机号",
      prop: "contactPhoneNumber"
    },
    {
      type: "normal",
      label: "配偶姓名",
      prop: "spouseName"
    },
    {
      type: "normal",
      label: "配偶手机号",
      prop: "spousePhoneNumber"
    },
    {
      type: "normal",
      label: "身份证号",
      prop: "spouseCardNumber"
    },
    {
      type: "normal",
      label: "身份证起始日",
      prop: "spouseCardStartDate"
    },
    {
      type: "normal",
      label: "身份证截止日",
      prop: "spouseCardExpiryDate"
    },
    {
      type: "normal",
      label: "签发机关",
      prop: "spouseCardIssuingAuthority"
    },
    {
      type: "normal",
      label: "户籍所在地",
      prop: "spouseRegisterLocation"
    },
    {
      type: "normal",
      label: "户籍详细地址",
      prop: "spouseRegisterAddress"
    },
    {
      type: "normal",
      label: "单位名称",
      prop: "spouseCompanyName"
    },
    {
      type: "normal",
      label: "职业",
      prop: "spouseOccupation"
    },
    {
      type: "normal",
      label: "所在部门",
      prop: "spouseDepartment"
    },
    {
      type: "normal",
      label: "月收入(元)",
      prop: "spouseMonthlyIncome"
    },
    {
      type: "normal",
      label: "工作性质",
      prop: "spouseEmploymentNature"
    },
    {
      type: "normal",
      label: "现单位所在地",
      prop: "spouseCompanyLocation"
    },
    {
      type: "normal",
      label: "现单位地址",
      prop: "spouseCompanyAddress"
    },
    {
      type: "normal",
      label: "现住址所在地",
      prop: "spouseLocation"
    },
    {
      type: "normal",
      label: "详细住址",
      prop: "spouseDetailedAddress"
    }
  ]
};
