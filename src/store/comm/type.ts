import { IApiOrg } from "@/apis/system/org/type";
import { IApiUser } from "@/apis/system/user/type";
import { IApiComm } from "@/apis/comm/type";

export interface IStatesComm {
  treeMenu: any[];
  treeMenuWeb: any[];
  treeMenuH5: any[];

  listRole: any[];

  treeOrg: any[];

  listUser: any[];

  dictProduct: any;
}

export interface IActionsComm {
  apiTreeMenu: () => void;
  apiTreeMenuBySource: () => void;

  apiListRole: () => Promise<any>;

  apiTreeOrg: (params?: IApiOrg.TTree) => void;
  apiListUser: (params?: IApiUser.TList) => void;

  apiDictProduct: (paramsList: IApiComm.TListDictProduct[]) => void;
}
