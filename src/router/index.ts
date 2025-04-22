import { createWebHistory, createRouter } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import UseUserStore from 'store@/user'
// import { useMeta } from 'vue-meta'

// 全局配置（可选）
(NProgress as any).configure({
  showSpinner: false,        // 隐藏旋转动画
  speed: 500,               // 动画速度
  trickleSpeed: 200,        // 自动递增间隔
  minimum: 0.3              // 最小进度百分比
})

export const routes = [
    // { path: '/', redirect: '/home' },

    { path:'/', component:()=>import(`views@/home/index.vue`),
      children:[
        {
          path:'',
          name:'home',
          component:()=>import(`views@/home/home.vue`),
          meta: {
            metaInfo: {
              title:'全球住宅代理IP企业级',
              meta: [
                {
                  name:'Keywords', content:'爬虫代理,高匿代理ip,刷单代理ip,https代理,http代理,ip代理,代理ip,私密代理ip,免费代理ip,高速代理,独享代理ip,免费ip,在线代理,代理服务器'
                },
                {
                  name:'Description', content:'（www.iploong.com）是http代理ip服务供应商，拥有千万级独立ip池，覆盖全球，低延迟高可用率稳定专业！爬虫代理,网页代理ip,企业级代理ip,电脑换ip,https代理,私密代理ip,免费代理ip,独享代理ip,在线代理,代理服务器等!'
                }
              ]
            }
          } 
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
        },
        {
          path:'forgetpass',
          name:'forget',
          component: ()=>import('views@/login/Forget.vue')
        }
      ]
    },

    { path: '/', component: ()=>import(`views@/dashboard/index.vue`),
      meta: { requiresAuth: true } ,
      redirect: '/usercenter/dashboard',
      children:[
        {
          path:'usercenter/dashboard',
          name:'dashboard',
          // meta: {
          //   parent: 'usercenter'
          // },
          component: ()=>import('views@/dashboard/dynamic/index.vue')
        },
        {
          path:'usercenter/purchasedetail',
          name:'purchasedetail',
          meta: {
            parent: 'static'
          },
          component: ()=>import('views@/dashboard/static/index.vue')
        },
        {
          path:'usercenter/proxycity',
          name:'proxycity',
          meta: {
            parent: 'dynamic'
          },
          component: ()=>import('views@/dashboard/proxycity/index.vue')
        },
        {
          path:'usercenter/purchasetraffic',
          name:'purchasetraffic',
          meta: {
            parent: 'dynamic'
          },
          component: ()=>import('views@/dashboard/purchasetraffic/index.vue')
        },
        {
          path:'usercenter/purchaseproxy',
          name:'purchaseproxy',
          meta: {
            parent: 'static'
          },
          component: ()=>import('views@/dashboard/purchaseproxy/index.vue')
        },
        {
          path:'usercenter/historyorder',
          meta: {
            parent:'order'
          },
          name:'order',
          component: ()=>import('views@/dashboard/historyorder/index.vue')
        },
        {
          name:'serviceterms',
          path:'usercenter/serviceterms',
          meta: {
            parent:'helpcenter'
          },
          component: ()=>import('views@/dashboard/serviceterms/index.vue')
        },
        {
          name:'privacypolicy',
          path:'usercenter/privacypolicy',
          meta: {
            parent:'helpcenter'
          },
          component: ()=>import('views@/dashboard/privacypolicy/index.vue')
        },
        {
          name:'legalnotice',
          path:'usercenter/legalnotice',
          meta: {
            parent:'helpcenter'
          },
          component: ()=>import('views@/dashboard/legalnotice/index.vue')
        },
        {
          name:'realauth',
          path:'usercenter/realauth',
          meta: {
            parent:'helpcenter'
          },
          component: ()=>import('views@/dashboard/realauth/index.vue')
        },
        {
          name:'promotion',
          path:'usercenter/promotion',
          component: ()=>import('views@/dashboard/promotion/index.vue')
        }
      ]
    },
    
    { path: '/:catchAll(.*)', redirect: '/'}
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
  const userStore = UseUserStore();
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
  

  const isLogin = userStore.token
  if (to.meta.requiresAuth && !isLogin) {
    
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
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