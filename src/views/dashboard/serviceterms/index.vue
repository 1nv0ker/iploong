<template>
    <div class="w-full h-full overflow-auto bg-[#FAFBFF] p-[36px] relative pb-[100px] pr-[70px]">
        <div class="w-full">
            <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.serviceterms.title')}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.serviceterms.subtitle1')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.serviceterms.subtitle1_content1').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.serviceterms.subtitle2')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.serviceterms.subtitle2_content1').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.serviceterms.subtitle3')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.serviceterms.subtitle3_content1').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.serviceterms.subtitle4')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.serviceterms.subtitle4_content1').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.serviceterms.subtitle5')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.serviceterms.subtitle5_content1').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>
    </div>
</template>
<script setup lang="ts">
    
</script>