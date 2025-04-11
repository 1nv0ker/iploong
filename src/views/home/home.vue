<template>
    <div class="w-full">
        <!-- 第一块区域 -->
        <div class="home_bg h-[864px] w-full">
            <div class="flex flex-col gap-[12px] pt-[64px] w-full items-center Montserrat">
                <span class="text-[60px] font-extrabold text-[white]">{{$t('home.first.title')}}</span>
                <span class="text-[60px] font-extrabold text-[white]">{{$t('home.first.title2')}}</span>
                <span class="text-[60px] font-extrabold text-[white]">{{$t('home.first.title3')}}</span>
            </div>
            <div class="w-full flex justify-center pt-[40px]">
                <img :src="dashboardImg" class="cursor-pointer w-[378px] h-[83.7px]" @click="onDashboard"/>
            </div>
            <div class="mt-[160px] w-full flex justify-center">
                <div class="w-[1204px] h-[160px] bg-[rgba(0,0,0,0.1)] rounded-[14px] pt-[24px] flex gap-[108px] justify-center">
                    <div class="w-[300px] flex flex-col gap-[12px]" v-for="item in firstItems">
                        <div class="w-full flex">
                            <span class="Mulish_font text-center font-extrabold text-[19px] text-[white] w-full">{{item.title}}</span>
                        </div>
                        <span class="text-[#F1F1F1] text-[16px] inter_font">{{ item.detail1 }} <span class="text-[#1EFFF4]">{{ item.detail2 }} <span class="text-[#F1F1F1]"> {{ item.detail1 }}</span></span></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第二区域 -->
        <div class="w-full flex justify-center">
            <div class="w-[1486px] h-[1187px] pt-[230px]">
                <div class="w-full flex justify-center">
                    <span class="text-[#2967B2] text-[52px] font-bold sf_font text-center w-[1200px]">{{ $t('home.second.title')  }}</span>
                </div>
                <div class="w-full h-[496px] flex gap-[45px] mt-[81px]">
                    <div class="w-[752px] h-full flex gap-[39px] flex-col">
                        <div class="w-full h-[117px] bg-[rgba(0,0,0,0.06)] pl-[32px] rounded-[14px] flex flex-col gap-[13px] justify-center">
                            <span class="text-[#000000] text-[26px] font-bold inter_font">{{$t('home.second.subtitle1') }}</span>
                            <span class="text-[#7A7A7A] text-[18px] inter_font">{{$t('home.second.content1') }}</span>
                        </div>
                        <div class="w-full h-[117px] bg-[rgba(0,0,0,0.06)] pl-[32px] rounded-[14px] flex flex-col gap-[13px] justify-center">
                            <span class="text-[#000000] text-[26px] font-bold inter_font">{{$t('home.second.subtitle2') }}</span>
                            <span class="text-[#7A7A7A] text-[18px] inter_font">{{$t('home.second.content2') }}</span>
                        </div>
                        <div class="w-full h-[184px] bg-[#D4E1F0] pl-[32px] rounded-[14px] flex flex-col gap-[13px] pt-[20px]">
                            <span class=" text-[26px] font-bold inter_font special_word ">{{$t('home.second.subtitle3') }}</span>
                            <span class="text-[#000000] text-[24px] inter_font max-w-[540px] leading-[26px]">{{$t('home.second.content3') }}</span>
                        </div>
                    </div>
                    <div class="w-[689px] h-full bg-[rgba(41,103,178,0.2)] rounded-[14px] relative ">
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
                    </div>
                </div>
            </div>
        </div>
        <!-- 第三区域 -->
        <div class="w-full flex justify-center ">
            <div class="w-[1486px] h-[1000px]">
                <div class="w-full flex justify-center h-[108px]">
                    <span class="text-[#2967B2] text-[52px] sf_font font-bold text-center max-w-[1200px]">{{$t('home.third.title')}}</span>
                </div>
                <div class="w-full h-[890px] flex justify-between">
                    <div class="w-[311px] flex flex-col gap-[80px] pt-[143px]">
                        <img :src="third1" />
                        <img :src="third2" />
                        <img :src="third3" />
                    </div>
                    <div class="w-[890px] h-[890px]">
                        <img :src="globalImg" class="w-full h-full"/>
                    </div>
                    <div class="w-[278px] flex flex-col gap-[80px] pt-[182px]">
                        <img :src="third4" />
                        <img :src="third5" />
                        <img :src="third6" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 第四区域 -->
        <div class="w-full flex justify-center pt-[152px]">
            <div class="w-[1512px]">
                <div class="w-full flex justify-between gap-[18px]">
                    <div class="w-[492px] h-[432px] rounded-[12px] card_bg pt-[43px] pl-[35px]" v-for="item in fourthItems">
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
                    <img  :src="payImg" />
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
    import secondImg from 'res@/home/second.svg'
    import gouImg from 'res@/home/gou.svg'
    import globalImg from 'res@/home/global.svg?inline'
    import third1 from 'res@/home/third1.svg?inline'
    import third2 from 'res@/home/third2.svg?inline'
    import third3 from 'res@/home/third3.svg?inline'
    import third4 from 'res@/home/third4.svg?inline'
    import third5 from 'res@/home/third5.svg?inline'
    import third6 from 'res@/home/third6.svg?inline'
    import payImg from 'res@/home/pay.svg?inline'
    import fifth_1 from 'res@/home/fifth_1.svg?inline'
    import fifth_2 from 'res@/home/fifth_2.svg?inline'
    import fifth_3 from 'res@/home/fifth_3.svg?inline'
    import fifth_4 from 'res@/home/fifth_4.svg?inline'
    import { useRouter } from 'vue-router'
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    const router = useRouter()
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
    const fourthItems = computed(() => {
        return [
            {
                content1:t('home.fourth.subtitle1'),
                subtitle:t('home.fourth.subtitle1_1'),
                content2: t('home.fourth.subtitle1_type'),
                content3: t('home.fourth.subtitle1_content'),
                name:'dy',
                price: '8',
                price2:'.00'
            },
            {
                content1:t('home.fourth.subtitle2'),
                subtitle:t('home.fourth.subtitle2_1'),
                content2: t('home.fourth.subtitle2_type'),
                content3: t('home.fourth.subtitle2_content'),
                name:'static',
                price:'12',
                price2:'.00'
            },
            {
                content1:t('home.fourth.subtitle3'),
                subtitle:t('home.fourth.subtitle3_1'),
                content2: t('home.fourth.subtitle3_type'),
                content3: t('home.fourth.subtitle3_content'),
                name:'dy',
                price:'6',
                price2:'.00'
            }
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
    const onDashboard = () => {
        router.push({
            name:'proxycity'
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
        background-image: url('res@/home/bg.svg?inline');
        background-color: #2967B2;
        // background-size: cover;
        background-repeat: no-repeat;
        // background-position: 100% 100% ;
        background-position: center;
        // background-size: 100% 100%;
    }
    .special_word {
        background: linear-gradient(90deg, #06FFC1 0%,  #0059FF 100%);
        background-clip: text;
        color: transparent;
        line-height: 26px;
    }
    .special_word2 {
        background: linear-gradient(0.9998647424432189deg, #06FFC1 0%, #0059FF 100%);
        background-clip: text;
        color: transparent;
        line-height: 26px;
    }
    .card_bg {
        background: linear-gradient(45deg, #6FB0FF 0%, #2967B2 100%);
    }
</style>