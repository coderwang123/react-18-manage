import styled from "styled-components";
import { Modal } from "antd";

const StyledPreviewFileModal = styled(Modal)`
  box-sizing: border-box;
  .left,
  .right {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    &:hover {
      cursor: pointer;
    }
  }
  .left {
    left: 0px;
  }
  .right {
    right: 0px;
  }

  .ant-modal-content {
    background-color: transparent;
    padding: 0;
  }
  .ant-modal-close-x {
    width: 50px;
    height: 50px;

    border-radius: 50%;
    background-color: #333333;
    color: #fff;
  }
  .ant-modal-body {
    box-shadow: none;
    background: transparent;
    text-align: center;
    height: calc(100vh - 118px);

    .p-content {
      width: calc(100%);
      max-width: calc(100%);
      overflow: hidden;
      height: 100%;
      //border: 1px solid red;
      //border: 5px solid aquamarine;
      //position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 100px;
      box-sizing: border-box;
      position: absolute;
      inset: 0;

      img {
        //max-width: calc(100% - 200px);
        //height: 80%;
      }
      video {
        max-width: calc(100% - 200px);
        height: 80%;
      }
    }
  }

  .handle {
    padding: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 999;
  }

  .pageTool {
    z-index: 99;
    font-size: 18px;
    background: rgb(66, 66, 66);
    color: white;
    padding: 8px 15px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    .anticon {
      margin: 0 10px;
    }
    i {
      padding: 5px;
      margin: 0 5px;
      &:hover {
        background: #333;
      }
    }
    input {
      display: inline-block;
      width: 50px;
      text-align: center;
      margin-right: 10px;
      height: 24px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;

export default StyledPreviewFileModal;
