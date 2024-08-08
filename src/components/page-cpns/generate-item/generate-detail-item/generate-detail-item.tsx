import type { IDetailItem } from "./type";
import type { IDescriptionItem } from "@/components/page-cpns";
import { HandleList } from "@/utils/comm";

export function generateDetailItem(props: IDetailItem, detailInfo?: any): IDescriptionItem {
  const { type, label, prop } = props;
  function getItem() {
    switch (type) {
      case "normal":
        return {
          label,
          value: detailInfo?.[prop] ?? ""
        };
      case "translate":
        const { isTree, options, findKeyLabel, findKeyValue } = props?.configOptionsTranslate ?? {};
        return {
          label,
          value: isTree
            ? ""
            : HandleList.getLabel(options ?? [], detailInfo?.[prop] ?? "", {
                label: findKeyLabel ?? "label",
                value: findKeyValue ?? "value"
              })
        };
      default:
        return { label, value: "" };
    }
  }

  return getItem();
}
