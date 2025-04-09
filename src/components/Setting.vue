<template>
    <div class="h-[25px] flex items-center">
        <img :src="homeImg" @click="onToHome" class="cursor-pointer" v-show="showImg" />
        <span class="pl-[40px] pr-[8px] text-[17.6px] text-[#999999] font-semibold cursor-pointer" @click="onSwitch">{{lan}}</span>
        <img :src="switchImg" @click="onSwitch" class=" cursor-pointer"/>
    </div>
</template>
<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import homeImg from 'res@/home.svg'
    import switchImg from 'res@/switch.svg'
    import useSetting from 'store@/setting'
    import { useRouter } from 'vue-router'
    import { useI18n } from 'vue-i18n'
    const i18n = useI18n()
    const setStore = useSetting()
    const router = useRouter()
    const lan = ref('ENGLISH')
    onMounted(() => {
        i18n.locale.value = setStore.language
        lan.value = i18n.locale.value =='zh'?'ENGLISH':'CHINESE'
    })
    defineProps({
        showImg: {
            type: Boolean,
            default: true
        }
    })
    const onSwitch = () => {
        if (lan.value == 'ENGLISH') {
            setStore.changeLanauage('en')
            lan.value = 'CHINESE'
            i18n.locale.value = 'en'
        } else {
            setStore.changeLanauage('zh')
            lan.value = 'ENGLISH'
            i18n.locale.value =  'zh'
        }
    }
    const onToHome = () => {
        router.push({name:'home'})
    }
</script>