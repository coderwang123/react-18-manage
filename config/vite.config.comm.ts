import { resolve } from 'path'
import { getBuildTime } from './utils';
import {  loadEnv } from 'vite';
import {setupVitePlugins} from "./plugin"
import {consola} from 'consola';

export default function configComm(configEnv?: any){
  // const viteEnv = loadEnv(configEnv.mode, process.cwd()) ;
  // consola.log("viteEnv", viteEnv);
  const buildTime = getBuildTime();
  consola.start('buildTime', buildTime); 
  
  return {
    // base: viteEnv.VITE_BASE_URL,
    plugins: setupVitePlugins(configEnv, buildTime),
    preview: {
      port: 9725
    },
    define: {
      BUILD_TIME: JSON.stringify(buildTime)
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, '../src')
        },
        {
          find: 'assets',
          replacement: resolve(__dirname, '../src/assets')
        },

      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    optimizeDeps: {
      entries: [
      ],
      include: ['vue', 'vue-router', 'pinia', 'axios', 'better-scroll'] // 需要预加载的路由组件路径
    },

    // css: {
    //   preprocessorOptions: {
    //     less: {
    //       modifyVars: {
    //         hack: `true; @import (reference) "${resolve('src/assets/styles/breakpoint.less')}";`
    //       },
    //       javascriptEnabled: true
    //     }
    //   }
    // }
  }
}
