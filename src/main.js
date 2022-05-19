import { createApp, VueElement } from 'vue'
import App from './App.vue'
import Router from './router.js'
import Store from './store.js'

createApp(App).use(Router).use(Store).mount('#app')
