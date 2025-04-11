import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'api@/interceptor'
import i18n from 'basic@/i18n'
import router from 'router@/index'
import 'animate.css'
import store from 'store@/index'
import 'ant-design-vue/dist/reset.css'
import './custom.less'
import './echarts'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
