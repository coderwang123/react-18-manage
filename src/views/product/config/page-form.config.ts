import type { IPageFrom } from "@/components/page-cpns";
import { ReactNode } from "react";
import { regExpConfig } from "@/utils/comm/reg-exp";

export const pageFormConfig: IPageFrom = {
  width: "100%",
  moduleList: [
    {
      gridCol: 3,
      labelWidth: "90px",
      title: "基础信息",
      configList: [
        {
          type: "a-input",
          label: "产品名称",
          prop: "productName",
          required: true,
          rules: [
            {
              validator: (_: any, value: any) =>
                regExpConfig.isNormalEncodeDian.test(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error("请输入合法字符"))
            }
          ],
          configAInput: {
            maxLength: 50
          }
        },
        {
          type: "a-select",
          label: "产品类型",
          prop: "productType",
          required: true,
          configASelect: {
            fieldNames: {
              label: "key",
              value: "value"
            },
            options: []
          }
        },
        {
          type: "a-select",
          label: "产品期数",
          prop: "periodsStr",
          required: true,
          configASelect: {
            mode: "multiple",
            fieldNames: {
              label: "key",
              value: "value"
            },
            options: []
          }
        },
        {
          type: "a-select",
          label: "抵押方式",
          prop: "mortgageType",
          required: true,
          configASelect: {
            mode: "multiple",
            fieldNames: {
              label: "key",
              value: "value"
            },
            options: []
          }
        },
        {
          type: "a-select",
          label: "还款方式",
          prop: "repayType",
          required: true,
          configASelect: {
            mode: "multiple",
            fieldNames: {
              label: "key",
              value: "value"
            },
            options: []
          }
        }
      ]
    },
    {
      gridCol: 1,
      labelWidth: "0",
      title: "",
      configList: [
        // {
        //   type: "custom",
        //   moduleTitle: "模块1",
        //   label: "",
        //   prop: ""
        // },
        // {
        //   type: "custom",
        //   moduleTitle: "模块2",
        //   label: "",
        //   prop: ""
        // }
      ]
    }

    // {
    //   gridCol: 1,
    //   labelWidth: "90px",
    //   title: "基础信息",
    //   slotCustom: (params) => (slotCustom ? slotCustom : null)
    // }
  ]
};

// export function getPageFormConfig(slotCustom?: ReactNode): IPageFrom {
//   return {
//     width: "100%",
//     moduleList: [
//       {
//         gridCol: 3,
//         labelWidth: "90px",
//         title: "基础信息",
//         configList: [
//           {
//             type: "a-input",
//             label: "产品名称",
//             prop: "productName",
//             required: true
//           },
//           {
//             type: "a-select",
//             label: "产品类型",
//             prop: "productType",
//             required: true,
//             configASelect: {
//               mode: "multiple",
//               fieldNames: {
//                 label: "key",
//                 value: "value"
//               },
//               options: []
//             }
//           },
//           {
//             type: "a-select",
//             label: "产品期数",
//             prop: "periodsStr",
//             required: true,
//             configASelect: {
//               mode: "multiple",
//               fieldNames: {
//                 label: "key",
//                 value: "value"
//               },
//               options: []
//             }
//           },
//           {
//             type: "a-select",
//             label: "抵押方式",
//             prop: "mortgageType",
//             required: true,
//             configASelect: {
//               mode: "multiple",
//               fieldNames: {
//                 label: "key",
//                 value: "value"
//               },
//               options: []
//             }
//           },
//           {
//             type: "a-select",
//             label: "还款方式",
//             prop: "repayType",
//             required: true,
//             configASelect: {
//               mode: "multiple",
//               fieldNames: {
//                 label: "key",
//                 value: "value"
//               },
//               options: []
//             }
//           }
//         ]
//       },
//       {
//         gridCol: 2,
//         labelWidth: "0",
//         title: "",
//         configList: [
//           {
//             type: "custom",
//             moduleTitle: "模块1",
//             label: "",
//             prop: ""
//           },
//           {
//             type: "custom",
//             moduleTitle: "模块2",
//             label: "",
//             prop: ""
//           }
//         ]
//       },
//
//       {
//         gridCol: 1,
//         labelWidth: "90px",
//         title: "基础信息",
//         slotCustom: (params) => (slotCustom ? slotCustom : null)
//       }
//     ]
//   };
// }
