/// <reference types="vite/client" />

// 类型声明
export declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
  interface IModalConfig {}
  export { IModalConfig }
}
declare module 'default-passive-events'
declare module '*.mjs'
//
export declare global {
  interface Window {
    eventCenterForAppNameVite: any
    __MICRO_APP_ENVIRONMENT__: any
    microApp: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_BASE_APPLICATION__: string
    __MICRO_APP_PUBLIC_PATH__: string
  }
}



declare module 'virtual:svg-icons-register' {
    const content: string;
    export default content;
  }
  
declare module 'virtual:*' {
  const content: string;
  export default content;
}