import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/fullscreen'
    }, {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/fullscreen",
                name: "fullscreen",
                meta: {
                    title: '大屏展示'
                },
                component: () => import ( "../views/FullScreen.vue")
            },            {
                path: "/cesium",
                name: "cesium",
                meta: {
                    title: 'Cesium'
                },
                component: () => import ( "../views/Cesium.vue")
            }, {
                path: "/table",
                name: "basetable",
                meta: {
                    title: '表格'
                },
                component: () => import ("../views/BaseTable.vue")
            },{
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心'
                },
                component: () => import ('../views/User.vue')
            }
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/Login.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue3-admin`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;