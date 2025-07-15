import { mergeConfig, defineConfig, UserConfig } from 'vite'
import configComm from './vite.config.comm'
import { consola } from 'consola'

export default defineConfig((configEnv: any) => {
  consola.start('configEnv', configEnv)

  const configDev = {
    mode: 'development',
    server: {
      host: '0.0.0.0', // 指定服务器主机名
      port: 8080, // 修改默认端口
      hmr: true,
      open: false,
      cors: true, // 为开发服务器配置 CORS
      fs: {
        strict: true
      }
    },

    proxy: {
      // https://cn.vitejs.dev/config/#server-proxy
      '/api': {
        target: 'https://tdevapi.fanchentech.com/',
        changeOrigin: true,
        ws: true,
        secure: true,
        rewrite: path => path.replace(new RegExp(`^/api`), '')
      }
    }
  }

  return mergeConfig(configComm(configEnv), configDev) as UserConfig
})
