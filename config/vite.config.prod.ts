import { mergeConfig, defineConfig } from 'vite'
import configComm from './vite.config.comm'

export default defineConfig((configEnv) => {
  const configProd = {
    mode: 'production',
      
    build: {
      write: true, // 启用将构建后的文件写入磁盘
      emptyOutDir: true, // 构建时清空该目录
      minify: 'terser',
      target: 'modules', // 设置最终构建的浏览器兼容目标。
      outDir: 'dist', // 指定输出路径
      assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。
      cssCodeSplit: true, // 启用/禁用 CSS 代码拆分。
      sourcemap: true, // 关闭生成map文件 可以达到缩小打包体积 这个生产环境一定要关闭，不然打包的产物会很大
      reportCompressedSize: false, // 关闭文件计算
      chunkSizeWarningLimit: 2000, //规定触发警告的 chunk 大小。（以 kbs 为单位）。
      rollupOptions: {
        output: {
          // 最小化拆分包
          manualChunks: id => {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
          // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
          entryFileNames: 'assets/js/[name]-[hash].js',
          // 用于命名代码拆分时创建的共享块的输出命名
          chunkFileNames: chunkInfo => {
            const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : []
            const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]'
            return `assets/js/${fileName}/[name]-[hash].js`
          },
          // 用于输出静态资源的命名，[ext]表示文件扩展名
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
          // manualChunks: {
          //   arco: ['@arco-design/web-vue'],
          //   // chart: ['echarts', 'vue-echarts'],
          //   vue: ['vue', 'vue-router', 'pinia', '@vueuse/core']
          // }
        }
      },
      terserOptions: {
        compress: {
          // drop_console: true, // 打包去除console
          // drop_debugger: true // 打包去除 debugger
          // pure_funcs: ['console.log'] //移除console
        }
      }
    }
  };

  return mergeConfig(
    configComm(configEnv),
    configProd
  )
})



