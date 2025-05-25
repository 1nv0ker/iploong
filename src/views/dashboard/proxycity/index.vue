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
                            <a-select :disabled="form.disabled" :showSearch="form.showSearch" optionFilterProp="label" :placeholder="form.placeholder" class="customASelect"
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
                <a-switch v-model:checked="autoSwitch" class="custom_switch" @change="onAutoSwitch" />
                <span class="text-[#18181B] text-[17px] inter_font">{{$t('usercenter.proxycity.switch')}}</span>
            </div>
            <div class="w-full pt-[21px] flex gap-[32px]">
                <a-button class="bg-[#2967B2!important] rounded-[7px!important] w-[250px] h-[52px!important]" :loading="modelRef.loading" @click="onGenerate">
                    <span class="text-[#FCFCFD] text-[18px] poppins_font font-semibold">{{$t('usercenter.proxycity.button1')}}</span>
                </a-button>
                <a-tooltip placement="top" :title="$t('common.copy')" trigger="click" :open="open">
                    <div class="flex items-center gap-[4px] cursor-pointer w-[70px] h-[42px]" @click="onCopyProxyIP(proxyRef.generate, (val:boolean)=>open=val)">
                        <img :src="copy" class="w-[24px] h-[24px] cursor-pointer"/>
                        <span class="text-[#666666] text-[18px] poppins_font font-semibold">{{$t('usercenter.proxycity.copy')}}</span>
                    </div>
                </a-tooltip>
                <div class="h-[100px]" style="width: calc( 100% - 384px );">
                    <div class="bg-[white] w-full h-[100px] rounded-[12px] border-1 border-[#E4E4E7] overflow-auto  pl-[24px] pr-[24px] pt-[12px] pb-[12px] flex flex-col">
                        <span class="text-[18px] poppins_font" v-for="item in proxyRef.generate.split(';')">{{item}}</span>
                    </div>
                </div>
            </div>
            <div class="w-full pt-[21px] flex gap-[32px]">
                <a-button class="bg-[rgba(0,125,215,0.1)!important] rounded-[7px!important] w-[250px] h-[52px!important] border-[none!important]" :loading="modelRef.loading" @click="onGenerateApi">
                    <span class="text-[#2967B2] text-[18px] poppins_font font-semibold">{{$t('usercenter.proxycity.button2')}}</span>
                </a-button>
                <a-tooltip placement="top" :title="$t('common.copy')" trigger="click" :open="open2">
                    <div class="flex items-center gap-[4px] cursor-pointer h-[52px]" @click="onCopyProxyIP(proxyRef.api, (val:boolean)=>open2=val)">
                        <img :src="copy" class="w-[24px] h-[24px] cursor-pointer"/>
                        <span class="text-[#666666] text-[18px] poppins_font font-semibold">{{$t('usercenter.proxycity.copy')}}</span>
                    </div>
                </a-tooltip>
                <div class="h-[100px]" style="width: calc( 100% - 384px );">
                    <div class="bg-[white] w-full h-[100px] rounded-[12px] border-1 border-[#E4E4E7] overflow-auto  pl-[24px] pr-[24px] pt-[12px] pb-[12px] flex flex-col">
                        <span class="text-[18px] poppins_font" v-for="item in proxyRef.api.split(';')">{{item}}</span>
                    </div>
                </div>
            </div>
            <div class="w-full pt-[50px] flex justify-center items-center gap-[100px]">
                <div class="flex flex-col items-center">
                    <div class="flex flex-col gap-[8px]">
                        <span class="text-[#999999] text-[14px] poppins_font ">{{$t('usercenter.proxycity.tip2')}}</span>
                        <a-input class="h-[40px!important] text-[16px]" v-model:value="link"></a-input>
                    </div>
                    <div class="pt-[60px] flex flex-col gap-[15px] items-center">
                        <a-button class="w-[270px] h-[42px!important] border-1 border-[#000000!important] rounded-[12px!important] bg-[#FFFFFF!important]" @click="onCreateCode">
                            <span class="text-[#000000] text-[14px] poppins_font">{{$t('usercenter.proxycity.button3')}}</span>
                        </a-button>
                        <!-- <span class="text-[#999999] text-[14px] poppins_font ">{{$t('usercenter.proxycity.tip3')}}</span> -->
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
    import { GetProxyConfig, GenerateApiWhenEnable, GenerateApiLink  } from 'api@/proxy'
    import useStore from 'store@/user'
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    import { reactive, computed, ref, onMounted } from 'vue'
    import { message } from 'ant-design-vue'
    const modelRef = reactive<Record<any, any>>({
        num:undefined,
        country:undefined,
        iptime: undefined,
        city:undefined,
        state: undefined,
        loading: false,
        type: 0
    })
    const proxyRef = reactive({
        generate:'',
        api:''
    })
    const stateList = ref<any[]>([])
    const showCode = ref(false)
    const autoSwitch = ref(false)
    const cityList = ref<any[]>([])
    const stateDatas = ref<any[]>([])
    const cityDatas = ref<any[]>([])
    const link = ref('')
    const proxyConfig = ref<any>({})
    const formRef = ref<any>()
    const userStore = useStore()
    const open = ref(false)
    const open2 = ref(false)
    const onAutoSwitch = (checked:boolean) => {
        if (checked) {
            modelRef.iptime = undefined,
            modelRef.num = 1
        }
    }
    const rules = computed(() => {
        return {
            country: [
                { required: true, message: t('usercenter.proxycity.placeholder')+t('usercenter.proxycity.form2'), trigger: 'change' },
            ],
            iptime: [
                { required: !autoSwitch.value, message: t('usercenter.proxycity.placeholder')+t('usercenter.proxycity.form5'), trigger: 'change' },
            ],
            num: [
                { required: !autoSwitch.value, message: t('usercenter.proxycity.placeholder')+t('usercenter.proxycity.form7'), trigger: 'change' },
            ]
        }
    })
    const formItems = computed(() => {
        const targets = ['us', 'uk', 'jp', 'fr', 'au', 'it']
        let tempLocations:any = location.filter((item)=>targets.indexOf(item.country)!==-1).concat(location.filter((item)=>targets.indexOf(item.country)===-1))
        return [
            
            // {
            //     label: t('usercenter.proxycity.form1'),
            //     placeholder: t('usercenter.proxycity.placeholder'),
            //     key:'pooltype',
            //     showButton:false,
            //     showSearch: true,
            //     options:[
            //         {
            //             value:'ip',
            //             label:'IP POOL 1'
            //         }
            //     ]
            // },
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
                disabled: autoSwitch.value,
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
            // {
            //     label: t('usercenter.proxycity.form6'),
            //     placeholder:t('usercenter.proxycity.placeholder'),
            //     key:'type',
            //     showButton:false,
            //     options: [
            //         {
            //             label:'sock5',
            //             value:'sock5'
            //         },
            //         {
            //             label:'https',
            //             value:'https'
            //         },
            //     ]
            // },
            {
                label: t('usercenter.proxycity.form7'),
                placeholder:t('usercenter.proxycity.placeholder'),
                key:'num',
                showButton:false,
                disabled: autoSwitch.value,
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
            },
            {
                label: t('usercenter.proxycity.form6'),
                placeholder:t('usercenter.proxycity.placeholder'),
                key:'type',
                showButton:false,
                // disabled: autoSwitch.value,
                options: [
                    {
                        label:'hostname:port:username:password',
                        value:0
                    },
                    {
                        label:'username:password@hostname:port',
                        value:1
                    },
                    {
                        label:'username:password:hostname:port',
                        value:2
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
    onMounted(() => {
        loadProxyConfig()
    }) 
    const onCopyProxyIP = (str:string, callback:Function) => {
        if (!str) {
            return
        }
        callback(true)
        if (navigator.clipboard) {
            navigator.clipboard.writeText(str || '')
        } else {
            const input = document.createElement('input');
            input.value = str || '';
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            input.remove();
        }
        setTimeout(() => {
            callback(false)
        }, 1000);
    }
    //加载配置
    const loadProxyConfig = () => {
        modelRef.loading = true
        GetProxyConfig({
            userName: userStore.userInfo?.mainKey
        })
        .then((res:any) => {
            modelRef.loading = false
            proxyConfig.value = res.body
        })
        .catch(() => {
            modelRef.loading = false
        })
    }
    //随机session
    const generateRandomString = () => {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
        let currentIndex = chars.length;
        
        while (currentIndex > 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [chars[currentIndex], chars[randomIndex]] = [chars[randomIndex], chars[currentIndex]];
        }
        return chars.slice(0, 8).join('');
    }
    //生成
    const onGenerate = async () => {
        await formRef.value.validate()
        proxyRef.generate = ''
        //自动切换IP
        if (autoSwitch.value) {
            modelRef.loading = true
            const params = {
                KeyName:userStore.userInfo?.mainKey,
                Num:modelRef.num,
                Country:modelRef.country,
                State:modelRef.state,
                City:modelRef.city,
                SessionTime:modelRef.iptime,
                AutoSwitch: '1',
                Format: '0'
            }
            const res:any = await GenerateApiWhenEnable(params)
            .catch(() => {
                modelRef.loading =  false
            })
            if (res.code && res.code == 200) {
                proxyRef.generate = res.body
                modelRef.loading =  false
            }
            modelRef.loading =  false
        } else {
            const { proxyCityFmt, proxyCountryFmt, proxyPort, proxyPwd, proxyStateFmt, proxyUrl, userName, proxyGlobalFmt } = proxyConfig.value
            for (let i=0;i<Number(modelRef.num);i++) {
                
                const randomInPortIndex= Math.floor(Math.random() * proxyPort.length)
                const randomInUrlIndex= Math.floor(Math.random() * proxyUrl.length)
                if (proxyPort[randomInPortIndex] && proxyUrl[randomInUrlIndex]) {
                    const url = proxyUrl[randomInUrlIndex]
                    const port = proxyPort[randomInPortIndex]
                    
                    //rotating session存在
                    const sessiong = generateRandomString()
                    const hostname_port = url+':'+port
                    let username_password = ''
                    let proxyIP = ''
                    if (modelRef.country == '0') {
                        username_password = userName+'_f-'+ proxyGlobalFmt + ':' + proxyPwd
                    } else {
                        username_password = userName+'_g-'+ modelRef.country + '_f-' + (modelRef.city?proxyCityFmt:(modelRef.state?proxyStateFmt:proxyCountryFmt))
                        + (modelRef.iptime==0?'':('_sid-'+sessiong)) + ((modelRef.state)?('_s-'+modelRef.state):'')
                        + (modelRef.city?('_c-'+modelRef.city):'') + (modelRef.iptime?('_l-'+modelRef.iptime):'')
                        + ':'+ proxyPwd
                    }
                    if (modelRef.type == 0) {
                        proxyIP = hostname_port + ':' + username_password
                    } else if (modelRef.type == 1) {
                        proxyIP = username_password + '@' + hostname_port
                    } else {
                        proxyIP = username_password + ':' + hostname_port
                    }
                    proxyRef.generate = proxyRef.generate + (proxyRef.generate?';':'') + proxyIP
                    // proxyIPS.value.push(proxyIP)
                } else {
                    message.error('端口号或者url不存在')
                    break
                }
            }
        }
    }
    //生成api
    const onGenerateApi = async () => {
        await formRef.value.validate()

        const params = {
            KeyName:userStore.userInfo?.mainKey,
            Num:modelRef.num,
            Country:modelRef.country=='0'?undefined:modelRef.country,
            State:modelRef.state,
            City:modelRef.city,
            SessionTime:modelRef.iptime,
            AutoSwitch: autoSwitch.value?'1':'0',
            Format: modelRef.type,
            crc: userStore.userInfo?.passWord
        }
        const link = GenerateApiLink(params, autoSwitch.value)
        proxyRef.api = link
    }
</script>