import Vue from 'vue'
import axios from 'axios'
//console.log(process.env.NODE_ENV)
//测试服务器
const tesURL='http://localhost:3000'
//线上服务器
const onlineURL='http:m.jd.com'
let httpInstance = axios.create({
    header:{
       'Content-Type':'application/json'
       //"Content-Type":"application/x-www-form-urlencoded"
       

    },
    baseURL:process.env.NODE_ENV==='development'?tesURL:onlineURL
})
//request请求
httpInstance.interceptors.request.use((config)=>{
    return config
},(err)=>{
    console.log(err)
})
//response响应
httpInstance.interceptors.response.use((response)=>{
    if(response.status === 200){
        return response.data
    }else{
        return response
    }
})
export {httpInstance}
export default{
    install(Vue){
        Object.defineProperty(Vue.prototype,'$http',{
            value:httpInstance
        })
    }
}
