import { IApiLogin } from "@/apis/login/type";

export interface IStatesLogin {
  token: string;
  userInfo: TUserInfo;
  allMenu: any[];

  disabledLogin: boolean;

  firstMenu: any;
  permissionMenu: any[];
  permissionRoute: any[];
  permissionButton: any[];
}

type TUserInfo = {
  [key: string | number]: any;
  id: string; //
  employeeName?: string; //
  orgId: number;
  orgName: number;
  phone: string;
};

export interface IActionsLogin {
  apiLogin: (params: IApiLogin.TLogin) => Promise<any>;
  cacheLogout: () => void;

  apiUserInfo: () => Promise<any>;

  apiPermission: () => Promise<any>;
  cachePermission: () => void;
  setPermission: () => void;

  setCache: (params: { token?: string; userInfo?: TUserInfo; allMenu?: any[] }) => void;
  getCache: () => { token?: string; userInfo?: TUserInfo; allMenu?: any[] };
}
