<template>
    <ModalCompoent v-model="open" slotMode :width="980" @on-cancel="onCancel">
        <div class="w-full h-[683px] pl-[20px] pr-[20px] pt-[44px]">
            <div class="w-full pb-[20px]">
                <span class="text-[#000000] text-[18px] font-semibold sf_font max-w-full bitip_text" :title="$t('usercenter.verifymodal.title')">{{$t('usercenter.verifymodal.title')}}</span>
            </div>
            <div class="w-[894px] h-[373px] border-[#CCCCCC] border-l-1 border-t-1 border-b-1">
                <div class="w-full flex">
                    <div class="w-1/4 h-[62px] bg-[#E5EBFB] border-r-1 border-[#CCCCCC] flex items-center justify-center gap-[12px]" v-for="item in headers">
                        <span class="text-[#000000] text-[18px] sf_font max-w-[100px] bitip_text" :title="item.title">{{ item.title }}</span>
                        <div v-if="item.get" class="verity_box bg-[#A6BEFF] w-[77px] h-[30px] rounded-[4px] relative flex items-center justify-center">
                            <span class="text-[white] text-[14px] sf_font">{{$t('usercenter.verifymodal.get')}}￥{{ item.get }}</span>
                        </div>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="w-1/4 h-[62px] bg-[#F8F8F8] border-r-1 border-t-1 border-[#CCCCCC] flex items-center justify-center" v-for="item in coiumn1">
                        <span class="text-[#777777] text-[16px] poppins_font max-w-[80%] bitip_text" :title="item.title">{{item.title}}</span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="w-1/4 h-[62px] bg-[#F8F8F8] border-r-1 border-t-1 border-[#CCCCCC] flex items-center justify-center" v-for="item in coiumn2">
                        <span class="text-[#777777] text-[16px] poppins_font max-w-[80%] bitip_text" :title="item.title">{{item.title}}</span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="w-1/4 h-[62px] bg-[#F8F8F8] border-r-1 border-t-1 border-[#CCCCCC] flex items-center justify-center" v-for="item in coiumn3">
                        <span class="text-[#777777] text-[16px] poppins_font max-w-[80%] bitip_text" :title="item.title">{{item.title}}</span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="h-[62px] bg-[#F8F8F8] border-r-1 border-t-1 border-[#CCCCCC] flex items-center justify-center" v-for="item in coiumn4" :style="`width:${item.width/4*100}%;`">
                        <span class="text-[#777777] text-[16px] poppins_font max-w-[80%] bitip_text" :title="item.title">{{item.title}}</span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="h-[62px] bg-[#F8F8F8] border-r-1 border-t-1 border-[#CCCCCC] flex items-center justify-center border-b-1" v-for="item in coiumn5" :style="`width:${item.width/4*100}%;`">
                        <span class="text-[#777777] text-[16px] poppins_font max-w-[80%] bitip_text" :title="item.title">{{item.title}}</span>
                    </div>
                </div>
            </div>
            <div class="pt-[38px] w-full flex gap-[20px] items-start">
                <span class="pt-[5px] text-[18px] text-[#000000] sf_font max-w-[90px] bitip_text" :title="$t('usercenter.verifymodal.subtitl45')">{{$t('usercenter.verifymodal.subtitl45')}}</span>
                <div class="flex gap-[15px]">
                    <div class="flex flex-col gap-[16px] items-center">
                        <img class="w-[30px] h-[25px]"/>
                        <span class="text-[18px] text-[#666666] sf_font max-w-[72px] bitip_text" :title="$t('usercenter.verifymodal.step1')">{{$t('usercenter.verifymodal.step1')}}</span>
                    </div>
                </div>
                <div class="w-[237px] flex items-center">
                    <div class="w-[221px] h-[1px] border-t-1 border-[#CCCCCC] border-dashed"></div>
                    <img  :src="arrow" class="w-[16px] h-[16px]"/>
                </div>
                <div class="flex gap-[15px]">
                    <div class="flex flex-col gap-[16px] items-center">
                        <img class="w-[30px] h-[25px]"/>
                        <span class="text-[18px] text-[#666666] sf_font max-w-[80px] bitip_text" :title="$t('usercenter.verifymodal.step2')">{{$t('usercenter.verifymodal.step2')}}</span>
                    </div>
                </div>
                <div class="w-[237px] flex items-center">
                    <div class="w-[221px] h-[1px] border-t-1 border-[#CCCCCC] border-dashed"></div>
                    <img  :src="arrow" class="w-[16px] h-[16px]"/>
                </div>
                <div class="flex gap-[15px]">
                    <div class="flex flex-col gap-[16px] items-center">
                        <img class="w-[30px] h-[25px]"/>
                        <span class="text-[18px] text-[#666666] sf_font max-w-[80px] bitip_text" :title="$t('usercenter.verifymodal.step3')">{{$t('usercenter.verifymodal.step3')}}</span>
                    </div>
                </div>
            </div>
            <div class="w-full pt-[45px] flex justify-center items-center">
                <a-button class="w-[250px] h-[41px!important] rounded-[7px!important] bg-[#2967B2!important] " @click="onVerify">
                    <span class="text-[#FCFCFD] text-[15px] font-semibold poppins_font">{{$t('usercenter.verifymodal.button')}}</span>
                </a-button>
            </div>
        </div>
    </ModalCompoent>
