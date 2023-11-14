import './assets/main.css'
import { i18n } from '@/localization'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUp,
  faBars,
  faLocationDot,
  faMoon,
  faSun,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

library.add(
  faBars,
  faXmark,
  faInstagram,
  faLinkedin,
  faGithub,
  faArrowUp,
  faMoon,
  faSun,
  faLocationDot
)

const app = createApp(App)

app.use(router).use(i18n).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
