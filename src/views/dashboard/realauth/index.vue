<template>
    <div class="w-full p-[40px] bg-[#FAFBFF] h-full">
        <div class="w-full h-[48px] flex gap-[12px]">
            <div :class="`w-[153px] h-full flex items-center justify-center gap-[10px] cursor-pointer rounded-[4px] ${selected==item.key?' bg-[#2967B2] text-[white]':'bg-[#E6ECF3] text-[#444444]'}`"
             v-for="item in items" @click="selected=item.key">
                <div class="w-[24px] h-[24px] ">
                    <img  src="res@/usercenter/realauth/1.svg" class="w-full h-full" />
                </div>
                <span class="text-[16px] font-semibold roboto_font max-w-[64px] bitip_text" :title="item.title">{{ item.title }}</span>
            </div>
        </div>
        <div class="mt-[20px] w-full p-[24px] bg-[white] overflow-auto" style="height: calc( 100% - 302px  );">
            <div class="flex gap-[14px]">
                <span v-for="(step, index) in firstStep" :class="` text-[20px] sf_font ${stepValue==step.key?'text-[#2967B2]':'text-[#666666]'}`">
                    <span class="pr-[14px]">{{index+1}}.</span>{{step.title}}
                    <span class="pl-[14px]">{{index!==2?'>':''}}</span></span>
            </div>
            <!-- 第一步 -->
            <div class="w-full" v-show="stepValue==0">
                <div class="pt-[32px] w-full flex gap-[14px] pb-[32px] items-center">
                    <div class="w-[32px] h-[32px] flex items-center justify-center">
                        <img  src="res@/usercenter/realauth/2.svg" class="w-full h-full" />
                    </div>
                    <span class="text-[#000000] text-[20px] font-semibold roboto_font">{{$t('usercenter.realauth.personal.subtitle1')}}</span>
                </div>
                <a-form layout="vertical"  ref="formRef" class="w-full" :rules="rulesRef" :model="modelRef">
                    <a-row :gutter="[40, 0]" class="w-full">
                        <a-col :span="form.span" v-for="form in firstForms" class=" w-full">
                            <a-form-item :label="null" :name="form.name" class="w-full">
                                <template #label>
                                    <span class="text-[#000000] text-[19px] font-semibold inter_font">{{ form.title }}</span>
                                </template>
                                <a-select  :placeholder="form.placeholder" class="customASelect" v-if="form.type=='select'">
                            
                                </a-select>
                                <a-input class="customAInput" v-else :placeholder="form.placeholder" v-model:value="modelRef[form.name]">

                                </a-input>
                            </a-form-item>
                        </a-col>
                    </a-row>  
                </a-form>
                <div class="w-full  flex justify-center">
                    <a-button class="w-[250px!important] h-[40px!important] rounded-[7px] bg-[#2967B2!important]" @click="onStep(1)" :loading="loading">
                        <span class="text-[#FCFCFD] text-[15px] font-semibold poppins_font">{{$t('usercenter.realauth.personal.button')}}</span>
                    </a-button>
                </div>
            </div>
            <!-- 第二步 -->
            <div class="w-full" v-show="stepValue==1">
                <div class="pt-[32px] w-full flex gap-[14px] pb-[32px]">
                    <div class="w-[32px] h-[32px]">
                        <img  src="res@/usercenter/realauth/2.svg" class="w-full h-full" />
                    </div>
                    <span class="text-[#000000] text-[20px] font-semibold roboto_font">{{$t('usercenter.realauth.personal.subtitle2')}}</span>
                </div>
                <div class="w-full flex gap-[20px]">
                    <!-- <a-button @click="auth_type=0" :class="`w-[225px!important] h-[58px!important] rounded-[12px!important]
                     ${auth_type==0?'bg-[#2967B2!important] text-[white]':'bg-[white!important] border-1 border-[#E4E4E7!important] text-[#777777]'}`">
                        <span :class="`text-[17px] inter_font ${auth_type==0?'text-[white]':'text-[#777777]'}`">{{$t('usercenter.realauth.personal.button2')}}</span>
                    </a-button> -->
                    <a-button @click="auth_type=1" :class="`w-[225px!important] h-[58px!important] rounded-[12px!important]
                     ${auth_type==1?'bg-[#2967B2!important] text-[white]':'bg-[white!important] border-1 border-[#E4E4E7!important] text-[#777777]'}`">
                        <span :class="`text-[17px] inter_font ${auth_type==1?'text-[white]':'text-[#777777]'}`">{{$t('usercenter.realauth.personal.button3')}}</span>
                    </a-button>
                </div>
                <div class="w-full">
                    <div class="w-[353px] h-[357px] p-[8px] mt-[12px]">
                        <a-qrcode :value="link" :size="320"/>
                    </div>
                </div>
            </div>
            <!-- 第三步 -->
            <div class="w-full" v-show="stepValue==2">
                <div class="pt-[32px] w-full flex gap-[14px] pb-[32px]">
                    <div class="w-[32px] h-[32px]">
                        <img  src="res@/usercenter/realauth/2.svg" class="w-full h-full" />
                    </div>
                    <span class="text-[#000000] text-[20px] font-semibold roboto_font">{{$t('usercenter.realauth.personal.subtitle3')}}</span>
                </div>
                <div class="w-full flex gap-[70px] flex-col pt-[80px] items-center">
                    <div class="w-[218px] h-[218px]">
                        <img  src="res@/usercenter/realauth/complated.svg" />
                    </div>
                    <a-button class="w-[250px!important] h-[40px!important] bg-[#2967B2!important] rounded-[7px!important]" @click="router.push({name:'proxycity'})">
                        <span class="text-[#FCFCFD] text-[15px] font-semibold poppins_font">{{$t('usercenter.realauth.personal.button4')}}</span>
                    </a-button>
                </div>
            </div>
        </div>
        <div class="mt-[24px] h-[210px] bg-[white] p-[24px]">
            <div class="w-full flex gap-[8px] items-center">
                <div class="w-[36px] h-[36px]">
                    <img  src="res@/usercenter/realauth/3.svg" class="w-full h-full" />
                </div>
                <span class="text-[#444444] text-[20px] font-semibold roboto_font">{{$t('usercenter.realauth.tiptitle')}}</span>
            </div>
            <div class="w-full pt-[16px] flex flex-col gap-[8px]">
                <span v-for="(content, index) in $t('usercenter.realauth.content').split('\n')" class="text-[#666666] text-[20px] roboto_font leading-[22px]">{{content}}
                    <span v-if="index==2" class=" underline text-[#0A7CFF] text-[20px] roboto_font cursor-pointer" @click="onOpenVerify">{{$t('usercenter.realauth.more')}}</span></span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, computed, onMounted, reactive, onBeforeUnmount } from 'vue'
    import useStore from 'store@/user'
    import { useRouter } from 'vue-router'
    import { GetCertification, DoCertification } from 'api@/user'
    import { useI18n } from 'vue-i18n';
import { message } from 'ant-design-vue';
    const { t } = useI18n();
    const selected = ref(0)
    const stepValue = ref(0)
    const userStore = useStore()
    const auth_type = ref(1)
    const router = useRouter()
    let interval:any;
    const emit = defineEmits(['onOpen'])
    onMounted(() => {
        if (userStore.userInfo?.isVerify) {
            stepValue.value = 2
        }
        interval && clearInterval(interval)
    })
    onBeforeUnmount(() => {
        interval && clearInterval(interval)
    })
    const modelRef = reactive<Record<string, string>>({
        RealName: '',
        IdCard: '',
    });
    const loading = ref(false)
    const bizToken = ref('')
    const link = ref('')
    const rulesRef = reactive({
        RealName: [
            // {
            //     required:true,
            //     message:t('userauth.form1_message')
            // },
            {
                pattern:`^(?:[\u4E00-\u9FA5\u3400-\u4DBF·]{2,10}|[a-zA-Z\s'-]{2,50})$`,
                required:true,
                message:t('usercenter.realauth.personal.content1')
            }
        ],
        IdCard: [
            // {
            //     required:true,
            //     message:t('userauth.form2_message')
            // },
            {
                pattern:'^[1-9]\\d{5}(18|19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])\\d{3}[\\dXx]$',
                required:true,
                message: t('usercenter.realauth.personal.content2')
            }
        ]
    })
    const items = computed(()=> {
        return [
            {
                title:t('usercenter.realauth.title1'),
                key: 0,
            },
            // {
            //     title:t('usercenter.realauth.title2'),
            //     key: 1,
            // },
            // {
            //     title:t('usercenter.realauth.title3'),
            //     key: 2,
            // }
        ]
    })
    const firstStep = computed(() => {
        return [
            {
                title:t('usercenter.realauth.personal.title1'),
                key: 0,
            },
            {
                title:t('usercenter.realauth.personal.title2'),
                key: 1,
            },
            {
                title:t('usercenter.realauth.personal.title3'),
                key: 2,
            },
        ]
    })
    const firstForms = computed(() => {
        return [
            {
                title: t('usercenter.realauth.personal.form1'),
                placeholder: t('usercenter.realauth.personal.content1'),
                span: 24,
                name: 'RealName',
                type:'input'
            },
            {
                title: t('usercenter.realauth.personal.form2'),
                placeholder: t('usercenter.realauth.personal.content2'),
                span: 24,
                name: 'IdCard',
                type:'input'
            },
            // {
            //     title: t('usercenter.realauth.personal.form3'),
            //     placeholder: t('usercenter.realauth.personal.content3'),
            //     span: 12,
            //     name: 'used',
            //     type:'select'
            // },
            // {
            //     title: t('usercenter.realauth.personal.form4'),
            //     placeholder: t('usercenter.realauth.personal.content4'),
            //     span: 12,
            //     name: 'type',
            //     type:'select'
            // },
            // {
            //     title: t('usercenter.realauth.personal.form5'),
            //     placeholder: t('usercenter.realauth.personal.content5'),
            //     span: 24,
            //     name: 'country',
            //     type:'input'
            // }
        ]
    })
    const onStep = (val:number) => {
        if (val==1) {
            loading.value = true
            GetCertification({
                RealName: modelRef.RealName,
                IdCard:modelRef.IdCard
            })
            .then((res:any) => {
                loading.value = false
                link.value = res.body.url
                bizToken.value = res.body.bizToken
                stepValue.value = val
                interval && clearInterval(interval)
                interval = setInterval(() => {
                    DoCertification({
                        bizToken: bizToken.value
                    })
                    .then((res:any) => {
                        if (res.code == 200) {
                            interval && clearInterval(interval)
                            userStore.setUserInfo()
                            message.success(t('common.realauth'))
                            stepValue.value = 2
                        }
                    })
                }, 3000);
            })
            .catch(() => {
                loading.value = false
            })
        } else {
            
        }
    }
    const onOpenVerify = () => {
        userStore.setOpenVerify(true)
        emit('onOpen')
    }
</script>