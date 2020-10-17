import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../src/components/home/Home"
import About from "../src/components/home/About"
import Root from "../src/components/app/App"
import Sale from "../src/components/dser/SaleGraph"
import Signup from "../src/components/user/Signup"
import Login from "../src/components/user/Login"
import Edit from "../src/components/user/Edit"
import Account from "../src/components/user/Account"


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: "/",
            component: Root
        },
        {
            path: '/sale',
            name: "Sale",
            component: Sale
        },
        {
            path: '/about',
            component: About,
            name: 'about',
        },
        {
            path: '/user',
            component: Login
        },
        // {
        //     path: '/user',
        //     component: Signup
        // },
        // {
        //     path: '/user',
        //     component: Edit
        // },
        {
            path: '/user',
            component: Account
        }
    ]

});