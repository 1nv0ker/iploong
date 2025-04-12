<template>
    <div class="w-full overflow-auto">
       <NavComponent />
        <div class="pt-[80px]">
            <RouterView></RouterView>
        </div>
       <FootBar />
    </div>
</template>
<script setup lang="ts">
    import NavComponent from './NavComponent.vue';
    import FootBar from './FootBar.vue';
    import { onMounted } from 'vue'
    import useUser from 'store@/user'
    const userStore = useUser()
    onMounted(() => {
        userStore.setUserInfo()
    })
</script>