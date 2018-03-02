import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import ApiServicePlugin from './libs/service.plugin';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(ApiServicePlugin);
// 路由配置
const RouterConfig = {
    mode: 'hash',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
