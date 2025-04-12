<template>
    <div>
        <div class="w-full absolute bottom-0 right-0 left-0 h-[94px] border-1 border-[#CCCCCC] bg-[white]  pb-[15px] flex pr-[300px] pl-[70px] items-end justify-between">
            <div class="flex items-end">
                <span class="text-[#666666] text-[24px] poppins_font">{{$t('usercenter.pay.title')}}</span>
                <span class="text-[#2967B2] text-[26px] poppins_font pl-[16px]">$</span>
                <span class="text-[#2967B2] text-[40px] font-semibold pl-[6px] leading-[40px] poppins_font">{{ price }}.00</span>
            </div>
            <div class="w-[270px] h-[48px] rounded-[8px] bg-[#2967B2] flex justify-center items-center cursor-pointer" @click="onPay">
                <span class="text-[#FFFFFF] text-[14px] poppins_font">{{$t('usercenter.pay.button1')}}</span>
            </div>
            <div class="w-[230px] h-full right-0 absolute bg-[#000000] top-0 bottom-0 flex justify-center items-center cursor-pointer" @click="showPay=!showPay">
                <span class="text-[white] text-[18px] poppins_font">{{ $t('usercenter.pay.button2') }}</span>
                <img :src="up" :style="`${showPay?'':'transform: scaleY(-1)'}`" class="w-[24px] h-[24px]"/>
            </div>
            <div class="w-[230px] h-[240px] absolute top-[-250px] right-0 bg-[#E9ECF1]" style="box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.15);" v-show="showPay">
                <div class="w-full h-1/3 border-b-1 border-[white] flex items-center pl-[20px] gap-[12px]">
                    <img :src="ali" class="w-[32px] h-[32px] cursor-pointer" />
                    <span class="text-[#000000] text-[18px] poppins_font cursor-pointer">{{$t('usercenter.pay.pay1')}}</span>
                </div>
                <div class="w-full h-1/3 border-b-1 border-[white] flex items-center pl-[20px] gap-[12px]">
                    <img :src="wechat" class="w-[32px] h-[32px]cursor-pointer" />
                    <span class="text-[#000000] text-[18px] poppins_font cursor-pointer">{{$t('usercenter.pay.pay2')}}</span>
                </div>
                <div class="w-full h-1/3 border-b-1 border-[white] flex gap-[10px] justify-center items-center">
                    <img :src="visa" class="w-[42.5px] h-[26px] cursor-pointer" />
                    <img :src="pay1" class="w-[42.5px] h-[26px] cursor-pointer" />
                    <img :src="pay2" class="w-[42.5px] h-[26px] cursor-pointer" />
                    <img :src="pay3" class="w-[42.5px] h-[26px] cursor-pointer" />
                </div>
            </div>
        </div>
        <ModalCompoent v-model="open" :title="$t('usercenter.pay.button1')" slotMode :width="424">
            <div class="w-full">
                <div class="w-full flex justify-center items-end pt-[70px]">
                    <span class="text-[#0D458A] text-[67px] font-semibold pl-[6px] leading-[67px] poppins_font">{{ price }}.00</span>
                    <span class="text-[#2967B2] text-[32px] poppins_font leading-[40px]">USDT</span>
                </div>
                <div class="pt-[60px] flex justify-center items-center flex-col gap-[8px]">
                    <div class="w-[324px] h-[50px] border-1 border-[#666666] rounded-[10px] cursor-pointer flex justify-center items-center" @click="onConfirm">
                        <span class="text-[#666666] text-[17px] poppins_font">{{((userStore.userInfo?.accountBalance || 0) >= (price||0))?$t('usercenter.pay.button3'):$t('usercenter.pay.button4')}}</span>
                    </div>

                    <div class="w-[324px] h-[50px] border-1 border-[#666666] rounded-[10px] cursor-pointer flex justify-center items-center" @click="open=false">
                        <span class="text-[#666666] text-[17px] poppins_font">{{ $t('usercenter.pay.button5') }}</span>
                    </div>
                </div>
            </div>
        </ModalCompoent>
    </div>
</template>
<script setup lang="ts">
    import ModalCompoent from './ModalCompoent.vue';
    import up from 'res@/usercenter/dy/up.svg'
    import ali from 'res@/usercenter/dy/ali.svg'
    import wechat from 'res@/usercenter/dy/wechat.svg'
    import visa from 'res@/usercenter/dy/visa.svg'
    import pay1 from 'res@/usercenter/dy/pay1.svg'
    import pay2 from 'res@/usercenter/dy/pay2.svg'
    import pay3 from 'res@/usercenter/dy/pay3.svg'
    // import down from 'res@/usercenter/dy/down.svg'
    import useUserStore from 'store@/user'
    import { ref } from 'vue'
    const showPay = ref(false)
    const props = defineProps({
        price:Number
    })
    const open = ref(false)
    const userStore = useUserStore()

    const onPay = () => {
        open.value = true
    }
    const onConfirm = () => {
        if ((userStore.userInfo?.accountBalance || 0) >= (props.price||0)) {

        }
    }
</script>