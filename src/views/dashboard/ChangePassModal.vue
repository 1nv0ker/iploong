<template>
    <ModalCompoent v-model="open" :title="$t('usercenter.userinfo.title')" slotMode >
        <div class="w-[481px]">
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
                            <EmailCode v-model="loginValue.code" :email="loginValue.email" @onEmail="onEmail" :type="'recovery'"/>
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
                </a-row>
            </a-form>
            <div class="w-full flex flex-col gap-[8px] ">
                <a-button class="w-[481px] h-[58px!important] rounded-[10px!important] bg-[#2967B2!important]" @click="onConfirm">
                    <span class="text-[#FCFCFD] text-[21px] poppins_font font-semibold">{{ $t('common.yes') }}</span>
                </a-button>
                <a-button class="w-[481px] h-[58px!important] rounded-[10px!important] border-1 border-[#666666!important]" @click="onCancel">
                    <span class="text-[#999999] text-[17px] poppins_font">{{ $t('common.no') }}</span>
                </a-button>
            </div>
        </div>
    </ModalCompoent>
</template>
<script setup lang="ts">
    import ModalCompoent from 'basic@/components/ModalCompoent.vue';
    import { reactive, ref } from 'vue'
    import emailImg from 'res@/login/email.svg'
    import EmailCode from '../login/EmailCode.vue';
    import passwordImg from 'res@/login/password.svg'
    // import useUser from 'store@/user'
    import { ChangePass } from 'api@/login'
    import { useI18n } from 'vue-i18n';
    import { message } from 'ant-design-vue'

    const { t } = useI18n();
    const open = defineModel()
    const formRef = ref<any>()
    const loginValue = reactive({
        email:'',
        code:'',
        password:'',
        confirmPass:'',
        loading: false
    })
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
        ]
    })
    const init = () => {
        formRef.value && formRef.value.resetFields()
        loginValue.email = ''
        loginValue.code = ''
        loginValue.password = ''
        loginValue.confirmPass = ''
    }
    defineExpose({
        init: init
    })
    const onEmail = () => {
        formRef.value.validateFields('email')
    }
    const onConfirm = () => {
        formRef.value.validate()
        .then(() => {
            loginValue.loading = true
            ChangePass({
                newPassWord:loginValue.password,
                verifyCode:loginValue.code
            })
            .then(() => {
                loginValue.loading = false
                message.success(t('common.success'))
            })
            .catch(() => {
                loginValue.loading = false
            })
        })
    }
    const onCancel = () => {
        open.value = false
    }
</script>
