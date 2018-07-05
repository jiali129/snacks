<template>
    <div class="list">
        <i :class="checkedClass" @click="flag=!flag"></i>
        <img :src="data.imageurl" alt="" />
        <div class="dataCar">
            <p class="text">{{data.wname}}</p>
            <div class="ditil">
                <b>￥ {{data.jdPrice}}</b>
                <span @click="decrement">-</span>
                <span>{{data.count}}</span>
                <span @click="increment">+</span>
            </div>
        </div>
    </div>
</template>
<script>
import { getCookie, bus } from "../../utils/utils.js";
export default {
    props: {
        data: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            flag: false
        };
    },
    mounted() {
        bus.$on("selected-all", selected => {
            this.flag = selected;
        });
    },
    computed: {
        checkedClass() {
            //前面的选中非选中
            let str = "iconfont ";
            return this.flag ? str + "icon-webicon19" : str + "icon-webicon206";
        }
    },
    watch: {
        flag(n, o) {
            bus.$emit("goodsChecked", {
                //自定义事件挂载到bus实例上
                name: this.data.wname,
                price: n ? this.data.count * this.data.jdPrice : 0
            });
        },
        data(n, o) {
            bus.$emit("goodsChecked", {
                //自定义事件挂载到bus实例上
                name: this.data.wname,
                price: n ? this.data.count * this.data.jdPrice : 0
            });
        }
    },
    methods: {
        decrement() {
            // 点击减减
            //子组件不能直接修改父组件的值
            
            let count = this.data.count;
            if (count - 1 <= 0) {
                count = 1;
            }
            this.$http
                .post("/api/cart/count", {
                    token: getCookie("token"),
                    count: count - 1,
                    goodsname: this.data.wname
                })
                .then(res => {
                    //console.log(res)
                    if (res.code == 1) {
                        //bus.$emit('updatas')
                        this.$store.dispatch("fetchCartList"); //用到了vueX
                    }
                });
        },
        increment() {
            //点击加加
            //console.log(this.data.wname)
            let count = this.data.count;
            count + 1 > 10 && (count = 9);
            this.$http
                .post("/api/cart/count", {
                    token: getCookie("token"),
                    count: count + 1,
                    goodsname: this.data.wname
                })
                .then(res => {
                    if (res.code == 1) {
                        this.$store.dispatch("fetchCartList");
                    }
                });
        }
    }
};
</script>
<style scoped>
.list {
    width: 100%;
    display: flex;
    background: #fff;
    margin-bottom: 0.2rem;
}
.list i {
    font-size: 0.6rem;
    margin-top: 0.5rem;
    /*vertical-align: middle;竖向居中 */
}
.list img {
    width: 25%;
    height: 25%;
    margin: 0.1rem 0.2rem;
}

.text {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    padding-right: 0.3rem;
    box-sizing: border-box;
    line-height: 0.6rem;
    margin-bottom: 0.2rem;
}
.ditil b {
    color: red;
}
.ditil span {
    border: 0.003rem solid #ccc;
    padding: 0.06rem 0.3rem;
    margin-left: 0.1rem;
}
</style>


