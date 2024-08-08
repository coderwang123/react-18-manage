import type { IModalForm } from "@/components/page-cpns";

export const modalFormConfig: IModalForm = {
  gridCol: 1,
  configList: [
    {
      type: "a-input",
      label: "我是 input",
      prop: "a1",
      required: true,
      gridCol: 24
    },
    {
      type: "a-input-number",
      label: "我是 input-number",
      required: true,
      prop: "a2"
    },
    {
      type: "a-select",
      label: "我是 select",
      required: true,
      prop: "bbb"
    },
    {
      type: "a-time",
      label: "我是 time",
      prop: "c1"
    },
    {
      type: "a-time-range",
      label: "我是 time range",
      prop: "c2"
    },
    {
      type: "a-date",
      label: "我是 date",
      prop: "c3"
    },
    {
      type: "a-date-range",
      label: "我是 date range",
      prop: "c4"
    },
    {
      type: "a-cascader",
      label: "我是 cascader",
      prop: "d1"
    },
    {
      type: "a-tree-select",
      label: "我是 three select",
      prop: "e1"
    },
    {
      type: "a-radio",
      label: "我是 radio",
      prop: "f1"
    },

    {
      type: "a-checkbox",
      label: "我是 checkbox",
      prop: "g1"
    },
    {
      type: "a-rate",
      label: "我是 rate",
      prop: "h1"
    },
    {
      type: "a-slider",
      label: "我是 slider",
      prop: "i1"
    }
  ]
};
