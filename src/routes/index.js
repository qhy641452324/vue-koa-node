import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/home.vue'
import About from '../views/about.vue'
import tab1 from '../views/tab1.vue'
import tab2 from '../views/tab2.vue'
import childPage from '../views/child.vue'

let routes = [
    {
        path: '/',
        // name:'home', //命名路由 <router-link :to="{ name: 'home', params: { userId: 123 }}">User</router-link>
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About,
        children: [
            {
                path: 'child',
                component: childPage
            }
        ]
    },
    {
        path: '/tab1',
        component: tab1
    },
    {
        path: '/tab2',
        component: tab2
    }
];

let router = new VueRouter({
    mode: 'history',
    base: 'test',
    routes: routes
})

//设置全局守卫  ：https://www.jianshu.com/p/06d08ea39e31
router.beforeEach((to, from, next) => {
    console.log(to)  
    console.log(from)
    // to and from are both route objects. must call `next`.
    next();//next必须 确保要调用 next 方法，否则钩子就不会被 resolved。
})
router.beforeResolve((to, from, next) => {
    // to and from are both route objects. must call `next`.
    next()
})
router.afterEach((to, from) => {
    // to and from are both route objects.
})


export default router;