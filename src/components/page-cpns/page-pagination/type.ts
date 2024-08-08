import type { ReactNode } from "react";

export interface IPagePagination {
  total?: number; // 说明: 数据总数 、 默认值: 	0
  current?: number; // 说明: 当前页数 、 默认值:	-
  defaultCurrent?: number; // 说明: 默认的当前页数 、 默认值: 	1

  pageSize?: number; // 说明: 每页条数 、 默认值: -
  defaultPageSize?: number; // 说明: 默认的每页条数  、 默认值: 10
  pageSizeOptions?: string[] | number[]; // 说明: 指定每页可以显示多少条 、 默认值: [10, 20, 50, 100]

  showSizeChanger?: boolean; // 说明: 是否展示 pageSize 切换器，当 total 大于 50 时默认为 true 、 默认值: 	-
  showQuickJumper?: boolean | { goButton: ReactNode }; // 说明: 是否可以快速跳转至某页 、 默认值: false

  hideOnSinglePage?: boolean; // 说明: 只有一页时是否隐藏分页器  、 默认值: 	false

  onChange?: (page: number, pageSize: number) => void; // 说明: 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数 、 默认值:
  onShowSizeChange?: (current: number, size: number) => void; // 说明: pageSize 变化的回调 、 默认值:

  handleChangePagination?: (params: { page: number; size: number }) => void;

  disabled?: boolean; // 说明: 禁用分页  、 默认值: 	-
  itemRender?: (
    page: any,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: any
  ) => ReactNode; // 说明: 用于自定义页码的结构，可用于优化 SEO 、 默认值: -

  responsive?: boolean; // 说明: 当 size 未指定时，根据屏幕宽度自动调整尺寸 、 默认值: 	-
  size?: "default" | "small"; // 说明: 当为 small 时，是小尺寸分页 、 默认值: default

  showLessItems?: boolean; // 说明: 是否显示较少页面内容 、 默认值: false
  showTitle?: boolean; // 说明: 是否显示原生 tooltip 页码提示 、 默认值: true
  showTotal?: (total: number, range: [number, number]) => ReactNode; // 说明: 用于显示数据总量和当前数据顺序 、 默认值: - // 说明: 用于显示数据总量和当前数据顺序 、 默认值: -
  simple?: boolean; // 说明: 当添加该属性时，显示为简单分页 、 默认值: 	-
}
