import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/home.vue'
import About from '../views/about.vue'
import tab1 from '../views/tab1.vue'
import tab2 from '../views/tab2.vue'
export default new VueRouter({
    mode: 'history',
    base: 'test',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/tab1',
            component: tab1
        },
        {
            path: '/tab2',
            component: tab2
        }
    ]
})