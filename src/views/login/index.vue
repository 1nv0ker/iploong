<template>
    <div class="w-full h-full flex">
        <div class="login_bg w-[600px] h-full relative" @click="onPage">
            <!-- <img src="res@/logo.svg" class="w-[315px] h-[72px] absolute left-[76px] top-[130px] cursor-pointer" @click="onPage"/> -->
            <!-- <div class="w-[315px] h-[72px] absolute left-[76px] top-[130px] cursor-pointer logo_bg" @click="onPage">

            </div> -->
        </div>
        <div class="h-full relative flex justify-center " style="width: calc( 100% - 600px );">
            <Setting class=" absolute top-[33px] right-[51px]"/>
            <RouterView></RouterView>
            <div class=" absolute bottom-0 login_box left-[140px] h-[300px] right-0">

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import Setting from 'basic@/components/Setting.vue';
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const onPage = () => {
        router.push({name:'home'})
    }
</script>
<style lang="less" scoped>
    .login_bg {
        background-image: url('res@/login/bg.svg?inline');
        // background-position: ;
        // background-size: 100% 100%;
        // background-size: 100% 100%;
        // background-position: ;
        background-size: cover;
        background-repeat: no-repeat;
        // background: ;
    }
    .logo_bg {
        background-image: url('res@/logo.svg');
        // background-position: ;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .login_box {
        background: rgba(129,183,255,0.5);
        // opacity: 0.5;
        filter: blur(259.7319030761719px);
        // background-size: 100% 20%;
    }
</style>