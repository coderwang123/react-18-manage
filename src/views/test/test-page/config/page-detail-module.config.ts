import type { IPageDetail } from "@/components/page-cpns";

export const pageDetailModuleConfig: IPageDetail = {
  configModule: [
    {
      title: "模块1",
      column: 3,
      configList: [
        {
          type: "normal",
          label: "名字",
          prop: "a1"
        },
        {
          type: "normal",
          label: "tooltip",
          prop: "a2"
        },
        {
          type: "normal",
          label: "图片",
          prop: "a4"
        },
        {
          type: "normal",
          label: "tag 字符串",
          prop: "a5"
        },
        {
          type: "normal",
          label: "tag 数组",
          prop: "a6"
        },
        {
          type: "normal",
          label: "tag 自定义值",
          prop: "a6"
        },
        {
          type: "normal",
          label: "tag 自定义颜色 + icon",
          prop: "a6"
        },
        {
          type: "normal",
          label: "名字",
          prop: "a1"
        }
      ]
    },

    {
      title: "模块二",
      column: { xxl: 3, xl: 3, lg: 3, md: 24, sm: 24, xs: 24 },
      layout: "horizontal",
      configList: [
        {
          type: "normal",
          label: "名字",
          prop: "a1"
        },
        {
          type: "normal",
          label: "tooltip",
          prop: "a2"
        },
        {
          type: "normal",
          label: "图片",
          prop: "a4"
        },
        {
          type: "normal",
          label: "tag 字符串",
          prop: "a5"
        },
        {
          type: "normal",
          label: "tag 数组",
          prop: "a6"
        },
        {
          type: "normal",
          label: "tag 自定义值",
          prop: "a6"
        },
        {
          type: "normal",
          label: "tag 自定义颜色 + icon",
          prop: "a6"
        },
        {
          type: "normal",
          label: "名字",
          prop: "a1"
        }
      ]
    }
  ]
};
