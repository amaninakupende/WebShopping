import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect:'/home',
    },
    {
        path: '/home',
        component: () => import('../pages/Home/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login/index.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router