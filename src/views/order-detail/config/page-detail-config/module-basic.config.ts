import { IModuleItem } from "@/components/page-cpns";
import { dict_status_comm } from "@/dicts/dicts";

export const moduleBasicConfig: IModuleItem = {
  title: "主贷人基本信息",
  column: 3,
  configList: [
    {
      type: "normal",
      label: "客户姓名",
      prop: "customerName"
    },
    {
      type: "normal",
      label: "身份证号",
      prop: "idcardNumber"
    },
    {
      type: "normal",
      label: "手机号",
      prop: "phoneNumber"
    },
    {
      type: "normal",
      label: "银行卡号",
      prop: "bankAccountNumber"
    },
    {
      type: "normal",
      label: "身份证地址",
      prop: "idcardAddress"
    },
    {
      type: "normal",
      label: "性别",
      prop: "gende"
    },
    {
      type: "normal",
      label: "民族",
      prop: "ethnicity"
    },
    {
      type: "normal",
      label: "签发机关",
      prop: "idcardIssuingAuthority"
    },
    {
      type: "normal",
      label: "身份证起始日",
      prop: "idcardStartDate"
    },
    {
      type: "normal",
      label: "身份证到期日",
      prop: "idcardExpiryDate"
    },
    {
      type: "normal",
      label: "婚姻状况",
      prop: "maritalStatus"
    },
    {
      type: "normal",
      label: "现住址所在地",
      prop: "currentResidenceLocation"
    },
    {
      type: "normal",
      label: "详细地址",
      prop: "currentResidenceAddress"
    },
    {
      type: "normal",
      label: "本地址居住年限",
      prop: "currentResidenceYears"
    },
    {
      type: "normal",
      label: "住宅状况",
      prop: "housingCondition"
    },
    {
      type: "normal",
      label: "户口性质",
      prop: "householdRegisterType"
    },
    {
      type: "normal",
      label: "学历",
      prop: "education"
    },
    {
      type: "normal",
      label: "最高学位",
      prop: "highestDegree"
    },
    {
      type: "normal",
      label: "健康状况",
      prop: "healthCondition"
    },
    {
      type: "normal",
      label: "月收入(元)",
      prop: "monthlyIncome"
    },
    {
      type: "normal",
      label: "电子邮箱",
      prop: "email"
    },
    {
      type: "normal",
      label: "住宅面积 (m²)",
      prop: "residentialArea"
    },
    {
      type: "translate",
      label: "本人是否有驾照",
      prop: "hasDriverLicense",
      configOptionsTranslate: {
        options: dict_status_comm
      }
    },
    {
      type: "normal",
      label: "驾照类型",
      prop: "driverLicenseType"
    },
    {
      type: "translate",
      label: "是否抵押人",
      prop: "isMortgagor",
      configOptionsTranslate: {
        options: dict_status_comm
      }
    },
    {
      type: "normal",
      label: "抵押人类型",
      prop: "mortgagorType"
    }
  ]
};
