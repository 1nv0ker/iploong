import axios from 'axios'
const BASE_MODULE = `/api/SysUser`


export interface certificationData {
    RealName:string,
    IdCard:string
}

export function GetCertification(data:certificationData) {
    return axios.post(`${BASE_MODULE}/GetCertification`, data)
}

export interface cer_params {
    bizToken:string
}

export function DoCertification(params:cer_params) {
    return axios.get(`${BASE_MODULE}/DoCertification`, {
        params,
        headers: {
            'extra': true
        }
    })
}