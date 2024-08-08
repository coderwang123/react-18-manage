import styled from "styled-components";

const StyledAllFileList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .file-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-left: 22px;
  }

  .file-item {
    margin-right: 22px;
    width: 138px;
    height: 136px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 2px 2px;
    overflow: hidden;
    margin-bottom: 22px;
    cursor: pointer;
    position: relative;

    &.active {
      border-radius: 2px;
      border: 1px solid var(--color-primary);
    }

    &::after {
      content: "预览";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
    &:hover::after {
      opacity: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
`;
export default StyledAllFileList;
