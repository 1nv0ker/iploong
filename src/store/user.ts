import { defineStore } from 'pinia'
import router from '../router'
import { GetUserInfo, GetIp } from 'api@/login'
interface UserInfo_data {
    email:string,
    name:string,
    remark:string,
    tel:string,
    accountBalance:number,
    isVerify:boolean,
    status:number,
    realName:string,
    idCard:string,
    inviteCode:string,
    mainKey:string,
    passWord?:string,
    usdtBalance?:number
}
const store = defineStore('users', {
    state:():{
        token:string,
        userInfo:UserInfo_data|null,
        info:any,
        showConcat: Boolean,
        myIP:String,
        openVerify: boolean
    } => {
        return {
            token: '',
            userInfo: null,
            info:null,
            showConcat: false,
            myIP:'',
            openVerify: false
        }
    },
    persist: true,
    getters: {
        getToken(state) {
            return state.token
        }
    },
    actions: {
        setToken(token:string) {
            this.token = token
        },
        async setUserInfo() {
            if (!this.token) {
                return
            }
            GetUserInfo()
            .then((res:any) => {
                // console.log('res1', res)
                this.userInfo = res.body.userInfo
                GetIp()
                .then((res:any) => {
                    this.myIP = res.body.ip+'-'+ res.body.country+'_'+res.body.city
                })
            })
            
            
        },
        isLogin() {
            return !!this.token
        },
        clearUserInfo() {
            this.userInfo = null
        },
        setOpenVerify(val:boolean) {
            this.openVerify = val
        },
        clearToken() {
            this.token = ''
        },
        logout() {
            this.token = ''
            this.userInfo = null
            router.push({path:'/login'})
        },
        //密码登录
        passwordLogin() {
            
        },
        //短信登陆
        textLogin() {

        },
        //忘记密码
        forgetPassword() {

        },
        //注册
        accountRegister() {

        }
    }
})

export default store