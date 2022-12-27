import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '/src/assets/index.css'
import router from './router/index'

createApp(App).use(router).mount('#app')

import '../node_modules/bootstrap/dist/js/bootstrap'
