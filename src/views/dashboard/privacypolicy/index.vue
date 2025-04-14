<template>
    <div class="w-full h-full overflow-auto bg-[#FAFBFF] p-[36px] relative pb-[100px] pr-[70px]">
        <div class="w-full">
            <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.privacypolicy.title')}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.privacypolicy.subtitle1')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.privacypolicy.subtitle1_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.privacypolicy.subtitle2')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.privacypolicy.subtitle2_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.privacypolicy.subtitle3')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.privacypolicy.subtitle3_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.privacypolicy.subtitle4')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.privacypolicy.subtitle4_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>

       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.privacypolicy.subtitle5')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.privacypolicy.subtitle5_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>
       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.privacypolicy.subtitle6')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.privacypolicy.subtitle6_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>
       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[24px] big_font leading-[32px]">{{$t('usercenter.privacypolicy.subtitle7')}}</span>
       </div>
       <div class="w-full pt-[20px] flex flex-col">
            <span v-for="content in $t('usercenter.privacypolicy.subtitle7_content').split('\n')" class="text-[#666666] text-[16px] pingfang_font leading-[22px]">{{content}}</span>
       </div>
    </div>
</template>
<script setup lang="ts">
    
</script>