import axios from 'axios'
const BASE_MODULE = `/api/Order`

export interface orderData {
    Status?:number,
    KeyWord?:string,
    PageNo:number,
    PageSize:number,
    SearchBeginTime?:string,
    SearchEndTime?:string
}

export function GetOrder(params:orderData) {
    return axios.get(`${BASE_MODULE}/PageList`, {
        params: params
    })
}