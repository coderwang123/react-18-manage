import type { PluginOption } from 'vite';
import Inspect from 'vite-plugin-inspect';
import removeConsole from 'vite-plugin-remove-console';

import { setupAutoImport } from './setup-auto-import';
import { setupCompression } from './setup-compression';
import { setupHtml } from './setup-html';
import { setupSvgIcons } from './setup-svg-icons';
import { setupSvgr } from './setup-svgr'
import { setupVisualizer } from './setup-visualizer';

export function setupVitePlugins(viteEnv: any, buildTime: string): PluginOption {
  const comm = [    
    setupAutoImport(viteEnv), // 自动导入
    setupHtml(buildTime), // html
    setupSvgIcons(), // svg 加载
    setupSvgr(),
    Inspect(), // 是一个用于检查 Vite 插件中间状态的调试工具，允许开发者查看构建过程中的实时数据，帮助优化插件性能和调试复杂问题
    removeConsole({ external: ['error', 'warn'] }), // 一键移除生产环境中的console语句
  ]

  const prod = [
    setupCompression('gzip'), // gip 加速
    setupVisualizer(), // 打包分析
  ]


  if (viteEnv.mode !== 'dev') {
    return [
      ...comm, ...prod
    ]
  }

  return [...comm];
}
