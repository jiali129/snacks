import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//底部的几个主页面
 import Index from '../views/home/index'
 import Home from '../views/home/home'
 //首页内物品的详情
 import Detail from '../views/home/detail'
 import Shopping from '../views/home/shopping'
 import Mine from '../views/home/mine'
//分类的页面
 import Classify from '../views/classify/classify'
 //搜索页面
 import Search from '../views/classify/search'
 //登录页面
 import Login from '../views/login/login'
 //注册页面
 import Register from '../views/register/register'
 //这是消息页面
 import Information from '../views/information/information'
 //这是mine页面里面跳转的内容
 import Account from '../views/details/account/account'
 import Top from '../views/details/account/top'
 import Withdraw from '../views/details/account/withdraw'
 import Order from '../views/details/order/order'
 
 import Server from '../views/details/server/server'
 import Site from '../views/details/site/site'
 //引用
 import {getCookie} from '@/utils/utils'

 let router=new Router({
     mode:'history',
     routes:[
         {
           path:'/',
           redirect:'/index/home'
         },
         {
             path:'/index',
             name:'index',
             component:Index,
             children:[
                {
                    path:'home',
                    name:'home',
                    component:Home
                },
                {
                    path:'classify',
                    name:'classify',
                    component:Classify
                },
                {
                    path:'shopping',
                    name:'shopping',
                    component:Shopping
                },
                {
                    path:'mine',
                    name:'mine',
                    component:Mine
                }
             ]
         },
         {
            path:'/register',
            name:'register',
            component:Register
        },
        {
            path:'/detail', //首页内物品的详情
            name:'detail',
            component:Detail
        },
        {
            path:'/search',
            name:'search',
            component:Search
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/information',
            name:'information',
            component:Information
        },
        {
            path:'/account',
            name:'account',
            component:Account
        },
        {
            path:'/server',
            name:'server',
            component:Server
        },
        {
            path:'/site',
            name:'site',
            component:Site
        },
        {
            path:'/top',
            name:'top',
            component:Top
        },
        {
            path:'/withdraw',
            name:'withdraw',
            component:Withdraw
        },
        {
            path:'/order',
            name:'order',
            component:Order
        }
     ]
 })
 //导航守卫
 router.beforeEach((to,from,next)=>{
        if(to.name=='mine' || to.name=='shopping'){
            let token= getCookie('token')
            //console.log(token)
            if(!token){
                next({name:'login',query:{from:to.name}})
            }else{
                next()
            }
        }else{
            next()
        }
 })
 export default router