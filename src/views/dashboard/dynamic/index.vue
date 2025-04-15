<template>
    <div class="w-full h-full pt-[45px] pl-[36px] pb-[36px] pr-[36px] bg-[#FAFBFF]">
       <div class="w-full pb-[30px]">
            <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.dashboardDy.title')}}</span>
       </div>
       <div class="w-[603px] bg-[white] h-[284px] rounded-[12px] pt-[7px]" style="box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.05);">
            <div class="w-full border-b-1 border-[rgba(153,153,153,0.2)] h-[48px] flex justify-between pl-[22px] pr-[22px]">
                <div class="flex gap-[17px] items-center ">
                    <div class="flex gap-[8px] items-center">
                        <img :src="dyImg" />
                        <span class="text-[#000000] text-[22px] font-bold inter_font">{{$t('usercenter.dashboardDy.subtitle1')}}</span>
                    </div>
                    <div class="bg-[rgba(0,125,215,.1)] w-[112px] h-[30px] cursor-pointer flex justify-center items-center gap-[6px]" @click="onProxy">
                        <span class="text-[#2967B2] text-[12px] font-semibold inter_font">{{$t('usercenter.dashboardDy.button')}}</span>
                        <img :src="arrowImg" class="w-[16px] h-[16px]"/>
                    </div>
                </div>
            </div>
            <div class="w-full p-[32px] flex gap-[60px]">
                <div class="w-[207px]">
                    <div id="flowchart" class="w-full h-[147px]">

                    </div>
                    <div class="w-full flex justify-center">
                        <span class="text-[#45464E] text-[16px] leading-[19px] pingfang_font">{{$t('usercenter.dashboardDy.charttitle')}}
                            <span class="text-[#000000] text-[22px] font-bold">{{ flowData.all }}</span></span>
                    </div>
                </div>
                <div class="w-[250px] pt-[20px]">
                    <div class="w-full flex gap-[28px]">
                        <div class="flex flex-col gap-[4px] justify-center items-center">
                            <!-- <span class="text-[#000000] text-[36px] sf_font font-bold leading-[42px]">{{flowData.all}}</span> -->
                            <NumberComponent :number="flowData.used" mode="loading" class="text-[#000000] text-[36px] sf_font font-bold leading-[42px]" />
                            <span class="text-[#45464E] text-[14px] leading-[17px] pingfang_font">{{$t('usercenter.dashboardDy.usedFlow')}}</span>
                        </div>
                        <div class="flex flex-col gap-[4px] justify-center items-center">
                            <!-- <span class="text-[#000000] text-[36px] sf_font font-bold leading-[42px]">{{flowData.used}}</span> -->
                            <NumberComponent :number="flowData.all - flowData.used" mode="loading" class="text-[#000000] text-[36px] sf_font font-bold leading-[42px]" />
                            <span class="text-[#45464E] text-[14px] leading-[17px] pingfang_font">{{$t('usercenter.dashboardDy.resetFlow')}}</span>
                        </div>
                    </div>
                    <div class="w-full h-[40px] mt-[36px] bg-[#2967B2] rounded-[7px] cursor-pointer flex justify-center items-center" @click="onBuyFlow">
                        <span class="text-[#FCFCFD] text-[15px] font-semibold poppins_font">{{$t('usercenter.dashboardDy.button2')}}</span>
                    </div>
                </div>
            </div>
       </div>
       <div class="w-full pt-[38px] flex justify-between">
            <div class="flex gap-[4px] items-center">
                <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.dashboardDy.subtitle2')}}</span>
                <span class="text-[#666666] text-[18px] inter_font leading-[21px]">【2025-03-12 00:00-24:00]</span>
            </div>
            <div class="flex gap-[14px] items-end">
                <div class="flex flex-col gap-[2px] text-[#666666] text-[18px] inter_font">
                    <span>TIME</span>
                    <span>00:00</span>
                </div>
                <span class="text-[#333333] text-[50px] big_font leading-[32px] sf_font">0<span class="text-[#666666] text-[18px] inter_font pl-[5px]">[MB]</span></span>
            </div>
       </div>
       <div class="mt-[12px] w-full dy_table pl-[32px] pr-[32px] bg-[white]">
            <div class="w-full pb-[12px]">
                <a-table :columns="columns" :data-source="tableParams.tableDatas"  :pagination="false" :loading="tableParams.loading" :scroll="{x:1180}">
                    <template v-slot:headerCell="{title}">
                        <span class="text-[#718EBF] text-[19px] font-medium inter_font">{{title}}</span>
                    </template>
                    <template #bodyCell="{ column, record }">
                        <span class="text-[#FE5C73] text-[19px] inter_font" :title="record[column.key]" v-if="column.key=='agent'">
                            {{ record[column.key] }}
                        </span>
                        <span class="text-[#333333] text-[19px] inter_font" :title="record[column.key]" v-else>
                            {{ record[column.key] }}
                        </span>
                    </template>
                    <template #emptyText>
                        <EmptyComponent />
                    </template>
                </a-table>
                <PaginationComponent v-model:total="params.total" v-model:page-size="params.pageSize" v-model="params.current" @onCurrentChange="onCurrentChange" @onSizeChange="onSizeChange"/>
            </div>
            <!-- <div v-if="tableParams.tableDatas.length" class="bg-[white]">
                <a-table :columns="columns" :data-source="tableParams.tableDatas"  :pagination="false" :loading="tableParams.loading">
                </a-table>
                <PaginationComponent v-model:total="params.total" v-model:page-size="params.pageSize" v-model="params.current" @onCurrentChange="onCurrentChange" @onSizeChange="onSizeChange"/>
            </div> -->
            <!-- <div v-else class="w-full justify-center flex h-[485px] items-center">
                <img :src="empytImg" class="w-[452px] h-[387px]" />
            </div> -->
       </div>
    </div>
