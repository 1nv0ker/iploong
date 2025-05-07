<template>
    <div>
        <div class="w-full absolute bottom-0 right-0 left-0 h-[94px] border-1 border-[#CCCCCC] bg-[white]  pb-[15px] flex pr-[50px] pl-[70px] items-end justify-between">
            <div class="flex items-end">
                <span class="text-[#666666] text-[24px] poppins_font">{{$t('usercenter.pay.title')}}</span>
                <span class="text-[#2967B2] text-[26px] poppins_font pl-[16px]">$</span>
                <span class="text-[#2967B2] text-[40px] font-semibold pl-[6px] leading-[40px] poppins_font">{{ price }}.00</span>
            </div>
            <!-- <div class="w-[270px] h-[48px] rounded-[8px] bg-[#2967B2] flex justify-center items-center cursor-pointer" @click="onPay">
                <span class="text-[#FFFFFF] text-[14px] poppins_font">{{$t('usercenter.pay.button1')}}</span>
            </div> -->
            <div class="flex gap-[20px]">
                <div class="w-[230px] h-[65px] rounded-[12px] bg-[#2967B2] flex justify-center items-center cursor-pointer gap-[12px]" @click="onOpenAilpay">
                    <img :src="ali" class="w-[32px] h-[32px] cursor-pointer" />
                    <span class="text-[#FFFFFF] text-[18px] poppins_font">{{$t('usercenter.pay.button2')}}</span>
                </div>
                <div class="w-[230px] h-[65px] rounded-[12px] bg-[#2967B2] flex justify-center items-center cursor-pointer gap-[12px]" @click="onOpenWechat">
                    <img :src="wechat" class="w-[32px] h-[32px]cursor-pointer" />
                    <span class="text-[#FFFFFF] text-[18px] poppins_font">{{$t('usercenter.pay.button3')}}</span>
                </div>
            </div>
            <!-- <div class="w-[270px] h-[48px] rounded-[8px] bg-[#2967B2] flex justify-center items-center cursor-pointer" @click="onPay">
                <span class="text-[#FFFFFF] text-[14px] poppins_font">{{$t('usercenter.pay.button1')}}</span>
            </div> -->
            <!-- <div class="w-[230px] h-full right-0 absolute bg-[#000000] top-0 bottom-0 flex justify-center items-center cursor-pointer" @click="showPay=!showPay">
                <span class="text-[white] text-[18px] poppins_font">{{ $t('usercenter.pay.button2') }}</span>
                <img :src="up" :style="`${showPay?'':'transform: scaleY(-1)'}`" class="w-[24px] h-[24px]"/>
            </div> -->
            <!-- <div class="w-[230px] h-[160px] absolute top-[-170px] right-0 bg-[#E9ECF1]" style="box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.15);" v-show="showPay">
                <div class="w-full h-1/2 border-b-1 border-[white] flex items-center pl-[20px] gap-[12px]" @click="onOpenAilpay"> 
                    <img :src="ali" class="w-[32px] h-[32px] cursor-pointer" />
                    <span class="text-[#000000] text-[18px] poppins_font cursor-pointer">{{$t('usercenter.pay.pay1')}}</span>
                </div>
                <div class="w-full h-1/2 border-b-1 border-[white] flex items-center pl-[20px] gap-[12px]" @click="onOpenWechat">
                    <img :src="wechat" class="w-[32px] h-[32px]cursor-pointer" />
                    <span class="text-[#000000] text-[18px] poppins_font cursor-pointer">{{$t('usercenter.pay.pay2')}}</span>
                </div>
                <div class="w-full h-1/3 border-b-1 border-[white] flex gap-[10px] justify-center items-center">
                    <img :src="visa" class="w-[42.5px] h-[26px] cursor-pointer" />
                    <img :src="pay1" class="w-[42.5px] h-[26px] cursor-pointer" />
                    <img :src="pay2" class="w-[42.5px] h-[26px] cursor-pointer" />
                    <img :src="pay3" class="w-[42.5px] h-[26px] cursor-pointer" />
                </div>
            </div> -->
        </div>
        <ModalCompoent v-model="open" :title="$t('usercenter.pay.button1')" slotMode :width="424">
            <div class="w-full pb-[40px]">
                <div class="w-full flex justify-center items-end pt-[70px]">
                    <span class="text-[#0D458A] text-[67px] font-semibold pl-[6px] leading-[67px] poppins_font">{{ price }}.00</span>
                    <span class="text-[#2967B2] text-[32px] poppins_font leading-[40px]">USDT</span>
                </div>
                <div class="pt-[60px] flex justify-center items-center flex-col gap-[8px]">
                    <a-button :disabled="price>money" :loading="loading" class="w-[324px] h-[50px!important] border-1 border-[#666666!important] rounded-[10px!important] cursor-pointer flex justify-center items-center" @click="onConfirm">
                        <span class="text-[#666666] text-[17px] poppins_font">{{price<money?$t('usercenter.pay.button3'):$t('usercenter.pay.button6')}}</span>
                        <!-- <span class="text-[#666666] text-[17px] poppins_font">{{((userStore.userInfo?.accountBalance || 0) >= (price||0))?$t('usercenter.pay.button3'):$t('usercenter.pay.button4')}}</span> -->
                    </a-button>

                    <div class="w-[324px] h-[50px] border-1 border-[#666666] rounded-[10px] cursor-pointer flex justify-center items-center" @click="onCancel">
                        <span class="text-[#666666] text-[17px] poppins_font">{{ $t('usercenter.pay.button5') }}</span>
                    </div>
                </div>
            </div>
        </ModalCompoent>
        <ModalCompoent v-model="payOpen" :title="payTitle"  slotMode :width="424">
            <div class="w-full p-12px">
                <div class="w-full h-[200px] flex justify-center items-center">
                    <a-qrcode :value="payRef.url" v-show="payRef.url" :size="200" />
                </div>
                <div class="w-full flex flex-col gap-[12px] pt-[12px]">
                    <div class="w-full flex gap-[12px]">
                        <span>{{$t('common.order')}}:</span>
                        <span>{{ payRef.orderNo }}</span>
                    </div>
                    <div class="w-full flex gap-[12px]">
                        <span>{{$t('common.ordername')}}:</span>
                        <span>{{ payRef.orderName }}</span>
                    </div>
                    <div class="w-full flex gap-[12px]">
                        <span>{{$t('common.price')}}:</span>
                        <span>${{ payRef.price }}</span>
                    </div>
                    <!-- <div class="w-full flex gap-[12px]">
                        <span>{{$t('common.price')}}:</span>
                        <span>${{ payRef.price }}</span>
                    </div> -->
                    
                </div>
                <div>
                    <div class="w-full h-[40px] mt-[36px] bg-[#2967B2] rounded-[7px] cursor-pointer flex justify-center items-center" @click="onOrder">
                        <span class="text-[#FCFCFD] text-[15px] font-semibold poppins_font">{{$t('common.button1')}}</span>
                    </div>
                </div>
            </div>
        </ModalCompoent>
    </div>
