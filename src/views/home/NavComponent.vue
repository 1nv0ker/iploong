<template>
    <div class="w-full fixed top-0 h-[80px] border-1 border-[rgba(255,255,255,0.23)] bg-[#2967B2] pl-[48px] flex items-center pr-[65px] justify-between">
        <div class="w-[500px]">
            <img :src="logo" class="" />
        </div>
        <div class="flex justify-center">
            <div class="flex gap-[150px] justify-between">
                <div v-for="item in items">
                    <a @click="onPage(item.page)" :class="`${hash==`#${item.page}`?'nav_choosed':'nav_normal'} text-[29px] cursor-pointer Mulish_font`" :href="`#${item.page}`">{{item.title}}</a>
                </div>
            </div>
        </div>
        <div class="flex gap-[26px] justify-between items-center w-[500px]">
            <Setting :showImg="false" />
            <div class="flex gap-[26px]" v-if="!userStore.isLogin()">
                <a-button class="w-[133px!important] h-[48px!important] bg-[#2967B2!important] rounded-[12px!important] border-1 border-[white]" @click="onLogin">
                <span class="text-[17px] text-[white] font-semibold Mulish_font">{{$t('nav.button') }}</span>
                </a-button>
                <a-button class="w-[133px!important] h-[48px!important] bg-[white!important] rounded-[12px!important] border-1 border-[white]" @click="onRegister">
                    <span class="text-[17px] text-[#000000] font-semibold Mulish_font">{{$t('nav.button1') }}</span>
                </a-button>
            </div>
            <div v-else>
                <a-button class="w-[133px!important] h-[48px!important] bg-[white!important] rounded-[12px!important] border-1 border-[white]" @click="onLogout">
                    <span class="text-[17px] text-[#000000] font-semibold Mulish_font">{{ $t('usercenter.userinfo.button2') }}</span>
                </a-button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import logo from 'res@/logo.svg'
    import { computed, onMounted, ref } from 'vue'
    import Setting from 'basic@/components/Setting.vue';
    import { useRouter, useRoute } from 'vue-router'
    import { useI18n } from 'vue-i18n';
    import useUser from 'store@/user'
    const userStore = useUser()

    const { t } = useI18n();
    const router = useRouter()
    const selected = ref('')
    const route = useRoute()
    const hash = ref('')
    const onLogin = () => {
        router.push({
            name:'login'
        })
    }
    onMounted(() => {
        selected.value = route.name as string
        hash.value = route.hash || '#home'
    })
    const onRegister = () => {
        router.push({
            name:'register'
        })
    }
    const onLogout = () => {
        userStore.logout()
        router.push({
            name:'login'
        })
    }
    const onPage = (name:string) => {
        hash.value = '#'+name
    }
    const items = computed(() => {
        return [
            {
                title: t('nav.item1'),
                name: 'home',
                page:'home'
            },
            {
                title: t('nav.item2'),
                name: 'services',
                page:'third'
            },
            {
                title: t('nav.item3'),
                name: 'pricing',
                page:'fouth'
            }
        ]
    })
</script>
<style lang="less" scoped>
    .nav_choosed {
        // background: linear-gradient(0deg, #9FFFF4 0%, #03B8FF 100%);
        background: linear-gradient(to right, #9FFFF4 0%, #03B8FF 100%);
        background-clip: text;
        color: transparent;
    }
    .nav_normal {
        color: white
    }
</style>