<template>
    <div class="bg-[#2967B2] w-full h-[700px] relative">
        <!-- <div class="w-full pt-[28px] gap-[20px] flex flex-col h-[100px] items-center">
            <img :src="logo" class="w-[163px] h-[37px]" />
            <span class="text-[#51B9FF] text-[14px] Mulish_font">{{$t('footer.title') }}</span>
        </div> -->
        <div class="w-full flex justify-between  pt-[70px] pl-[226px] pr-[246px] ">
            <div class="w-[364px] pt-[28px] gap-[20px] flex flex-col h-[100px] ">
                <img :src="logo" class="w-[163px] h-[37px]" />
                <span class="text-[#51B9FF] text-[16px] Mulish_font w-full">{{$t('footer.title') }}</span>
            </div>
            <div class="flex gap-[80px] justify-center">
                <div v-for="item in footNav" class="flex flex-col gap-[20px]">
                    <span class="text-[#FFFFFF] text-[20px] sf_font font-medium">{{item.title}}</span>
                    <div class="flex flex-col gap-[12px]">
                        <span v-for="children in item.children" class="text-[rgba(255,255,255,0.5)] text-[16px] sf_font font-medium cursor-pointer hover:text-[#51B9FF]" @click="onPage(children.path)">
                            {{children.title}}
                        </span>
                    </div>
                </div>
                <!-- <div class="flex gap-[26px] flex-col inter_font ">
                    <span class="text-[20px] text-[white] pb-[20px]">{{$t('footer.subtitle1') }}</span>
                    <a class="cursor-pointer text-[16px] ">{{$t('footer.subtitle1_title1') }}</a>
                    <a class="cursor-pointer text-[16px] ">{{$t('footer.subtitle1_title2') }}</a>
                </div> -->

                <!-- <div class="flex gap-[16px] flex-col inter_font">
                    <span class="text-[20px] text-[white] pb-[20px]">{{$t('footer.subtitle2') }}</span>
                    <div class="grid gap-x-[100px] gap-y-[16px]" style="grid-template-columns: repeat(2, 252px);">
                        <a v-for="item in links" class="cursor-pointer">{{item.title}}</a>
                    </div>
                </div> -->
                
            </div>
            
        </div>
        <div class="w-full flex justify-center gap-[36px] pt-[180px]">
            <!-- <div class="w-[300px] flex gap-[48px] flex-col"> -->
                <div v-for="item in items" class="flex gap-[16px]">
                    <img :src="item.img" class="w-[40px] h-[40px]"/>
                    <div class="flex flex-col gap-[4px] inter_font">
                        <span class="text-[white] text-[16px]">{{item.title}}</span>
                        <span class="text-[white] text-[15px]">{{item.value}}</span>
                    </div>
                </div>
            <!-- </div> -->
        </div>
        <div class="w-full h-[126px] border-t-1 border-[rgba(255,255,255,0.08)] absolute bottom-0 gap-[20px] flex flex-col justify-center items-center">
            <span class="text-[rgba(255,255,255,0.3)] text-[14px] Mulish_font">《中华人民共和国增值电信业务许可证》- <span>蜀ICP备2023025621号-1</span></span>
            <div class="flex gap-[8px] items-center">
                <img src="res@/footer/type.svg" class="w-[16px] h-[16px]"/>
                <span class="text-[rgba(255,255,255,0.3)] text-[14px] Mulish_font">川公网安备51019002007456号</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import logo from 'res@/logo.svg'
    import { computed } from 'vue'
    import telImg from 'res@/footer/tel.svg'
    import emailImg from 'res@/footer/email.svg'
    import timeImg from 'res@/footer/time.svg'
    import locationImg from 'res@/footer/location.svg'
    import { useRouter } from 'vue-router'
    // import typeImg from 'res@/footer/type.svg'
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    const router = useRouter()
    const footNav = computed(() => {
        return [
            {
                title:t('footer.subtitle1'),
                children: [
                ]
            },
            {
                title:t('footer.subtitle2'),
                children: [
                ]
            },
            {
                title:t('footer.subtitle3'),
                children: [
                    {
                        title: t('footer.subtitle3_1'),
                        path:'privacypolicy'
                    },
                    {
                        title: t('footer.subtitle3_2'),
                        path:'legalnotice'
                    },
                    {
                        title: t('footer.subtitle3_3'),
                        path:'serviceterms'
                    }
                ]
            },
            {
                title:t('footer.subtitle4'),
                children: [
                    {
                        title: t('footer.subtitle4_1'),
                        path:''
                    },
                    {
                        title: t('footer.subtitle4_2'),
                        path:''
                    }
                ]
            }
        ]
    })
    const onPage = (path:string) => {
        router.push({name:path})
    }
    // const links = computed(() => {
    //     return [
    //         {
    //             title:t('footer.subtitle2_title1'),
    //             href:''
    //         },
    //         {
    //             title:t('footer.subtitle2_title2'),
    //             href:''
    //         },
    //         {
    //             title:t('footer.subtitle2_title3'),
    //             href:''
    //         },
    //         {
    //             title:t('footer.subtitle2_title4'),
    //             href:''
    //         },
    //         {
    //             title:t('footer.subtitle2_title5'),
    //             href:''
    //         },
    //         {
    //             title:t('footer.subtitle2_title6'),
    //             href:''
    //         },
    //         {
    //             title:t('footer.subtitle2_title7'),
    //             href:''
    //         },
    //         {
    //             title:t('footer.subtitle2_title8'),
    //             href:''
    //         },
    //         {
    //             title:t('footer.subtitle2_title9'),
    //             href:''
    //         },
    //         {
    //             title:t('footer.subtitle2_title10'),
    //             href:''
    //         },
    //         {
    //             title:t('footer.subtitle2_title11'),
    //             href:''
    //         }
    //     ]
    // })
    const items = computed(() => {
        return [
            {
                title:t('footer.item1'),
                img: telImg,
                value: '+1 6698008867'
            },
            {
                title:t('footer.item2'),
                img: emailImg,
                value: 'amandamiller@miyaip.com'
            },
            {
                title:t('footer.item3'),
                img: timeImg,
                value: '9:00-18:00 PST'
            },
            {
                title:t('footer.item4'),
                img: locationImg,
                value: '3007 S ALTON CT DENVER, CO 80231'
            }
        ]
    })
</script>
<style lang="less" scoped>
    a {
        color: white;
        text-decoration: none;
    }
</style>