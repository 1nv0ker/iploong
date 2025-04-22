import axios from 'axios'
const BASE_MODULE = `/api/UserIsps`

export function GetAnalysis() {
    return axios.get(`${BASE_MODULE}/Analysis`)
}

//已购代理
export interface proxyData {
    KeyWord?:string,
    PageNo:number,
    PageSize:number,
    SearchBeginTime?:string,
    SearchEndTime?:string,
    IspLocation?:string,
    AutoRenew?:number|null,
    IspType?:number|null
}
export function GetList(params:proxyData) {
    return axios.get(`${BASE_MODULE}/PageList`, {
        params: params
    })
}

export function GetSelectList() {
    return axios.get(`${BASE_MODULE}/DropdownList`)
}