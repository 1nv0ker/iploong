<template>
    <div class="w-full h-full pt-[45px] pl-[36px] pb-[36px] pr-[36px] bg-[#FAFBFF]">
       <div class="w-full pb-[30px]">
            <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.dashboardStatic.title')}}</span>
       </div>
       <div class="w-full h-[172px] rounded-[12px] pt-[7px] flex gap-[40px]">
            <div class="w-[389px] h-full bg-[#FFFFFF] rounded-[12px] flex items-center gap-[30px] pl-[50px]">
                <img :src="circle1" class="w-[100px] h-[100px]"/>
                <div class="flex flex-col gap-[8px] justify-center">
                    <span class="text-[#718EBF] text-[24px] font-bold inter_font">{{$t('usercenter.dashboardStatic.subtitle1')}}</span>
                    <span class="text-[#232323] text-[36px] inter_font font-semibold">0<span>{{$t('usercenter.dashboardStatic.unit')}}</span></span>
                </div>
            </div>
            <div class="w-[389px] h-full bg-[#FFFFFF] rounded-[12px] flex items-center gap-[30px] pl-[50px]">
                <img :src="circle2" class="w-[100px] h-[100px]"/>
                <div class="flex flex-col gap-[8px] justify-center">
                    <span class="text-[#718EBF] text-[24px] font-bold inter_font">{{$t('usercenter.dashboardStatic.subtitle2')}}</span>
                    <span class="text-[#232323] text-[36px] inter_font font-semibold">0<span>{{$t('usercenter.dashboardStatic.unit')}}</span></span>
                </div>
            </div>
            <div class="w-[389px] h-full bg-[#FFFFFF] rounded-[12px] flex items-center gap-[30px] pl-[50px]">
                <img :src="circle3" class="w-[100px] h-[100px]"/>
                <div class="flex flex-col gap-[8px] justify-center">
                    <span class="text-[#718EBF] text-[24px] font-bold inter_font">{{$t('usercenter.dashboardStatic.subtitle3')}}</span>
                    <span class="text-[#232323] text-[36px] inter_font font-semibold">0<span>{{$t('usercenter.dashboardStatic.unit')}}</span></span>
                </div>
            </div>
       </div>
       <div class="w-full pt-[38px] flex justify-between pb-[22px]">
            <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.dashboardStatic.tableTitle')}}</span>
            <div class="bg-[rgba(0,125,215,.1)] w-[160px] h-[50px] cursor-pointer flex justify-center items-center gap-[6px]" @click="onMore">
                <span class="text-[#2967B2] text-[20px] font-semibold inter_font">{{$t('usercenter.dashboardStatic.button')}}</span>
                <img :src="arrowImg" class="w-[16px] h-[16px]"/>
            </div>
       </div>
       <div class="mt-[12px] w-full static_table pl-[32px] pr-[32px] bg-[white]">
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

       </div>
    </div>
</template>
<script setup lang="ts">
    import arrowImg from 'res@/usercenter/dashboard/arrow.svg'
    import circle1 from 'res@/usercenter/dashboard/circle1.svg'
    import circle2 from 'res@/usercenter/dashboard/circle2.svg'
    import circle3 from 'res@/usercenter/dashboard/circle3.svg'
    import EmptyComponent from 'basic@/components/EmptyComponent.vue'
    // import { useRouter } from 'vue-router'
    import PaginationComponent from 'com@/PaginationComponent.vue'
    // import empytImg from 'res@/usercenter/dashboard/empty.svg'
    import { onMounted, computed, reactive } from 'vue'
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    // const router = useRouter()
    const params = reactive({
        total: 0,
        pageSize: 10,
        current: 1
    })
    onMounted(() => {
        // loadFlow()
        tableParams.tableDatas = [
            // {
            //     type: 1,
            //     agent: 'ClashforWindows/0.20.16.3'
            // }
        ]
    })
    const onMore = () => {

    }
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
                title: t('usercenter.dashboardStatic.column1'),
                dataIndex: 'type',
                key: 'type',
                align:'left',
                ellipsis: true,
                width:'110px'
            },
            {
                title: t('usercenter.dashboardStatic.column2'),
                dataIndex: 'limited',
                key: 'limited',
                align:'left',
                ellipsis: true,
                width:'80px'
            },
            {
                title: t('usercenter.dashboardStatic.column3'),
                dataIndex: 'usedBandwidth',
                key: 'usedBandwidth',
                align:'left',
                ellipsis: true,
                width:'140px'
            },
            {
                title:t('usercenter.dashboardStatic.column4'),
                key: 'sysCreateTime',
                dataIndex: 'sysCreateTime',
                align:'left',
                ellipsis: true,
                width:'180px'
            },
            {
                title: t('usercenter.dashboardStatic.column5'),
                key: 'enabled',
                dataIndex: 'enabled',
                align:'left',
                ellipsis: true,
                width:'200px'
            },
            {
                title: t('usercenter.dashboardStatic.column6'),
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

</script>
<style lang="less">
    .static_table {
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
        .ant-table-expanded-row-fixed {
            width: 100%!important;
        }
    }
</style>