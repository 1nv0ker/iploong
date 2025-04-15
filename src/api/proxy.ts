import axios from 'axios'
const BASE_MODULE = `/api/ProxyLogic`

export function GetBandwidth() {
    return axios.get(`${BASE_MODULE}/BandwidthAnalysis`)
}

//获取代理配置
export interface configData {
    userName:string|undefined
}

export function GetProxyConfig(params:configData) {
    return axios.get(`${BASE_MODULE}/GetProxyConfig`, {
        params: params
    })
}

//手动切换为是
export interface generateData {
    KeyName?:string,
    Num?:string,
    Country?:string,
    State?:string,
    City?:string,
    SessionTime?:string,
    AutoSwitch?:string,
    Format?:string
}

export function GenerateApiWhenEnable(params:generateData) {
    return axios.get(`${BASE_MODULE}/GenerateWhenEnableAutoSwitch`, {
        params:params
    })
}

export function GenerateApiLink(params:any, type:boolean) {
    let link:string = ''
    for (let key in params) {
        if (params[key]!==undefined) {
            link = link + key + '='+ params[key] + "&"
        }
    }
    let apiurl = '';
    if (type) {
        apiurl = 'GenerateWhenEnableAutoSwitch'
    } else {
        apiurl = 'Generate'
    }
    return  axios.defaults.baseURL + `${BASE_MODULE}/${apiurl}?`+link.slice(0, -1)
}