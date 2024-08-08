import React, { forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import { useTitle } from "@/hooks";

import { PageForm } from "@/components/page-cpns";
import { pageFormConfig } from "./config/page-form.config";

import useCommStore from "@/store/comm/comm";
import ApiUser from "@/apis/system/user";
import { modal, Msg } from "@/utils/ant-methods";
import useSetState from "@/hooks/use-set-state";
import { HandleList, HandleTree } from "@/utils/comm";
import AddOrEditRate from "@/views/product/add-or-edit-rate";
import ApiProduct from "@/apis/product";
import { Col, Row } from "antd";

const gridCol = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 24 },
  lg: { span: 24 },
  xl: { span: 24 },
  xxl: { span: 12 }
};
const AddOrEdit: React.FC = () => {
  const [title] = useTitle("产品");

  const navigate = useNavigate();
  const location = useLocation();
  const { code, row = {} } = location?.state;

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
    // product_type 产品类型 product_periods 产品期数 mortgage_type 抵押类型 repay_type 还款类型
    commStore.apiDictProduct(["product_type", "product_periods", "mortgage_type", "repay_type"]);
    // commStore.apiTreeOrg();
  }, []);

  // 初始化 --- 详情 数据
  const [initFormValue, setInitFormValue] = useSetState<any>({});

  // 初始化 --- 详情
  useEffect(() => {
    switch (code) {
      case "add":
        // setInitFormValue({});
        break;

      case "edit":
        initDetail();
        break;
    }
  }, []);

  // 初始化 --- 详情
  async function initDetail() {
    const res = await ApiProduct.detail({ productId: row.id });
    const obj = { ...row, ...res?.data };
    obj.productType = obj?.productType?.toString();
    obj.mortgageType = obj?.mortgageType?.split(",");
    obj.periodsStr = obj?.periodsStr?.split(",");
    obj.repayType = obj?.repayType?.split(",");

    if (obj?.rates) {
      const objList = obj?.rates?.map((item: any, index: number) => {
        return {
          key: `${new Date().getTime().toString()}-${index}`,
          productPeriods: item.period,
          productRate: item.customerRate,
          editable: true
        };
      });
      setCurtPeriodList(objList ?? []);
    }

    if (obj?.periodsStr) {
      const newPeriodsStr = obj?.periodsStr
        .sort((a: string | number, b: string | number) => Number(a) - Number(b))
        ?.map((item: any) => {
          return {
            label: item,
            value: item
          };
        });
      curtPeriodOptionsRef.current = newPeriodsStr;
      setCurtPeriodOptions(newPeriodsStr ?? []);
    }
    //
    // const curtOrgInfo = HandleTree.getNodeInfoByValue(commStore.treeOrg, "id", "childList", row?.orgId);
    // if (curtOrgInfo.status == 0) {
    //   obj.oldOrgName = obj.orgName;
    //   obj.organizationId = undefined;
    // }
    //
    setInitFormValue(obj);
  }

  const [curtPeriodOptions, setCurtPeriodOptions] = useState<{ label: string; value: string }[]>([]);
  const curtPeriodOptionsRef = useRef<{ label: string; value: string }[]>([]);
  const [curtPeriodList, setCurtPeriodList] = useState<any[]>([]);
  const rateRef = useRef<any>();
  // 初始化 --- 表单
  const newPageFormConfig = useMemo(() => {
    const { moduleList = [], ...rest } = pageFormConfig;
    // getPageFormConfig();

    const newModuleList = [...moduleList];
    newModuleList[0].configList = newModuleList?.[0]?.configList?.map((item) => {
      if (item.prop == "productType") {
        item!.configASelect!.options = commStore.dictProduct["product_type"];
      }
      if (item.prop == "periodsStr") {
        item!.configASelect!.options = commStore.dictProduct["product_periods"];
      }

      if (item.prop == "mortgageType") {
        item!.configASelect!.options = commStore.dictProduct["mortgage_type"];
      }

      if (item.prop == "repayType") {
        item!.configASelect!.options = commStore.dictProduct["repay_type"];
      }
      return item;
    });

    newModuleList[1].configList = [
      {
        type: "custom",
        label: "",
        prop: "1",
        moduleSlot: () => (
          <Row>
            <Col {...gridCol}>
              <AddOrEditRate ref={rateRef} list={curtPeriodList} options={curtPeriodOptions} />
            </Col>
          </Row>
        )
      }
    ];
    return {
      ...rest,
      moduleList: [...newModuleList]
    };
  }, [commStore.dictProduct, curtPeriodOptions, curtPeriodList]);

  const handlePageFormChangeValues = useCallback(
    (params: any) => {
      const curt = curtPeriodOptionsRef.current.map((item) => item.label);

      if (params?.periodsStr && !HandleList.arraysEqual(params.periodsStr, curt)) {
        const newPeriodsStr = params?.periodsStr
          .sort((a: number, b: number) => a - b)
          ?.map((item: any) => {
            return {
              label: item,
              value: item
            };
          });
        curtPeriodOptionsRef.current = newPeriodsStr;
        setCurtPeriodOptions(newPeriodsStr ?? []);
      }
    },
    [curtPeriodOptions]
  );

  // 确认
  const handlePageFormSure = useCallback(async (params: any) => {
    console.log(rateRef.current);
    const rateList = await rateRef.current?.getData?.();
    if (!rateList?.length) return;

    const newParams = JSON.parse(JSON.stringify(params));
    newParams.mortgageType = newParams?.mortgageType?.join(",");
    newParams.periodsStr = newParams?.periodsStr?.join(",");
    newParams.repayType = newParams?.repayType?.join(",");
    newParams.interestList = rateList;
    switch (code) {
      case "add":
        console.log("add ---->", newParams);
        await ApiProduct.add(newParams);
        Msg.success("新增成功");
        break;

      case "edit":
        newParams.productId = row?.id;
        await ApiProduct.edit(newParams);
        Msg.success("修改成功");
        break;
    }
    navigate("/product/list", { replace: true });
  }, []);
  //
  // 取消
  const handlePageFormCancel = useCallback(() => {
    navigate("/product/list", { replace: true });
  }, []);

  return (
    <PageForm
      {...newPageFormConfig}
      initialValues={initFormValue}
      title={title}
      handlePageFormSure={handlePageFormSure}
      handlePageFormCancel={handlePageFormCancel}
      handlePageFormChangeValues={handlePageFormChangeValues}
    />
  );
};

export default memo(AddOrEdit);
