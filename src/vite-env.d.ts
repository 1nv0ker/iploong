/// <reference types="vite/client" />



declare module 'nprogress' {
    interface NProgressOptions {
      speed?: number
      trickleSpeed?: number,
      start?:void
    }

  }