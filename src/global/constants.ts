export const FM_TOKEN = "fm-token";
export const FM_REFRESH_TOKEN = "fm-refresh-token";
export const USER_INFO = "user-info";
export const ALL_Menu = "all-menu";
// export const USER_MENUS = "userMenus";
// export const USER_BUTTONS = "userButtons";
export const UPLOAD_URL = "/api/openx-resource/oss/endpoint/put-file";

interface IPageAndSizeKey {
  PAGE_KEY: string;
  SIZE_KEY: string;
}
export const PAGE_SIZE_COMMON_KEY: IPageAndSizeKey = {
  PAGE_KEY: "page",
  SIZE_KEY: "size"
};
