import { mergeConfig, defineConfig, loadEnv } from 'vite'
import configComm from './vite.config.comm'
import {consola} from 'consola';

export default defineConfig((configEnv: any) =>  {
  consola.start('configEnv', configEnv); 
  

  const configDev =  {
      mode: 'development',
      server: {
        host: '0.0.0.0', // 指定服务器主机名
        port: 8080, // 修改默认端口
        hmr: true,
        open: false,
        cors: true, // 为开发服务器配置 CORS
        fs: {
          strict: true
        },
        // warmup: {
        //   clientFiles: ['./index.html', './src/{pages,components}/*']
        // },
      
        // proxy: createViteProxy(viteEnv, enableProxy),
      },

      // proxy: {
      //   // https://cn.vitejs.dev/config/#server-proxy
      //   '/dev-api': {
      //     target: 'https://customer.xiaohongshu.com',
      //     changeOrigin: true,
      //     ws: true,
      //     secure: true,
      //     rewrite: path => path.replace(new RegExp(`^/dev-api`), '')
      //   }
      //   // '/dev-api': {
      //   //   target: 'https://pgy.xiaohongshu.com',
      //   //   changeOrigin: true,
      //   //   ws: true,
      //   //   secure: true,
      //   //   rewrite: path => path.replace(new RegExp(`^/iot_server/api`), '/iot_server')
      //   // }
      // }
  };


  return mergeConfig(
    configComm(configEnv),
    configDev,
  )
}) 
