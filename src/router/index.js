import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect:'/home',
    },
    {
        path: '/home',
        name: 'home',
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
        path: '/search',
        name: 'search',
        component: () => import('../pages/Search/index.vue'),
        meta: { show: true },
        props: {}
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
    {
        path: '/trade',
        name: 'trade',
        component: () => import('../pages/trade/index.vue'),
        meta: { show: false }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
router.beforeEach((to, from) => {
    let token = ""
    if(window.localStorage.getItem('user')) {
        token = JSON.parse(window.localStorage.getItem('user')).token;
    }
    if(token) {   //已登录 无法进入登录/注册页面
        if(to.path == '/login' || to.path == '/register') {
            return '/home'
        }
    } else {      //未登录 无法进入订单管理
        if(to.path == '/trade') {
            return '/login'
        }
    }
})
export default router