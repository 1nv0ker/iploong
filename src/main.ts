import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'api@/interceptor'
import router from 'router@/index'
import 'animate.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
