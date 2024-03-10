import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/pays',
      name: 'Pays',
      component: () => import('../views/Pays.vue')
    },
    {
      path: '/FichePays/:id',
      name: 'FichePays',
      component: () => import('../views/FichePays.vue')
    },
    {
      path: '/recherche',
      name: 'Recherche',
      component: () => import('../views/Recherche.vue')
    },
    {
      path: '/fournisseurs',
      name: 'Fournisseurs',
      component: () => import('../views/Fournisseurs.vue')
    }
  ]
})

export default router
