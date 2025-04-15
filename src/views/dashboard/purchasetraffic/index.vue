<template>
    <div class="w-full h-full overflow-auto bg-[#FAFBFF] p-[36px] relative pb-[100px]">
        <div class="w-full pb-[30px]">
            <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.purchasetraffic.title')}}</span>
       </div>
       <div class="w-full flex gap-[20px]">
            <div class="w-[894px] h-[576px] border-[#CCCCCC] border-1 border-dashed flex rounded-[15px]">
                <div :class="`w-[334px] h-full cursor-pointer ${selected==1?'selected_row':'unselected_row'}` " >
                    <div v-for="(item, key) in left" :style="`height:${item.height}px`" :class="`${item.key} flex items-center justify-center relative ${(key!==0 && key%2==0)?'bg_1':'bg_2' }`" @click="key==0?selected=1:''">
                        <span class="name max-w-full bitip_text pl-[6px] pr-[6px]" :title="item.label()"><span class="unit">{{ item.unit }} </span>{{ item.label() }}<span class="unit2"> {{ item.unit2 }}</span></span>
                        <div v-if="key==0 && selected==1" class=" absolute top-0 left-0 w-[80px] h-[30px] rounded-br-[15px] bg-[#3D95FF] rounded-tl-[15px] flex justify-center items-center">
                            <span class="text-[#FFFFFF] text-[16px] poppins_font">{{$t('usercenter.purchasetraffic.tip6')}}</span>
                        </div>
                        
                    </div>
                    <div class="w-full h-[103px] flex items-center  justify-center gap-[4px] flex-col">
                        <div class="flex items-center justify-center">
                            <div class=" rounded-l-[4px] cursor-pointer   bg-[#72ACF2]" @click="onReduce('left')"><img :src="reduce" class="w-full h-full"/></div>
                            <a-input-number v-model:value="leftNum" :max="100" :min="1" class=" text-[center!important] w-[106px] h-[36px!important] rounded-[0!important]" :controls="false"></a-input-number>
                            <div class=" rounded-r-[4px] cursor-pointer bg-[#72ACF2]" @click="onPlus('left')"><img :src="plus" class="w-full h-full"/></div>
                            <span class="pl-[12px] text-[#333333] text-[14px] poppins_font">GB</span>
                        </div>
                        <span class="text-[#999999] text-[14px] poppins_font">{{$t('usercenter.purchasetraffic.tip')}}</span>
                    </div>
                </div>
                <div class="w-[225px] h-full">
                    <div class="w-full " v-for="(item, key) in middle" :style="`height:${item.height}px`" :class="`${key%2==0?'bg-[#72ACF2]':'bg-[#A0C4F0]'} flex items-center justify-center`">
                        <span class="text-[#FFFFFF] text-[20px] poppins_font max-w-full bitip_text pl-[6px] pr-[6px]" :title="item.name">{{item.name}}</span>
                    </div>
                </div>
                <!-- <div :class="`w-[334px] h-full cursor-pointer ${selected==2?'selected_row':'unselected_row'}` " >
                    <div v-for="(item, key) in right" :style="`height:${item.height}px`" :class="`${item.key} flex items-center justify-center relative ${(key!==0 && key%2==0)?'bg_1':'bg_2' }`" @click="key==0?selected=2:''">
                        <span class="name max-w-full bitip_text pl-[6px] pr-[6px]" :title="item.label"><span class="unit">{{ item.unit }} </span>{{ item.label }}<span class="unit2"> {{ item.unit2 }}</span></span>
                        <div v-if="key==0 && selected==2" class=" absolute top-0 left-0 w-[80px] h-[30px] rounded-br-[15px] bg-[#3D95FF] rounded-tl-[15px] flex justify-center items-center">
                            <span class="text-[#FFFFFF] text-[16px] poppins_font">{{$t('usercenter.purchasetraffic.tip6')}}</span>
                        </div>
                    </div>
                    <div class="w-full h-[103px] flex items-center  justify-center gap-[4px] flex-col">
                        <div class="flex items-center justify-center">
                            <div class="border-1 border-[#CCCCCC] rounded-l-[4px] cursor-pointer   bg-[#F0F1F6]" @click="onReduce('right')"><img :src="reduce" class="w-full h-full"/></div>
                            <a-input-number v-model:value="rightNum" :max="100" :min="1" class=" text-[center!important] w-[106px] h-[36px!important] rounded-[0!important]" :controls="false"></a-input-number>
                            <div class="border-1 border-[#CCCCCC] rounded-r-[4px] cursor-pointer bg-[#F0F1F6]" @click="onPlus('right')"><img :src="plus" class="w-full h-full"/></div>
                            <span class="pl-[12px] text-[#333333] text-[14px] poppins_font">GB</span>
                        </div>
                        <span class="text-[#999999] text-[14px] poppins_font">{{$t('usercenter.purchasetraffic.tip')}}</span>
                    </div>
                </div> -->
            </div>
            <div class="w-[297px] h-[576px] border-1 border-[#CCCCCC] border-dashed pl-[30px] pr-[30px] pt-[162px] purchasetraffic_box">
                <span class="text-[#666666] text-[32px] big_font">{{$t('usercenter.purchasetraffic.button_title')}}</span>
                <div class="mt-[20px] w-[191px] h-[52px] flex justify-center items-center bg-[#45484A] rounded-[7px] cursor-pointer" @click="open = true">
                    <span class="text-[#FCFCFD] text-[18px] poppins_font font-semibold">{{$t('usercenter.purchasetraffic.button')}}</span>
                </div>
            </div>
       </div>
       <div class="pt-[10px] w-full">
            <div class="w-[894px] h-[70px] border-1 border-[#CCCCCC] rounded-[12px] flex items-center pl-[36px]">
                <span class="text-[#2C69B3] text-[18px] poppins_font" v-show="selected==0">{{ $t('usercenter.purchasetraffic.tip2') }}</span>
                <div v-show="selected!=0" class="flex items-center">
                    <img :src="target" />
                    <span class="text-[#666666] text-[18px] poppins_font pl-[20px]">{{ $t('usercenter.purchasetraffic.tip4') }}</span>
                    <span class="pl-[8px] text-[#2C69B3] text-[18px] poppins_font">{{ selected==1? $t('usercenter.purchasetraffic.tip7'): $t('usercenter.purchasetraffic.tip8') }}</span>
                    <div class="pl-[80px] flex items-center gap-[8px]">
                        <span class="text-[#666666] text-[18px] poppins_font pl-[20px]">{{ $t('usercenter.purchasetraffic.tip5') }}</span>
                        <span class="text-[#2C69B3] text-[22px] font-bold">{{ selected==1?leftNum:rightNum }}</span>
                        <span class="text-[#666666] text-[18px] poppins_font">[GB]</span>
                    </div>
                </div>
            </div>
            <div class="pt-[10px] flex gap-[10px] items-center">
                <span class="text-[#000000] text-[19px] font-semibold inter_font">{{$t('usercenter.purchasetraffic.label')}}</span>
                <a-input v-model:value="promotionCode" class="w-[538px!important] h-[58px!important] rounded-[12px!important] border-1 border-[#E4E4E7!important] customInput" 
                :placeholder="$t('usercenter.purchasetraffic.tip3')"></a-input>
            </div>
       </div>
       <PayComponent v-show="selected!=0" :price="price" :type="1" :num="leftNum" :promotionCode="promotionCode"/>
       <ContactModal v-model="open"/>
    </div>
