/// <reference types="react-scripts" />

declare module '*.wasm'

interface Window {
  globalConfig: any;
  interTime: number,
  statisticInfo: any
}

/* 允许在ts中使用import styles from '*.less' */
declare module '*.less' {
  const styles: any;
  export = styles;
}
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
