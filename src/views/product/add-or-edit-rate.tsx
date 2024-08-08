import React, { forwardRef, memo, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { Popconfirm, Select, TableProps, Tag, Tooltip } from "antd";
import { Form, Input, InputNumber, Table, Typography } from "antd";
import { Msg } from "@/utils/ant-methods";
import { PageHandle } from "@/components/page-cpns";
import { ExclamationCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";
const { Column, ColumnGroup } = Table;

interface Item {
  key: string;
  productPeriods: string | number | undefined; // 期数
  productRate: number | string | undefined; // 利率
  moneyRate?: string | number;
  editable: boolean;
}

interface IAddOrEditRate {
  title?: number | string;
  list: Item[];
  isAddOrEdit?: boolean;
  options: { label: string; value: string }[];
}
const AddOrEditRate: React.FC<IAddOrEditRate> = (props, ref) => {
  console.log("rate --props ", props);
  const isAddOrEdit = props.isAddOrEdit ?? true;
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>([]);
  const curtData = useRef<any>([]);

  // 第一次
  useEffect(() => {
    let newData: any;
    if (props.list.length === 0) {
      newData = [
        {
          key: `${new Date().getTime().toString()}`,
          productPeriods: undefined,
          productRate: undefined,
          editable: true
        }
      ];
    } else {
      newData = [...props.list];
    }
    curtData.current = newData;
    setData(newData);
  }, [props.list]);

  useEffect(() => {
    let newData: any = JSON.parse(JSON.stringify(curtData.current));

    if (newData.length > 0 && props.options.length > 0) {
      newData = newData.map((item: any) => {
        if (item?.productPeriods) {
          const obj: any = props.options?.find((opt) => opt.label == item?.productPeriods);
          if (!obj) {
            item!.productPeriods = undefined;
          }
          return item;
        } else {
          return item;
        }
      });

      setData(newData);
    }
  }, [props.options]);

  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record: Item) => record.key === editingKey;

  // 新增
  function handleAddRow() {
    const newData = [...data];
    const key = new Date().getTime().toString();
    const row: any = {
      key: `${new Date().getTime().toString()}`,
      productPeriods: undefined,
      productRate: undefined,
      editable: true
    };
    newData.push(row);
    console.log(" --------------- add", newData);

    curtData.current = newData;
    setData(newData);
    // handleEditRow(row);
  }

  // 编辑
  const handleEditRow = (record: Partial<Item> & { key: React.Key }) => {
    record.productRate = record?.productRate ? parseFloat(String(record?.productRate)).toFixed(2) : undefined;
    form.setFieldsValue({ productPeriods: undefined, productRate: undefined, ...record });
    setEditingKey(record.key);
  };

  // 删除
  function handleRemoveRow(key: React.Key) {
    if (data.length == 1) {
      return Msg.error("不能删");
    }
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);
    newData.splice(index, 1);

    curtData.current = newData;
    setData(newData);
    setEditingKey("");
  }

  // 取消
  function handleCancel() {
    setEditingKey("");
  }

  // 保存
  async function handleSaveRow(key: React.Key) {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item: any = newData[index];
        item.productRate = item?.productRate?.toString();
        newData.splice(index, 1, {
          ...item,
          ...row
        });

        curtData.current = newData;
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);

        curtData.current = newData;
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  }

  async function getData() {
    console.log("get Data ----------------", data);
    for (let i = 0; i < data.length; i++) {
      if (!data[i].productPeriods) {
        return Msg.error(`请选择 第${i + 1} 行 产品期数！`);
      }
      if (!data[i].productRate) {
        return Msg.error(`请填写 第${i + 1} 行 对客利率！`);
      }

      if (data[i]!.productRate!.toString()?.split(".")?.[1]?.length > 2) {
        return Msg.error(`第${i + 1} 行 对客利率 请保留两位小数！`);
      }
    }
    return data;
  }
  useImperativeHandle(ref, () => {
    return {
      getData: getData
    };
  });

  function handleChange(e: any, row: any, key: string) {
    const newData = [...data];
    const obj: any = newData.find((item) => item.key == row.key);
    obj[key] = e;

    curtData.current = newData;
    setData(newData);
  }

  return (
    <Form form={form} component={false}>
      <div style={{ width: "100%", paddingBottom: "20px" }}>
        {
          <PageHandle
            title={
              <>
                <span>费率信息</span>
                <Tooltip title="对客利率输入限制2位小数">
                  <ExclamationCircleOutlined style={{ marginLeft: "10px", color: "red" }} />
                </Tooltip>
              </>
            }
            configList={[]}
          />
        }

        <Table
          style={{ width: "100%" }}
          bordered
          dataSource={data}
          rowClassName="editable-row"
          pagination={false}
        >
          <Column
            title="产品期数"
            dataIndex="productPeriods"
            width={isAddOrEdit ? "40%" : "33.3%"}
            render={(value, record: any, index) => {
              return isAddOrEdit ? (
                <Select
                  options={props.options}
                  style={{ width: "100%" }}
                  value={record.productPeriods}
                  onChange={(e) => handleChange(e, record, "productPeriods")}
                  placeholder={"请选择产品期数"}
                />
              ) : (
                <span>{value}</span>
              );
            }}
          />

          <Column
            title="对客利率（%）"
            dataIndex="productRate"
            width={isAddOrEdit ? "40%" : "33.3%"}
            render={(value, record: any, index) => {
              return isAddOrEdit ? (
                <InputNumber
                  min={0}
                  max={100}
                  step="0.01"
                  style={{ width: "100%" }}
                  value={record.productRate}
                  onChange={(e) => handleChange(e, record, "productRate")}
                  placeholder={"请输入对客利率"}
                />
              ) : (
                <span>{value}</span>
              );
            }}
          />
          {!isAddOrEdit && (
            <Column title="对客费率（%）" dataIndex="moneyRate" width={isAddOrEdit ? "0%" : "33.3%"} />
          )}
          {isAddOrEdit && (
            <Column
              title="操作"
              dataIndex={"operation"}
              width={"20%"}
              render={(_: any, record: Item) => {
                return (
                  <span>
                    <Typography.Link onClick={() => handleAddRow()} style={{ marginRight: 8 }}>
                      添加
                    </Typography.Link>
                    <Typography.Link onClick={() => handleRemoveRow(record.key)} style={{ marginRight: 8 }}>
                      删除
                    </Typography.Link>
                  </span>
                );
              }}
            />
          )}
        </Table>
      </div>
    </Form>
  );
};

export default memo(
  forwardRef((props?: IAddOrEditRate, ref?: React.Ref<any>) => AddOrEditRate(props as IAddOrEditRate, ref))
);
