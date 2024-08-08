import { checkPasswordRule } from "@/utils/comm";
// 密码校验规则
export function validatePassword(rule: any, value: string, cb: any) {
  if (value === "") {
    cb(new Error("请输入密码"));
  } else {
    const result: string = checkPasswordRule(value);
    if (result === "校验通过") {
      cb();
    } else {
      cb(new Error(result));
    }
  }
}

// 手机号

export function validateMobile(rule: any, value: string, cb: any) {
  if (!value) {
    cb(new Error("请输入手机号"));
  } else {
    const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    if (reg.test(value)) {
      cb();
    } else {
      cb(new Error("请输入正确手机号"));
    }
  }
}
