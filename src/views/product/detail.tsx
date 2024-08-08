import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import BScroll from "@/components/b-scroll/b-scroll";
import { PageDetail } from "@/components/page-cpns";
import { pageDetailConfig } from "./config/page-detail.config";
import { useLocation, useNavigate } from "react-router-dom";
import useSetState from "@/hooks/use-set-state";
import ApiProduct from "@/apis/product";
import useCommStore from "@/store/comm/comm";
import { useShallow } from "zustand/react/shallow";
import AddOrEditRate from "@/views/product/add-or-edit-rate";
import { Col, Row } from "antd";

interface IDetail {
  detailInfo: any;
}
const gridCol = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 24 },
  lg: { span: 24 },
  xl: { span: 24 },
  xxl: { span: 12 }
};
const Detail: React.FC<IDetail> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { code, row = {} } = location?.state;

  // 初始化 --- 详情 数据
  const [initFormValue, setInitFormValue] = useSetState<any>({});
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

  const newPageDetailConfig = useMemo(() => {
    const config = { ...pageDetailConfig };
    config.configList = config?.configList?.map((item) => {
      if (item.prop == "productType") {
        item!.configOptionsTranslate!.options = commStore.dictProduct["product_type"];
      }

      if (item.prop == "mortgageType") {
        item!.configOptionsTranslate!.options = commStore.dictProduct["mortgage_type"];
      }

      if (item.prop == "repayType") {
        item!.configOptionsTranslate!.options = commStore.dictProduct["repay_type"];
      }
      return item;
    });
    return config;
  }, [commStore.dictProduct]);

  // 初始化 --- 详情
  useEffect(() => {
    initDetail();
  }, [row]);

  const [curtPeriodOptions, setCurtPeriodOptions] = useState<{ label: string; value: string }[]>([]);
  const [curtPeriodList, setCurtPeriodList] = useState<any[]>([]);
  const rateRef = useRef<any[]>([]);
  // 初始化 --- 详情
  async function initDetail() {
    const res = await ApiProduct.detail({ productId: row.id });
    const obj = { ...row, ...res?.data };
    obj.productType = obj?.productType?.toString();
    obj.mortgageType = obj?.mortgageType?.split(",");
    obj.repayType = obj?.repayType?.split(",");
    obj.periodsStr = obj?.periodsStr?.split(",").join("、");
    const periodsStr = res?.data?.periodsStr?.split(",");
    if (periodsStr) {
      const newPeriodsStr = periodsStr?.map((item: any) => {
        return {
          label: item,
          value: item
        };
      });
      setCurtPeriodOptions(newPeriodsStr ?? []);
    }

    if (obj?.rates) {
      const objList = obj?.rates?.map((item: any, index: number) => {
        return {
          key: `${new Date().getTime().toString()}-${index}`,
          productPeriods: item.period,
          productRate: item.customerRate,
          moneyRate: item.moneyRate,
          editable: true
        };
      });
      setCurtPeriodList(objList ?? []);
    }
    console.log("obj --->", obj);
    setInitFormValue(obj);
  }
  return (
    <BScroll style={{ height: "100%" }}>
      <PageDetail
        {...newPageDetailConfig}
        detailInfo={initFormValue}
        customSlot={() => (
          <Row>
            <Col {...gridCol}>
              <AddOrEditRate
                isAddOrEdit={false}
                ref={(el) => rateRef.current}
                list={curtPeriodList}
                options={curtPeriodOptions}
              />
            </Col>
          </Row>
        )}
      />
    </BScroll>
  );
};

export default memo(Detail);
