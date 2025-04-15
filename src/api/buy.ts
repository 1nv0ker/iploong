import axios from 'axios'
const BASE_MODULE = `/api/ProxyBuy`


export interface rechargeData {
    txid:string
}

export function UsdtRecharge(params:rechargeData) {
    return axios.get(`${BASE_MODULE}/UsdtRecharge`, {
        params: params
    })
}
//动态购买

export interface dyBuyData {
    Quantity:number,
    PromotionCode?:string,
    paymentType:number
}

export function DynamicResidenceRecharge(data:dyBuyData) {
    return axios.post(`${BASE_MODULE}/DynamicResidenceRecharge`, data)
}

//静态购买
export interface purchaseItem {
    "ispType": number,//0双ISP，1单ISP
    "ispLocation":string,//ISP位置，数据库中现有测试数据：双isp有us-fl，单ISP有gb-ld
    "purchaseMonth": number,//购买月份，一季度你就传3，一年就传12，一个月就传1，二个月就传2，半年就是6
    "purchaseNum": number//购买条数
}
export interface staticPackageData {
    purchaseIspInfos: purchaseItem[],
    paymentType:number,
    PromotionCode?:string
}
export function StaticPackageRecharge(datas:staticPackageData) {
    return axios.post(`${BASE_MODULE}/StaticResidenceRecharge`, datas)
}
