import axios from 'axios'
const BASE_MODULE = `/api/ProxyLogic`

export function GetBandwidth() {
    return axios.get(`${BASE_MODULE}/BandwidthAnalysis`)
}