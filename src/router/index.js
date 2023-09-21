import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ContactPage from '../components/ContactPage.vue'
import AboutPage from '../components/AboutPage.vue'
import ProductDetails from '../components/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/product-details/:id',
      name: 'ProductDetails',
      component: ProductDetails,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
  ]
})

export default router
