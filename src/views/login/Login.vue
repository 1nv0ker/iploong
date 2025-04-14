<template>
    <div class="w-[500px] h-[637px] flex flex-col items-center">
        <div class="w-full pt-[125px] flex items-center justify-center">
            <span class="text-[42px] text-[#000] big_font" style="font-family: BigruixianBlackGBV10;">{{ $t('login.title') }}</span>
        </div>
        <div class="w-[481px] pt-[135px]">
            <a-form layout="vertical" :model="loginValue" :rules="rulesRef" ref="formRef">
                <a-row >
                    <a-col :span="24">
                        <a-form-item name="email">
                            <template #label>
                                <span class="text-[#435A7B] text-[19.25px] font-medium sf_font">{{$t('login.form1')}}</span>
                            </template>
                            <a-input :placeholder="$t('login.placeholder1')" class="loginAInput" v-model:value="loginValue.email">
                                <template #prefix>
                                   <img :src="emailImg" />
                                </template>
                            </a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item name="password">
                            <template #label>
                                <span class="text-[#435A7B] text-[19.25px] font-medium sf_font">{{$t('login.form2')}}</span>
                            </template>
                            <a-input-password :placeholder="$t('login.placeholder2')" class="loginAInput" v-model:value="loginValue.password">
                                <template #prefix>
                                    <img :src="passwordImg" />
                                </template>
                            </a-input-password>
                        </a-form-item>
                        <div class="w-[481px]  flex justify-end items-center ">
                            <span class="text-[#435A7B] text-[16px] pingfang_font cursor-pointer" @click="onForgetPass">{{$t('login.button1')}}</span>
                        </div>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item name="checked">
                            <div class="w-full h-[24px] flex items-center ">
                                <img :src="img" class="cursor-pointer" @click="onConfirm" />
                                <span class="pl-[6px] text-[#999999] text-[16px] pingfang_font">{{ $t('login.tips')  }}<span class="text-[#435A7B] cursor-pointer ">{{ $t('login.tips2')  }}</span></span>
                            </div>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
            
            <div class="mt-[36px] w-full">
                <a-button class="w-full h-[58px!important] bg-[#2967B2!important]" @click="onLogin" :loading="loginValue.loading">
                    <span class="pingfang_font font-semibold text-[21px] text-[#FCFCFD] ">{{$t('login.button2')}}</span>
                </a-button>
            </div>
            <div class="w-full h-[44px] flex items-center justify-center">
                <span class="text-[#999999] text-[16px] pingfang_font">{{$t('login.content') }}<span class="text-[#435A7B] cursor-pointer" @click="onRegister">{{$t('login.content2') }}</span></span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { reactive, computed, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import emailImg from 'res@/login/email.svg'
    import passwordImg from 'res@/login/password.svg'
    import roundImg from 'res@/login/round.svg'
    import gouImg from 'res@/login/gou.svg'
    import { Login } from 'api@/login'
    import useUser from 'store@/user'
    import { message } from 'ant-design-vue'
    const userSotre = useUser()
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    const loginValue = reactive({
        email:'',
        password:'',
        checked:'',
        loading: false
    })
    const img = computed(() => {
        return confirmStatus.value?gouImg:roundImg
    })
    const formRef = ref<any>()
    const confirmStatus = ref(false)
    const router = useRouter()
    const onForgetPass = () => {
        router.push({
            name: 'forget'
        })
    }
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
                message:t('login.message1'),
                pattern:'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' 
            }
        ],
        password: [
            {
                required: true,
                message:t('login.placeholder2') 
            }
        ],
        checked: [
            {
                required: true,
                message:t('login.message3') 
            }
        ]
    })

    const onRegister = () => {
        router.push({
            name: 'register'
        })
    }
    const onLogin = () => {
        formRef.value.validate()
        .then(() => {
            loginValue.loading = true
            Login({
                email: loginValue.email,
                loginType: 'pwd',
                passWord: loginValue.password,
                
            })
            .then((res:any) => {
                
                userSotre.setToken(res.body.token)
                userSotre.setUserInfo()
                const redirectPath:any = router.currentRoute.value.query.redirect || 'usercenter/dynamic'
                message.success({
                    content:t('message.login'),
                    duration: 2,
                    onClose: ()=> {
                        userSotre.setOpenVerify(true)
                        loginValue.loading = false
                        router.push(redirectPath)
                    }
                })
            })
            .catch(() => {
                loginValue.loading = false
            })
        })
    }
</script>
