import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
    
    faLocationDot,
    faPhone,
    faUserSecret,

} from '@fortawesome/free-solid-svg-icons';

import { faFacebookF, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'



library.add(
    faUserSecret,
    faLocationDot,
    faPhone,
    faFacebookF,
    faTelegram,
    faInstagram
    )

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


