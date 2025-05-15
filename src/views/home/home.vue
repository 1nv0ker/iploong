<template>
    <div class="w-full">
        <!-- 第一块区域 -->
        <div class="home_bg h-[864px] w-full" id="home">
            <div class="flex flex-col gap-[0px] pt-[64px] w-full items-center Montserrat">
                <span class="text-[60px] font-extrabold leading-[100%] text-[white]">{{$t('home.first.title')}}</span>
                <span class="text-[60px] font-extrabold leading-[100%] text-[white] first_text">{{$t('home.first.title2')}}<span class="text-[60px] font-extrabold text-[white]">{{$t('home.first.title3')}}</span></span>
            </div>
            <div class="w-full flex justify-center pt-[40px]">
                <img :src="useSettingStore.language!='zh'?dashboardImg:dashboardZh" class="cursor-pointer w-[378px] h-[83.7px]" @click="onDashboard"/>
                <!-- <div class="w-[378px] h-[84px] rounded-[1944px] bg-[rgba(38,134,244,0.3)] " style="box-shadow: inset 0px 0px 54px 1px rgba(38,134,244,0.3);">

                </div> -->
            </div>
            <div class="mt-[160px] w-full flex justify-center">
                <div class="w-[1204px] h-[160px] bg-[rgba(0,0,0,0.1)] rounded-[14px] pt-[24px] flex gap-[108px] justify-center">
                    <div class="w-[300px] flex flex-col gap-[12px] items-center" v-for="item in firstItems">
                        <div class="w-full flex">
                            <span class="Mulish_font text-center font-extrabold text-[19px] text-[white] w-full">{{item.title}}</span>
                        </div>
                        <span class="text-[#F1F1F1] text-[16px] inter_font">{{ item.detail1 }} <span class="text-[#1EFFF4]">{{ item.detail2 }} <span class="text-[#F1F1F1]"> {{ item.detail3 }}</span></span></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第二区域 -->
        <div class="w-full flex justify-center">
            <div class="w-[1486px] h-[1187px] pt-[230px]">
                <div class="w-full flex justify-center">
                    <span class="text-[#2967B2] text-[52px] font-bold sf_font text-center w-full">{{ $t('home.second.title')  }}</span>
                </div>
                <div class="w-full h-[660px] flex gap-[45px] mt-[81px]">
                    <div class="w-[752px] h-full flex gap-[12px] flex-col">
                        <!-- <div class="w-full h-[117px] bg-[rgba(0,0,0,0.06)] pl-[32px] rounded-[14px] flex flex-col gap-[13px] justify-center">
                            <span class="text-[#000000] text-[26px] font-bold inter_font">{{$t('home.second.subtitle1') }}</span>
                            <span class="text-[#7A7A7A] text-[18px] inter_font">{{$t('home.second.content1') }}</span>
                        </div>
                        <div class="w-full h-[117px] bg-[rgba(0,0,0,0.06)] pl-[32px] rounded-[14px] flex flex-col gap-[13px] justify-center">
                            <span class="text-[#000000] text-[26px] font-bold inter_font">{{$t('home.second.subtitle2') }}</span>
                            <span class="text-[#7A7A7A] text-[18px] inter_font">{{$t('home.second.content2') }}</span>
                        </div>
                        <div class="w-full h-[184px] bg-[#D4E1F0] pl-[32px] rounded-[14px] flex flex-col gap-[13px] pt-[20px]">
                            <span class=" text-[26px] font-bold inter_font special_word">{{$t('home.second.subtitle3') }}</span>
                            <span class="text-[#000000] text-[24px] inter_font max-w-[540px] leading-[26px]">{{$t('home.second.content3') }}</span>
                        </div> -->
                        <div v-for="item in secondItems" class="rounded-[14px] w-full h-[100px] flex flex-col gap-[8px] justify-center pl-[30px] pr-[12px]" 
                        :style="`${selected==item.key?'background: linear-gradient( 91deg, #57A1FC 0%, #46B2FF 100%);':'background: rgba(0,0,0,0.04);'}`" @mouseenter="onMouseEnter(item.key)" @mouseleave="onMouseLeave(item.key)">
                            <span :class="`${selected==item.key?'text-[#2967B2] text-[26px]':'text-[#4E4B4B] text-[22px]'} inter_font font-bold`">{{ item.title }}</span>
                            <span :class="`${selected==item.key?'text-[#000000]':'text-[#7A7A7A]'} max-w-full bitip_text inter_font text-[18px]`" :title="item.content">{{ item.content }}</span>
                        </div>
                    </div>
                    <div class="w-[689px] h-[660px] relative z-10">
                        <div v-for="(item, index) in secondItems" :class="`w-full pt-[50px] pl-[50px] pr-[180px]  flex
                         gap-[24px] flex-col second_bg h-full animate__fadeIn animate__animated z-0   ${selected==index?'':'hidden'}`" :style="`background-image: url(${item.img})`">
                            <span class="second_text text-[52px] inter_font">{{item.title}}</span>
                            <span class="inter_font text-[#000000] text-[22px] inter_font">{{item.content}}</span>
                        </div>
                        <!-- <img :src="item" v-for="(item, index) in secondImgs" :class="`w-full h-full animate__fadeIn animate__animated ${selected==index?'':'hidden'}`" /> -->
                    </div>
                    <!-- <div class="w-[689px] h-full bg-[rgba(41,103,178,0.2)] rounded-[14px] relative ">
                        <div class="w-full pl-[50px] pt-[65px] flex flex-col gap-[22px]">
                            <span class=" text-[26px] font-bold inter_font special_word2 ">{{$t('home.second.subtitle3') }}</span>
                            <span class="text-[#7A7A7A] text-[20px] inter_font max-w-[540px] leading-[26px]">{{$t('home.second.content3') }}</span>
                        </div>
                        <div class="w-full mt-[82px] pl-[58px] flex flex-col gap-[28px]">
                            <div class="flex gap-[8px] items-center">
                                <div class="w-[22px] h-[22px] ">
                                    <img :src="gouImg" class="w-full h-full"/>
                                </div>
                                <span class="text-[#000000] text-[21px] inter_font leading-[32px]">{{$t('home.second.item1') }}</span>
                            </div>
                            <div class="flex gap-[8px] items-center">
                                <div class="w-[22px] h-[22px] ">
                                    <img :src="gouImg" class="w-full h-full"/>
                                </div>
                                <span class="text-[#000000] text-[21px] inter_font leading-[32px]">{{$t('home.second.item2') }}</span>
                            </div>
                            <div class="flex gap-[8px] items-center">
                                <div class="w-[22px] h-[22px] ">
                                    <img :src="gouImg" class="w-full h-full"/>
                                </div>
                                <span class="text-[#000000] text-[21px] inter_font leading-[32px]">{{$t('home.second.item3') }}</span>
                            </div>
                        </div>
                        <img class=" absolute bottom-0 right-0" :src="secondImg" />
                    </div> -->
                </div>
            </div>
        </div>
        <!-- 第三区域 -->
        <div class="w-full flex justify-center " id="third">
            <div class="w-[1486px] h-[1000px]">
                <div class="w-full flex justify-center h-[108px]">
                    <span class="text-[#2967B2] text-[52px] sf_font font-bold text-center max-w-[1200px]">{{$t('home.third.title')}}</span>
                </div>
                <div class="w-full h-[890px] flex justify-between">
                    <div class="w-[311px] flex flex-col gap-[80px] pt-[143px]">
                        <img :src="useSettingStore.language=='zh'?third11:third1" />
                        <img :src="useSettingStore.language=='zh'?third12:third2" />
                        <img :src="useSettingStore.language=='zh'?third13:third3" />
                    </div>
                    <div class="w-[890px] h-[890px] flex items-center justify-center">
                        <img :src="globalImg" class="w-[662px] h-[675px]"/>
                    </div>
                    <div class="w-[278px] flex flex-col gap-[80px] pt-[182px]">
                        <img :src="useSettingStore.language=='zh'?third14:third4" />
                        <img :src="useSettingStore.language=='zh'?third15:third5" />
                        <img :src="useSettingStore.language=='zh'?third16:third6" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 第四区域 -->
        <div class="w-full flex justify-center pt-[152px]" id="fouth">
            <div class="w-[1512px]">
                <div class="w-full flex justify-between gap-[18px]">
                    <div class="w-[739px] h-[432px] rounded-[12px] card_bg pt-[43px] pl-[35px]" v-for="item in fourthItems">
                        <div class="w-[268px] h-[54px] rounded-[10px] bg-[rgba(255,255,255,0.5)] flex justify-center items-center">
                            <span class="text-[white] text-[19px] inter_font">{{item.content1}}<span class="text-[#005CC7]">{{item.subtitle}}</span></span>
                        </div>
                        <div class="pt-[8px]">
                            <span class="text-[#003E86] text-[42px] font-semibold leading-[60px] inter_font">{{item.content2}}</span>
                        </div>
                        <div class="pt-[8px]">
                            <span class="text-[rgba(249,249,249,0.6)] text-[20px] font-medium leading-[36px] inter_font">{{item.content3}}</span>
                        </div>
                        <div class="w-full flex items-end inter_font text-[white] pt-[48px] pl-[32px]">
                            <span class="text-[32px] ">$</span>
                            <span class="text-[58px] leading-[26px] font-semibold pl-[12px] pr-[12px]">{{item.price}}<span class="text-[25px] font">{{item.price2}}</span><span  class="text-[#999999] text-[22px] font-normal">/G</span></span>
                            <div class="w-[62px] h-[31px] rounded-[13px] bg-[rgba(255,255,255,0.1)] flex justify-center items-center">
                                <span class=" font-medium text-[white] text-[13px] inter_font">{{ $t('home.fourth.data') }}</span>
                            </div>
                        </div>
                        <div class="w-full pt-[32px]">
                            <div class="w-[232px] h-[67px] rounded-[2160px] bg-[rgb(0,0,0)] cursor-pointer flex justify-center items-center" @click="onPage(item.name)">
                                <span class="text-[white] text-[30px] font-semibold inter_font">{{$t('home.fourth.button')}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-[46px] w-full flex justify-center">
                    <!-- <img  :src="payImg" class="w-[925px] h-[84px]"/> -->
                    <div class="flex gap-[88px] h-[77px]">
                        
                        <div class="w-[262px] border-r-1 border-[rgba(153,153,153,0.5)] h-full flex items-center">
                            <span class="text-[#999999] text-[29px] font-bold">{{ $t('home.fourth.title2') }}</span>
                        </div>
                        <img :src="wechat"/>
                        <img :src="alipay" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 第五区域 -->
        <div class="w-full flex justify-center pt-[160px] pb-[210px]">
            <div class="w-[1512px]">
                <div class="w-full justify-center flex">
                    <span class="text-[#2967B2] text-[52px] font-bold sf_font leading-[60px]">{{$t('home.fifth.title')}}</span>
                </div>
                <div class="w-full justify-center flex pt-[40px]">
                    <span class="text-[#999999] text-[28px] text-center max-w-[1120px] font-bold inter_font leading-[40px]">{{$t('home.fifth.subtitle')}}</span>
                </div>
                <div class="w-full pt-[180px] flex gap-[135px] justify-center">
                    <div v-for="item in fifthItems" class="flex flex-col gap-[35px] items-center">
                        <img :src="item.img" class="w-[188px] h-[188px]"/>
                        <span class="text-[#000000] text-[24px] font-semibold inter_font leading-[24px]">{{item.title}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import dashboardImg from 'res@/home/dashboard.svg'
    import dashboardZh from 'res@/home/dashboard_zh.svg'
    // import secondImg from 'res@/home/second.svg'
    // import gouImg from 'res@/home/gou.svg'
    import globalImg from 'res@/home/earth.svg?inline'
    // import second1 from 'res@/home/second_1.png?inline'
    import second2 from 'res@/home/second_2.png?inline'
    import second3 from 'res@/home/second_3.png?inline'
    import second4 from 'res@/home/second_4.png?inline'
    import second5 from 'res@/home/second_5.png?inline'
    import second6 from 'res@/home/second_6.png?inline'
    import third1 from 'res@/home/third_11.svg'
    import third2 from 'res@/home/third_12.svg'
    import third3 from 'res@/home/third_13.svg'
    import third4 from 'res@/home/third_14.svg'
    import third5 from 'res@/home/third_15.svg'
    import third6 from 'res@/home/third_16.svg'

    import third11 from 'res@/home/third_21.svg'
    import third12 from 'res@/home/third_22.svg'
    import third13 from 'res@/home/third_23.svg'
    import third14 from 'res@/home/third_24.svg'
    import third15 from 'res@/home/third_25.svg'
    import third16 from 'res@/home/third_26.svg'
    import wechat from 'res@/home/wechat.svg'
    import alipay from 'res@/home/alipay.svg'
    // import payImg from 'res@/home/pay.svg'
    import fifth_1 from 'res@/home/fifth_1.svg'
    import fifth_2 from 'res@/home/fifth_2.svg'
    import fifth_3 from 'res@/home/fifth_3.svg'
    import fifth_4 from 'res@/home/fifth_4.svg'
    import useUserStore from 'store@/user'
    import settingStore from 'store@/setting'
    const userStore = useUserStore()
    const useSettingStore = settingStore()
    import { useRouter } from 'vue-router'
    import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    const router = useRouter()
    let interval:any;
    onMounted(() => {
        secondInterval()
    })
    onBeforeUnmount(()=> {
        interval && clearInterval(interval)
    })
    const secondInterval = () => {
        interval && clearInterval(interval)
        interval = setInterval(() => {
            selected.value = selected.value + 1
            if (selected.value >= 6) {
                selected.value = 0
            }
        }, 3000);
    }
    const firstItems = computed(() => {
        return [
            {
                title:t('home.first.subtitle1'),
                detail1:t('home.first.subtitle1_detail1'),
                detail2:t('home.first.subtitle1_detail2'),
                detail3:t('home.first.subtitle1_detail3')
            },
            {
                title:t('home.first.subtitle2'),
                detail1:t('home.first.subtitle2_detail1'),
                detail2:t('home.first.subtitle2_detail2'),
                detail3:t('home.first.subtitle2_detail3')
            },
            {
                title:t('home.first.subtitle3'),
                detail1:t('home.first.subtitle3_detail1'),
                detail2:t('home.first.subtitle3_detail2'),
                detail3:t('home.first.subtitle3_detail3')
            }
        ]
    })
    // const secondImgs = ref([second1, second2, second3,second4,second5, second6])
    const selected = ref(0)
    const secondItems = computed(() => {
        return [
            {
                title:t('home.secondNew.subtitle1'),
                content:t('home.secondNew.content1'),
                key: 0,
                img: second2
            },
            {
                title:t('home.secondNew.subtitle2'),
                content:t('home.secondNew.content2'),
                key: 1,
                img: second2,
            },
            {
                title:t('home.secondNew.subtitle3'),
                content:t('home.secondNew.content3'),
                key: 2,
                img: second3
            },
            {
                title:t('home.secondNew.subtitle4'),
                content:t('home.secondNew.content4'),
                key: 3,
                img: second4
            },
            {
                title:t('home.secondNew.subtitle5'),
                content:t('home.secondNew.content5'),
                key: 4,
                img: second5
            },
            {
                title:t('home.secondNew.subtitle6'),
                content:t('home.secondNew.content6'),
                key: 5,
                img: second6
            }
        ]
    })
    const fourthItems = computed(() => {
        return [
            {
                content1:t('home.fourth.subtitle1'),
                subtitle:t('home.fourth.subtitle1_1'),
                content2: t('home.fourth.subtitle1_type'),
                content3: t('home.fourth.subtitle1_content'),
                name:'purchasetraffic',
                price: '8',
                price2:'.00'
            },
            {
                content1:t('home.fourth.subtitle2'),
                subtitle:t('home.fourth.subtitle2_1'),
                content2: t('home.fourth.subtitle2_type'),
                content3: t('home.fourth.subtitle2_content'),
                name:'purchaseproxy',
                price:'12',
                price2:'.00'
            },
            // {
            //     content1:t('home.fourth.subtitle3'),
            //     subtitle:t('home.fourth.subtitle3_1'),
            //     content2: t('home.fourth.subtitle3_type'),
            //     content3: t('home.fourth.subtitle3_content'),
            //     name:'purchasetraffic',
            //     price:'6',
            //     price2:'.00'
            // }
        ]
    })
    const fifthItems = computed(() => {
        return [
            {
                title: t('home.fifth.item1'),
                img :fifth_1
            },
            {
                title: t('home.fifth.item2'),
                img :fifth_2
            },
            {
                title: t('home.fifth.item3'),
                img :fifth_3
            },
            {
                title: t('home.fifth.item4'),
                img :fifth_4
            }
        ]
    })
    const onMouseEnter = (key:number) => {
        selected.value = key
        interval && clearInterval(interval)
    }
    const onMouseLeave = (key:number) => {
        selected.value = key
        secondInterval()
    }
    const onDashboard = () => {
        userStore.setOpenVerify(true)
        router.push({
            name:'dashboard'
        })
    }
    const onPage = (name:string) => {
        router.push({
            name:name
        })
    }
</script>
<style lang="less">
    .home_bg {
        background-image: url('res@/home/bg.svg');
        background-color: #2967B2;
        // background-size: cover;
        background-repeat: no-repeat;
        // background-position: 100% 100% ;
        background-position: center;
        // background-size: 100% 100%;
    }
    .first_text {
        // background: linear-gradient(to right, #06FFC1 51%, #0059FF 100%);
        background: linear-gradient(to right, #06FFC1 51%, #0059FF 100%);
        background-clip: text;
        
        color: transparent;
    }
    .special_word {
        // background: linear-gradient(90deg, #06FFC1 0%,  #0059FF 100%);
        background: linear-gradient(to right, #06FFC1 0%, #0059FF 30%);
        background-clip: text;
        
        color: transparent;
        line-height: 26px;
       
    }
    .special_word2 {
        // background: linear-gradient(0.9998647424432189deg, #06FFC1 0%, #0059FF 100%);
        background: linear-gradient(to right, #06FFC1 0%, #0059FF 20%);
        background-clip: text;
        color: transparent;
        line-height: 26px;
    }
    .card_bg {
        background: linear-gradient(45deg, #6FB0FF 0%, #2967B2 100%);
    }
    .second_bg {
        background-repeat: no-repeat;
        background-size: cover;
    }
    .second_text {
        // background: linear-gradient(to right, #06FFC1 0%, #0059FF 20%);
        background: linear-gradient(to right, #0059FF 0%, #06C5FF 20%);
        background-clip: text;
        color: transparent;
        // line-height: 26px;
    }
</style>