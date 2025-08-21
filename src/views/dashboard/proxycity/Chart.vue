<template>
    <div class="w-full pb-[30px]">
        <div class="w-full pb-[30px]">
            <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.proxycity.title')}}</span>
       </div>
       <div class="w-full h-[135px] bg-[white] rounded-[12px] p-[20px] pl-[60px] pr-[60px] flex gap-[100px] items-center">
            <div class="w-[250px] h-full" id="paroxy_chart">

            </div>
            <div class="flex flex-col gap-[4px] justify-center items-center">
                
                <span class="text-[#45464E] text-[14px] leading-[17px] pingfang_font">{{$t('usercenter.proxycity.charttitle')}}</span>
                <!-- <span class="text-[#000000] text-[36px] sf_font font-bold leading-[42px]">{{flowData.all}}</span> -->
                <NumberComponent :number="flowData.all" :mode="'loading'" class="text-[#000000] text-[36px] sf_font font-bold leading-[42px]" />
            </div>
            <div class="flex flex-col gap-[4px] justify-center items-center">
                
                <span class="text-[#45464E] text-[14px] leading-[17px] pingfang_font">{{$t('usercenter.proxycity.usedFlow')}}</span>
                <!-- <span class="text-[#000000] text-[36px] sf_font font-bold leading-[42px]">{{ flowData.used }}</span> -->
                <NumberComponent :number="flowData.used" :mode="'loading'" class="text-[#000000] text-[36px] sf_font font-bold leading-[42px]" />
            </div>
            <div class="flex flex-col gap-[4px] justify-center items-center">
                
                <span class="text-[#45464E] text-[14px] leading-[17px] pingfang_font">{{$t('usercenter.proxycity.resetFlow')}}</span>
                <!-- <span class="text-[#000000] text-[36px] sf_font font-bold leading-[42px]">{{flowData.all-flowData.used}}</span> -->
                <NumberComponent :number="flowData.extra" :mode="'loading'" class="text-[#000000] text-[36px] sf_font font-bold leading-[42px]" />
            </div>
            <div class="w-[250px] h-[52px] bg-[#2967B2] rounded-[7px] cursor-pointer flex justify-center items-center" @click="onBuyFlow">
                <span class="text-[#FCFCFD] text-[15px] font-semibold poppins_font">{{$t('usercenter.proxycity.button4')}}</span>
            </div>
       </div>
    </div>
</template>
<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { ref, onMounted } from 'vue'
    import NumberComponent from 'basic@/components/NumberComponent.vue';
    import { GetBandwidth } from 'api@/proxy'
    import * as echarts from 'echarts';
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    let myChart:any = null
    const flowData = ref<any>({
        used: -1,
        all: -1,
        extra: -1
    })
    const router = useRouter()
    const onBuyFlow = () => {
        router.push({
            name:'purchasetraffic'
        })
    }
    onMounted(() => {
        loadFlow()
    })
    const  loadFlow = async () => {
        var chartDom = document.getElementById('paroxy_chart');
        myChart?.dispose();
        myChart = echarts.init(chartDom);
        myChart?.showLoading('default')
        const res:any = await GetBandwidth()
        .catch(() => {
            myChart?.hideLoading()
        })
        if (res.code == 200) {
            flowData.value.used = res.body.usedBandwidth
            flowData.value.all = res.body.totalBandWidth
            flowData.value.extra = (res.body.totalBandWidth - res.body.usedBandwidth).toFixed(2)
        }
        
        loadChart()
        // myChart.resize(); 
    }

    const loadChart = () => {
        // myChart?.showLoading('default')
        // var chartDom = document.getElementById('paroxy_chart');
        // myChart?.dispose();
        // myChart = echarts.init(chartDom);
        var option;
        option = {
            legend: {
                
                left:'right',
                top: 'center',
                orient:'vertical',
                icon:'circle'
            },
            series: [
                {
                    type: 'pie',
                    radius: ['80%', '100%'],
                    center:['20%', '50%'],
                    avoidLabelOverlap: false,

                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show:false,
                        label: {
                        show: false,
                
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: flowData.value.all, name: t('usercenter.proxycity.charttitle'), itemStyle : {
                            color:'#E2EFFE'
                        }},
                        { value: flowData.value.used, name: t('usercenter.proxycity.usedFlow'),  itemStyle : {
                            color:'#3492FD'
                        }},
                        // { value: 580, name: 'Email' },
                        // { value: 484, name: 'Union Ads' },
                        // { value: 300, name: 'Video Ads' }
                    ]
                }
            ]
        };
        myChart?.hideLoading();
        option && myChart?.setOption(option);
    }
</script>