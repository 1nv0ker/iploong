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
                    <span class="text-[#232323] text-[36px] inter_font font-semibold">{{modelRef.shareNum+modelRef.exclusiveNum}}<span>{{$t('usercenter.dashboardStatic.unit')}}</span></span>
                </div>
            </div>
            <div class="w-[389px] h-full bg-[#FFFFFF] rounded-[12px] flex items-center gap-[30px] pl-[50px]">
                <img :src="circle2" class="w-[100px] h-[100px]"/>
                <div class="flex flex-col gap-[8px] justify-center">
                    <span class="text-[#718EBF] text-[24px] font-bold inter_font">{{$t('usercenter.dashboardStatic.subtitle2')}}</span>
                    <span class="text-[#232323] text-[36px] inter_font font-semibold">{{modelRef.exclusiveNum}}<span>{{$t('usercenter.dashboardStatic.unit')}}</span></span>
                </div>
            </div>
            <div class="w-[389px] h-full bg-[#FFFFFF] rounded-[12px] flex items-center gap-[30px] pl-[50px]">
                <img :src="circle3" class="w-[100px] h-[100px]"/>
                <div class="flex flex-col gap-[8px] justify-center">
                    <span class="text-[#718EBF] text-[24px] font-bold inter_font">{{$t('usercenter.dashboardStatic.subtitle3')}}</span>
                    <span class="text-[#232323] text-[36px] inter_font font-semibold">{{modelRef.shareNum}}<span>{{$t('usercenter.dashboardStatic.unit')}}</span></span>
                </div>
            </div>
       </div>
       <div class="w-full mt-[22px] flex justify-between bg-[white] p-12 flex-col gap-[20px]">
            <!-- <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.dashboardStatic.tableTitle')}}</span>
            <div class="bg-[rgba(0,125,215,.1)] w-[160px] h-[50px] cursor-pointer flex justify-center items-center gap-[6px]" @click="onMore">
                <span class="text-[#2967B2] text-[20px] font-semibold inter_font">{{$t('usercenter.dashboardStatic.button')}}</span>
                <img :src="arrowImg" class="w-[16px] h-[16px]"/>
            </div> -->
            <a-row class="w-full" :gutter="20">
                <a-col :span="6">
                    <a-input  :placeholder="'IP'" size="large" class="customAInput"  v-model:value="params.KeyWord" allowClear />
                </a-col>
                <a-col :span="6">
                    <a-select :placeholder="t('usercenter.dashboardStatic.message1')"  class="customASelect w-full" v-model:value="params.IspType" allowClear>
                    <a-select-option :value="1">{{t('common.location2')}}</a-select-option>
                    <a-select-option :value="0">{{t('common.location')}}</a-select-option>
                </a-select>
                </a-col>
                <a-col :span="6">
                    <a-select :placeholder="t('usercenter.dashboardStatic.message2')"  class="customASelect w-full" :loading="selectLoading" :options="regions" v-model:value="params.IspLocation" allowClear>
                        
                    </a-select>
                </a-col>
                <a-col :span="6">
                    <a-range-picker showTime picker="day" :placeholder="[t('usercenter.dashboardStatic.message3'), t('usercenter.dashboardStatic.message4')]" class="customADate w-full" v-model:value="dates">
                        
                    </a-range-picker>
                </a-col>
            </a-row>
            <div class="w-full h-[62px]">
                <a-button class="text-[] bg-[#2967B2!important] w-[200px] h-[62px!important] rounded-[24px!important] flex justify-center items-center cursor-pointer" @click="loadList" :loading="tableParams.loading" >
                    <span class="text-[22px] text-white font-medium">{{t('usercenter.dashboardStatic.button1')}}</span>
                </a-button>
            </div>
       </div>
       <div class=" w-full static_table pl-[32px] pr-[32px] bg-[white]">
            <div class="w-full pb-[12px]">
                <a-table :columns="columns" :data-source="tableParams.tableDatas"  :pagination="false" :loading="tableParams.loading" :scroll="{x:1250}">
                    <template v-slot:headerCell="{title}">
                        <span class="text-[#718EBF] text-[19px] font-medium inter_font">{{title}}</span>
                    </template>
                    <template #bodyCell="{ column, record }">
                        <span class="text-[#FE5C73] text-[19px] inter_font" :title="record[column.key]" v-if="column.key=='agent'">
                            {{ record[column.key] }}
                        </span>
                        <template v-else-if="column.key == 'code'">
                            <QrcodeOutlined class="text-[#333333] text-[30px] inter_font" @click="onOpenQRcode(record['code'])" />
                        </template>
                        <template v-else-if="column.key == 'ispType'">
                            <span class="text-[#333333] text-[19px] inter_font">{{record[column.key]==0?t('common.location'):t('common.location2')}}</span>
                        </template>
                        <template v-else-if="column.key == 'socks1' || column.key == 'socks' || column.key == 'http'">
                            <div class="w-full flex gap-[12px]">
                                <span class="text-[#333333] text-[19px] inter_font max-w-200 bitip_text" :title="record[column.key]">{{record[column.key]}}</span>
                                <Copy :message="record[column.key]" />
                            </div>
                        </template>
                        <!-- <span class="text-[#333333] text-[19px] inter_font" :title="record[column.key]" v-else-if="column.key == 'code'">
                            {{ record[column.key] }}
                        </span> -->
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
       <QrCodeModal v-model="open" :qrcode="qrcode"/>
    </div>
