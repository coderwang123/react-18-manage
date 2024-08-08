import React, { memo, useCallback, useLayoutEffect, useRef, useState } from "react";
import { useShallow } from "zustand/react/shallow";

import { modal, Msg } from "@/utils/ant-methods";

import StyledRole from "./style";
import LeftRole from "./c-cpns/left-role/left-role";
import RightPer from "./c-cpns/right-per/right-per";

import { BtnPrimary } from "@/components/ant-comm-cpns";
import { withPerBtn } from "@/hoc";

import { ModalForm, PageHandle } from "@/components/page-cpns";
import { pageConfigHandle } from "./config/page-handle.config";
import { modalFormConfig } from "./config/modal-form.config";

import { HandleTree } from "@/utils/comm";

import useCommStore from "@/store/comm/comm";
import ApiRole from "@/apis/system/role";

const PerButton = withPerBtn(BtnPrimary);

const Role: React.FC = () => {
  const [isShowModelForm, setIsShowModelForm] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const formData = useRef<any>({});

  const commStore = useCommStore(
    useShallow((state) => {
      return {
        treeMenuWeb: state.treeMenuWeb,
        treeMenuH5: state.treeMenuH5,
        apiTreeMenuBySource: state.apiTreeMenuBySource,

        listRole: state.listRole,
        apiListRole: state.apiListRole
      };
    })
  );

  useLayoutEffect(() => {
    commStore.apiTreeMenuBySource();
    commStore.apiListRole();
  }, []);

  // 当前 角色 信息
  const [curtRoleInfo, setCurtRoleInfo] = useState<any>({});

  // 当前 角色 权限 信息
  const [curPerInfo, setCurPerInfo] = useState<any>({
    idsWeb: [],
    idsH5: [],
    dataPermission: -1
  });

  const curtOriginalPreInfo = useRef<{
    idsWeb: (string | number)[];
    idsH5: (string | number)[];
    dataPermission: number;
  }>({
    idsWeb: [],
    idsH5: [],
    dataPermission: -1
  });

  const btnCode = useRef<any>();
  const leftRoleRef = useRef<any>();
  const handleCustomBtn = useCallback(
    (params: any) => {
      const { code, row } = params;
      btnCode.current = code;
      switch (code) {
        case "add": // 新增角色
          formData.current = {};
          setIsShowModelForm(true);
          break;

        case "edit": // 删除角色
          formData.current = row;
          setIsShowModelForm(true);
          break;

        case "remove": // 删除角色
          modal({
            content: `是否删除当前角色：${row?.roleName}?`,

            handleModalSure: async () => {
              if (!row?.roleId) return Msg.error("请选择角色");
              await ApiRole.remove({ roleId: row.roleId });
              Msg.success(`角色删除成功~`);
              await commStore.apiListRole();
              setCurtRoleInfo({});
              setCurPerInfo((prevState: any) => {
                return {
                  ...prevState,
                  idsWeb: [],
                  idsH5: [],
                  dataPermission: -1
                };
              });
              leftRoleRef.current.handleResetRoleClick?.();
            }
          });
          break;

        case "per":
          console.log("preeeee", curtOriginalPreInfo.current);
          if (!curtRoleInfo?.roleId) return Msg.error("请选择角色");
          setIsDisabled((prevState) => !prevState);
          const orObj = JSON.parse(JSON.stringify(curtOriginalPreInfo.current));
          setCurPerInfo(orObj);
          break;

        default:
          break;
      }
    },
    [curtRoleInfo]
  );

  // 新增 角色
  const handleModalFormSure = useCallback(async (form: any) => {
    switch (btnCode?.current) {
      case "add":
        await ApiRole.add(form);
        Msg.success("新增角色成功~");
        setIsShowModelForm(false);
        break;
      case "edit":
        form.roleId = formData.current.roleId;
        await ApiRole.edit(form);
        Msg.success("编辑角色成功~");
        setIsShowModelForm(false);
        break;
    }
    await commStore.apiListRole();
  }, []);

  // 新增 角色 取消
  const handleModalFormCancel = useCallback((form: any) => {
    console.log("form ===>", form);
    setIsShowModelForm(false);
  }, []);

  // 左侧 角色 点击（保存 点击的角色信息，并且 去获取 对应的权限）
  const handleRoleClick = useCallback(
    async (info: any) => {
      console.log("左侧 角色 点击（保存 点击的角色信息，并且 去获取 对应的权限");
      setCurtRoleInfo(info);
      setIsDisabled(true);

      setCurPerInfo((prevState: any) => {
        return {
          ...prevState,
          dataPermission: info?.dataPermission
        };
      });

      if (info?.roleId) {
        const res = await ApiRole.getCurtPerByRoleId({ roleId: info.roleId });
        console.log("进来了 ==========》 ", curtOriginalPreInfo.current);
        curtOriginalPreInfo.current.dataPermission = info?.dataPermission;
        curtOriginalPreInfo.current.idsWeb = HandleTree.getFieldValueListByFieldKey(
          res?.data?.["1"] ?? [],
          "id",
          "child"
        );
        curtOriginalPreInfo.current.idsH5 = HandleTree.getFieldValueListByFieldKey(
          res?.data?.["2"] ?? [],
          "id",
          "child"
        );
        setCurPerInfo((prevState: any) => {
          return {
            ...prevState,
            idsWeb: HandleTree.getFieldValueListByFieldKey(res?.data?.["1"] ?? [], "id", "child"),
            idsH5: HandleTree.getFieldValueListByFieldKey(res?.data?.["2"] ?? [], "id", "child")
          };
        });
      }
    },
    [curPerInfo]
  );

  // 右侧 角色 分配 确定
  const handlePerSure = useCallback(
    async (perInfo: any) => {
      console.log("进来了么");
      if (!curtRoleInfo?.roleId) return Msg.error("清选择角色");

      modal({
        content: `是否确认为当前角色：${curtRoleInfo?.roleName} 分配权限?`,

        handleModalSure: async () => {
          const params = {
            roleId: curtRoleInfo?.roleId,
            menuIds: [...perInfo.idsWeb, ...perInfo.idsH5],
            dataPermission: perInfo.dataPermission
          };
          await ApiRole.editCurtPerByRoleId(params);

          curtOriginalPreInfo.current = perInfo;
          Msg.success("分配角色成功~");

          if (curtRoleInfo.dataPermission != perInfo.dataPermission) {
            const list = await commStore.apiListRole();
            setCurtRoleInfo((prevState: any) => ({
              ...prevState,
              ...list?.find((item: any) => item.roleId === curtRoleInfo.roleId)
            }));
          }
          setIsDisabled(true);
        },

        handleModalCancel: () => {
          Msg.error("已取消当前操作~");
        }
      });
    },
    [curtRoleInfo]
  );

  // 角色 分配 取消
  const handlePerCancel = useCallback(() => {
    const orObj = JSON.parse(JSON.stringify(curtOriginalPreInfo.current));
    setCurPerInfo(orObj);
    setIsDisabled(true);
  }, [curPerInfo]);

  return (
    <StyledRole className={"app-container"}>
      <PageHandle {...pageConfigHandle} handleCustomBtn={handleCustomBtn} />

      <div className={"content"}>
        <LeftRole handleRoleClick={handleRoleClick} handleCustomBtn={handleCustomBtn} ref={leftRoleRef} />

        <RightPer
          curtPerInfo={curPerInfo}
          handlePerSure={handlePerSure}
          handlePerCancel={handlePerCancel}
          isDisabled={isDisabled}
          slotHeader={() => (
            <>
              <span className={"role-name"}>角色：{curtRoleInfo?.roleName}</span>
              <div>
                <PerButton
                  name={isDisabled ? "编辑角色权限" : "取消编辑"}
                  code={"per"}
                  permission={"web:role:pre"}
                  icon={"EditOutlined"}
                  handleCustomBtn={handleCustomBtn}
                />
              </div>
            </>
          )}
        />
      </div>

      {isShowModelForm && (
        <ModalForm
          {...modalFormConfig}
          initialValues={formData.current}
          handleModalFormSure={handleModalFormSure}
          handleModalFormCancel={handleModalFormCancel}
        />
      )}
    </StyledRole>
  );
};

export default memo(Role);
