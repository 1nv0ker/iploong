import axios from 'axios'
const BASE_MODULE = `/api/ProxyLog`

export interface listdata {
    PageNo:number,
    PageSize:number
}

export function GetList(parmas:listdata) {
    return axios.get(`${BASE_MODULE}/PageList`, {
        params: parmas
    })
}

export interface logdata {
    ip:string
}

export function GetInfo(parmas:logdata, controller:AbortController) {
    return axios.get(`${BASE_MODULE}/GetIpInfo`, {
        params:parmas,
        signal: controller.signal
    })
}