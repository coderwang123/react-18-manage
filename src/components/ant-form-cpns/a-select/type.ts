export interface IASelect {
  placeholder?: string;
  mode?: "multiple" | "tags"; // 描述：mode	设置 Select 的模式为多选或标签	multiple | tags、默认：-
  options?: any[];
  fieldNames?: {
    label: string;
    value: string;
    children?: string;
  };
  onChange?: any;
  value?: any;
  disabled?: boolean;
}
