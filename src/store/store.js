import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { httpInstance } from '@/utils/request.js'
let store = new Vuex.Store({ //Store S大写
    state: {
        catagoryData: {}
    },
    mutations: {  //唯一一个修改state的值
        updateList(state, payload) {
            let o ={...state.catagoryData}
            o[payload.id] = payload.data.secondLevelCategories 
            state.catagoryData = o;

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
        }
    },
    getters: {},
    modules: {}

})
store.subscribe(()=>{
    console.log(store.state.catagoryData)
})
export default store