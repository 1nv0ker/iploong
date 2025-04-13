<template>
    <div class="w-full h-full overflow-auto bg-[#FAFBFF] p-[36px] relative flex">
        <div class="w-[492px]">
            <div class="w-full">
                <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.promotion.title')}}</span>
            </div>
            <div class="pt-[40px]">
                <div class="w-[492px] h-[312px] promotion_box pt-[92px] flex flex-col items-center gap-[12px]">
                    <div class="flex gap-[8px] text-[#2967B2] inter_font items-end ">
                        <span class="text-[60px] leading-[60px]">{{ promotionNum }}</span>
                        <span class="text-[20px] leading-[30px]">USDT</span>
                    </div>
                    <span>{{$t('usercenter.promotion.tip1')}}</span>
                    <div class="w-[328px] h-[52px] rounded-[12px] bg-[#2967B2] flex items-center justify-center cursor-pointer " @click="onOpenModal(1, t('usercenter.promotion.tip7'))">
                        <span class="text-[24px] font-semibold text-[white] inter_font">{{$t('usercenter.promotion.button1')}}</span>
                    </div>
                    <span class="text-[#999999] text-[13px] font-medium inter_font cursor-pointer" @click="onOpenModal(0, t('usercenter.promotion.tip8'))">{{$t('usercenter.promotion.tip2')}}</span>
                </div>
            </div>
            <div class="w-full pt-[40px]">
                <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.promotion.subtitle2')}}</span>
            </div>
            <div class="w-full pt-[23px]">
                <span class="text-[#000000] text-[24px] pingfang_font font-medium">{{$t('usercenter.promotion.tip3')}}</span>
            </div>
            <div class="w-full pt-[23px]">
                <span class="text-[#666666] text-[18px] pingfang_font font-medium max-w-[428px]">{{$t('usercenter.promotion.tip4')}}</span>
            </div>
            <div class="w-full pt-[27px]">
                <div class="w-full flex gap-[6px] ">
                    <a-tooltip placement="top" :title="$t('common.copy')" trigger="click" :open="open">
                        <div class="w-[180px] pl-[24px] pr-[24px] h-[52px] rounded-[8px] bg-[#2967B2] flex items-center justify-center gap-[12px] cursor-pointer" @click="onCpoyInvitecode(userStore.userInfo?.inviteCode, (val:boolean)=>open=val)">
                            <img :src="copy" class="w-[18px] h-[18px] bg-[white] " />
                            <span class="text-[white] bitip_text text-[18px] poppins_font font-semibold max-w-[105px]" :title="$t('usercenter.promotion.button2')">{{$t('usercenter.promotion.button2')}}</span>
                        </div>
                    </a-tooltip>
                    <div class="w-[306px] h-[52px] rounded-[12px] bg-[white] border-1 border-[#2967B2] flex items-center pl-[20px]">
                        <span class="text-[#18181B] text-[17px] inter_font">{{userStore.userInfo?.inviteCode}}</span>
                    </div>
                </div>
                <div class="w-full flex gap-[6px] pt-[20px] ">
                    <a-tooltip placement="top" :title="$t('common.copy')" trigger="click" :open="open2">
                        <div class="w-[180px] pl-[24px] pr-[24px] h-[52px] rounded-[8px] bg-[#2967B2] flex items-center justify-center gap-[12px] cursor-pointer" @click="onCpoyInvitecode(`https://www.iploonp.com/register?inviteCode=${userStore.userInfo?.inviteCode}`, (val:boolean)=>open2=val)">
                            <img :src="copy" class="w-[18px] h-[18px] bg-[white] " />
                            <span class="text-[white] bitip_text text-[18px] poppins_font font-semibold max-w-[105px]" :title="$t('usercenter.promotion.button3')">{{$t('usercenter.promotion.button3')}}</span>
                        </div>
                    </a-tooltip>
                    <div class="w-[306px] h-[52px] rounded-[12px] bg-[white] border-1 border-[#2967B2] flex items-center pl-[20px]">
                        <span class="text-[#18181B] text-[17px] inter_font">{{`https://www.iploonp.com/register?inviteCode=${userStore.userInfo?.inviteCode}`}}</span>
                    </div>
                </div>
                <div class="w-full pt-[18px]">
                    <span class="text-[14px] pingfang_font text-[#666666]">{{ $t('usercenter.promotion.tip5') }}</span>
                </div>
            </div>
        </div>
        <div class="h-full overflow-auto pl-[20px]" style="width: calc( 100% - 492px );">
            <div class="w-full">
                <span class="text-[#000000] text-[32px] big_font leading-[32px]">{{$t('usercenter.promotion.subtitle2')}}</span>
            </div>
            <div class="w-full pt-[13px]">
                <span class="text-[#666666] text-[18px] pingfang_font font-medium max-w-[428px]">{{$t('usercenter.promotion.tip6')}}</span>
            </div>
            <div class=" w-full promotion_table pl-[32px] pr-[32px] bg-[white] mt-[20px] min-h-[700px]">
                <div class="w-full pb-[12px] ">
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
    </div>
