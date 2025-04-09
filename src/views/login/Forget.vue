<template>
    <div class="w-[500px] h-[637px] flex flex-col items-center">
        <div class="w-full pt-[125px] flex items-center justify-center">
            <span class="text-[42px] text-[#000] big_font" style="font-family: BigruixianBlackGBV10;">{{ $t('forgetpassword.title') }}</span>
        </div>
        <div class="w-[481px] pt-[34px]">
            <a-form layout="vertical" :model="loginValue" :rules="rulesRef" ref="formRef">
                <a-row >
                    <a-col :span="24">
                        <a-form-item name="email">
                            <template #label>
                                <span class="text-[#435A7B] text-[19.25px] font-medium sf_font">{{$t('forgetpassword.form1')}}</span>
                            </template>
                            <a-input :placeholder="$t('forgetpassword.placeholder1')" class="loginAInput" v-model:value="loginValue.email">
                                <template #prefix>
                                   <img :src="emailImg" />
                                </template>
                            </a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item name="code">
                            <template #label>
                                <span class="text-[#435A7B] text-[19.25px] font-medium sf_font">{{$t('forgetpassword.form2')}}</span>
                            </template>
                            <EmailCode v-model="loginValue.code"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item name="password">
                            <template #label>
                                <span class="text-[#435A7B] text-[19.25px] font-medium sf_font">{{$t('forgetpassword.form3')}}</span>
                            </template>
                            <a-input-password :placeholder="$t('forgetpassword.placeholder3')" class="loginAInput" v-model:value="loginValue.password">
                                <template #prefix>
                                    <img :src="passwordImg" />
                                </template>
                            </a-input-password>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item name="confirmPass">
                            <template #label>
                                <span class="text-[#435A7B] text-[19.25px] font-medium sf_font">{{$t('forgetpassword.form4')}}</span>
                            </template>
                            <a-input-password :placeholder="$t('forgetpassword.placeholder4')" class="loginAInput" v-model:value="loginValue.confirmPass">
                                <template #prefix>
                                    <img :src="passwordImg" />
                                </template>
                            </a-input-password>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item name="checked">
                            <div class="w-full h-[24px] flex items-center ">
                                <img :src="img" class="cursor-pointer" @click="onConfirm" />
                                <span class="pl-[6px] text-[#999999] text-[16px] pingfang_font">{{ $t('forgetpassword.tip1')  }}<span class="text-[#435A7B] cursor-pointer ">{{ $t('forgetpassword.tip2')  }}</span></span>
                            </div>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
            
            <div class="mt-[36px] w-full">
                <a-button class="w-full h-[58px!important] bg-[#2967B2!important]" @click="onLogin">
                    <span class="pingfang_font font-semibold text-[21px] text-[#FCFCFD] tracking-[20px]">{{$t('forgetpassword.button')}}</span>
                </a-button>
            </div>
            <div class="w-full h-[44px] flex items-center justify-center">
                <span class="text-[#999999] text-[16px] pingfang_font">{{$t('forgetpassword.content') }}<span class="text-[#435A7B] cursor-pointer" @click="onRegister">{{$t('forgetpassword.content2') }}</span></span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { reactive, computed, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import emailImg from 'res@/login/email.svg'
    import EmailCode from './EmailCode.vue'
    import passwordImg from 'res@/login/password.svg'
    import roundImg from 'res@/login/round.svg'
    import gouImg from 'res@/login/gou.svg'
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    const loginValue = reactive({
        email:'',
        code:'',
        password:'',
        confirmPass:'',
        checked:''
    })
    const img = computed(() => {
        return confirmStatus.value?gouImg:roundImg
    })
    const formRef = ref<any>()
    const confirmStatus = ref(false)
    const router = useRouter()
    const onConfirm = () => {
        confirmStatus.value = !confirmStatus.value
        if (confirmStatus.value) {
            loginValue.checked = '1'
        } else {
            loginValue.checked = ''
        }
    }
    const rulesRef = reactive({
        email: [
            {
                required: true,
                message:t('forgetpassword.message1'),
                pattern:'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' 
            }
        ],
        code: [
            {
                required: true,
                message:t('forgetpassword.message2') 
            }
        ],
        password: [
            {
                required: true,
                message:t('forgetpassword.placeholder3') 
            }
        ],
        confirmPass: [
            {
                required: true,
                message:t('forgetpassword.placeholder4'),
                validator: (_rule:any, value:any, callback:any) => {
                    if (value && value !== loginValue.password) {
                        callback(new Error(t('forgetpassword.placeholder4')))
                    }
                    callback()
                } 
            }
        ],
        checked: [
            {
                required: true,
                message:t('forgetpassword.message3') 
            }
        ]
    })

    const onRegister = () => {
        router.push({
            name: 'login'
        })
    }
    const onLogin = () => {
        formRef.value.validate()
        .then(() => {

        })
    }
</script>
