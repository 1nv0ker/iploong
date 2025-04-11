<template>
    <div class="w-[322px] h-full bg-[#F3F9FF] relative flex justify-center ">
        <div class="w-full right-[51px] top-[36px] flex justify-end absolute">
            <Setting />
        </div>
        <div class="pt-[143px] w-full overflow-auto">
            <div class="w-full flex justify-center">
                <img :src="avatarImg" class="w-[72px] h-[72px]" />
            </div>
            <div class="pt-[16px] w-full flex justify-center flex-col gap-[6px] items-center">
                <span class="inter_font text-[16px] font-bold leading-[19px] text-[#202020]">{{setStore.userInfo?.email}}</span>
                <span class="inter_font text-[12px] text-[#7e7e7e] leading-[14px] font-medium" >secret:s-c2a105a6dabf970</span>
            </div>
            <div class="w-full pt-[24px] flex justify-center">
                <a-button class="bg-[#9DA0A4!important] rounded-[8px!important]" @click="onModifyPass">
                    <span class="poppins_font text-[14px] text-[#fcfcfd]" >{{$t('usercenter.userinfo.button')}}</span>
                </a-button>
            </div>
            <div class="pt-[52px] flex w-full justify-center">
                <img :src="boxImg" class="w-[270px] h-[158px]"/>
            </div>
            <div class="pt-[30px] w-full flex flex-col gap-[12px] items-center">
                <div class="w-[270px] h-[50px] rounded-[8px] bg-[white] flex justify-between pl-[8px] pr-[8px] items-center">
                    <span>{{$t('usercenter.userinfo.content')}}</span>
                    <div class="flex gap-[5px] items-center">
                        <span class="text-[#000000] text-[24px] font-bold poppins_font leading-[28px]">0
                        </span>
                        <span class=" text-[#666666] font-normal text-[14px] poppins_font leading-[16px]">USDT</span>
                    </div>
                </div>
                <a-button class="w-[270px] h-[42px!important] bg-[#2967B2!important]" @click="onRecharge">
                    <span class="poppins_font text-[14px] font-bold leading-[16px] text-[white]">{{ $t('usercenter.userinfo.button1') }}</span>
                </a-button>
                <a-button class="w-[270px] h-[42px!important] bg-[#F3F9FF!important] border-1 border-[#666666!important]" @click="onLogout">
                    <span class="poppins_font text-[14px] text-[#666666] leading-[16px]">{{ $t('usercenter.userinfo.button2') }}</span>
                </a-button>
            </div>
        </div>
        <ChangePassModal v-model="open" ref="modalRef" />
        <UsdtCharge v-model="open2" ref="rechargeRef"/>
    </div>
</template>
<script setup lang="ts">
    import Setting from 'basic@/components/Setting.vue';
    import ChangePassModal from './ChangePassModal.vue';
    import UsdtCharge from './UsdtCharge.vue';
    import useSetting from 'store@/user'
    import { ref, nextTick } from 'vue'
    import avatarImg from 'res@/usercenter/setting/avatar.svg'
    import boxImg from 'res@/usercenter/setting/img.png'
    const setStore = useSetting()
    const open = ref(false)
    const open2 = ref(false)
    const modalRef = ref<any>()
    const rechargeRef = ref<any>()
    const onModifyPass = () => {
        open.value = true
        nextTick(() => {
            modalRef.value && modalRef.value.init()
        })
    }

    const onRecharge = () => {
        open2.value = true
        nextTick(() => {
            rechargeRef.value && rechargeRef.value.init()
        })
    }
    const onLogout = () => {
        setStore.logout()
    }
</script>