export interface IDetailItem {
  type: "timer" | "normal" | "html" | "image" | "custom" | "translate";
  label: string;
  prop: string;
  slotName?: string;

  configOptionsTranslate?: {
    isTree?: boolean;
    options: any[];
    findKeyValue?: any;
    findKeyLabel?: string;
  };
}
