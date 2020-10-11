import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../src/components/home/Home"
import User from "../src/components/user/User"



Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/user',
        component: User
    },
{
    path: '/login',
    component: Login
}]
});