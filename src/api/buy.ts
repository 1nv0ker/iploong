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