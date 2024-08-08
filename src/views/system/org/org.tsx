import React, { memo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import { modal, Msg } from "@/utils/ant-methods";

import { SuperPage } from "@/components/page-cpns";
import { superPageConfig } from "./config/super-page.config";

import useCommStore from "@/store/comm/comm";
import ApiOrg from "@/apis/system/org";

const Dept: React.FC = () => {
  const navigate = useNavigate();

  const commStore = useCommStore(
    useShallow((state) => {
      return {
        treeOrg: state.treeOrg,
        apiTreeOrg: state.apiTreeOrg
      };
    })
  );
  useEffect(() => {
    commStore.apiTreeOrg();
  }, []);

  const handleCustomBtn = useCallback((params: any) => {
    const { code, row } = params;
    switch (code) {
      case "add":
        navigate("/system/org/add", {
          state: {
            code
          }
        });
        break;

      case "addChild":
        if (row.orgLevel >= 3) {
          return Msg.error("组织目前最多只能三级");
        }
        navigate("/system/org/add", {
          state: {
            code,
            row
          }
        });
        break;

      case "edit":
        navigate("/system/org/edit", {
          state: {
            code: "edit",
            row
          }
        });
        break;

      case "disabled":
        modal({
          content: `是否${row?.status == "1" ? "禁用" : "启用"} 当前组织： ${row?.orgName}?`,

          handleModalSure: async () => {
            const params = {
              id: row?.id,
              status: row?.status == 1 ? 0 : 1
            };

            await ApiOrg.editStatus(params);
            Msg.success(`${row?.status == "1" ? "禁用" : "启用"} 状态成功~`);
            commStore.apiTreeOrg();
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
        configHandle={superPageConfig.configHandle}
        configTable={{
          ...superPageConfig.configTable,
          data: commStore.treeOrg,
          isShowPagination: false
        }}
        handleCustomBtn={handleCustomBtn}
      />
    </div>
    // <BScroll>
    //   <div className={"app-container"}>
    //     {/*<PageSearch {...pageSearchConfig} handleSearch={(params) => commStore.apiTreeOrg(params)} />*/}
    //
    //     <PageTable
    //       {...pageTableConfig}
    //       data={commStore.treeOrg}
    //       handleCustomBtn={handleCustomBtn}
    //       isShowPagination={false}
    //     />
    //   </div>
    // </BScroll>
  );
};

export default memo(Dept);
