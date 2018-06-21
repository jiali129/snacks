<template>
    <div class="shopcart">
        <div class="header">
            <span style="font-size:22px" @click="gohome">＜</span>
            <span>购物车</span>
            <span @click="eidtr">{{eidt}}</span>
            <i class="iconfont icon-xiaoxi"></i>
        </div>
        <div class="content">
            <div class="list" v-show="$store.state.cartList.length==0">空空如也~</div>
            <shopcar v-on:updatas='fetchList' v-for="(val,idx) in $store.state.cartList" :key='idx' v-bind:data='val'></shopcar>
        </div>
        <div class="close">
            <span>
                <i :class="checkedClass" @click='selectedAll'></i>全选
            </span>
            <span>合计： $
                <b style="color:red">{{total}}</b>
            </span>
            <span class="closeK" @click="closeK">{{type}}</span>
        </div>
    </div>
</template>
<script>
import { getCookie, bus } from "../../utils/utils.js";
import shopcar from "@/components/shopcar/shopcar";
export default {
    data() {
        return {
            data: [],
            list: {}, //求和的时候用的
            flag: false,
            total: 0,
            type: "结算",
            eidt: "编辑"
        };
    },

    created() {
        this.$store.dispatch("fetchCartList");
    },
    mounted() {
        //从来没有this.$on的写法 v-on:
        bus.$on("goodsChecked", data => {
            console.log(data);
            this.list[data.name] = data.price;
            this.sumup();
        });
    },
    computed: {
        checkedClass() {
            let str = "iconfont ";
            return this.flag ? str + "icon-webicon19" : str + "icon-webicon206";
        }
    },
    methods: {
        eidtr() {
            if (this.eidt == "编辑") {
                this.type = "删除";
                this.eidt = "完成";
            } else {
                this.type = "结算";
                this.eidt = "编辑";
            }
        },
        closeK() {
            if (this.type == "结算") {
                //跳转到支付平台
            } else {
                console.log(this.$store.state.cartList)
                if (confirm("您确定要删除吗？")) {
                    let arr=[]
                    arr.push(this.$store.state.cartList);
                    this.$http.post("/api/cart/del", {
                            token: getCookie("token"),
                            goodsname: arr
                        }).then(res => {
                            console.log(res);
                    });
                        
                }
            }
        },
        fetchList() {
            //请求购物车列表
            this.$http
                .post("/api/goodslist", {
                    token: getCookie("token")
                })
                .then(res => {
                    if (res.code == 0) {
                        if (confirm("您已经登录超时")) {
                            this.$router.push({
                                name: "login",
                                query: {
                                    from: "shopping"
                                }
                            });
                        } else {
                        }
                    } else {
                        this.data = res.data;
                    }
                });
        },
        sumup() {
            //console.log(Object.values(this.list)) ;
            this.total = Object.values(this.list).reduce((init, item) => {
                return init + item;
            }, 0);
        },
        selectedAll() {
            this.flag = !this.flag;
            bus.$emit("selected-all", this.flag);
        },
        gohome() {
            this.$router.push({
                name: "home"
            });
        }
    },
    components: {
        shopcar
    }
};
</script>
<style scoped>
.shopcart {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}
.header {
    height: 40px;
    line-height: 40px;
    display: flex;
    background: #fff;
    border-bottom: 1px solid #ccc;
}
.header span {
    flex: 1;
}
.header span:nth-child(2) {
    text-align: center;
}
.header span:nth-child(3) {
    text-align: right;
}
.header i {
    display: inline-block;
    width: 0.6rem;
    text-align: center;
}
.content {
    flex: 1;
    overflow-y: scroll;
}
.close {
    width: 100%;
    height: 1.1rem;
    line-height: 1rem;
    background: #fff;
}
.close span {
    display: inline-block;
    width: 32%;
}
.close span i {
    font-size: 0.6rem;
}
.closeK {
    display: inline-block;
    width: 2rem;
    background: salmon;
    text-align: center;
    color: #fff;
}
</style>