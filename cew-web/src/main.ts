import { createApp } from 'vue'
import { createPinia } from 'pinia'
import RU from './lang/ru'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.Text = RU

app.use(createPinia())
app.use(router)

app.mount('#app')
