import type { IPageButton } from "@/components/page-cpns";

// 对应列 Column 配置项
export interface ITableItem {
  title: string;
  dataIndex: string;
  type: "normal" | "img" | "tooltip" | "tag" | "handle" | "translateList" | "time";
  ellipsis?: boolean; // 超过宽度将自动省略，暂不支持和排序筛选一起使用。 默认值 false 设置为 true 或 { showTitle?: boolean } 时，表格布局将变成 tableLayout="fixed"。
  align?: "left" | "right" | "center"; // 设置列的对齐方式 默认值 center
  width?: string | number;
  configTags?: {
    cutSymbol?: "," | "|" | "。" | "-";
    options?: TTagOptions[];
  };
  configTime?: {
    format?: "YYYY-MM-DD" | "YYYY-MM-DD HH:mm:ss";
  };
  configTranslateList?: {
    fieldNames?: {
      label: string;
      value: string;
    };
    options?: any[];

    isUseTag?: boolean;
    configTags?: TTagOptions[];
  };
  btnOptions?: IPageButton[];
}

type TTagOptions = {
  code?: string | number;
  color?: string;
  customValue?: string | number;
  iconName?: string;
};
