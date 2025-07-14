function loadAssets(str: string) {
  const index = str.lastIndexOf('/')
  if (index !== -1) {
    const startWith = str.substring(0, index)
    const imageName = str.substring(index + 1)
    switch (startWith) {
      case 'not-data':
        return getNotDataImagesUrl(imageName)
      // 不断添加新的子目录即可
    }
  } else {
    return new URL(`../../assets/images/${str}`, import.meta.url).href
  }
}

/**
 * 获取404_images文件夹下图片的地址
 * @param name 基于assets/images/404_images文件夹下的图片名称
 * @returns 图片地址
 */
export function getNotDataImagesUrl(name: string) {
  return new URL(`../../assets/images/not-data/${name}`, import.meta.url).href
}

export { loadAssets }