</template>
<script setup lang="ts">
    import ContactModal from './ContactModal.vue';
    import PayComponent from 'com@/PayComponent.vue'
    import plus from 'res@/usercenter/dy/plus.svg'
    import reduce from 'res@/usercenter/dy/reduce.svg'
    import target from 'res@/usercenter/dy/target.svg'
    import { ref, computed } from 'vue'
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    const open = ref(false)
    const selected = ref(1)
    const leftNum = ref(1)
    const rightNum = ref(1)
    const promotionCode = ref('')
    const price = computed(() => {
        return selected.value==1?leftNum.value*8:rightNum.value*16
    })
    const left = computed(()=> {
        return [
            {
                label: ()=>t('usercenter.purchasetraffic.content1'),
                height:64,
                key:'title'
            },
            {
                label: ()=>'8.00 ',
                unit:'$',
                unit2:'/G',
                height:64,
                key:'flow'
            },
            {
                label: ()=>t('usercenter.purchasetraffic.content2'),
                height:57
            },
            {
                label: ()=>t('usercenter.purchasetraffic.content3'),
                height:57,
            },
            {
                label: ()=>t('usercenter.purchasetraffic.content4'),
                height:57
            },
            {
                label: ()=>t('usercenter.purchasetraffic.content5'),
                height:57
            },
            {
                label: ()=>t('usercenter.purchasetraffic.content6'),
                height:57
            },
            {
                label: ()=>t('usercenter.purchasetraffic.content7'),
                height:57
            }
        ]
    })
    const middle = computed(()=> {
        return [
            {
                name:t('usercenter.purchasetraffic.subtitle1'),
                height:64,
            },
            {
                name:t('usercenter.purchasetraffic.subtitle2'),
                height:64,
            },
            {
                name:t('usercenter.purchasetraffic.subtitle3'),
                height:57,
            },
            {
                name:t('usercenter.purchasetraffic.subtitle4'),
                height:57,
            },
            {
                name:t('usercenter.purchasetraffic.subtitle5'),
                height:57,
            },
            {
                name:t('usercenter.purchasetraffic.subtitle6'),
                height:57,
            },
            {
                name:t('usercenter.purchasetraffic.subtitle7'),
                height:57,
            },
            {
                name:t('usercenter.purchasetraffic.subtitle9'),
                height:57,
            },
            {
                name:t('usercenter.purchasetraffic.subtitle8'),
                height:103,
            },

        ]
    })

    // const right = computed(()=> {
    //     return [
    //         {
    //             label: t('usercenter.purchasetraffic.content11'),
    //             height:64,
    //             key:'title'
    //         },
    //         {
    //             label: '12.00 ',
    //             unit:'$',
    //             unit2:'/G',
    //             height:64,
    //             key:'flow'
    //         },
    //         {
    //             label: t('usercenter.purchasetraffic.content12'),
    //             height:57
    //         },
    //         {
    //             label: t('usercenter.purchasetraffic.content13'),
    //             height:57,
    //         },
    //         {
    //             label: t('usercenter.purchasetraffic.content14'),
    //             height:57
    //         },
    //         {
    //             label: t('usercenter.purchasetraffic.content15'),
    //             height:57
    //         },
    //         {
    //             label: t('usercenter.purchasetraffic.content16'),
    //             height:57
    //         },
    //         {
    //             label: t('usercenter.purchasetraffic.content17'),
    //             height:57
    //         }
    //     ]
    // })
    const onReduce = (key:string) => {
        if (key=='left') {
            if (leftNum.value!=1) {
                leftNum.value -- 
            }
        }
        if (key=='right') {
            if (rightNum.value!=1) {
                rightNum.value -- 
            }
        }
    }
    const onPlus = (key:string) => {
        if (key=='left') {
            if (leftNum.value!=100) {
                leftNum.value ++ 
            }
        }
        if (key=='right') {
            if (rightNum.value!=100) {
                rightNum.value ++ 
            }
        }
    }
