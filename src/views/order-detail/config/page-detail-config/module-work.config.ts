import { IModuleItem } from "@/components/page-cpns";

export const moduleWorkConfig: IModuleItem = {
  title: "工作信息",
  column: 3,
  configList: [
    {
      type: "normal",
      label: "工作性质",
      prop: "employmentNature"
    },
    {
      type: "normal",
      label: "单位名称",
      prop: "companyName"
    },
    {
      type: "normal",
      label: "公司性质",
      prop: "companyType"
    },
    {
      type: "normal",
      label: "所属职业",
      prop: "occupation"
    },
    {
      type: "normal",
      label: "所属行业",
      prop: "industry"
    },
    {
      type: "normal",
      label: "所属部门",
      prop: "department"
    },
    {
      type: "normal",
      label: "职务",
      prop: "position"
    },
    {
      type: "normal",
      label: "入职时间",
      prop: "employmentStartDate"
    },
    {
      type: "normal",
      label: "现单位工龄 (年)",
      prop: "employmentYears"
    },
    {
      type: "normal",
      label: "单位所在地",
      prop: "companyLocation"
    },
    {
      type: "normal",
      label: "单位详细地址",
      prop: "companyAddress"
    },
    {
      type: "normal",
      label: "单位电话",
      prop: "companyPhoneNumber"
    }
  ]
};
