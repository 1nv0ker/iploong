<template>
    <div class="w-full h-[58px] flex items-center justify-between">
        <a-input :placeholder="$t('register.placeholder2')" class="loginAInput w-[324px!important]" v-model:value="code">
            <template #prefix>
            <img :src="emailCode" />
            </template>
            
        </a-input>
        
        <a-button class="w-[141px] h-[58px!important] rounded-[10px!important] bg-[#2967B2!important]" @click="onSendCode" :loading="loading">
            <span class="pingfang_font text-[18px] text-[white]">{{index==60?$t('register.code'):index+'s'}}</span>
        </a-button>
    </div>
    <span class="text-[#999999] text-[12px] pingfang_font ">{{$t('register.tip')}}</span>
</template>
<script setup lang="ts">
    import emailCode from 'res@/login/emailcode.svg'
    import { SendCode } from 'api@/login'
    import { ref, onMounted, onUnmounted } from 'vue'
    import { message } from 'ant-design-vue'
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    const code = defineModel()
    const index = ref(60)
    const loading = ref(false)
    let interval:any = null
    onMounted(() => {
        index.value = 60
        interval && clearInterval(interval)
    })
    const props = defineProps({
        email:String,
        type:String
    })
    const emit = defineEmits(['onEmail'])
    onUnmounted(() => {
        index.value = 60
        interval && clearInterval(interval)
    })
    const onSendCode = () => {
        if (!props.email) {
            emit('onEmail')
            return
        }
        if (index.value != 60) {
            return
        }
        index.value = 60
        loading.value = true
        SendCode({
            email: props.email,
            smsType: props.type
        })
        .then(() => {
            loading.value = false
            message.success(t('message.smscode'))
            interval && clearInterval(interval)
            interval = setInterval(() => {
                index.value = index.value - 1
                if (index.value == 0) {
                    index.value = 60
                    clearInterval(interval)
                }
            }, 1000);
        })
        .catch(() => {
            loading.value = false
        })
        
    }
</script>