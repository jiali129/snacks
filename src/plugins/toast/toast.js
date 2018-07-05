/**
 * @actionName Toast
 * 功能，提示条
 * 
 * @component <Toast></Toast> 在制定容器内准备toast组件
 * 
 * @param msg string/component/node
 * 
 * @callback active 显示提示信息
 *      @param msg string
 *      @param options config
 * 
 * @instance $toastBus toast组件专用的全局bus
 * 
 * @event toast 显示提示信息
 * 
 */
import './toast.css'
import ToastItem from './toast.vue'//静态模块，优先加载

let Toast = {
    install(Vue, options) {
        const toastBus = new Vue({})
        //console.log(options)
        Object.defineProperty(Vue.prototype,"$toastBus",{
            value:toastBus
        })
        //全剧组建
        Vue.component('Toast', {
            template:`
            <div class="toast">
                <transition-group name="toast">
                    <ToastItem v-for="(x,v) in msg" :key="v">{{x}}</ToastItem>
                </transition-group>
            </div>
            `,
            data() {
                return {
                    msg: [],
                    timeout: options.timeout
                }
            },
            created(){
                //import ToastItem from './toast.vue'
            },
            components:{
                ToastItem
            },
            methods: {
                active(msg, options) {
                    if (options) {
                        this.timeout = options.timeout
                    }
                    this.msg.push(msg)
                    this.isActive = true
                }
            },
            mounted(){
                toastBus.$on('toast',(msg)=>{
                    this.active(msg)
                })
            }
        })
    }
}

//default 需要变量定义好之后才可以使用
export default Toast