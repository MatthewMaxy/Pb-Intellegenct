import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Decision from '../views/Decision.vue'
import File from '../views/File.vue'
import Company from '../views/Company.vue'
import Valuation from '../views/Valuation.vue'

// 1. 创建路由组件
Vue.use(VueRouter)

// 2. 将路由与组件映射
const routes = [
    {
        path:'/',
        component:Main,
        redirect:'/home',
        children:[
            { path: 'home', name:'home', component: Home, meta:{keepAlive:true}},  //首页
            { path: 'decision', component: Decision }, 
            { path: 'file', component: File }, 
            { path: 'company', component: Company }, 
            { path: 'valuation', component: Valuation}
        ]
    }, 
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/test',
        name:'test',
        component:Test
    }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router