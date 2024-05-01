import { createRouter, createWebHistory } from 'vue-router'
import AllStudent from '../components/AllStudent.vue'
import AddView from '../views/AddView.vue'
import UpdateView from '@/views/UpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'allstudent',
      component: AllStudent
    },
    {
      path: '/add',
      name: 'adview',
      component: AddView
    },
    {
      path: '/updateview',
      name: 'updateview',
      component: UpdateView
    },
    {
      path: '/updateview/:id',
      name: 'updateview',
      component: UpdateView
    }
  ]
})

export default router
