import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../src/components/home/Home"
import About from "../src/components/home/About"
import Dser from "../src/components/dser/Dser"
import Sale from "../src/components/dser/SaleGraph"
import Signup from "../src/components/user/Signup"
import Login from "../src/components/user/Login"
import Edit from "../src/components/user/Edit"
import Account from "../src/components/user/Account"


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
    //     {
    //     path: '/',
    //     component: Home
    // }, 
    {
        path: '/dser',
        component: Dser
    },
    {
        path: '/sale',
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
}]
});