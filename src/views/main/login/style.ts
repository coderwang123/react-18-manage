import styled from "styled-components";
import ImgLogin from "@/assets/images/login.jpg";

export const StyledLogin = styled.div`
  background: antiquewhite;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${ImgLogin}) no-repeat;
  background-size: 100% 100%;
  position: relative;
  .login-span {
    position: absolute;
    left: 240px;
    top: 66px;
    width: 219px;
    height: 33px;
  }

  .login-content {
    width: 468px;
    height: 456px;
    background: #ffffff;
    border-radius: 8px;
  }

  h2 {
    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 400;
    font-size: 29px;
    color: rgba(62, 62, 62, 0.85);
    line-height: 33px;
    text-align: center;
    font-style: normal;
    padding: 48px 0;
  }

  .icp {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 25px;
    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    line-height: 22px;
    text-align: right;
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      margin-bottom: 9px;
      text-align: center;
    }

    span {
      text-align: center;
    }
  }

  .img-code-wrap {
    .img-code-content {
      display: flex;
      justify-content: space-between;
      .ant-image {
        margin-left: 8px;
      }
    }
  }
`;
