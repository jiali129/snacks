import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
 import Home from '../views/home/home'
 import Index from '../views/home/index'
 import Classify from '../views/classify/classify'
 import Search from '../views/classify/search'
 import Shopping from '../views/home/shopping'
 import Mine from '../views/home/mine'
 import Detail from '../views/home/detail'
 import Register from '../views/register/register'
 

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
        }
         
     ]
 })
 export default router