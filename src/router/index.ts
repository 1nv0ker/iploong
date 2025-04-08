import { createWebHistory, createRouter } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// import UseUserStore from '../store/user'
// import { useMeta } from 'vue-meta'

// 全局配置（可选）
(NProgress as any).configure({
  showSpinner: false,        // 隐藏旋转动画
  speed: 500,               // 动画速度
  trickleSpeed: 200,        // 自动递增间隔
  minimum: 0.3              // 最小进度百分比
})

export const routes = [
    { path: '/', redirect: '/home' },

    { path:'/', component:()=>import(`views@/home/index.vue`),
      children:[
        {
          path:'home',
          name:'home',
          component:()=>import(`views@/home/home.vue`)
        }
      ]
    },

    { path: '/', component: ()=>import(`views@/login/index.vue`),
      children:[
        {
          path:'login',
          name:'login',
          component: ()=>import('views@/login/Login.vue')
        },
        {
          path:'register',
          name:'register',
          component: ()=>import('views@/login/Register.vue')
        }
      ]
    },

    { path: '/', component: ()=>import(`views@/dashboard/index.vue`),
      meta: { requiresAuth: true } ,
      redirect: '/usercenter/proxycity',
      children:[
        {
          path:'proxycity',
          name:'proxycity',
          component: ()=>import('views@/dashboard/proxycity/index.vue')
        }
      ]
    },
    
    { path: '/:catchAll(.*)', redirect: '/home'}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (
    to: any,
    _from: any,
    savedPosition: any | null
  ): any | Promise<any> => {
    // 场景 1：通过浏览器前进/后退按钮导航时恢复滚动位置
    if (savedPosition) {
      return savedPosition
    }

    // 场景 2：根据 meta 标记强制滚动到顶部
    if (to.meta.scrollToTop) {
      return { top: 0, left: 0 }
    }

    // 场景 3：滚动到指定元素
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth' // 平滑滚动
      }
    }

    // 默认行为：不改变滚动位置
    return { left: 0, top: 0 }
  }
})

// //路由前置
router.beforeEach((to, _from, next)=> {
  (NProgress as any).start()
//   const userStore = UseUserStore();
  // console.log('to', to)
  if (to.meta) {
    const meta:any = to.meta.metaInfo || {};

    if (meta.title) document.title = meta.title;
    if (meta.meta) {
      // console.log('meta', meta.meta)
      // debugger
      meta.meta.forEach((item:any)=> {
        const metadom = document.createElement('meta')
        metadom.setAttribute('name', item.name)
        metadom.setAttribute('content', item.content)
        document.head.appendChild(metadom)
      })
    }
  }
  // debugger
  

//   const isLogin = userStore.token
//   if (to.meta.requiresAuth && !isLogin) {
    
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }
//     })
//   }
  next()
})

// //路由后置
router.afterEach(() => {
  (NProgress as any).done()          // 完成加载
})

router.onError(() => {
  (NProgress as any).done()          // 错误时强制完成
})
export default router