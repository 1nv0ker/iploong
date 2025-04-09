<template>
    <div class="w-full h-[58px] flex items-center justify-between">
        <a-input :placeholder="$t('register.placeholder2')" class="loginAInput w-[324px!important]" v-model:value="code">
            <template #prefix>
            <img :src="emailCode" />
            </template>
        </a-input>
        <a-button class="w-[141px] h-[58px!important] rounded-[10px!important] bg-[#2967B2!important]" @click="onSendCode">
            <span class="pingfang_font text-[18px] text-[white]">{{index==60?$t('register.code'):index+'s'}}</span>
        </a-button>
    </div>
</template>
<script setup lang="ts">
    import emailCode from 'res@/login/emailcode.svg'
    import { ref, onMounted, onUnmounted } from 'vue'
    const code = defineModel()
    const index = ref(60)
    let interval:any = null
    onMounted(() => {
        index.value = 60
        interval && clearInterval(interval)
    })
    onUnmounted(() => {
        index.value = 60
        interval && clearInterval(interval)
    })
    const onSendCode = () => {
        if (index.value != 60) {
            return
        }
        interval && clearInterval(interval)
        interval = setInterval(() => {
            
            index.value = index.value - 1
            if (index.value == 0) {
                index.value = 60
                clearInterval(interval)
            }
        }, 1000);
    }
</script>