import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.min.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '@/assets/css/helper.css'
import '@/config/firebase.config'

import 'primevue/resources/themes/saga-blue/theme.css'

/* PrimeVue components import */
import Button from 'primevue/button'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(PrimeVue)

/* PrimeVue components */
app.component('Button', Button)

app.mount('#app')
