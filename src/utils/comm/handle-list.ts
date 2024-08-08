export class HandleList {
  static getLabel(
    list: any[],
    val: any,
    fieldNames?: {
      value?: string;
      label?: string;
    }
  ) {
    if (val === "" || val === undefined || val === null) return "";
    if (val instanceof Array) {
      const resList: any[] = [];
      val.forEach((v) => {
        const resLabel: string | number =
          list?.find((item: any) => item?.[fieldNames?.value ?? "value"] == v)?.[
            fieldNames?.label ?? "label"
          ] ?? "";
        resList.push(resLabel);
      });
      return resList.join("、");
    } else {
      return (
        list?.find((item: any) => item?.[fieldNames?.value ?? "value"] == val)?.[
          fieldNames?.label ?? "label"
        ] ?? ""
      );
    }
  }

  static getItem(list: any[], val: any, fieldValue?: string) {
    return list?.find((item: any) => item?.[fieldValue ?? "value"] == val) ?? {};
  }

  static recurseTrimChildListKey(list: any[], oldKey: string, newKey: string) {
    function trim(oldKey: string, newKey: string, list: any[]) {
      list.forEach((item) => {
        if (item[oldKey]) {
          item[newKey] = item[oldKey];
          delete item[oldKey];
        }
        if (item[newKey] && item[newKey].length > 0) {
          trim(oldKey, newKey, item[newKey]);
        }
      });
    }
    trim(oldKey, newKey, list);
    return list;
  }

  static getArrDifference(arr1: any[], arr2: any[]) {
    return arr1.concat(arr2).filter((v, i, arr) => {
      return arr.indexOf(v) === arr.lastIndexOf(v);
    });
  }

  static arraysEqual<T>(a: T[], b: T[]): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
  }
}
