import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto.vue';
import Servicios from '../views/Servicios.vue';
import Nosotros from '../views/Nosotros.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path:'/servicios',
    name: 'Servicios',
    component: Servicios
  },
  {
    path:'/nosotros',
    name: 'Nosotros',
    component: Nosotros
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
