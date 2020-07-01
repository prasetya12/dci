import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Authentication from './pages/Authentication'
import Profile from './pages/Profile'



Vue.use(Router);

const router = new Router({
    mode:'history',
    routes:[
        {
            name:'login',
            path: '/',
            component:Login
        },
        {
            name:'login',
            path: '/login',
            component:Login
        },
        {
            name:'register',
            path: '/register',
            component:RegisterPage
        },
        {
            name:'authentication',
            path: '/authentication',
            component:Authentication
        },
        {
            name:'profile',
            path: '/profile',
            component:Profile
        },
    ]
})

export default router;