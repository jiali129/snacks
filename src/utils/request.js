import Vue from 'vue'
import axios from 'axios'
//console.log(process.env.NODE_ENV)
//测试服务器
const tesURL='http://192.168.43.15:3000'
//线上服务器
const onlineURL='http://192.168.173.1:3000'
let httpInstance = axios.create({
    header:{
       'Content-Type':'application/json'
       //"Content-Type":"application/x-www-form-urlencoded"
    },
    baseURL:tesURL
    // baseURL:process.env.NODE_ENV==='production'?onlineURL:tesURL
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

const anotherInstance = axios.create({})
export {httpInstance,anotherInstance}
export default{
    install(Vue){
        Object.defineProperty(Vue.prototype,'$http',{
            value:httpInstance
        })
    }
}
