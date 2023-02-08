import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect:'/home',
    },
    {
        path: '/home',
        component: () => import('../pages/Home/index.vue'),
        meta: { show: true }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login/index.vue'),
        meta: { show: false }
        
    },
    {
        path: '/search/:keyword?',
        name: 'search',
        component: () => import('../pages/Search/index.vue'),
        meta: { show: true }
    },
    {
        path: '/detail/:goodsId?',
        name: 'detail',
        component: () => import('../pages/Detail/index.vue'),
        meta: { show: true }
    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: () => import('../pages/AddCartSuccess/index.vue'),
        meta: { show: true }
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        component: () => import('../pages/shopCart/index.vue'),
        meta: { show: true }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/register/index.vue'),
        meta: { show: false }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router