</script>
<style lang="less">
    .customInput {
        font-family: Inter;
        font-size: 17px!important;
        &::placeholder {
            color: #999999; /* 改变文字颜色 */
            font-size: 17px!important;
            text-align: left;
            font-family: Inter;
            line-height: 100%;
        }
        .ant-input {
            &::placeholder {
                color: #999999; /* 改变文字颜色 */
                font-size: 17px!important;
                text-align: left;
                font-family: Inter;
                line-height: 100%;
            }
        }
        
    }
    .selected_row {
        .bg_1 {
            background-color: #E5EBFB;
        }
        .bg_2 {
            background-color: #F8F8F8;
        }
        &>div {
            &>span {
                font-family: Poppins;
                font-size: 16px;
            }
            .name {
                color:#0D458A;
                
            }   
            
        }
        .title {
            background: linear-gradient( 92deg, #A0C4F0 0%, #6B9FDE 100%);
            .name {
                color:#000000;
                font-size: 20px;
            }
        }
        .flow {
            &>span {
                line-height: 20px;
            }
            .name {
                color:#0D458A;
                font-size: 34px;
                font-weight: 600;
            }
            .unit {
                color:#2967B2;
                font-size: 22px;
                font-weight: 600;
            }
            .unit2 {
                color:#2967B2;
                font-weight: 400;
                font-size: 22px;
            }
        }
    }
    .unselected_row {
        .bg_1 {
            background-color: white;
        }
        .bg_2 {
            background-color: #F8F8F8;
        }
        &>div {
            &>span {
                font-family: Poppins;
                font-size: 16px;
            }
            .name {
                color:#666666;
                
            }   
            
        }
        .title {
            background: #E4E4E4;
            .name {
                color:#666666;
                font-size: 20px;
            }
        }
        .flow {
            &>span {
                line-height: 20px;
            }
            .name {
                color:#666666;
                font-size: 34px;
                font-weight: 600;
            }
            .unit {
                color:#666666;
                font-size: 22px;
                font-weight: 600;
            }
            .unit2 {
                color:#666666;
                font-weight: 400;
                font-size: 22px;
            }
        }
    }
    .ant-input-number {
        .ant-input-number-input{
            text-align: center!important;
        }
    }
    .purchasetraffic_box {
        background-image: url('res@/usercenter/purchasetraffic/box.svg');
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>