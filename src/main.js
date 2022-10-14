import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import Tooltip from 'primevue/tooltip'
import 'primeflex/primeflex.min.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '@/assets/css/helper.css'

import '@/config/firebase.config'

import 'primevue/resources/themes/saga-blue/theme.css'
/* PrimeVue components import */
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import Skeleton from 'primevue/skeleton'
import './registerServiceWorker'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(PrimeVue)
app.use(ConfirmationService)
app.directive('tooltip', Tooltip)

/* PrimeVue components */
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Card', Card)
app.component('Skeleton', Skeleton)

app.mount('#app')
