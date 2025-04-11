import axios from 'axios'
const BASE_MODULE = `/api/SysLogin`


//发送验证码
export interface sendCodeData {
    email:string,
    smsType?:string
}

export function SendCode(data:sendCodeData) {
    return axios.post(`${BASE_MODULE}/SendSes`, data)
}

//注册
export interface registerData {
    account?:string,
    email:string,
    tel?:string,
    verifyCode:string,
    passWord:string,
    beInviteCode?:string
}

export function Register(data:registerData) {
    return axios.post(`${BASE_MODULE}/Register`, data)
}
//登录
export interface loginData {
    account?:string,
    email:string,
    tel?:string,
    loginType:string,
    passWord:string,
    // beInviteCode?:string,
    verifyCode?:string
}

export function Login(data:loginData) {
    return axios.post(`${BASE_MODULE}/Login`, data)
}
//更改密码
export interface changePasswordData {
    newPassWord:string,
    verifyCode:string,
    // email?:string
}

export function ChangePass(data:changePasswordData) {
    return axios.post(`${BASE_MODULE}/ResetPassWord`, data)
}
//找回密码
export interface recoveryPasswordData {
    verifyCode:string,
    newPassword:string,
    tel?:string,
    email:string
}

export function RecoveryPass(data:recoveryPasswordData) {
    return axios.post(`${BASE_MODULE}/PasswordRecovery`, data)
}
//修改信息
export interface modifyData {
    name:string,
    remark:string,
    tel?:string
}
export function UpdateInfo(data:modifyData) {
    return axios.post(`${BASE_MODULE}/UpdateUserInfo`, data)
}
//获取登录信息
export function GetUserInfo() {
    return axios.get(`${BASE_MODULE}/GetUserInfo`)
}
