import './assets/main.scss'
import feather from 'feather-icons'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(feather)

app.mount('#app')
