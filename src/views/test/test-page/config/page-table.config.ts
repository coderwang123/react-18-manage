import type { IPageTableConfig } from "@/components/page-cpns";
import { buttonConfigHandle, buttonConfigTable } from "./button.config";
export const pageTableConfig: IPageTableConfig = {
  rowKey: "id",
  pageConfigHandle: {
    configList: buttonConfigHandle
  },
  configList: [
    {
      type: "normal",
      title: "名字",
      dataIndex: "a1",
      width: 200
    },

    {
      type: "tooltip",
      title: "tooltip",
      dataIndex: "a2",
      width: 200
      // width: 500
    },
    {
      type: "img",
      title: "图片",
      dataIndex: "a4",

      width: 200,
      ellipsis: true
      // width: 500
    },
    {
      type: "tag",
      title: "tag 字符串",
      dataIndex: "a5",
      width: 200,
      configTags: {
        cutSymbol: ","
      }
      // width: 500
    },
    {
      type: "tag",
      title: "tag 数组",
      dataIndex: "a6",
      width: 200
      // width: 500
    },
    {
      type: "tag",
      title: "tag 自定义值",
      dataIndex: "a6",
      width: 200,
      configTags: {
        options: [
          { code: "张三", customValue: "1" },
          { code: "李四", customValue: "2" }
        ]
      }
      // width: 500
    },
    {
      type: "tag",
      title: "tag 自定义颜色 + icon",
      dataIndex: "a6",
      width: 200,
      configTags: {
        options: [
          { code: "张三", color: "red", iconName: "CheckCircleOutlined" },
          { code: "李四", color: "yellow" }
        ]
      }
      // width: 500
    },
    {
      type: "normal",
      title: "名字",
      dataIndex: "a1",
      width: 200
    },

    {
      type: "handle",
      title: "操作",
      dataIndex: "",
      btnOptions: buttonConfigTable
    }
  ]
};
