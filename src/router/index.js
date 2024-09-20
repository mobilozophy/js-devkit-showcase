import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import HospitalityDemo from '../views/use-cases/HospitalityDemo.vue'
import GettingStarted from '../views/GettingStarted.vue'
import Forms from '../views/features/Forms.vue'
import SmsOptIn from '../views/features/SmsOptIn.vue'
import Coupons from '../views/features/Coupons.vue'
import Loyalty from '../views/features/Loyalty.vue'
import Analytics from '../views/features/Analytics.vue'
import Events from '../views/features/Events.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/use-cases/hospitality', name: 'HospitalityDemo', component: HospitalityDemo },
  { path: '/getting-started', name: 'GettingStarted', component: GettingStarted },
  { path: '/features/forms', name: 'Forms', component: Forms },
  { path: '/features/sms-opt-in', name: 'SmsOptIn', component: SmsOptIn },
  { path: '/features/coupons', name: 'Coupons', component: Coupons },
  { path: '/features/loyalty', name: 'Loyalty', component: Loyalty },
  { path: '/features/analytics', name: 'Analytics', component: Analytics },
  { path: '/features/events', name: 'Events', component: Events },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach(() => {
  // Ensure DOM update before Mobilozophy reinitialization
  nextTick(() => {
    if (window.mzcapi?.triggerPageRefresh) {
      window.mzcapi.triggerPageRefresh()
    }
  })
})

export default router