<template>
    <div class="w-full h-full overflow-auto bg-[#FAFBFF] p-[36px] relative">
        <div class="w-full pb-[30px]">
            <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.historyorder.title')}}</span>
       </div>
       <div class="pt-[30px] w-full flex gap-[40px]">
            <div class="w-[389px] h-[172px] rounded-[12px] bg-[white] gap-[30px] items-center justify-center flex">
                <img :src="item1" class="w-[100px] h-[100px]"/>
                <div class="flex flex-col gap-[8px]">
                    <span class="text-[#718EBF] text-[24px] font-semibold inter_font">{{$t('usercenter.historyorder.subtitle1')}}</span>
                    <span class="text-[#232323] text-[26px] font-semibold inter_font">0</span>
                </div>  
            </div>
            <div class="w-[389px] h-[172px] rounded-[12px] bg-[white] gap-[30px] items-center justify-center flex">
                <img :src="item2" class="w-[100px] h-[100px]"/>
                <div class="flex flex-col gap-[8px]">
                    <span class="text-[#718EBF] text-[24px] font-semibold inter_font">{{$t('usercenter.historyorder.subtitle2')}}</span>
                    <span class="text-[#232323] text-[26px] font-semibold inter_font">0</span>
                </div>  
            </div>
            <div class="w-[389px] h-[172px] rounded-[12px] bg-[white] gap-[30px] items-center justify-center flex">
                <div class="w-[100px] h-[100px] rounded-[50%] relative flex justify-center items-center">
                    <img :src="item3" class="w-[35px] h-[35px] z-20"/>
                    <img :src="group" class="w-[100px] h-[100px] absolute top-0 bottom-0"/>
                </div>
                <div class="flex flex-col gap-[8px]">
                    <span class="text-[#718EBF] text-[24px] font-semibold inter_font">{{$t('usercenter.historyorder.subtitle3')}}</span>
                    <span class="text-[#232323] text-[26px] font-semibold inter_font">0</span>
                </div>  
            </div>
       </div>
       <div class="w-full pt-[30px] flex justify-between">
            <div class="flex gap-[16px]">
                <div :class="`w-[233px] h-[56px] border-1 rounded-[12px] relative cursor-pointer flex justify-center items-center 
                    ${selected==type.key?'border-[#D1E9FF] bg-[#EDF7FF] text-[#2967B2]':'text-[#666666] bg-[white] border-[#E4E4E7]'}`"
                    v-for="type in items" @click="onSelect(type.key)">
                    <div class=" rounded-tl-[12px] bg-[#D1E9FF] w-[39px] h-[26px] flex items-center justify-center text-[#2967B2] absolute top-0 left-0" v-show="selected==type.key">
                        ✔
                    </div>
                        <span class="inter_font text-[17px] font-semibold">{{type.name}}</span>
                    </div>
            </div>
            <div class="historyorder_input">
                <a-input class="w-[293px!important] h-[56px!important]" :placeholder="$t('usercenter.historyorder.placeholder')" @pressEnter="onQuery" v-model:value="params.keyword">
                    <template #prefix>
                        <SearchOutlined />
                    </template>
                </a-input>
            </div>
        </div>
        <div class="] w-full order_table pl-[32px] pr-[32px] bg-[white] mt-[24px]">
            <div class="w-full pb-[12px]">
                <a-table :columns="columns" :data-source="tableParams.tableDatas"  :pagination="false" :loading="tableParams.loading" :scroll="{x:1000}">
                    <template v-slot:headerCell="{title}">
                        <span class="text-[#718EBF] text-[19px] font-medium inter_font">{{title}}</span>
                    </template>
                    <template #bodyCell="{ column, record }">
                        <span class="text-[#333333] text-[19px] inter_font" :title="record[column.key]">
                            {{ record[column.key] }}
                        </span>
                    </template>
                </a-table>
                <PaginationComponent v-model:total="params.total" v-model:page-size="params.pageSize" v-model="params.current" @onCurrentChange="onCurrentChange" @onSizeChange="onSizeChange"/>
            </div>

       </div>
    </div>
</template>
<script setup lang="ts">
    import item1 from 'res@/usercenter/order/item1.svg'
    import item2 from 'res@/usercenter/order/item2.svg'
    import item3 from 'res@/usercenter/order/item3.svg'
    import group from 'res@/usercenter/order/group.svg'
    import PaginationComponent from 'com@/PaginationComponent.vue'
    import { GetOrder } from 'api@/order'
    import { SearchOutlined } from '@ant-design/icons-vue'
    import { computed, ref, reactive, onMounted } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n();
    const selected = ref(0)
    const params = reactive({
        total: 0,
        pageSize: 10,
        current: 1,
        keyword:''
    })
    const items = computed(() => {
        return [
            {
                name: t('usercenter.historyorder.select1'),
                key:0
            },
            {
                name: t('usercenter.historyorder.select2'),
                key:2
            },
            {
                name: t('usercenter.historyorder.select3'),
                key:1
            }
        ]
    })
    const columns = computed(() => {
        return  [
        {
                title: t('usercenter.historyorder.column1'),
                dataIndex: 'orderNo',
                key: 'orderNo',
                align:'center',
                ellipsis: true,
                width:'200px'
            },
            {
                title: t('usercenter.historyorder.column2'),
                dataIndex: 'orderName',
                key: 'orderName',
                align:'center',
                ellipsis: true,
                width:'200px'
            },
            {
                title: t('usercenter.historyorder.column3'),
                dataIndex: 'amount',
                key: 'amount',
                align:'center',
                ellipsis: true,
                width:'100px'
            },
            {
                title: t('usercenter.historyorder.column4'),
                dataIndex: 'status',
                key: 'status',
                align:'center',
                ellipsis: true,
                width:'100px'
            },
            {
                title: t('usercenter.historyorder.column5'),
                dataIndex: 'payType',
                key: 'payType',
                align:'center',
                ellipsis: true,
                width:'200px'
            },
            {
                title: t('usercenter.historyorder.column6'),
                dataIndex: 'sysCreateTime',
                key: 'sysCreateTime',
                align:'center',
                ellipsis: true,
                width:'200px'
            },
        ];
    })
    const tableParams = reactive<{tableDatas:any[], loading:boolean}>({
        tableDatas: [],
        loading: false
    })
    const onCurrentChange = (num:number) => {
        params.current = num
        loadOrder()
    }
    const onSizeChange = (num:number,size:number) => {
        params.current = num
        params.pageSize = size
        loadOrder()
    }
    onMounted(() => {
        loadOrder()
    })
    const onSelect = (key:number) => {
        selected.value = key
        loadOrder()
    }
    const onQuery = () => {
        loadOrder()
    }
    const loadOrder = () => {
        tableParams.loading = true
        GetOrder({
            PageNo: params.current,
            PageSize:params.pageSize,
            Status:selected.value,
            KeyWord: params.keyword
        })
        .then((res:any) => {
            tableParams.loading = false
            tableParams.tableDatas = res.body.records
            params.total = res.body.totalRows
        })
        .catch(() => {
            tableParams.loading = false
        })
    }
</script>
<style lang="less">
    .historyorder_input {
        .ant-input-affix-wrapper {
            font-family: Inter;
            height: 58px!important;
            // border-color: #E4E4E7;
            // border-radius: 12px;
            font-size: 18px!important;
            // background: #F3F7FE!important;
            &::placeholder {
                color: #A1A1AA; /* 改变文字颜色 */
                font-size:18px!important;
                text-align: left;
                font-family: Inter;
                line-height: 100%;
            }
            .ant-input {
                // background: #F3F7FE!important;
                &::placeholder {
                    color: #A1A1AA; /* 改变文字颜色 */
                    font-size:18px!important;
                    text-align: left;
                    font-family: Inter;
                    line-height: 100%;
                }
            }
        }
        
    }
</style>
<style lang="less">
    .order_table {
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