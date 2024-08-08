import React, { forwardRef, memo, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { Popconfirm, Select, TableProps } from "antd";
import { Form, Input, InputNumber, Table, Typography } from "antd";
import BtnPrimary from "../../components/ant-comm-cpns/a-button/btn-primary/btn-primary";
import { Msg } from "@/utils/ant-methods";
import { PageHandle } from "@/components/page-cpns";

interface Item {
  key: string;
  productPeriods: string | number; // 期数
  productRate: number | string | undefined; // 利率
  moneyRate?: number | string;
  editable: boolean;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  // inputType: "number" | "text";
  formItemType: "select" | "number";
  record: Item;
  index: number;
  options?: { label: string; value: string }[];
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
  editing,
  dataIndex,
  title,
  formItemType,
  record,
  index,
  children,
  options,
  ...restProps
}) => {
  const formatter = (value: any) => {
    if (value) {
      return `${parseFloat(value).toFixed(2)}`;
    }
    return "";
  };

  const parser = (value: any) => {
    if (value) {
      return parseFloat(value).toFixed(2);
    }
    return "";
  };
  // console.log("options ====?", options);
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `${formItemType == "number" ? "请输入" : "请选择"}${title}!`
            }
          ]}
        >
          {formItemType == "number" ? (
            <InputNumber
              min="0"
              max="100"
              step="0.01"
              formatter={formatter}
              parser={parser}
              style={{ width: "100%" }}
            />
          ) : (
            <Select options={options} style={{ width: "100%" }} />
          )}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

interface IAddOrEditRate {
  title?: number | string;
  list: Item[];
  isAddOrEdit?: boolean;
  options?: { label: string; value: string }[];
}
const AddOrEditRate: React.FC<IAddOrEditRate> = (props, ref) => {
  const isAddOrEdit = props.isAddOrEdit ?? true;
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>([]);
  useEffect(() => {
    if (data.length && props.list.length == 0) {
      console.log("----- 第一次 ");
      handleAddRow();
    } else {
      console.log("----- 第二次 ");
      setData([...props.list]);
    }

    // setData((prevState) => {
    //   return [...prevState, ...props.list];
    // });
  }, [props.list]);

  useEffect(() => {
    let newData: any = [...data];
    if (newData.length > 0) {
      newData = newData.filter((item: any) => {
        const obj = props.options?.find((opt) => opt.label == item.productPeriods);
        if (obj) {
          return obj;
        }
      });
      setData(newData);
      setEditingKey("");
    }
  }, [props.options, data]);
  //
  // useEffect(() => {
  //   if (data.length == 0) {
  //     handleAddRow();
  //   }
  // }, [data]);

  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record: Item) => record.key === editingKey;

  // 新增
  async function handleAddRow() {
    console.log("新增 走了么 -----------------");
    const res = (await form.validateFields()) as Item;
    console.log("res", res);
    const newData = [...data];
    const row: any = {
      key: `${new Date().getTime().toString()}`,
      productPeriods: props.title,
      productRate: undefined,
      editable: true
    };
    newData.push(row);
    setData(newData);
    handleEditRow(row);
  }

  // 编辑
  const handleEditRow = (record: Partial<Item> & { key: React.Key }) => {
    record.productRate = record?.productRate ? parseFloat(String(record?.productRate)).toFixed(2) : undefined;
    form.setFieldsValue({ productPeriods: "", productRate: undefined, ...record });
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
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  }

  const columns: any = [
    {
      title: "产品期数",
      dataIndex: "productPeriods",
      formItemType: "select",
      editable: true,
      width: "42%"
    },
    {
      title: "对客利率（%）",
      dataIndex: "productRate",
      formItemType: "number",
      editable: true,
      width: "42%"
    },
    {
      title: "操作",
      dataIndex: "operation",
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => handleSaveRow(record.key)} style={{ marginRight: 8 }}>
              保存
            </Typography.Link>

            <Popconfirm
              title="确定删除当前信息?"
              onConfirm={() => handleRemoveRow(record.key)}
              style={{ marginRight: 8 }}
            >
              <a>删除</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ""} onClick={() => handleEditRow(record)}>
            编辑
          </Typography.Link>
        );
      }
    }
  ];

  const mergedColumns: TableProps["columns"] = useMemo(() => {
    let newColumns = [...columns];
    console.log("--------------------------------m ", newColumns);
    if (!isAddOrEdit) {
      newColumns = columns.filter((item: any) => item.title != "操作");
    }
    return newColumns.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: Item) => ({
          record,
          formItemType: col.formItemType,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record)
        })
      };
    });
  }, [data, editingKey]);

  async function getData() {
    if (editingKey) {
      return Msg.error("请保存费率信息!");
    } else {
      return data;
    }
  }
  useImperativeHandle(ref, () => {
    return {
      getData: getData
    };
  });

  return (
    <Form form={form} component={false}>
      <div style={{ width: "100%", paddingBottom: "20px" }}>
        {
          <PageHandle
            title={`费率信息`}
            configList={
              isAddOrEdit
                ? [
                    {
                      name: "新增费率",
                      code: "add",
                      icon: "PlusOutlined"
                    }
                  ]
                : []
            }
            handleCustomBtn={() => handleAddRow()}
          />
        }

        <Table
          style={{ width: "100%" }}
          components={{
            body: {
              cell: (args: any) => <EditableCell {...args} options={props.options} />
            }
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={false}
        />
      </div>
    </Form>
  );
};

export default memo(
  forwardRef((props?: IAddOrEditRate, ref?: React.Ref<any>) => AddOrEditRate(props as IAddOrEditRate, ref))
);
