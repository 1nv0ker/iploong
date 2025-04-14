<template>
    <div class="w-full h-full overflow-auto bg-[#FAFBFF] p-[36px] relative pb-[100px] pr-[70px]">
        <div class="w-full">
            <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.legalnotice.title')}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.legalnotice.subtitle1')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.legalnotice.subtitle1_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.legalnotice.subtitle2')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.legalnotice.subtitle2_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.legalnotice.subtitle3')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.legalnotice.subtitle3_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.legalnotice.subtitle4')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.legalnotice.subtitle4_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.legalnotice.subtitle5')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.legalnotice.subtitle5_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>
       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.legalnotice.subtitle6')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.legalnotice.subtitle6_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>
       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.legalnotice.subtitle7')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.legalnotice.subtitle7_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>
       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.legalnotice.subtitle8')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.legalnotice.subtitle8_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>
    </div>
</template>
<script setup lang="ts">
    
</script>