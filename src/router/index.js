import Index from '@/views/Index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('@/views/Cv.vue'),
      meta: {
        title: 'CV | Will Lucena'
      }
    },
    {
      path: '/projetos',
      name: 'projects',
      component: () => import('@/views/Projects.vue'),
      meta: {
        title: 'Projetos | Will Lucena'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/Blog.vue'),
      meta: {
        title: 'Blog | Will Lucena'
      }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

const DEFAULT_TITLE = 'Will Lucena'
router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE
})

export default router
