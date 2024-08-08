import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { fakeMenuH5, fakeMenuWeb, fakeOrg, fakeTestTable } from "@/fake-data";
import { IActionsComm, IStatesComm } from "@/store/comm/type";
import ApiComm from "@/apis/comm";
import { IApiOrg } from "@/apis/system/org/type";
import { IApiUser } from "@/apis/system/user/type";
import { HandleTree } from "@/utils/comm";
import { IApiComm } from "@/apis/comm/type";

const useCommStore = create<IStatesComm & IActionsComm>()(
  immer((setState, getState) => ({
    treeMenu: [],
    treeMenuWeb: [],
    treeMenuH5: [],

    listRole: [],
    treeOrg: [],
    listUser: [],

    dictProduct: {},

    // 获取 树 菜单（web）
    apiTreeMenu: async () => {
      const res = await ApiComm.treeMenu();
      setState({ treeMenu: res?.data });
    },

    // 获取 树 菜单（web 和 h5 分组）
    apiTreeMenuBySource: async () => {
      try {
        const res = await ApiComm.treeMenuBySource();
        setState({
          treeMenuWeb: HandleTree.delNodeChildByLength(res?.data?.["1"] ?? [], "child") ?? [],
          treeMenuH5: HandleTree.delNodeChildByLength(res?.data?.["2"] ?? [], "child") ?? []
        });
      } catch {
        setState({
          treeMenuWeb: fakeMenuWeb,
          treeMenuH5: fakeMenuH5
        });
      }
    },

    // 获取 列表 角色
    apiListRole: async () => {
      try {
        const res = await ApiComm.listRole();

        setState({ listRole: res?.data ?? [] });

        return getState().listRole;
      } catch {
        setState({ listRole: [] });
      }
    },

    // 获取 树 组织
    apiTreeOrg: async (params?: IApiOrg.TTree) => {
      try {
        const res = await ApiComm.treeOrg(params);
        setState({ treeOrg: HandleTree.delNodeChildByLength(res?.data ?? [], "childList") ?? [] });
      } catch {
        setState({ treeOrg: fakeOrg });
      }
    },

    // 获取 列表 员工
    apiListUser: async (params?: IApiUser.TList) => {
      try {
        const res = await ApiComm.listUser(params);
        setState({ listUser: res?.data?.records ?? [] });
      } catch {
        setState({ listUser: fakeTestTable });
      }
    },

    apiDictProduct: async (paramsList: IApiComm.TListDictProduct[]) => {
      try {
        console.log("api DictProduct params ===>", paramsList);
        const distInfo: any = {};
        for (let paramsListElement of paramsList) {
          const res = await ApiComm.dictProduct({ key: paramsListElement });
          console.log(`${paramsListElement} ----`, res);
          distInfo[paramsListElement] = res?.data ?? [];
        }
        setState({ dictProduct: distInfo ?? {} });
      } catch {
        setState({ dictProduct: {} });
      }
    }
  }))
);

export default useCommStore;
