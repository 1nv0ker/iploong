import axios from 'axios'
const BASE_MODULE = `/api/InviteHistory`
// const BASE_MODULE2 = `/api/WithdrawHistory`
export function GetInviteRecord() {
    return axios.get(`${BASE_MODULE}/InvitationRecordAnalysis`)
}

export interface WithdrawData {
    withdrawWay:number
}

export function withdraw(params:WithdrawData) {
    return axios.get(`${BASE_MODULE}/Withdraw`, {
        params: params
    })
}

export interface WithdrawList {
    Status?:number,
    PageNo:number,
    PageSize:number
}

export function GetList(params:WithdrawList) {
    return axios.get(`${BASE_MODULE}/PageList`, {
        params: params
    })
}