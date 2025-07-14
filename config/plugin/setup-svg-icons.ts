/* 插件核心价值与特性
    vite-plugin-svg-icons 是一款专为Vite构建工具设计的SVG图标管理插件，其核心价值在于通过自动化雪碧图生成和组件化方案，
    解决前端项目中SVG图标管理混乱、重复请求等痛点。相较于传统图标方案，它具备以下优势：

    性能优化
    预生成雪碧图减少HTTP请求
    内置缓存机制，仅当文件修改时重新生成
    支持按需加载，降低初始包体积
    开发体验提升
    热更新（HMR）支持实时预览
    组件化调用方式简化使用流程
    自动类型提示（TypeScript友好）
    灵活配置
    支持自定义symbolId命名规则（如icon-[dir]-[name]）
    可配置图标目录和DOM插入位置
    兼容Vue2/3、React等多框架
 */

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
export  function setupSvgIcons() {
  return createSvgIconsPlugin({
    // 指定要缓存的文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]'
  })
}
