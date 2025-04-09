<template>
    <div class="w-full fixed top-0 h-[80px] border-1 border-[rgba(255,255,255,0.23)] bg-[#2967B2] flex items-center pl-[80px] pr-[100px] justify-between">
        <img :src="logo" />
        <div class="flex gap-[54px] justify-between">
            <div v-for="item in items">
                <span :class="`${selected==item.name?'nav_choosed':'nav_normal'} cursor-pointer Mulish_font`" @click="onPage(item.name)">{{item.title}}</span>
            </div>
        </div>
        <div class="flex gap-[26px] justify-between items-center">
            <Setting :showImg="false" />
            <a-button class="w-[133px!important] h-[48px!important] bg-[#2967B2!important] rounded-[12px!important] border-1 border-[white]" @click="onLogin">
                <span class="text-[17px] text-[white] font-semibold Mulish_font">{{$t('nav.button') }}</span>
            </a-button>
            <a-button class="w-[133px!important] h-[48px!important] bg-[white!important] rounded-[12px!important] border-1 border-[white]" @click="onRegister">
                <span class="text-[17px] text-[#000000] font-semibold Mulish_font">{{$t('nav.button1') }}</span>
            </a-button>
        </div>
    </div>
</template>
<script setup lang="ts">
    import logo from 'res@/logo.svg'
    import { computed, onMounted, ref } from 'vue'
    import Setting from 'basic@/components/Setting.vue';
    import { useRouter, useRoute } from 'vue-router'
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    const router = useRouter()
    const selected = ref('')
    const route = useRoute()
    const onLogin = () => {
        router.push({
            name:'login'
        })
    }
    onMounted(() => {
        selected.value = route.name as string
    })
    const onRegister = () => {
        router.push({
            name:'register'
        })
    }
    const onPage = (name:string) => {
        router.push({
            name:name
        })
    }
    const items = computed(() => {
        return [
            {
                title: t('nav.item1'),
                name: 'home'
            },
            {
                title: t('nav.item2'),
                name: 'services'
            },
            {
                title: t('nav.item3'),
                name: 'pricing'
            }
        ]
    })
</script>
<style lang="less" scoped>
    .nav_choosed {
        background: linear-gradient(0deg, #9FFFF4 0%, #03B8FF 100%);
        background-clip: text;
        color: transparent;
    }
    .nav_normal {
        color: white
    }
</style>