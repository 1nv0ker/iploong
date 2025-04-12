<template>
    <ModalCompoent v-model="open" :title="$t('usercenter.userinfo.title')" slotMode :width="424">
        <div class="w-full flex items-center justify-center">
            <img :src="contact" class="2-[282px] h-[293px]"/>
        </div>
    </ModalCompoent>
</template>
<script setup lang="ts">
    import ModalCompoent from 'basic@/components/ModalCompoent.vue';
    import contact from 'res@/usercenter/dy/contact.svg'
    const open = defineModel()
</script>