</template>
<script setup lang="ts">
    import ModalCompoent from 'basic@/components/ModalCompoent.vue';
    import arrow from 'res@/arrow_1.svg'
    import useUser from 'store@/user'
    import { computed  } from 'vue'
    import { useI18n } from 'vue-i18n';
    import { useRouter } from 'vue-router'
    const { t } = useI18n();
    const open = defineModel()
    const userStore = useUser()
    const router = useRouter()
    const onCancel = () => {
        // console.log('onCancel')
        userStore.setOpenVerify(false)
    }
    const headers = computed(() => {
        return [
            {
                title:t('usercenter.verifymodal.subtitle1')
            },
            {
                title:t('usercenter.verifymodal.subtitle2'),
                get:80
            },
            {
                title:t('usercenter.verifymodal.subtitle3'),
                get: 150
            },
            {
                title:t('usercenter.verifymodal.subtitle4'),
                get: 350
            }
        ]
    })
    const coiumn1 = computed(() => {
        return [
            {
                title:t('usercenter.verifymodal.content1')
            },
            {
                title:'1.1G',

            },
            {
                title:'2.1G',

            },
            {
                title:'5G'
            }
        ]
    })
    const coiumn2 = computed(() => {
        return [
            {
                title:t('usercenter.verifymodal.content2')
            },
            {
                title:'720M',

            },
            {
                title:'1.3G',

            },
            {
                title:'3.1G'
            }
        ]
    })
    const coiumn3 = computed(() => {
        return [
            {
                title:t('usercenter.verifymodal.content3')
            },
            {
                title:'4G',

            },
            {
                title:'7.5G',

            },
            {
                title:'17.5G'
            }
        ]
    })
    const coiumn4 = computed(() => {
        return [
            {
                title:t('usercenter.verifymodal.content4'),
                width: 1
            },
            {
                title:t('usercenter.verifymodal.message'),
                width:3
            },
        ]
    })
    const coiumn5 = computed(() => {
        return [
            {
                title:t('usercenter.verifymodal.content5'),
                width: 1
            },
            {
                title:t('usercenter.verifymodal.message'),
                width:3
            },
        ]
    })
    const onVerify = () => {
        userStore.setOpenVerify(false)
        open.value = false
        router.push({name:'realauth'})
    }
</script>
<style lang="less">
    .verity_box {
        &::after {
            content: '';
            position: absolute;
            right: 72px;
            top: 6px;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-right-color: #A6BEFF;
        }
    }
</style>
