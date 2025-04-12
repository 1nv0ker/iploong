<template>
    <div class="w-full h-full overflow-auto bg-[#FAFBFF]">
        
        <div class="w-full p-[36px]">
            <Chart />
            <a-form layout="vertical" :rules="rules" :model="modelRef" ref="formRef" class="w-full">
                <a-row :gutter="[40, 0]" class="w-full">
                    <a-col :span="12" v-for="form in formItems" class=" w-full">
                        <a-form-item :label="null" :name="form.key" class="w-full">
                            <template #label>
                                <span class="text-[#000000] text-[19px] font-semibold inter_font">{{ form.label }}</span>
                            </template>
                            <a-select :showSearch="form.showSearch" optionFilterProp="label" :placeholder="form.placeholder" class="customASelect"
                                :options="form.options || []" v-model:value="modelRef[form.key]" @select="(_:any,props:any)=>onSelect(form.key, props)">
                        
                            </a-select>
                        </a-form-item>
                    </a-col>
                </a-row>  
            </a-form>
            <div class="w-full flex items-center gap-[8px]">
                <span class="text-[#000000] text-[19px] font-semibold inter_font">{{$t('usercenter.proxycity.subtitle')}}</span>
                <a-tooltip placement="top" :title="$t('usercenter.proxycity.tip')" >
                    <img :src="question" class="w-[18px] h-[18px] cursor-pointer" />
                </a-tooltip>
            </div>
            <div class="w-full pt-[15px] flex gap-[11px] items-center ">
                <a-switch v-model:checked="checked" class="custom_switch"  />
                <span class="text-[#18181B] text-[17px] inter_font">{{$t('usercenter.proxycity.switch')}}</span>
            </div>
            <div class="w-full pt-[21px] flex gap-[32px]">
                <a-button class="bg-[#2967B2!important] rounded-[7px!important] w-[250px] h-[52px!important]">
                    <span class="text-[#FCFCFD] text-[18px] poppins_font font-semibold">{{$t('usercenter.proxycity.button1')}}</span>
                </a-button>
                <div class="flex items-center gap-[4px] cursor-pointer">
                    <img :src="copy" class="w-[24px] h-[24px] cursor-pointer"/>
                    <span class="text-[#666666] text-[18px] poppins_font font-semibold">{{$t('usercenter.proxycity.copy')}}</span>
                </div>
            </div>
            <div class="w-full pt-[21px] flex gap-[32px]">
                <a-button class="bg-[rgba(0,125,215,0.1)!important] rounded-[7px!important] w-[250px] h-[52px!important] border-[none!important]">
                    <span class="text-[#2967B2] text-[18px] poppins_font font-semibold">{{$t('usercenter.proxycity.button2')}}</span>
                </a-button>
                <div class="flex items-center gap-[4px] cursor-pointer">
                    <img :src="copy" class="w-[24px] h-[24px] cursor-pointer"/>
                    <span class="text-[#666666] text-[18px] poppins_font font-semibold">{{$t('usercenter.proxycity.copy')}}</span>
                </div>
            </div>
            <div class="w-full pt-[80px] flex justify-center items-center gap-[100px]">
                <div class="flex flex-col items-center">
                    <div class="flex flex-col gap-[8px]">
                        <span class="text-[#999999] text-[14px] poppins_font ">{{$t('usercenter.proxycity.tip2')}}</span>
                        <a-input class="h-[40px!important] text-[16px]" v-model:value="link"></a-input>
                    </div>
                    <div class="pt-[60px] flex flex-col gap-[15px] items-center">
                        <a-button class="w-[270px] h-[42px!important] border-1 border-[#000000!important] rounded-[12px!important] bg-[#FFFFFF!important]" @click="onCreateCode">
                            <span class="text-[#000000] text-[14px] poppins_font">{{$t('usercenter.proxycity.button3')}}</span>
                        </a-button>
                        <span class="text-[#999999] text-[14px] poppins_font ">{{$t('usercenter.proxycity.tip3')}}</span>
                    </div>
                </div>
                <div class="w-[215px] h-[215px] border-1 border-[#999999] border-dashed flex items-center justify-center">
                    <a-qrcode :value="link" v-if="showCode && link" :size="200" />
                    <span class="text-[#999999] text-[14px] poppins_font " v-else>{{$t('usercenter.proxycity.tip4')}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import location from 'res@/location.json'
    import question from 'res@/usercenter/dy/question.svg'
    import copy from 'res@/usercenter/dy/copy.svg'
    import Chart from './Chart.vue'
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    import { reactive, computed, ref } from 'vue'
    const modelRef = reactive<Record<string, string|undefined>>({
        num:undefined,
        country:undefined,
        iptime: undefined,
        city:undefined,
        state: undefined,
    })
    const stateList = ref<any[]>([])
    const showCode = ref(false)
    const checked = ref(false)
    const cityList = ref<any[]>([])
    const stateDatas = ref<any[]>([])
    const cityDatas = ref<any[]>([])
    const link = ref('')
    const rules = computed(() => {
        return {
            country: [
                { required: true, message: t('usercenter.proxycity.placeholder')+t('usercenter.proxycity.form2'), trigger: 'change' },
            ],
            iptime: [
                { required: true, message: t('usercenter.proxycity.placeholder')+t('usercenter.proxycity.form5'), trigger: 'change' },
            ],
            num: [
                { required: true, message: t('usercenter.proxycity.placeholder')+t('usercenter.proxycity.form7'), trigger: 'change' },
            ]
        }
    })
    const formItems = computed(() => {
        const targets = ['us', 'uk', 'jp', 'fr', 'au', 'it']
        let tempLocations:any = location.filter((item)=>targets.indexOf(item.country)!==-1).concat(location.filter((item)=>targets.indexOf(item.country)===-1))
        return [
            
            {
                label: t('usercenter.proxycity.form1'),
                placeholder: t('usercenter.proxycity.placeholder'),
                key:'pooltype',
                showButton:false,
                showSearch: true,
                options:[
                    {
                        value:'ip',
                        label:'IP POOL 1'
                    }
                ]
            },
            {
                label: t('usercenter.proxycity.form2'),
                placeholder:t('usercenter.proxycity.placeholder'),
                key:'country',
                showButton:false,
                showSearch: true,
                options:[{
                    label:t('usercenter.proxycity.countryform'),
                    value:'0',
                }].concat(tempLocations.map(((item:any)=>({
                    label:item.name+'-'+item.country,
                    value:item.country,
                    state:item.state,
                    city:item.city
                }))))
                
            },
            {
                label: t('usercenter.proxycity.form3'),
                placeholder:t('usercenter.proxycity.placeholder'),
                key:'state',
                showButton:false,
                showSearch: true,
                options: stateDatas.value,
            },
            {
                label: t('usercenter.proxycity.form4'),
                placeholder:t('usercenter.proxycity.placeholder'),
                key:'city',
                showButton:false,
                showSearch: true,
                options: cityDatas.value,
            },
            {
                label: t('usercenter.proxycity.form5'),
                placeholder:t('usercenter.proxycity.placeholder'),
                key:'iptime',
                showButton:false,
                options: [
                    {
                        value: 0,
                        label:t('usercenter.proxycity.IPform')
                    },
                    {
                        value: 5,
                        label: 5+t('usercenter.proxycity.min')
                    },
                    {
                        value: 10,
                        label: 10+t('usercenter.proxycity.min')
                    },
                    {
                        value: 15,
                        label: 15+t('usercenter.proxycity.min')
                    },
                    {
                        value: 30,
                        label: 30+t('usercenter.proxycity.min')
                    },
                    {
                        value: 60,
                        label: 60+t('usercenter.proxycity.min')
                    },
                    {
                        value: 120,
                        label: 120+t('usercenter.proxycity.min')
                    }
                ]
            },
            {
                label: t('usercenter.proxycity.form6'),
                placeholder:t('usercenter.proxycity.placeholder'),
                key:'type',
                showButton:false,
                options: [
                    {
                        label:'sock5',
                        value:'sock5'
                    },
                    {
                        label:'https',
                        value:'https'
                    },
                ]
            },
            {
                label: t('usercenter.proxycity.form7'),
                placeholder:t('usercenter.proxycity.placeholder'),
                key:'num',
                showButton:false,
                options: [
                    {
                        label:1,
                        value:1
                    },
                    {
                        label:10,
                        value:10
                    },
                    {
                        label:100,
                        value:100
                    },
                    {
                        label:1000,
                        value:1000
                    }
                ]
            }
        ]
    })
    const onCreateCode = () => {
        showCode.value = true
    }
    const onSelect = (key:string, props:any) => {
        if (key == 'country') {
            const { state, city } = props
            if (modelRef.country == '0') {
                modelRef.city = undefined
                modelRef.state = undefined
                modelRef.iptime = undefined
            }  else {
                //重新选择清空
                modelRef.city = undefined
                modelRef.state = undefined
                stateList.value = state
                cityList.value = city
                if (state && state.length==0) {
                    stateDatas.value = []
                } else {
                    stateDatas.value = [{
                        label:t('usercenter.proxycity.cityform'),
                        value:''
                    }].concat(state.map((item:any)=>({
                        value:item.label,
                        label:item.label.toLowerCase().split(/\s+/)
                        .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')
                    })))
                }
                cityDatas.value = []
            }
        }
        if (key == 'state') {
            modelRef.city = undefined
               cityDatas.value = [{
                label:t('usercenter.proxycity.cityform'),
                value:''
            }].concat(cityList.value
                .filter((item:any)=>(item.value.indexOf(modelRef.state) !== -1) && item.value.indexOf(modelRef.country) !== -1)
                .map((item:any)=>({
                value:item.label,
                label:item.label
                .toLowerCase().split(/\s+/)
                .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
            })))
        }
    }
</script>