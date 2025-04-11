<template>
    <div class="w-[500px] h-[637px] flex flex-col items-center">
        <div class="w-full pt-[125px] flex items-center justify-center">
            <span class="text-[42px] text-[#000] big_font" style="font-family: BigruixianBlackGBV10;">{{ $t('register.title') }}</span>
        </div>
        <div class="w-[481px] pt-[34px]">
            <a-form layout="vertical" :model="loginValue" :rules="rulesRef" ref="formRef">
                <a-row >
                    <a-col :span="24">
                        <a-form-item name="email">
                            <template #label>
                                <span class="text-[#435A7B] text-[19.25px] font-medium sf_font">{{$t('register.form1')}}</span>
                            </template>
                            <a-input :placeholder="$t('register.placeholder1')" class="loginAInput" v-model:value="loginValue.email">
                                <template #prefix>
                                   <img :src="emailImg" />
                                </template>
                            </a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item name="code">
                            <template #label>
                                <span class="text-[#435A7B] text-[19.25px] font-medium sf_font">{{$t('register.form2')}}</span>
                            </template>
                            <EmailCode v-model="loginValue.code" :email="loginValue.email" @onEmail="onEmail" :type="'register'"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item name="password">
                            <template #label>
                                <span class="text-[#435A7B] text-[19.25px] font-medium sf_font">{{$t('register.form3')}}</span>
                            </template>
                            <a-input-password :placeholder="$t('register.placeholder3')" class="loginAInput" v-model:value="loginValue.password">
                                <template #prefix>
                                    <img :src="passwordImg" />
                                </template>
                            </a-input-password>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item name="confirmPass">
                            <template #label>
                                <span class="text-[#435A7B] text-[19.25px] font-medium sf_font">{{$t('register.form4')}}</span>
                            </template>
                            <a-input-password :placeholder="$t('register.placeholder4')" class="loginAInput" v-model:value="loginValue.confirmPass">
                                <template #prefix>
                                    <img :src="passwordImg" />
                                </template>
                            </a-input-password>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item>
                            <template #label>
                                <span class="text-[#435A7B] text-[19.25px] font-medium sf_font">{{$t('register.form5')}}</span>
                            </template>
                            <a-input :placeholder="$t('register.placeholder5')" class="loginAInput" v-model:value="loginValue.inviteCode">
                                <template #prefix>
                                   <img :src="inviteImg" />
                                </template>
                            </a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item name="checked">
                            <div class="w-full h-[24px] flex items-center ">
                                <img :src="img" class="cursor-pointer" @click="onConfirm" />
                                <span class="pl-[6px] text-[#999999] text-[16px] pingfang_font">{{ $t('register.tip1')  }}<span class="text-[#435A7B] cursor-pointer ">{{ $t('register.tip2')  }}</span></span>
                            </div>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
            
            <div class="mt-[36px] w-full">
                <a-button class="w-full h-[58px!important] bg-[#2967B2!important]" @click="onLogin" :loading="loginValue.loading">
                    <span class="pingfang_font font-semibold text-[21px] text-[#FCFCFD] ">{{$t('register.button')}}</span>
                </a-button>
            </div>
            <div class="w-full h-[44px] flex items-center justify-center">
                <span class="text-[#999999] text-[16px] pingfang_font">{{$t('register.content') }}<span class="text-[#435A7B] cursor-pointer" @click="onRegister">{{$t('register.content2') }}</span></span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { reactive, computed, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import emailImg from 'res@/login/email.svg'
    import inviteImg from 'res@/login/invite.svg'
    import EmailCode from './EmailCode.vue'
    import passwordImg from 'res@/login/password.svg'
    import roundImg from 'res@/login/round.svg'
    import gouImg from 'res@/login/gou.svg'
    import { Register } from 'api@/login'
    import { useI18n } from 'vue-i18n';
    import useUser from 'store@/user'
    import { message } from 'ant-design-vue'
    const { t } = useI18n();
    const userSotre = useUser()
    const loginValue = reactive({
        email:'',
        code:'',
        password:'',
        confirmPass:'',
        checked:'',
        inviteCode: '',
        loading: false
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
                message:t('register.message1'),
                pattern:'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' 
            }
        ],
        code: [
            {
                required: true,
                message:t('register.message2') 
            }
        ],
        password: [
            {
                required: true,
                message:t('register.placeholder3') 
            }
        ],
        confirmPass: [
            {
                required: true,
                message:t('register.placeholder4'),
                validator: (_rule:any, value:any, callback:any) => {
                    if (value && value !== loginValue.password) {
                        callback(new Error(t('register.placeholder4')))
                    }
                    callback()
                } 
            }
        ],
        checked: [
            {
                required: true,
                message:t('register.message3') 
            }
        ]
    })

    const onRegister = () => {
        router.push({
            name: 'login'
        })
    }
    const onEmail = () => {
        formRef.value.validateFields('email')
    }
    const onLogin = () => {
        formRef.value.validate()
        .then(() => {
            loginValue.loading = true
            Register({
                email:loginValue.email,
                passWord:loginValue.password,
                verifyCode:loginValue.code,
                beInviteCode:loginValue.inviteCode?loginValue.inviteCode:undefined
            })
            .then((res:any) => {
                loginValue.loading = false
                console.log('res', res)
                userSotre.setToken(res.body.token)
                userSotre.setUserInfo()
                message.success({
                    content:t('message.register'),
                    duration: 2,
                    onClose: ()=> {
                        router.push({name:'proxycity'})
                    }
                })
            })
            .catch(() => {
                loginValue.loading = false
            })
        })
    }
</script>
