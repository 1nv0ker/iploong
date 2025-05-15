<template>
    <div class="w-full h-full overflow-auto bg-[#FAFBFF] p-[36px] relative">
        <div class="w-full">
            <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.purchaseproxy.title')}}</span>
       </div>
       <!-- 需求国家 -->
       <div class="w-full pt-[22px]">
            <span class="text-[#000000] text-[19px] inter_font leading-[32px]">{{$t('usercenter.purchaseproxy.subtitle1')}}</span>
       </div>
       <div class="pt-[12px] w-full">
            <div class="flex gap-[16px]">
                <div :class="`h-[56px] min-w-[233px]  border-1 rounded-[12px]  pl-[30px] pr-[20px]
                ${selected.indexOf(item.key) == -1?'border-[#E4E4E7] bg-[white]':'bg-[#EDF7FF] border-[#D1E9FF]'}
                  pt-[18px] pb-[18px] flex gap-[8px] items-center cursor-pointer`" 
                v-for="item in items.slice(0,3)" @click="onSelect(item.key)">
                    <div :class="`w-[16px] h-[16px] flex items-center justify-center rounded-[50%] border-1 ${selected.indexOf(item.key)==-1?'border-[#666666]':'border-[#2967B2]'}`">
                        <div class="w-[8px] h-[8px] bg-[#2967B2] rounded-[50%]" v-show="selected.indexOf(item.key)!==-1">

                        </div>
                    </div>
                    <span :class="`${selected.indexOf(item.key)==-1?'text-[#666666] ':'text-[#2967B2] '} text-[17px] inter_font `">{{ item.name }}</span>
                </div>
            </div>
            <div class="flex gap-[16px] pt-[22px]">
                <div :class="`h-[56px] min-w-[233px] border-1 rounded-[12px]  pl-[30px] pr-[20px]
                ${selected.indexOf(item.key) == -1?'border-[#E4E4E7] bg-[white]':'bg-[#EDF7FF] border-[#D1E9FF]'}
                  pt-[18px] pb-[18px] flex gap-[8px] items-center cursor-pointer`" 
                v-for="item in items.slice(3,5)" @click="onSelect(item.key)">
                    <div :class="`w-[16px] h-[16px] flex items-center justify-center rounded-[50%] border-1 ${selected.indexOf(item.key)==-1?'border-[#666666]':'border-[#2967B2]'}`">
                        <div class="w-[8px] h-[8px] bg-[#2967B2] rounded-[50%]" v-show="selected.indexOf(item.key)!==-1">

                        </div>
                    </div>
                    <span :class="`${selected.indexOf(item.key)==-1?'text-[#666666] ':'text-[#2967B2] '} text-[17px] inter_font`">{{ item.name }}</span>
                </div>
            </div>
       </div>
       <!-- IP授权 -->
       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[19px] inter_font leading-[32px]">{{$t('usercenter.purchaseproxy.subtitle2')}}</span>
       </div>
       <div class="w-full pt-[12px] flex gap-[16px]">
            <div :class="`w-[233px] h-[56px] border-1 rounded-[12px] relative cursor-pointer flex justify-center items-center 
            ${select_iptype==type.key?'border-[#D1E9FF] bg-[#EDF7FF] text-[#2967B2]':'text-[#666666] bg-[white] border-[#E4E4E7]'}`"
             v-for="type in IPType" @click="select_iptype=type.key">
             <div class=" rounded-tl-[12px] bg-[#D1E9FF] w-[39px] h-[26px] flex items-center justify-center text-[#2967B2] absolute top-0 left-0" v-show="select_iptype==type.key">
                ✔
             </div>
                <span class="inter_font text-[17px] font-semibold">{{type.name}}</span>
            </div>
       </div>
       <div class="w-full pt-[15px] flex gap-[4px] items-center">
            <span class="text-[#999999] text-[18px] inter_font leading-[21px]">{{$t('usercenter.purchaseproxy.subtitle2_tip')}}</span>
            <span class="text-[#2967B2] text-[22px] inter_font font-bold leading-[26px]">{{$t('usercenter.purchaseproxy.unit_price')}}{{select_iptype==0?$t('usercenter.purchaseproxy.price1'):$t('usercenter.purchaseproxy.price2')}}.00</span>
            <span class="text-[#999999] text-[18px] inter_font leading-[21px]">{{$t('usercenter.purchaseproxy.subtitle2_tip1')}}</span>
       </div>
       <!-- ip购买时长 -->
       <div class="w-full pt-[30px] flex">
            <span class="text-[#000000] text-[19px] inter_font leading-[32px]">{{$t('usercenter.purchaseproxy.subtitle3')}}</span>
            
       </div>
       <div class="w-full pt-[12px] flex gap-[16px]">
            <div :class="`w-[233px] h-[56px] border-1 rounded-[12px] relative cursor-pointer flex justify-center items-center 
            ${select_time==time.value?'border-[#D1E9FF] bg-[#EDF7FF] text-[#2967B2]':'text-[#666666] bg-[white] border-[#E4E4E7]'}`"
             v-for="time in times" @click="select_time=time.value">
             <div class=" rounded-tl-[12px] bg-[#D1E9FF] w-[39px] h-[26px] flex items-center justify-center text-[#2967B2] absolute top-0 left-0" v-show="select_time==time.value">
                ✔
             </div>
                <span class="inter_font text-[17px] font-semibold">{{time.value}}</span>
                <span class="inter_font text-[17px] font-semibold pl-[8px]">{{$t('usercenter.purchaseproxy.unit')}}</span>
            </div>
       </div>
       <!-- ip购买数量 -->
       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[19px] inter_font leading-[32px]">{{$t('usercenter.purchaseproxy.subtitle4')}}</span>
            <span class="text-[#999999] text-[19px] inter_font leading-[32px] pl-[8px] font-semibold">{{$t('usercenter.purchaseproxy.subtitle4_tip')}}</span>
       </div>
       <div class="w-full pt-[12px]">
            <div class="flex items-center">
                <div class="border-1 border-[#CCCCCC] rounded-l-[4px] cursor-pointer w-[36px] h-[36px] flex items-center justify-center  bg-[#F0F1F6]" @click="onReduce()"><img :src="reduce" class="w-[22px] h-[22px]"/></div>
                <a-input-number v-model:value="buyNumber" :max="100" :min="1" class=" text-[center!important] w-[106px] h-[36px!important] rounded-[0!important]" :controls="false"></a-input-number>
                <div class="border-1 border-[#CCCCCC] rounded-r-[4px] cursor-pointer bg-[#F0F1F6] w-[36px] flex items-center justify-center h-[36px]" @click="onPlus()"><img :src="plus" class="w-[22px] h-[22px]"/></div>
                <span class="pl-[12px] text-[#333333] text-[14px] poppins_font">GB</span>
            </div>
       </div>
       <div class="w-full pt-[30px]">
            <span class="text-[#000000] text-[19px] inter_font leading-[32px]">{{$t('usercenter.purchaseproxy.subtitle5')}}</span>
       </div>
       <div class="w-full pt-[12px]">
        <a-input v-model:value="promotionCode" class="w-[603px!important] h-[58px!important] rounded-[12px!important] border-1 border-[#E4E4E7!important] customInput" 
                :placeholder="$t('usercenter.purchasetraffic.tip3')"></a-input>
       </div>
       <!-- 购买详情 -->
        <div class="w-full pt-[30px]">
            <div class="w-[894px]  border-1 border-[#CCCCCC] bg-[#F8F8F8] rounded-[12px] pl-[32px] pt-[30px] pb-[30px]">
                <div class="w-full">
                    <div class="w-full flex gap-[8px]">
                        <img :src="tip" class="w-[24px] h-[24px]"/>
                        <span class="text-[#666666] text-[18px] poppins_font">{{$t('usercenter.purchaseproxy.content1')}}</span>
                        <span class="text-[#2C69B3] text-[18px] font-bold poppins_font">{{select_iptype=='0'?$t('usercenter.purchaseproxy.subtitle2_1'):$t('usercenter.purchaseproxy.subtitle2_2')}}IP</span>
                    </div>
                    <div class="w-full flex gap-[8px] pt-[14px]">
                        <span class="text-[#666666] text-[18px] poppins_font">{{$t('usercenter.purchaseproxy.subtitle1')}}</span>
                        <span v-for="item in items.filter((item:any)=>selected.indexOf(item.key)!==-1).map((item:any)=>item.name)" 
                            class="text-[#2C69B3] text-[18px] font-bold poppins_font max-w-[150px] bitip_text" :title="item">{{item}}</span>
                    </div>
                    <div class="w-full flex gap-[32px] pt-[14px] items-center">
                        <div class="flex gap-[8px] items-center">
                            <span class="text-[#666666] text-[18px] poppins_font">{{$t('usercenter.purchaseproxy.subtitle3')}}</span>
                            <span class="text-[#2C69B3] text-[22px] font-bold">{{select_time}}</span>
                            <span class="text-[#666666] text-[18px] poppins_font">[{{$t('usercenter.purchaseproxy.unit')}}]</span>
                        </div>
                        <div class="flex gap-[8px] items-center">
                            <span class="text-[#666666] text-[18px] poppins_font">{{$t('usercenter.purchaseproxy.subtitle4')}}</span>
                            <span class="text-[#2C69B3] text-[22px] font-bold">{{buyNumber}}</span>
                            <span class="text-[#666666] text-[18px] poppins_font">[{{$t('usercenter.purchaseproxy.unit2')}}]</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PayComponent  :price="price" v-show="price>0" :type="2" :purchaseInfo="purchaseInfo" :promotion-code="promotionCode" @onOpenVerity="onOpenVerity"/>
    </div>
</template>
<script setup lang="ts">
    import { ref, computed } from 'vue'
    import plus from 'res@/usercenter/dy/plus.svg'
    import reduce from 'res@/usercenter/dy/reduce.svg'
    import PayComponent from 'com@/PayComponent.vue'
    import tip from 'res@/usercenter/static/tips.svg'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n();
    const selected = ref<any[]>([])
    const select_iptype = ref<any>(0)
    const select_time = ref<any>(30)
    const promotionCode = ref('')
    const buyNumber = ref(1)
    const price = computed(() => {
        return selected.value.length*Number(select_iptype.value==0?t('usercenter.purchaseproxy.price1'):t('usercenter.purchaseproxy.price2'))*(select_time.value/30)*buyNumber.value
    })
    const emit = defineEmits(['onOpenVerity'])
    const onOpenVerity = () => {
        emit('onOpenVerity')
    }
    const purchaseInfo = computed(():any[] => {
        return selected.value.map((item)=> ({
            ispLocation: item,
            purchaseMonth:select_time.value/30,
            ispType: select_iptype.value,
            purchaseNum: buyNumber.value
        }))
    })
    const items = ref([
        {
            name:'America(美国)US',
            key:'us'
        },
        {
            name:'United Kingdom(英国)UK',
            key:'gb'
        },
        {
            name:'Germany(德国)DE',
            key:'de'
        },
        {
            name:'Hong Kong(香港)HK',
            key:'hk'
        },
        {
            name:'Taiwan(台湾)TW',
            key:'tw'
        }
    ])
    const IPType = computed(() => {
        return [
            {
                name: t('usercenter.purchaseproxy.subtitle2_1'),
                key:0
            },
            {
                name: t('usercenter.purchaseproxy.subtitle2_2'),
                key:1
            }
        ]
    })
    const onReduce = () => {
        if (buyNumber.value>1) {
            buyNumber.value -- 
        }
    }
    const onPlus = () => {
        if (buyNumber.value<100) {
            buyNumber.value ++ 
        }
    }
    const times = ref([
        {
            value: 30,
        },
        {
            value: 60,
        },
        {
            value: 90,
        },
        {
            value: 180,
        }
    ])
    const onSelect = (key:any) => {
        const index = selected.value.indexOf(key)
        if (index==-1) {
            selected.value.push(key)
        } else {
            selected.value.splice(index, 1)
        }
    }
</script>