</template>
<script setup lang="ts">
    // import arrowImg from 'res@/usercenter/dashboard/arrow.svg'
    import circle1 from 'res@/usercenter/dashboard/circle1.svg'
    import circle2 from 'res@/usercenter/dashboard/circle2.svg'
    import circle3 from 'res@/usercenter/dashboard/circle3.svg'
    import EmptyComponent from 'basic@/components/EmptyComponent.vue'
    import { QrcodeOutlined } from '@ant-design/icons-vue';
    import  { Dayjs } from 'dayjs';
    // import { useRouter } from 'vue-router'
    import PaginationComponent from 'com@/PaginationComponent.vue'
    import { GetAnalysis, GetList, GetSelectList } from 'api@/ips'
    // import empytImg from 'res@/usercenter/dashboard/empty.svg'
    import { onMounted, computed, reactive, ref, nextTick } from 'vue'
    import { Base64 } from 'js-base64';
    import QrCodeModal from './QrCodeModal.vue';
    import Copy from './Copy.vue'
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    const open = ref(false)
    const qrcode = ref('')
    const selectLoading = ref(false)
    const regions = ref([])
    const dates = ref<[Dayjs, Dayjs]|null>(null);
    // const router = useRouter()
    const modelRef = reactive({
        exclusiveNum: 0,
        shareNum: 0
    })
    const params = reactive({
        total: 0,
        pageSize: 10,
        current: 1,
        KeyWord: '',
        IspLocation: undefined,
        IspType: undefined
    })
    onMounted(() => {
        loadAnalysis()
        loadList()
        selectLoading.value = true
        GetSelectList()
        .then((res:any) => {
            regions.value = res.body
            selectLoading.value = false
        })
        .catch(() => {
            selectLoading.value = false
        })
    })
    const loadList = () => {
        tableParams.loading = true
        GetList({
            PageNo:params.current,
            PageSize:params.pageSize,
            IspLocation:params.IspLocation,
            // AutoRenew:params.AutoRenew,
            KeyWord:params.KeyWord,
            SearchBeginTime: dates.value?dates.value[0].format('YYYY-MM-DD HH:mm:ss'):undefined,
            SearchEndTime: dates.value?dates.value[1].format('YYYY-MM-DD HH:mm:ss'):undefined,
            IspType:params.IspType

        })
        .then((res:any) => {
            tableParams.loading = false
            if (res.code == 200) {
                tableParams.tableDatas = res.body.records.map((item:any)=>{
                const proxySplit = item.ip.split(":");
                let str = Base64.encode(
                `${proxySplit[2]}:${proxySplit[3]}@${proxySplit[0]}:${proxySplit[1]}`)
                let codeString = `socks://${str}?obfs=none`
                // let socks = `${str}`
                // let http =  `${item.ip}`
                return {
                    ...item,
                    code: codeString,
                    key: ''+item.id,
                    http: item.ip,
                    socks: item.ip,
                    socks1:item.ip
                }
            })
            params.total = res.body.totalRows
            }
        })
        .catch(() => {
            tableParams.loading = false
        })
    }
    const loadAnalysis = () => {
        GetAnalysis()
        .then((res:any) => {
            modelRef.exclusiveNum = res.body.exclusiveNum
            modelRef.shareNum = res.body.shareNum
        })
    }
    const onOpenQRcode = (code:string) => {
        console.log('code', code)
        
        open.value = true
        nextTick(() => {
            qrcode.value = code
        })
    }
    // const onMore = () => {

    // }
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
                dataIndex: 'code',
                key: 'code',
                align:'left',
                ellipsis: true,
                width:'120px'
            },
            {
                title: t('usercenter.dashboardStatic.column2'),
                dataIndex: 'expireTime',
                key: 'expireTime',
                align:'left',
                ellipsis: true,
                width:'150px'
            },
            {
                title: t('usercenter.dashboardStatic.column3'),
                dataIndex: 'ispType',
                key: 'ispType',
                align:'left',
                ellipsis: true,
                width:'80px'
            },
            {
                title:t('usercenter.dashboardStatic.column4'),
                key: 'socks1',
                dataIndex: 'socks1',
                align:'left',
                ellipsis: true,
                width:'300px'
            },
            {
                title: t('usercenter.dashboardStatic.column5'),
                key: 'http',
                dataIndex: 'http',
                align:'left',
                ellipsis: true,
                width:'300px'
            },
            {
                title: t('usercenter.dashboardStatic.column6'),
                key: 'socks',
                dataIndex: 'socks',
                align:'left',
                ellipsis: true,
                width:'300px'
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