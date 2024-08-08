import styled from "styled-components";

export const LeftRoleWrap = styled.div`
  //background: #724d77;
  width: 304px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h2 {
    //text-align: center;
    font-family:
      PingFangSC,
      PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: #000000;
    line-height: 22px;
    text-align: left;
    font-style: normal;
    //border: 1px solid red;
    background: var(--color-minor);
    border-radius: 2px 2px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
  }

  ul {
    width: 100%;
    height: calc(100% - 40px);
    li {
      width: 100%;
      height: 40px;
      margin-bottom: 2px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      //border: 1px solid red;
      position: relative;
      cursor: pointer;
      color: var(--color-666);
      &:hover {
        background: rgba(var(--color-primary-16), 0.5);
        color: #fff;
      }

      .name-wrap {
        //border: 1px solid red;
        //flex: 1;
        width: 75%;
        display: flex;
        justify-content: space-between;
        .name {
          width: 80%;
          box-sizing: border-box;
          padding-left: 40px;
          //background: blanchedalmond;
        }
      }

      .icon-wrap {
        margin-right: 8px;
        display: flex;
        justify-content: flex-start;
        //position: absolute;
        //right: 9px;
        //top: 50%;
        //transform: translateY(-50%);
        .edit,
        .remove {
          width: 24px !important;
        }
        .edit {
          color: #ff8a61;
        }

        .remove {
          margin-left: 0;
          color: #ccc;
        }
      }

      &.active {
        background: var(--color-primary);
        color: #fff;
      }
    }
  }
`;
