<template>
    <div class="w-[271px] h-full nav_bg overflow-auto">
        <div class="w-full pt-[46px] pl-[46px] pb-[57px]">
            <img :src="logo" class="w-[153px] h-[35px] cursor-pointer" @click="router.push({name:'home'})"/>
        </div>
        <div class="w-full usercenter_nav pl-[24px] pr-[24px]">
            <a-menu
            mode="inline"
            class="bitip_menu "
            v-model:selectedKeys="selectedKeys"
            v-model:open-keys="openKeys"
            
            :items="items"
            @click="onMenuClick"
            >
            <!-- <template #title>
                123
            </template> -->
        </a-menu>
        </div>
    </div>
</template>
<script setup lang="ts">
    import logo from 'res@/logo.svg'
    import { ref, computed, h, onMounted, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { useRouter } from 'vue-router'
    import dashboardImg from 'res@/usercenter/nav/dashboard.svg'
    import dashboardImg2 from 'res@/usercenter/nav/dashboard_unselect.svg'
    import dyImg from 'res@/usercenter/nav/dy.svg'
    import dyImg2 from 'res@/usercenter/nav/dy.svg'
    import staticImg from 'res@/usercenter/nav/static.svg'
    import staticImg2 from 'res@/usercenter/nav/static.svg'
    import historyImg from 'res@/usercenter/nav/order.svg'
    import historyImg2 from 'res@/usercenter/nav/order.svg'
    import helpImg from 'res@/usercenter/nav/help.svg'
    import helpImg2 from 'res@/usercenter/nav/help.svg'
    import apiImg from 'res@/usercenter/nav/api.svg'
    import apiImg2 from 'res@/usercenter/nav/api.svg'
    import promotionImg from 'res@/usercenter/nav/gift.svg'
    import promotionImg2 from 'res@/usercenter/nav/gift.svg'
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
    const router = useRouter()
    const route = useRoute()
    const selectedKeys = ref<any[]>([])
    const openKeys = ref<any[]>([])
    const getimg = (img:string, img2:string, key:any) => {
        // console.log(openKeys.value)
        let res:number = openKeys.value.indexOf(key)
        // if (res == -1) {
        //     let res2 = children.some((item)=>selectedKeys.value.indexOf(item)!=-1)
        //     res = res2?1:-1
        // }
        const herf = res==-1?img2:img
        return h(
                'img',
                {
                    src: herf,
                    style:{
                        width:'20px',
                        height:'20px'
                    }

                }
            )
    }
    watch(route, () => {
        const name = route.name as string
        selectedKeys.value = [name]
        openKeys.value = [name]
        const meta = route.meta
        const parent = meta.parent as string || ''
        openKeys.value = [parent]
        // console.log('route', 123)
    })
    onMounted(() => {
        const name = route.name as string
        selectedKeys.value = [name]
        openKeys.value = [name]
        const meta = route.meta
        const parent = meta.parent as string || ''
        openKeys.value = [parent]
    })
    const items = computed(() => {
        return [
            {
                key: 'usercenter',
                // icon: () => '',
                label: t('usercenter.nav.menu1'),
                title: t('usercenter.nav.menu1'),
                icon: () => getimg(dashboardImg, dashboardImg2, 'usercenter'),
                children:[
                    {
                        key: 'dynamic',
                        label:t('usercenter.nav.menu1_subtitle1'),
                        title: t('usercenter.nav.menu1_subtitle1'),

                    },
                    {
                        key: 'static',
                        label:t('usercenter.nav.menu1_subtitle2'),
                        title: t('usercenter.nav.menu1_subtitle2')
                    }
                ]
            },
            {
                key: 'dynamic',
                // icon: () => '',
                label: t('usercenter.nav.menu2'),
                title: t('usercenter.nav.menu2'),
                icon: () => getimg(dyImg, dyImg2, 'dynamic'),
                children:[
                    // {
                    //     key: 'proxycounty',
                    //     label:t('usercenter.nav.menu2_subtitle1'),
                    //     title: t('usercenter.nav.menu2_subtitle1'),

                    // },
                    {
                        key: 'proxycity',
                        label:t('usercenter.nav.menu2_subtitle2'),
                        title: t('usercenter.nav.menu2_subtitle2')
                    },
                    {
                        key: 'purchasetraffic',
                        label:t('usercenter.nav.menu2_subtitle3'),
                        title: t('usercenter.nav.menu2_subtitle3')
                    }
                ]
            },
            {
                key: 'static',
                // icon: () => '',
                label: t('usercenter.nav.menu3'),
                title: t('usercenter.nav.menu3'),
                icon: () => getimg(staticImg, staticImg2, 'static'),
                children:[
                    {
                        key: 'purchaseproxy',
                        label:t('usercenter.nav.menu3_subtitle1'),
                        title: t('usercenter.nav.menu3_subtitle1'),

                    },
                    {
                        key: 'purchasedetail',
                        label:t('usercenter.nav.menu3_subtitle2'),
                        title: t('usercenter.nav.menu3_subtitle2')
                    }
                ]
            },
            {
                key: 'order',
                // icon: () => '',
                label: t('usercenter.nav.menu4'),
                title: t('usercenter.nav.menu4'),
                icon: () => getimg(historyImg, historyImg2, 'order')
            },
            {
                key: 'helpcenter',
                // icon: () => '',
                label: t('usercenter.nav.menu5'),
                title: t('usercenter.nav.menu5'),
                icon: () => getimg(helpImg, helpImg2, 'helpcenter'),
                children:[
                    {
                        key: 'document',
                        label:t('usercenter.nav.menu5_subtitle1'),
                        title: t('usercenter.nav.menu5_subtitle1'),

                    },
                    {
                        key: 'serviceterms',
                        label:t('usercenter.nav.menu5_subtitle2'),
                        title: t('usercenter.nav.menu5_subtitle2')
                    }
                ]
            },
            {
                key: 'api',
                // icon: () => '',
                label: t('usercenter.nav.menu6'),
                title: t('usercenter.nav.menu6'),
                icon: () => getimg(apiImg, apiImg2, 'api')
            },
            {
                key: 'promotion',
                // icon: () => '',
                label: t('usercenter.nav.menu7'),
                title: t('usercenter.nav.menu7'),
                icon: () => getimg(promotionImg, promotionImg2, 'promotion')
            },
        ]
    })
    const onMenuClick = (props:any) => {

        router.push({name:props.key})
    }
</script>
<style lang="less">
    .nav_bg {
        background-image: url('res@/usercenter/nav/bg.png?inline');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .usercenter_nav {
        .ant-menu-root {
            background: transparent;
            .ant-menu-item {
                height: 50px;
                margin: 0;
                margin-top:20px;
                width: 100%;
                .ant-menu-title-content {
                    color:#E8E8E8;
                    font-size: 20px;
                    font-family: PingFang SC;
                    font-weight: 400;
                }
            }
            .ant-menu-item-selected {
                .ant-menu-title-content {
                    color:#2967B2;
                    font-weight: 600;
                }
            }
            .ant-menu-submenu {
                .ant-menu-submenu-title {
                    height: 50px!important;
                    margin: 0;
                    margin-top:20px;
                    width: 100%;
                    
                    .ant-menu-title-content {
                        color:#E8E8E8;
                        font-size: 20px;
                        font-family: PingFang SC;
                        font-weight: 400;
                    }
                    .ant-menu-submenu-arrow {
                        color: white;
                    }
                }
                .ant-menu-sub {
                    background-color:#013778;
                    border-radius: 0px 0px 8px 8px;
                    // padding-bottom: 20px;
                    .ant-menu-item-only-child {
                        margin:0;
                        margin-top:12px;
                        margin-bottom:12px;
                        .ant-menu-title-content{
                            font-family: PingFang SC;
                            font-weight: 400;
                            font-size: 18px;
                            color:#75B7FF;
                        }
                    }
                    .ant-menu-item-selected {
                        background-color:#013778;
                        transition:none;
                        &:active {
                            background-color:#013778;
                        }
                        .ant-menu-title-content {
                            font-weight: 600;
                            color: #FFFFFF;
                        }
                    }
                    .ant-menu-item-only-child:active {
                        background-color:#013778!important;
                    }
                    
                }
                
            }
            .ant-menu-submenu-open {
                .ant-menu-submenu-title {
                    background: #FFFFFF!important;
                    .ant-menu-title-content {
                        color:#2967B2;
                        font-weight: 600;
                    }
                    .ant-menu-submenu-arrow {
                        color: #2967B2;
                    }
                }
            }
        }
        
    }
</style>