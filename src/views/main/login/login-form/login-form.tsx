import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import { Button, Form, Image, Input } from "antd";
import { LockOutlined, MobileOutlined } from "@ant-design/icons";

import StyledForm from "./style";
import { ModalForm } from "@/components/page-cpns";

import { Msg } from "@/utils/ant-methods";

import useSetState from "@/hooks/use-set-state";
import useLoginStore from "@/store/login";
import ApiLogin from "@/apis/login";
import { firstMenu } from "@/utils/system-permission";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const loginStore = useLoginStore(
    useShallow((state) => {
      return {
        disabledLogin: state.disabledLogin,
        apiLogin: state.apiLogin
      };
    })
  );

  function getPhone() {
    const phone = form.getFieldValue("phone");
    if (!phone) {
      return Msg.error("请输入手机号");
    } else {
      return phone;
    }
  }

  const initValue = {
    // phone: "18355500000", // 超级管理员
    // phone: "13322332233", // 东鹏权限测试
    phone: process.env.NODE_ENV == "production" ? "" : "13211112222", // 东鹏订单测试
    code: process.env.NODE_ENV == "production" ? "" : "123456"
  };

  // 数据: 图形码 信息
  const [imgCodeInfo, setImgCodeInfo] = useSetState({
    url: "", // 图形码地址
    isShowImgCodeModal: false // 获取 验证码 文案
  });
  // 1 获取验证码（先输入图形验证码）
  async function handleGetCode(isRefresh?: boolean) {
    const phone = getPhone();
    if (phone) {
      const res = await ApiLogin.imgCode({ phone });
      // 设置 图形码信息
      if (!isRefresh) {
        setImgCodeInfo({ url: res?.data, isShowImgCodeModal: true });
      } else {
        setImgCodeInfo({ url: res?.data });
      }
    }
  }

  // 数据: 验证码 信息
  const [codeInfo, setCodeInfo] = useSetState({
    text: "获取验证码", // 获取 验证码 文案
    isDisabled: false // 获取 验证码 禁用
  });
  // 数据: 验证码 发送 成功之后 开启定时器
  let timerCode: NodeJS.Timeout | null;
  // 1.1 图形验证码 确定（发送验证码）
  const handleImgCodeModalSure = useCallback(async (params?: any) => {
    try {
      const phone = getPhone();
      if (params && params.imgCode && phone) {
        setCodeInfo({ isDisabled: true }); // 禁用 获取验证码

        await ApiLogin.code({ phone, imgCode: params.imgCode });
        Msg.success("验证码发送成功~");
        setImgCodeInfo({ isShowImgCodeModal: false });
        startTimer(); // 开启定时器逻辑
      }
    } catch {
      // 异常 解开 获取验证码
      setCodeInfo({ isDisabled: false });
    }
  }, []);

  // 开启 定时
  function startTimer() {
    let time = 60;

    clearTimer(timerCode); // 先 清定时
    handleTimer(time); // 立即执行 一次 定时逻辑

    timerCode = setInterval(() => {
      time--;
      handleTimer(time); // 定时器里 执行 定时逻辑
    }, 1000);
  }

  // 处理 定时
  function handleTimer(time: number) {
    console.log("--------------------- 定时器");
    setCodeInfo({ text: `${time}秒后重新获取` });

    if (time == 0) {
      setCodeInfo({ text: `获取验证码`, isDisabled: false });
      clearTimer(timerCode);
    }
  }

  // 清楚 定时
  function clearTimer(timerInterval?: NodeJS.Timeout | null) {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  useEffect(() => {
    return () => {
      clearTimer(timerCode);
    };
  }, []);

  // 1.2 图形验证码 取消
  const handleImgCodeModalCancel = useCallback(() => {
    setImgCodeInfo({ isShowImgCodeModal: false });
  }, []);

  // 数据: 按钮提交 禁用
  const handleSubmit = useCallback(async (values: any) => {
    const { phone, code } = values;
    await loginStore.apiLogin({ phone, code });
    clearTimer(timerCode);
    navigate(firstMenu.menuPath);
  }, []);

  return (
    <>
      <StyledForm
        form={form}
        initialValues={initValue}
        onFinish={handleSubmit}
        autoComplete="off"
        size={"large"}
        validateTrigger={"onBlur"}
      >
        <Form.Item
          label=""
          name="phone"
          rules={[{ required: true, message: "请输入手机号码" }]}
          className={"phone-wrap"}
        >
          <Input placeholder="请输入手机号码" prefix={<MobileOutlined style={{ color: "#FE4301" }} />} />
        </Form.Item>

        <Form.Item label="" className={"code-wrap"}>
          <div className={"code-content"}>
            <Form.Item name="code" noStyle rules={[{ required: true, message: "请输入验证码" }]}>
              <Input placeholder="请输入验证码" prefix={<LockOutlined style={{ color: "#FE4301" }} />} />
            </Form.Item>
            <Button type="default" disabled={codeInfo.isDisabled} onClick={() => handleGetCode()}>
              {codeInfo.text}
            </Button>
          </div>
        </Form.Item>

        <Form.Item className={"submit-wrap"}>
          <Button
            type="primary"
            block
            loading={loginStore.disabledLogin}
            disabled={loginStore.disabledLogin}
            htmlType="submit"
          >
            登录
          </Button>
        </Form.Item>
      </StyledForm>

      {imgCodeInfo.isShowImgCodeModal && (
        <ModalForm
          title={"图形验证"}
          width={"410px"}
          handleModalFormSure={handleImgCodeModalSure}
          handleModalFormCancel={handleImgCodeModalCancel}
          getContainer={".login-wrap"}
          slotCustom={() => (
            <Form.Item label="" className={"img-code-wrap"}>
              <div className={"img-code-content"}>
                <Form.Item name="imgCode" noStyle rules={[{ required: true, message: "请输入图形码" }]}>
                  <Input placeholder="请输入图形码" prefix={<LockOutlined style={{ color: "#FE4301" }} />} />
                </Form.Item>

                <Image
                  src={imgCodeInfo.url}
                  onClick={() => handleGetCode(false)}
                  preview={false}
                  style={{ cursor: "pointer" }}
                ></Image>
              </div>
            </Form.Item>
          )}
        />
      )}
    </>
  );
};

export default memo(LoginForm);
