export const SvgIcon: any = {};
const context = require.context("./", true, /.tsx$/);
context.keys().forEach((key) => {
  const componentName1 = key.replace("./svg-", "svg-").replace(".tsx", "");
  const componentName2 = key.replace("./svg-", "").replace(".tsx", "");
  SvgIcon[componentName1] = context(key).default;
  SvgIcon[componentName2] = context(key).default;
});
