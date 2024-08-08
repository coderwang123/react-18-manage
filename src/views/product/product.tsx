import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import { modal, Msg } from "@/utils/ant-methods";

import { SuperPage } from "@/components/page-cpns";
import { superPageConfig } from "./config/super-page.config";

import useCommStore from "@/store/comm/comm";
import ApiProduct from "@/apis/product";

const Product: React.FC = (props) => {
  const navigate = useNavigate();

  // 初始化 --- options store 数据
  const commStore = useCommStore(
    useShallow((state) => {
      return {
        dictProduct: state.dictProduct,
        apiDictProduct: state.apiDictProduct
      };
    })
  );

  // 初始化 --- options
  useEffect(() => {
    // product_type 产品类型
    commStore.apiDictProduct(["product_type"]);
    // commStore.apiTreeOrg();
  }, []);

  // 初始化 --- 搜索栏
  const newSuperPageConfig = useMemo(() => {
    const { configSearch = {}, configTable = {}, ...rest } = superPageConfig;

    configSearch.configList = configSearch.configList?.map((item) => {
      if (item.prop === "productType") {
        item!.configASelect!.options = commStore.dictProduct?.["product_type"];
        return item;
      }
      return item;
    });

    configTable.configList = configTable.configList?.map((item) => {
      if (item.dataIndex === "productType") {
        item!.configTranslateList!.options = commStore.dictProduct?.["product_type"];
        return item;
      }

      return item;
    });
    return {
      configSearch: configSearch,
      configTable: configTable,
      ...rest
    };
  }, [commStore.dictProduct]);

  // 初始化 --- table 参数
  const queryParams = useRef({
    page: 1,
    size: 10
  });

  // 初始化 --- table 数据
  const [tableData, setTableData] = useState<any[]>([]);

  // 初始化 --- table 总条数
  const [total, setTotal] = useState<any>(0);

  // 初始化 --- table api
  async function getList() {
    const res = await ApiProduct.list(queryParams.current);
    setTableData(res?.data?.records ?? []);
    setTotal(res?.data?.total ?? 0);
  }

  // 搜索
  const handleSearch = useCallback(async (params?: any) => {
    queryParams.current = { page: 1, size: 10, ...params };
    await getList();
  }, []);

  // 切换分页
  const handleChangePagination = useCallback(async (params?: any) => {
    Object.assign(queryParams.current, params);
    await getList();
  }, []);

  // 操作栏
  const handleCustomBtn = useCallback((params: any) => {
    const { code, row } = params;

    switch (code) {
      case "add":
        navigate("/product/add", {
          state: {
            code
          }
        });
        break;

      case "edit":
        navigate("/product/edit", {
          state: {
            code,
            row
          }
        });
        break;
      case "detail":
        navigate("/product/detail", {
          state: {
            code,
            row
          }
        });
        break;

      case "del":
        modal({
          content: `是否删除 当前产品： ${row?.productName}?`,

          handleModalSure: async () => {
            const params = {
              productId: row?.id
            };
            await ApiProduct.del(params);
            Msg.success(`删除成功~`);
            await getList();
          },

          handleModalCancel: () => {
            Msg.error("已取消当前操作~");
          }
        });
        break;

      case "disabled":
        modal({
          content: `是否${row?.productStatus == "1" ? "禁用" : "启用"} 当前产品： ${row?.productName}?`,

          handleModalSure: async () => {
            const params = {
              productId: row?.id,
              productStatus: row?.productStatus == 1 ? 0 : 1
            };
            await ApiProduct.editStatus(params);
            Msg.success(`${row?.status == "1" ? "禁用" : "启用"} 状态成功~`);
            await getList();
          },

          handleModalCancel: () => {
            Msg.error("已取消当前操作~");
          }
        });
        break;
    }
  }, []);

  return (
    <div className={"app-container"}>
      <SuperPage
        configSearch={{ ...newSuperPageConfig.configSearch, handleSearch }}
        configHandle={superPageConfig.configHandle}
        configTable={{
          ...newSuperPageConfig.configTable,
          data: tableData,
          isShowPagination: false
        }}
        configPagination={{
          current: queryParams.current.page,
          pageSize: queryParams.current.size,
          total,
          handleChangePagination
        }}
        handleCustomBtn={handleCustomBtn}
      />
    </div>
  );
};

export default memo(Product);
