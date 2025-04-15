<template>
    <a-config-provider :locale="I18Store.language=='zh'?zhCN:enUS">
        <div class="w-full h-full flex">
            <NavComponent />
            <div class="h-full overflow-auto" style="width: calc( 100% - 593px );">
                <RouterView @onOpen="onOpen"></RouterView>
            </div>
            <BasicInfo />
            <VerifyModal v-model="open" />
        </div>
    </a-config-provider>
</template>
<script setup lang="ts">
    import NavComponent from './NavComponent.vue';
    import BasicInfo from './BasicInfo.vue';
    import useI18nStore from 'store@/setting'
    import enUS from 'ant-design-vue/es/locale/en_US';
    import zhCN from 'ant-design-vue/es/locale/zh_CN';
    import VerifyModal from './VerifyModal.vue';
    import { onMounted } from 'vue'
    import useUser from 'store@/user'
    import { ref } from 'vue'
    const I18Store = useI18nStore()
    const open = ref(false)

    const userStore = useUser()
    onMounted(() => {
        open.value = userStore.openVerify
        userStore.setUserInfo()
    })
    const onOpen = () => {
        open.value = userStore.openVerify
        userStore.setUserInfo()
    }
</script>