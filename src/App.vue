
<template>
  <RouterView />
 </template>
<script setup lang="ts">


   import { onMounted } from 'vue'
    onMounted(() => {
      console.log('oonMounted')
      document.addEventListener('antifor-ws-whitelistings', (e) => {
      console.log('antifor-ws-whitelistings', e)
    })
    document.addEventListener('load', (e) => {
      console.log('load', e)
    })
    document.addEventListener('message', (e) => {
      console.log('message', e)
    })
    document.addEventListener('antifor-fetch-whitelistings', (e) => {
      console.log('antifor-fetch-whitelistings', e)
    })
      function setViewportScale() {
          const designWidth = 8000;
          const scale = window.innerWidth / designWidth;
          const viewportMeta:any = document.querySelector('meta[name="viewport"]');
          viewportMeta.content = `width=device-width, initial-scale=${scale}, maximum-scale=${scale},height=widthdevice-height, user-scalable=no`;
      }

      if (isMobileDevice()) {
        window.addEventListener('resize', setViewportScale);
        setViewportScale()
      }
    })
  //判断是否为手机端
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

</script>
 <style>
   body, html, #app {
     width: 100%;
     height: 100%;
   }
   html {
  scroll-behavior: smooth;
}
 </style>
 