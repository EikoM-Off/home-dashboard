import '@/config/firebase.config'

import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import Tooltip from 'primevue/tooltip'
import BadgeDirective from 'primevue/badgedirective'
import ToastService from 'primevue/toastservice'
import 'primeflex/primeflex.min.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'animate.css'

import '@/assets/css/helper.css'

import 'primevue/resources/themes/saga-blue/theme.css'
/* PrimeVue components import */
import Button from 'primevue/button'
import SplitButton from 'primevue/splitbutton'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import Skeleton from 'primevue/skeleton'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Checkbox from 'primevue/checkbox'
import Divider from 'primevue/divider'
import PanelMenu from 'primevue/panelmenu'
import Toast from 'primevue/toast'
import CardCustom from '@/layout/CardCustom'
import Editor from 'primevue/editor'
import DataView from 'primevue/dataview'
import Dropdown from 'primevue/dropdown'
import Listbox from 'primevue/listbox'
import OverlayPanel from 'primevue/overlaypanel'

import './registerServiceWorker'

const app = createApp({
  render: () => h(App)
})
app.use(router)
app.use(store)
app.use(PrimeVue)
app.use(ConfirmationService)
app.use(ToastService)
app.directive('tooltip', Tooltip)
app.directive('badge', BadgeDirective)

/* PrimeVue components */
app.component('Button', Button)
app.component('SplitButton', SplitButton)
app.component('InputText', InputText)
app.component('Card', Card)
app.component('Listbox', Listbox)
app.component('Skeleton', Skeleton)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Checkbox', Checkbox)
app.component('Divider', Divider)
app.component('PanelMenu', PanelMenu)
app.component('Toast', Toast)
app.component('CardCustom', CardCustom)
app.component('Editor', Editor)
app.component('DataView', DataView)
app.component('Dropdown', Dropdown)
app.component('OverlayPanel', OverlayPanel)

app.mount('#app')

export default app
