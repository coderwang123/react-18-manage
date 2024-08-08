import { IModuleItem } from "@/components/page-cpns";
import { dist_manufacturer_type } from "@/dicts/dicts";

export const moduleCarConfig: IModuleItem = {
  title: "车辆融资信息",
  column: 3,
  configList: [
    {
      type: "normal",
      label: "贷款期限 (月)",
      prop: "loanTerm"
    },
    {
      type: "normal",
      label: "贷款金额 (元)",
      prop: "loanAmount"
    },
    {
      type: "normal",
      label: "贷款用途",
      prop: "loanUse"
    },
    {
      type: "normal",
      label: "贷款详细用途",
      prop: "loanDetailUse"
    },
    {
      type: "normal",
      label: "月利率",
      prop: "monthlyInterestRate"
    },
    {
      type: "normal",
      label: "品牌",
      prop: "brandName"
    },
    {
      type: "normal",
      label: "车系",
      prop: "seriesName"
    },
    {
      type: "normal",
      label: "车型名称",
      prop: "modelName"
    },
    {
      type: "normal",
      label: "车300评估 价(元)",
      prop: "che300ValuationAmount"
    },
    {
      type: "normal",
      label: "漆面状况",
      prop: "paintCondition"
    },
    {
      type: "normal",
      label: "工程状况",
      prop: "mechanicalCondition"
    },
    {
      type: "normal",
      label: "内饰情况",
      prop: "interiorCondition"
    },
    {
      type: "normal",
      label: "车型年款",
      prop: "modelYear"
    },
    {
      type: "normal",
      label: "行驶证所在地",
      prop: "drivingLicenseLocation"
    },

    {
      type: "normal",
      label: "行驶证详细地址",
      prop: "drivingLicenseAddress"
    },
    {
      type: "normal",
      label: "市场指导价",
      prop: "marketGuidancePrice"
    },
    {
      type: "normal",
      label: "行驶证车型",
      prop: "drivingLicenseModel"
    },
    {
      type: "normal",
      label: "车辆所在城市",
      prop: "vehicleCity"
    },
    {
      type: "normal",
      label: "车牌号",
      prop: "plateNumber"
    },
    {
      type: "normal",
      label: "车架号",
      prop: "vinNumber"
    },
    {
      type: "normal",
      label: "发动机号",
      prop: "engineNumber"
    },
    {
      type: "normal",
      label: "车辆登记日期",
      prop: "registrationDate"
    },
    {
      type: "normal",
      label: "车身颜色",
      prop: "bodyColor"
    },
    {
      type: "normal",
      label: "燃油情况",
      prop: "fuelCondition"
    },
    {
      type: "normal",
      label: "汽车排量",
      prop: "engineDisplacement"
    },
    {
      type: "normal",
      label: "变速器形式",
      prop: "transmissionForm"
    },
    {
      type: "normal",
      label: "出厂日期",
      prop: "manufactureDate"
    },
    {
      type: "translate",
      label: "国产进口",
      prop: "domesticImport",
      configOptionsTranslate: {
        options: dist_manufacturer_type
      }
    },
    {
      type: "normal",
      label: "过户次数",
      prop: "transferTimes"
    }
  ]
};