</template>
<script setup lang="ts">
    import dyImg from 'res@/usercenter/dashboard/dy.svg'
    import arrowImg from 'res@/usercenter/dashboard/arrow.svg'
    import { useRouter } from 'vue-router'
    import PaginationComponent from 'com@/PaginationComponent.vue'
    import { GetBandwidth } from 'api@/proxy'
    import NumberComponent from 'basic@/components/NumberComponent.vue';
    // import empytImg from 'res@/usercenter/dashboard/empty.svg'
    import { onMounted, ref, computed, reactive } from 'vue'
    import * as echarts from 'echarts';
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    const router = useRouter()
    let myChart:any = null
    const params = reactive({
        total: 0,
        pageSize: 10,
        current: 1
    })
    const flowData = ref<any>({
        used: -1,
        all:-1
    })
    const onProxy = () => {
        router.push({
            name:'proxycity'
        })
    }
    onMounted(() => {
        loadFlow()
        tableParams.tableDatas = [
            {
                type: 1,
                agent: 'ClashforWindows/0.20.16.3'
            }
        ]
    })
    const onCurrentChange = (num:number) => {
        params.current = num
        // loadAccount()
    }
    const onSizeChange = (num:number,size:number) => {
        params.current = num
        params.pageSize = size
        // loadAccount()
    }
    const columns = computed(() => {
        return  [
            {
                title: t('usercenter.dashboardDy.column1'),
                dataIndex: 'type',
                key: 'type',
                align:'left',
                ellipsis: true,
                width:'110px'
            },
            {
                title: t('usercenter.dashboardDy.column2'),
                dataIndex: 'limited',
                key: 'limited',
                align:'left',
                ellipsis: true,
                width:'80px'
            },
            {
                title: t('usercenter.dashboardDy.column3'),
                dataIndex: 'usedBandwidth',
                key: 'usedBandwidth',
                align:'left',
                ellipsis: true,
                width:'140px'
            },
            {
                title:t('usercenter.dashboardDy.column4'),
                key: 'sysCreateTime',
                dataIndex: 'sysCreateTime',
                align:'left',
                ellipsis: true,
                width:'180px'
            },
            {
                title: t('usercenter.dashboardDy.column5'),
                key: 'enabled',
                dataIndex: 'enabled',
                align:'left',
                ellipsis: true,
                width:'200px'
            },
            {
                title: t('usercenter.dashboardDy.column6'),
                key: 'agent',
                dataIndex: 'agent',
                align:'left',
                ellipsis: true,
                width:'250px'
            }
        ];
    })
    const tableParams = reactive<{tableDatas:any[], loading:boolean}>({
        tableDatas: [],
        loading: false
    })
    const loadFlow = async () => {
        
        var chartDom = document.getElementById('flowchart');
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
        }
        
        loadChart()
        // myChart.resize(); 
    }
    const onBuyFlow = () => {
        router.push({
            name:'purchasetraffic'
        })
    }
    const loadChart = () => {
        var chartDom = document.getElementById('flowchart');
        myChart?.dispose();
        myChart = echarts.init(chartDom);
        var option;
        option = {
            // grid: {
            //     top: 0,
            //     bottom: 0,
            //     left: 0,
            //     right:0
            // },
            series: [
                {
                name: 'Pressure',
                type: 'gauge',
                radius: '100%',
                axisLabel : {
                    show: false
                },
                progress: {
                    show: true,
                    roundCap: true, 
                    width: 15
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color:'#D9D9D9'
                    }
                },
                title: {
                    show:false
                },
                detail: {
                    show: false
                },
                axisLine: {
                    roundCap: true, 
                    lineStyle: {
                        
                        width: 15              
                    }
                },
                max: flowData.value.all,
                data: [
                        {
                            value: flowData.value.used,
                            name: 'SCORE',
                            itemStyle: {
                                color:'#3492FD',
                                borderCap: 'round'
                            }
                        },
                        {
                            value: flowData.value.all,
                            name: 'SCORE',
                            itemStyle: {
                                opacity: 0,
                                borderCap: 'round'
                            }
                        }
                    ]
                }
            ]
        };
        myChart?.hideLoading();
        option && myChart?.setOption(option);
    }
</script>
<style lang="less">
    .dy_table {
        .ant-table-thead {
            height: 60px!important;
        }
        .ant-table-cell  {
            background-color: white!important;
            box-sizing:content-box!important;
            border-color: #E6EFF5!important;
            // height: 60px!important;
        }
        // .ant-table-row  {
            .ant-table-tbody  {
                height: 70px!important;
            }
        // }
        :where(.css-dev-only-do-not-override-1p3hq3p).ant-table-wrapper .ant-table-thead >tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before, :where(.css-dev-only-do-not-override-1p3hq3p).ant-table-wrapper .ant-table-thead >tr>td:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
            height: 1px!important;
        }
    }
</style>