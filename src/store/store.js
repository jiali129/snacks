import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { httpInstance } from '@/utils/request.js'
import router from '@/router/index'
import { getCookie } from "@/utils/utils.js";
//是利用Vuex来存储数据
let store = new Vuex.Store({ //Store S大写
    state: {
        catagoryData: {},
        cartList:[]
    },
    mutations: {  //唯一一个修改state的值
        updateList(state, payload) {
            let o ={...state.catagoryData}
            o[payload.id] = payload.data.secondLevelCategories 
            state.catagoryData = o;

        },
        updateCartList(state,payload){
           state.cartList = payload
        }

    },
    actions: {
        fetchList({ state,commit }, cid) {
            if(!state.catagoryData[cid]){
                httpInstance.get(`/api/catagory?cid=${cid}`).then(res => {
                    // console.log(res);
                    commit('updateList',{
                        id:cid,
                        data:res
                    })
                    //this.shoplist=res.secondLevelCategories
                 });
            }          
        },
        fetchCartList({commit}){
           
            //请求购物车列表
            httpInstance.post("/api/goodslist", {
                    token: getCookie("token")
                }).then(res => {
                    // console.log(res)
                    // this.data=res.data
                    if (res.code == 0) {
                     if (confirm("您已经登录超时")) {
                            router.push({
                                name: "login",
                                query: {
                                    from: "shopping"
                                }
                            });
                        } else {

                        }
                    } else {
                        commit('updateCartList',res.data)
                        //this.data = res.data;
                    }
                });
            
        }
    },
    getters: {},
    modules: {}

})
store.subscribe(()=>{
    console.log(store.state.catagoryData)
})
export default store