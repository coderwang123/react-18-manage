import React, { forwardRef, memo, useEffect, useImperativeHandle, useState } from "react";
import { Tree } from "antd";
import type { TreeProps } from "antd";
import { IATree } from "./type";
import { HandleTree } from "@/utils/comm";

export const ATree: React.MemoExoticComponent<
  React.ForwardRefExoticComponent<IATree & React.RefAttributes<any>>
> = memo(
  forwardRef((props: IATree, ref) => {
    console.log("-------------------------- tree props", props);
    const { treeData, defaultCheckedKeys, handleCheck, ...rest } = props;
    const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
    const [currentChecks, setCurrentCheckKeys] = useState<React.Key[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
    const [all, setALL] = useState<boolean>(false);

    const onExpand: TreeProps["onExpand"] = (expandedKeysValue) => {
      setExpandedKeys(expandedKeysValue);
      setAutoExpandParent(false);
    };

    useEffect(() => {
      // console.log("useEffect ------------------- useEffect-------------------------- useEffect");
      // setExpandedKeys([11]);
      // setALL(true);
    }, [treeData]);

    useEffect(() => {
      setCurrentCheckKeys(defaultCheckedKeys ?? []);
      console.log("默认值 进来了么");
    }, [props.defaultCheckedKeys]);

    const onCheck: TreeProps["onCheck"] = (checkedKeys, nodeInfo) => {
      // console.log("---------------------------------------------000000000000000000000000000000000000000000");
      const oldCheckedKeys = checkedKeys as { checked: React.Key[]; halfChecked: React.Key[] };

      const childIds = HandleTree.getFieldValueListChildrenByFieldKey(nodeInfo.node, "id", "child"); // 向下查找所有子节点的ids
      // console.log("向下查找 所有 孩子的 ids ===>", childIds);
      const parentIds = HandleTree.getFieldValueListParentsByFieldKey(
        props.treeData,
        "id",
        "child",
        nodeInfo.node
      );
      // console.log("向上查找 所有 祖先的 ids ===>", parentIds);

      let newCheckedList: any[] = [];
      if (nodeInfo.checked) {
        newCheckedList = [...new Set([...oldCheckedKeys?.checked, ...childIds, ...parentIds])];
      } else {
        newCheckedList = oldCheckedKeys?.checked.filter((item) => childIds.indexOf(item) == -1);
      }
      setCurrentCheckKeys(newCheckedList);
      handleCheck?.(newCheckedList ?? []);
    };

    const onSelect: TreeProps["onSelect"] = (selectedKeysValue, info) => {
      // console.log("onSelect === info", info);
      // console.log("onSelect === selectedKeysValue", selectedKeysValue);
      setSelectedKeys(selectedKeysValue);
    };

    //声明可以被访问的内容
    function handleGetChecks() {
      // console.log("handleGetChecks", currentChecks);
      return currentChecks;
    }
    useImperativeHandle(ref, () => {
      return {
        handleGetChecks: handleGetChecks
      };
    });

    return (
      <Tree
        treeData={treeData}
        defaultCheckedKeys={defaultCheckedKeys}
        checkable
        autoExpandParent={true}
        defaultExpandParent={true}
        defaultExpandAll={true}
        checkStrictly
        onCheck={onCheck}
        checkedKeys={currentChecks}
        onExpand={onExpand}
        {...rest}
      />
    );
  })
);

export default ATree;
