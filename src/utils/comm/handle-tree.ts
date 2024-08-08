import React from "react";

type TKey = React.Key | string | number;

export class HandleTree {
  /**
   * 去树中 根据 当前val 查找节点 输出节点（ 包含 子节点 ）
   * @param allTree 全部树
   * @param fieldItem 树 item 字段名
   * @param fieldChild 树 child 字段名
   * @param value 值
   */
  static getNodeInfoByValue(allTree: any[], fieldItem: string, fieldChild: string, value: TKey) {
    let nodeInfo: any;
    function recurve(tree: any[]) {
      for (const el of tree) {
        if (el?.[fieldItem] == value) {
          nodeInfo = el;
          break;
        } else {
          if (el?.[fieldChild] && el?.[fieldChild]?.length > 0) {
            recurve(el[fieldChild]);
          }
        }
      }
    }
    recurve(allTree);
    if (nodeInfo) {
      return nodeInfo;
    }
  }

  // delTreeChildByFlag
  static delNodeInfoByValue(allTree: any[], fieldItem: string, fieldChild: string, value: any) {
    const copyTree: any = JSON.parse(JSON.stringify(allTree));
    // 递归函数用于删除指定级别的子元素
    function recurve(tree: any[]) {
      for (let i in tree) {
        // console.log("当前 级别", curtLv, item);
        if (tree[i]?.[fieldItem] == value) {
          // console.log("找到 当前级别了", item);
          delete tree[i];
        } else {
          if (tree[i]?.[fieldChild]) {
            recurve(tree[i]?.[fieldChild]);
          }
        }
      }
    }
    recurve(copyTree);
    return copyTree;
  }

  static delNodeChildByLv(allTree: any[], fieldChild: string, lv: number) {
    const arr = JSON.parse(JSON.stringify(allTree));
    // 递归函数用于删除指定级别的子元素
    function recurve(tree: any[], curtLv: number) {
      for (const el of tree) {
        // console.log("当前 级别", curtLv, item);
        if (curtLv == lv) {
          // console.log("找到 当前级别了", item);
          delete el?.[fieldChild];
        } else {
          if (el?.[fieldChild]) {
            recurve(el?.[fieldChild], curtLv + 1);
          }
        }
      }
    }
    recurve(arr, 1);
    return arr;
  }

  static delNodeChildByLength(allTree: any[], fieldChild: string) {
    const copyTree: any = JSON.parse(JSON.stringify(allTree));
    // 递归函数用于删除指定级别的子元素
    function recurve(tree: any[]) {
      for (const el of tree) {
        // console.log("当前 级别", curtLv, item);
        if (el?.[fieldChild].length == 0) {
          // console.log("找到 当前级别了", item);
          delete el?.[fieldChild];
        } else {
          if (el?.[fieldChild]) {
            recurve(el?.[fieldChild]);
          }
        }
      }
    }
    recurve(copyTree);
    return copyTree;
  }

  /**
   * 根据树 获取 fieldItem value的集合
   * @param allTree 全部树
   * @param fieldItem 树 item 字段名
   * @param fieldChild 树 child 字段名
   */
  static getFieldValueListByFieldKey(allTree: any[], fieldItem: string, fieldChild: string) {
    let arr: (string | number)[] = [];
    function recurve(tree: any[]) {
      tree.forEach((el) => {
        if (el?.[fieldItem]) {
          arr.push(el?.[fieldItem]);
        } else {
          if (el?.[fieldChild] && el?.[fieldChild]?.length > 0) {
            recurve(el?.[fieldChild]);
          }
        }
        if (el?.[fieldChild] && el?.[fieldChild]?.length > 0) {
          recurve(el?.[fieldChild]);
        }
      });
    }
    recurve(allTree);
    return arr;
  }

  /**
   * 去当前节点中 根据 FieldValue 获取 该节点下 子孙节点的 fieldItem（的 value值）
   * @param nodeInfo // 传入的节点
   * @param fieldItem 树 item 字段名
   * @param fieldChild 树 child 字段名
   */
  static getFieldValueListChildrenByFieldKey(nodeInfo: any, fieldItem: string, fieldChild: string) {
    const arr: TKey[] = [];
    function recurve(tree: any[]) {
      for (const el of tree) {
        if (el?.[fieldItem]) {
          arr.push(el?.[fieldItem]);
          if (el?.[fieldChild] && el?.[fieldChild]?.length > 0) {
            recurve(el?.[fieldChild]);
          }
        } else {
          if (el?.[fieldChild] && el?.[fieldChild]?.length > 0) {
            recurve(el?.[fieldChild]);
          }
        }
      }
    }
    if (nodeInfo?.[fieldChild]) {
      recurve(nodeInfo?.[fieldChild]);
      return arr;
    } else {
      return arr;
    }
  }

  /**
   * 去当前节点中 根据 FieldValue 获取 该节点下 子孙节点的 fieldChild（的 value值）
   * @param allTree
   * @param nodeInfo // 传入的节点
   * @param fieldItem 树 item 字段名
   * @param fieldChild 树 child 字段名
   */
  static getFieldValueListParentsByFieldKey(
    allTree: any[],
    fieldItem: string,
    fieldChild: string,
    nodeInfo: any
  ) {
    let arr: any[] = []; // 要 返回的 数组
    function recurve(tree: any[]) {
      for (const el of tree) {
        arr = [];
        arr.push(el?.[fieldItem]);
        if (el?.[fieldItem] == nodeInfo?.[fieldItem]) {
          return arr;
        } else {
          //否则 进入 下面判断，判断 当前节点 是否有 子节点数据
          if (el?.[fieldChild] && el?.[fieldChild]?.length > 0) {
            // 合并 子节点 返回的 数据
            arr = arr.concat(recurve(el?.[fieldChild]));
            if (arr.includes(nodeInfo?.[fieldItem])) {
              // 如果当前 数据中 已包含 默认节点，则 退出循环、返回数据
              return arr;
            }
          }
        }
      }
    }
    recurve(allTree);
    return arr;
  }

  // 根据 id 集合 去树中 翻译
  static getArrByFindKey(
    allTree: any[],
    fieldItem: string,
    fieldChild: string,
    returnFieldItem: string,
    idArr: any[]
  ) {
    const newList: any[] = [];
    function recursive(id: number | string, tree: any[]) {
      for (const el of tree) {
        if (id == el?.[fieldItem]) {
          newList.push(el?.[returnFieldItem]);
          break;
        } else {
          if (el?.[fieldChild] && el?.[fieldChild].length > 0) {
            recursive(id, el?.[fieldChild]);
          }
        }
      }
    }
    idArr?.forEach((id: number | string) => {
      recursive(id, allTree);
    });
    return newList;
  }
}
