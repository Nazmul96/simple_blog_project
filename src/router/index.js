import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import BlogListPage from '../components/BlogListPage.vue'
import BlogDetailsPage from '../components/BlogDetailsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/post/:id',
      name: 'Blog',
      component: BlogListPage,
    },
    {
      path: '/blog-details/:id',
      name: 'BlogDetails',
      component: BlogDetailsPage,
    }
  ]
})

export default router
