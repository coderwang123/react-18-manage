import React, { Fragment, useEffect, useMemo, useState } from "react";
import { Space, Table, Tag, Tooltip } from "antd";
import type { ITableItem } from "./type";
import type { IPageTable } from "@/components/page-cpns/page-table/type";

import PreviewImg from "@/components/preview-files/preview-img/preview-img";
import { BtnLink } from "@/components/ant-comm-cpns";
import withPerBtn from "@/hoc/with-per-btn";

import { formatTime, generateIcon, HandleList } from "@/utils/comm";
import type { IPageButton } from "@/components/page-cpns";

const PerButton = withPerBtn(BtnLink);
interface IGenerateTableItem extends Pick<IPageButton, "handleCustomBtn"> {
  tableItem: ITableItem;
  handleWidth?: number;
  dataLength?: number;
}

export function generateTableItem(props: IGenerateTableItem) {
  console.log("重新生产~ table item");
  const { type, configTime, configTags, configTranslateList, btnOptions } = props.tableItem;
  const { handleWidth = 0, dataLength = 0 } = props;
  switch (type) {
    case "normal":
      return <Table.Column align={"left"} {...props.tableItem} />;

    case "img":
      return <Table.Column align={"left"} {...props.tableItem} render={() => <PreviewImg />} />;
    case "time":
      return (
        <Table.Column
          align={"left"}
          ellipsis={{
            showTitle: false
          }}
          {...props.tableItem}
          render={(value, record, index) => (
            <>{formatTime(value, configTime?.format)}</>
            // <Tooltip placement="topLeft" title={value}>
            //   {value}
            // </Tooltip>
          )}
        />
      );

    case "tooltip":
      return (
        <Table.Column
          align={"left"}
          ellipsis={{
            showTitle: false
          }}
          {...props.tableItem}
          render={(value, record, index) => (
            <Tooltip placement="topLeft" title={value}>
              {value}
            </Tooltip>
          )}
        />
      );
    //
    case "tag":
      return (
        <Table.Column
          align={"left"}
          ellipsis={{
            showTitle: false
          }}
          {...props.tableItem}
          render={(value, record, index) => {
            const isStringTag = typeof value == "string";
            const tag = isStringTag ? value.split(configTags?.cutSymbol ?? ",") : value;
            return (
              <>
                {tag.map((tag: string | number) => {
                  const optItem = HandleList.getItem(configTags?.options ?? [], tag, "code");
                  return (
                    <Tag key={tag} color={optItem?.color} icon={generateIcon(optItem?.iconName ?? "")}>
                      {optItem?.customValue ?? tag}
                    </Tag>
                  );
                })}
              </>
            );
          }}
        />
      );
    //
    case "translateList":
      return (
        <Table.Column
          align={"left"}
          ellipsis={{
            showTitle: false
          }}
          {...props.tableItem}
          render={(value, record, index) => {
            const { isUseTag, options, fieldNames, configTags } = configTranslateList ?? {};

            const tagItem = HandleList.getItem(configTags ?? [], value, "code");
            const label = HandleList.getLabel(options ?? [], value, fieldNames);

            return (
              <Fragment>
                {isUseTag ? (
                  <Tag
                    bordered={false}
                    key={value}
                    color={tagItem?.color}
                    icon={generateIcon(tagItem?.iconName ?? "")}
                  >
                    {label}
                  </Tag>
                ) : (
                  label
                )}
              </Fragment>
            );
          }}
        />
      );
    case "handle":
      return btnOptions && btnOptions.length > 0 && dataLength > 0 ? (
        <Table.Column
          className={"table-column-handle"}
          fixed="right"
          align={"left"}
          {...props.tableItem}
          width={handleWidth}
          render={(value, record, index) => (
            <div
              className={"table-handle-wrap"}
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                width: "inherit"
              }}
            >
              {btnOptions?.map((btn, btnIndex) => {
                // console.log("-------------- value --------------", value);
                // console.log("-------------- record --------------", record);
                // console.log("-------------- index --------------", index);
                const { renderName, renderShow, ...rest } = btn;
                rest.name = renderName ? renderName?.(record) : rest.name;
                return (
                  (renderShow?.(record) ?? true) && (
                    <Fragment key={btnIndex}>
                      <Space style={{ width: handleWidth <= 90 ? "100%" : "auto" }} wrap={false}>
                        <PerButton
                          {...rest}
                          handleCustomBtn={(params) => props?.handleCustomBtn?.({ ...params, row: record })}
                        />
                      </Space>
                    </Fragment>
                  )
                );
              })}
            </div>
          )}
        />
      ) : null;
    default:
      return <></>;
  }
}
