// 流下载方法
import { formatTime } from "@/utils/comm";
function getFileName(fileName: string) {
  let newFileName = "";
  const data = formatTime(new Date());
  newFileName = fileName ? `${fileName}${data}` : new Date().getTime().toString();
  return newFileName;
}

export class DownloadFile {
  static byStream(res: any, fileName: string) {
    console.log("res", res);
    const url = window.URL.createObjectURL(
      new Blob([res], {
        type: "application/vnd.ms-excel;charset=utf-8"
      })
    );
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    console.log("getFileName(fileName) ===>", getFileName(fileName));
    link.setAttribute("download", `${getFileName(fileName)}.xls`); // 第二个参数是自定义的名字,根据自己需要, 特别注意一下，苹果本上这个下载下来是没有后缀名的，但是可以打开，如果需要就带着后缀名.xsl。
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  static byA(url: string, fileName: string) {
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    link.setAttribute("download", `${getFileName(fileName)}.xls`); // 第二个参数是自定义的名字,根据自己需要, 特别注意一下，苹果本上这个下载下来是没有后缀名的，但是可以打开，如果需要就带着后缀名.xsl。
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

/* 获取视频第一帧 */
/**
 * 获取视频的封面图信息
 * @param url 视频地址
 * @param second 秒数
 */
export async function getVideoBase64(url: string, second: number = 0) {
  const video = document.createElement("video");
  video.setAttribute("crossOrigin", "anonymous"); // 处理跨域
  video.setAttribute("src", url);
  // 静音操作，防止播放失败
  video.setAttribute("muted", "muted");
  video.addEventListener("loadeddata", async () => {
    const canvas = document.createElement("canvas");
    const { width, height } = video; // canvas的尺寸和图片一样
    canvas.width = width;
    canvas.height = height;

    if (second) {
      video.currentTime = second;
      // 播放到当前时间的帧，才能截取到当前的画面
      await video.play();
      video.pause();
    }

    canvas.getContext("2d")?.drawImage(video, 0, 0, width, height);
    return canvas.toDataURL("image/jpeg");
  });
}