</template>
<script setup lang="ts">
    import copy from 'res@/usercenter/promotion/copy.svg'
    import PaginationComponent from 'basic@/components/PaginationComponent.vue'
    import useStore from 'store@/user'
    import { GetInviteRecord,withdraw, GetList } from 'api@/invite'
    import { ref, reactive, onMounted, computed } from 'vue'
    import { useI18n } from 'vue-i18n';
    import { Modal } from 'ant-design-vue'
    const { t } = useI18n();
    const promotionNum = ref(0)
    const userStore = useStore()
    const open = ref(false)
    const open2 = ref(false)
    const params = reactive({
        total: 0,
        pageSize: 10,
        current: 1,
        keyword:''
    })
    const tableParams = reactive<{tableDatas:any[], loading:boolean}>({
        tableDatas: [],
        loading: false
    })
    const columns = computed(() => {
        return  [
        {
                title: t('usercenter.promotion.column1'),
                dataIndex: 'id',
                key: 'id',
                align:'center',
                ellipsis: true,
                width:'200px'
            },
            {
                title: t('usercenter.promotion.column2'),
                dataIndex: 'orderName',
                key: 'orderName',
                align:'center',
                ellipsis: true,
                width:'200px'
            },
            {
                title: t('usercenter.promotion.column3'),
                dataIndex: 'commissionAmount',
                key: 'commissionAmount',
                align:'center',
                ellipsis: true,
                width:'100px'
            },
            {
                title: t('usercenter.promotion.column4'),
                dataIndex: 'sysCreateTime',
                key: 'sysCreateTime',
                align:'center',
                ellipsis: true,
                width:'100px'
            }
        ];
    })
    let interval:any
    const onCpoyInvitecode = (str:string|undefined, callback:Function) => {
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
        // interval && clearTimeout(interval)
        interval = setTimeout(() => {
            callback(false)
        }, 1000);
    } 
    const onCurrentChange = (num:number) => {
        params.current = num
        loadLis()
    }
    const onSizeChange = (num:number,size:number) => {
        params.current = num
        params.pageSize = size
        loadLis()
    }
    onMounted(() => {
        loadRecord()
        loadLis()
    })  
    const loadRecord = () => {
        GetInviteRecord()
        .then((res:any) => {
            promotionNum.value = res.body.beWithdrawableCommission
        })
    }
    const loadLis = () => {
        tableParams.loading = true
        GetList({
            PageNo: params.current,
            PageSize: params.pageSize
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
    const onOpenModal = (num:number, str:string) =>{
        Modal.info({
            title: str,
            centered: true,
            onOk: () => {
                withdraw({
                    withdrawWay:num
                })
            }
        })
    }
</script>
<style lang="less">
    .promotion_box {
        background-image: url('res@/usercenter/promotion/box.svg');
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
<style lang="less">
    .promotion_table {
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