const routers = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/login',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['./views/account/login.vue'], resolve)
    },
    {
        path: '/register',
        meta: {
            title: '注册'
        },
        component: (resolve) => require(['./views/account/register.vue'], resolve)
    },
    {
        path: '/userinfo',
        meta: {
            title: '用户中心'
        },
        component: (resolve) => require(['./views/account/userinfo.vue'], resolve)
    }
];
export default routers;