import Vue from 'vue'
import App from './App.vue'

//引入路由配置模块
import router from './router/index'
//引入iconfont样式
import './assets/font/iconfont.css'
//引入数据请求模块
import http from '@/utils/request.js'
Vue.use(http)
//lazyload plugin
import lazyload from 'vue-lazyload'
//引入VueX
import Store from '@/store/store.js'
Vue.use(lazyload, {
  loading: '/src/assets/loading1.gif'
})
//引入验证组件
import VueLidate from 'vuelidate'
Vue.use(VueLidate)
new Vue({
  el: '#app',
  router,
  store: Store,
  render: h => h(App)
})
