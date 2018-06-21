import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
 import Home from '../views/home/home'
 import Index from '../views/home/index'
 import Classify from '../views/classify/classify'
 import Search from '../views/classify/search'
 import Shopping from '../views/home/shopping'
 import Mine from '../views/home/mine'
 import Login from '../views/login/login'
 import Detail from '../views/home/detail'
 import Register from '../views/register/register'
 
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
            path:'/detail',
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