declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";

declare module "*.less";
declare module "*.css";
declare module "*.json";
declare module "*.module.less" {
  const content: { [className: string]: string };
  export default content;
}
