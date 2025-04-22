<template>
    <ModalCompoent slot-mode  v-model="open" :width="300">
        <div class=" flex justify-center h-[12rem] items-center">
            <a-qrcode :value="qrcode" />
        </div>
    </ModalCompoent>
</template>
<script setup lang="ts">
    import ModalCompoent from 'basic@/components/ModalCompoent.vue';
    // import { useI18n } from 'vue-i18n'
    // const { t } = useI18n()
    const open = defineModel()

    defineProps({
        qrcode: String || undefined
    })
</script>