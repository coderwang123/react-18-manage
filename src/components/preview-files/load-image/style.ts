import styled from "styled-components";
interface IStyledLoadImage {
  $time?: number;
}
const StyledLoadImage = styled.div.attrs<IStyledLoadImage>((props) => ({
  $time: props.$time
}))`
  position: relative;
  .lazy-load-image-background.blur {
    filter: blur(5px);
  }

  .lazy-load-image-background.blur.lazy-load-image-loaded {
    filter: blur(0);
    transition: filter ${(props) => props.$time}s;
  }

  .lazy-load-image-background.blur > img {
    opacity: 0;
  }

  .lazy-load-image-background.blur.lazy-load-image-loaded > img {
    opacity: 1;
    transition: opacity ${(props) => props.$time}s;
  }
  .file-loading {
    background: rgba(255, 255, 255, 0.3);
    //filter: blur(15px);
    width: 136px;
    height: 136px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 999;
    opacity: 1;
    transition: opacity ${(props) => props.$time}s;
    //background-color: red;
  }

  .lazy-load-image-background.blur. .file-loading {
    background: rgba(255, 255, 255, 0.3);
    //filter: blur(15px);
    width: 136px;
    height: 136px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 999;
    opacity: 0;
    //background-color: red;
  }
`;
export default StyledLoadImage;