</template>
<script setup lang="ts">
    import ModalCompoent from './ModalCompoent.vue';
    // import up from 'res@/usercenter/dy/up.svg'
    import ali from 'res@/usercenter/dy/ali.svg'
    import wechat from 'res@/usercenter/dy/wechat.svg'
    import type { PropType } from 'vue'
    import { DynamicResidenceRecharge, StaticPackageRecharge } from 'api@/buy'
    import type { purchaseItem } from 'api@/buy'
    // import visa from 'res@/usercenter/dy/visa.svg'
    // import pay1 from 'res@/usercenter/dy/pay1.svg'
    // import pay2 from 'res@/usercenter/dy/pay2.svg'
    // import pay3 from 'res@/usercenter/dy/pay3.svg'
    // import down from 'res@/usercenter/dy/down.svg'
    // import useUserStore from 'store@/user'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    import { ref, reactive } from 'vue'
    import { useRouter } from 'vue-router'
    import { message } from 'ant-design-vue';
    import useStore from 'store@/user'
    import { computed } from 'vue';
    // const showPay = ref(false)
    const loading = ref(false)
    const payOpen = ref(false)
    const payTitle = ref('')
    const router = useRouter()
    const payRef = reactive({
        url: '',
        orderNo:'',
        orderName:'',
        price:'',
        laoding: false
    })
    const userStore = useStore()
    const money  = computed(() => {
        return userStore.userInfo?.usdtBalance || 0
    })
    const props = defineProps({
        price:{
            type:Number,
            default:0
        },
        type:Number,//1为动态2为静态
        num:{
            default:0,
            type: Number
        },//动态购买数量
        promotionCode:String,
        purchaseInfo: {
            type: Array as PropType<purchaseItem[]>,
            default:[]
        }
    })
    const emit = defineEmits(['onConfirm', 'onOpenVerity'])
    const open = ref(false)
    
    // const userStore = useUserStore()

    // const onPay = () => {
    //     if (!userStore.userInfo?.isVerify) {
    //         emitVerify()
    //         return
    //     }
    //     open.value = true
    // }
    const onCancel = () => {
        if (loading.value) {
            return
        }
        open.value = false
    }
    const emitVerify = () => {
        emit('onOpenVerity')
    }
    const onConfirm = () => {
        // if ((userStore.userInfo?.accountBalance || 0) >= (props.price||0)) {
        //     open.value = false
        //     return
        // }
        
        loading.value = true
        if (props.type==1) {
            
            DynamicResidenceRecharge({
                Quantity:props.num,
                PromotionCode:props.promotionCode,
                paymentType: 2
            })
            .then(() => {
                loading.value = false
                message.success(t('common.success'))
            })
            .catch(() => {
                loading.value = false
            })
        } else {
            StaticPackageRecharge({
                paymentType:2,
                PromotionCode:props.promotionCode,
                purchaseIspInfos: props.purchaseInfo
            })
            .then(() => {
                loading.value = false
                message.success(t('common.success'))
            })
            .catch(() => {
                loading.value = false
            })
        }
       
    }
    const onOpenAilpay = () => {
        if (!userStore.userInfo?.isVerify) {
            emitVerify()
            return
        }
        payRef.url = ''
        payRef.price = ''
        payRef.orderName = ''
        payRef.orderNo = ''
        payOpen.value = true
        payTitle.value = t('common.pay1')
        if (props.type==1) {
            DynamicResidenceRecharge({
                Quantity:props.num,
                PromotionCode:props.promotionCode,
                paymentType: 0
            })
            .then((res:any) => {
                payRef.url = res.body.url
                payRef.orderName = res.body.orderName
                payRef.orderNo = res.body.orderNo
                payRef.price = res.body.amount
            })
            .catch(() => {
            })
        } else {
            StaticPackageRecharge({
                paymentType:0,
                PromotionCode:props.promotionCode,
                purchaseIspInfos: props.purchaseInfo
            })
            .then((res:any) => {
                payRef.url = res.body.url
                payRef.orderName = res.body.orderName
                payRef.orderNo = res.body.orderNo
                payRef.price = res.body.amount
            })
            .catch(() => {
                loading.value = false
            })
        }
    }
    const onOpenWechat = () => {
        if (!userStore.userInfo?.isVerify) {
            emitVerify()
            return
        }
        payRef.url = ''
        payRef.price = ''
        payRef.orderName = ''
        payRef.orderNo = ''
        payOpen.value = true
        payTitle.value = t('common.pay2')
        if (props.type==1) {
            DynamicResidenceRecharge({
                Quantity:props.num,
                PromotionCode:props.promotionCode,
                paymentType: 1
            })
            .then((res:any) => {
                payRef.url = res.body.url
                payRef.orderName = res.body.orderName
                payRef.orderNo = res.body.orderNo
                payRef.price = res.body.amount
                // message.success(t('common.success'))
            })
            .catch(() => {
            })
        } else {
            StaticPackageRecharge({
                paymentType:1,
                PromotionCode:props.promotionCode,
                purchaseIspInfos: props.purchaseInfo
            })
            .then((res:any) => {
                payRef.url = res.body.url
                payRef.orderName = res.body.orderName
                payRef.orderNo = res.body.orderNo
                payRef.price = res.body.amount
            })
            .catch(() => {
                loading.value = false
            })
        }
    }
    const onOrder = () => {
        userStore.setUserInfo()
        router.push({name:'order'})
    }
</script>