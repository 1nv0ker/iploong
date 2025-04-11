<template>
    <ModalCompoent v-model="open" :title="$t('usercenter.userinfo.recharge.title')" slotMode >
        <div class="w-[482px]">
            <div class="w-full">
                <span class="text-[#D76D6D] text-[14px] inter_font">{{$t('usercenter.userinfo.recharge.tip')}}</span>
            </div>
            <div class="w-full pt-[25px] flex flex-col gap-[8px]">
                <div>
                    <span class="text-[#000000] text-[19px] inter_font font-semibold">{{$t('usercenter.userinfo.recharge.form1')}}</span>
                    <span class="pl-[10px] text-[#666666] text-[16px] inter_font">TRC20</span>
                </div>
                <div>
                    <span class="text-[#000000] text-[19px] inter_font font-semibold">{{$t('usercenter.userinfo.recharge.form2')}}</span>
                    <span class="pl-[10px] text-[#666666] text-[16px] inter_font">TLdKPrs3aAFx1d7628gSE3naod2MQzimng</span>
                </div>
            </div>
            <div class="w-full flex justify-center pt-[8px] pb-[8px]">
                <div class="flex flex-col items-center">
                    <a-qrcode :value="'TLdKPrs3aAFx1d7628gSE3naod2MQzimng'" :size="200" />
                    <span class="text-[#666666] text-[16px] inter_font">{{ $t('usercenter.userinfo.recharge.code') }}</span>
                </div>
            </div>
            <a-form layout="vertical" :model="loginValue" :rules="rulesRef" ref="formRef">
                <a-row>
                    <a-col :span="24">
                        <a-form-item name="txid">
                            <template #label>
                                <span class="text-[#000000] text-[19px] inter_font font-semibold">{{$t('usercenter.userinfo.recharge.form3')}}</span>
                            </template>
                            <a-input :placeholder="$t('usercenter.userinfo.recharge.content3')" class="recharge_input" v-model:value="loginValue.txid">
                               
                            </a-input>
                            <div class="pt-[7px]">
                                <span class=" text-[#999999] text-[14px] inter_font">{{$t('usercenter.userinfo.recharge.tip2')}}</span>
                            </div>
                        </a-form-item>
                    </a-col>
                    
                </a-row>
            </a-form>
            <div class="w-full flex flex-col gap-[8px] ">
                <a-button class="w-[481px] h-[58px!important] rounded-[10px!important] bg-[#2967B2!important]" @click="onConfirm">
                    <span class="text-[#FCFCFD] text-[21px] poppins_font font-semibold">{{ $t('common.yes') }}</span>
                </a-button>
            </div>
        </div>
    </ModalCompoent>
</template>
<script setup lang="ts">
    import ModalCompoent from 'basic@/components/ModalCompoent.vue';
    import { reactive, ref } from 'vue'
    // import useUser from 'store@/user'
    import { UsdtRecharge } from 'api@/buy'
    import { useI18n } from 'vue-i18n';
    import { message } from 'ant-design-vue'
    import userStore from 'store@/user'
    const { t } = useI18n();
    const open = defineModel()
    const useUserStore = userStore()
    const formRef = ref<any>()
    const loginValue = reactive({
        txid:'',
        loading: false
    })
    const rulesRef = reactive({
        txid: [
            {
                required: true,
                message:t('usercenter.userinfo.recharge.content3'),
            }
        ]
    })
    const init = () => {
        formRef.value && formRef.value.resetFields()
        loginValue.txid = ''
    }
    defineExpose({
        init: init
    })
    const onConfirm = () => {
        formRef.value.validate()
        .then(() => {
            loginValue.loading = true
            UsdtRecharge({
                txid:loginValue.txid,
            })
            .then(() => {
                loginValue.loading = false
                useUserStore.setUserInfo()
                message.success({
                    content:t('common.success'),
                    duration: 2,
                    onClose: () => {
                        open.value = false
                    }
                })
            })
            .catch(() => {
                loginValue.loading = false
            })
        })
    }
</script>
