import React, { CSSProperties, ReactNode } from "react";
import { AntTreeNodeProps, EventDataNode } from "antd/es/tree";

import type { TreeProps } from "antd";

export interface IATree {
  treeData: any[];
  disabled?: boolean;
  blockNode?: boolean;
  checkable?: boolean;
  checkedKeys?: string[] | { checked: string[]; halfChecked: string[] };
  selectable?: boolean;
  selectedKeys?: string[];
  onSelect?: TreeProps["onSelect"];
  checkStrictly?: boolean;
  autoExpandParent?: boolean;
  defaultExpandAll?: boolean;
  defaultExpandParent?: boolean;
  defaultCheckedKeys?: string[];
  defaultExpandedKeys?: string[];
  defaultSelectedKeys?: string[];
  expandedKeys?: string[];
  onExpand?: (expandedKeys: any[], params: { expanded: boolean; node: any }) => void;
  draggable?:
    | boolean
    | ((node: any) => boolean)
    | { icon?: React.ReactNode | false; nodeDraggable?: (node: any) => boolean };
  fieldNames?: {
    title: string;
    key: string;
    children: string;
  };
  filterTreeNode?: (treeNode: EventDataNode<any>) => boolean;
  height?: number;
  icon?: ReactNode | ((props: any) => ReactNode);
  loadData?: (treeNode: EventDataNode<any>) => Promise<any>;
  loadedKeys?: string[];
  multiple?: boolean;
  rootStyle?: CSSProperties;
  showIcon?: boolean;
  showLine?: boolean | { showLeafIcon: ReactNode | ((props: AntTreeNodeProps) => ReactNode) };
  switcherIcon?: ReactNode | ((props: AntTreeNodeProps) => ReactNode);
  titleRender?: (nodeData: any) => ReactNode;
  virtual?: boolean;

  handleCheck?: (params: (string | number)[]) => void;

  allowDrop?: (params: { dropNode: any; dropPosition: any }) => boolean;
  onDragEnd?: TreeProps["onDragEnd"];
  onDragEnter?: TreeProps["onDragEnter"];
  onDragLeave?: TreeProps["onDragLeave"];
  onDragOver?: TreeProps["onDragOver"];
  onDragStart?: TreeProps["onDragStart"];
  onDrop?: TreeProps["onDrop"];
  onLoad?: TreeProps["onLoad"];
  onRightClick?: (info: { event: React.MouseEvent; node: EventDataNode<any> }) => void;
}

export interface IATreeRef {
  handleGetChecks?: () => any;
}
