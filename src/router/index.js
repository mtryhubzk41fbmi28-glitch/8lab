import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contacts from '../pages/Contacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
