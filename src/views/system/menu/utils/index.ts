export function getParams(code: "add" | "edit" | "reset", initForm: any, submitForm?: any) {
  console.log("getParams ------initForm---------------------------> ", initForm);
  console.log("getParams ------submitForm---------------------------> ", submitForm);

  const resetKyeObj: any = {};

  // 新增 initForm 都是空字段
  if (code === "add" && submitForm) {
    return Object.assign({}, initForm, submitForm);
  }

  // 修改 循环rowObj，如果 拿到的表单data 循环中没有 则给他空 服了。
  if (code === "edit" && submitForm) {
    Object.keys(initForm).forEach((key) => {
      if (!submitForm.hasOwnProperty(key)) {
        if (key == "menuSource") {
          resetKyeObj["menuSource"] = initForm[key];
        } else {
          resetKyeObj[key] = "";
        }
      }
    });
    resetKyeObj.id = initForm.id;
    return Object.assign({}, resetKyeObj, submitForm);
  }

  if (code === "reset") {
    Object.keys(initForm).forEach((key) => {
      if (key != "menuSource") {
        initForm[key] = "";
      }
    });
    initForm.menuType = 0;
    initForm.hidden = 1;
    initForm.parentId = 0;
  }
}
export function dynamicCont(type: number) {
  if (type === 0) {
    return "目录";
  }
  if (type == 1) {
    return "菜单";
  }
  if (type == 2) {
    return "按钮";
  }
  return "";
}
