<template>
    <div class="mine">
        <div class='header'>
            <p>
                <span class="iconfont icon-shezhi"></span>
                <span>我的717商城</span>
                <span class="iconfont icon-xiaoxi" @click="goinformation"></span>
            </p>
            <dl>
                <dt><img src="../../assets/a3.jpg" alt=""></dt>
                <dd>反善</dd>
            </dl>
        </div>
        <div class="nav">
            <p>
                <i class="iconfont icon-tubiaozhizuomoban"></i>
                <span>我的店铺</span>
                <b>＞</b>
            </p>
            <div class="dls">
                <dl @click="payme">
                    <dd>
                        <i class="iconfont icon-daifukuan"></i>
                    </dd>
                    <dt>代付款</dt>
                </dl>
                <dl>
                    <dd>
                        <i class="iconfont icon-ziyuan"></i>
                    </dd>
                    <dt>代发货</dt>
                </dl>
                <dl>
                    <dd>
                        <i class="iconfont icon-che"></i>
                    </dd>
                    <dt>代收货</dt>
                </dl>
                <dl>
                    <dd>
                        <i class="iconfont icon-shouhou"></i>
                    </dd>
                    <dt>售后</dt>
                </dl>
                <dl>
                    <dd>
                        <i class="iconfont icon-dingdan"></i>
                    </dd>
                    <dt>我的订单</dt>
                </dl>
            </div>
            <div class="center">
                <ul class="uls">
                    <li @click="gotodetail(y.name)" v-for="(y,idx) in list" :key="idx">
                        <i class="iconfont" :class="y.icon"></i>
                        <span>{{y.Mname}}</span>
                        <b>{{y.right}}</b>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    name: "account",
                    icon: "icon-qianbao",
                    Mname: "账户余额",
                    right: "＞"
                },
                {
                    name: "site",
                    icon: "icon-map",
                    Mname: "地址管理",
                    right: "＞"
                },
                {
                    name: "server",
                    icon: "icon-kefu",
                    Mname: "我的客服",
                    right: "＞"
                }
            ]
        };
    },
    methods: {
        payme(){
            this.$router.push({
                name: "order"
            });
        },
        goinformation() { //跳转到消息页
            this.$router.push({
                name: "information"
            });
        },
        gotodetail(name) {  //跳转到各个页面
            this.$router.push({
                name: name
            });
        }
    }
};
</script>
<style scoped>
.mine {
    width: 100%;
    height: 100%;
    background: #eee;
}
.header {
    color: #fff;
    width: 100%;
    font-size: 0.32rem;
    background: url(../../assets/as1.png);
}
.header p span {
    width: 32%;
    display: inline-block;
}
.header p span:nth-child(2) {
    text-align: center;
    font-size: 0.36rem;
}
.header p span:nth-child(3) {
    text-align: right;
}
.header > dl {
    padding: 0.1rem 0;
    box-sizing: border-box;
    text-align: center;
}
.header > dl > dt {
    width: 25%;
    margin-left: 37%;
}
.header > dl > dt > img {
    width: 100%;
    border-radius: 50%;
}
.nav {
    width: 100%;
    height: 2.3rem;
    background: #fff;
}
.nav p {
    color: red;
    font-size: 0.4rem;
    height: 0.9rem;
    line-height: 0.9rem;
    border-bottom: 0.01rem solid #ccc;
}
.nav p i {
    font-size: 0.6rem;
}
.nav p span {
    display: inline-block;
    width: 80%;
}
.dls {
    width: 100%;
    height: 1.4rem;
}
.dls dl {
    text-align: center;
    width: 18%;
    display: inline-block;
}
.dls dl > dd > i {
    font-size: 0.6rem;
}
.uls {
    width: 100%;
    background: #fff;
}
.uls li {
    width: 90%;
    margin-left: 10%;
    font-size: 0.36rem;
    height: 1.2rem;
    line-height: 1.2rem;
    border-bottom: 0.01rem solid #eee;
}
.uls li b {
    float: right;
}
</style>


