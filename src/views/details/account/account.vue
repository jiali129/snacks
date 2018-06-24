<template>
    <div class="account">
        <header>
            <p class="header1">
                <span @click="gotomine">＜</span>
                <span>账户余额</span>
                <span></span>
            </p>
            <p class="header2">账单</p>
            <div class="header3">
                <p>账户余额</p>
                <b>{{money}}</b>
            </div>
        </header>
        <div class="center">
                <ul class="uls">
                    <li @click="gotomoney(y.name)" v-for="(y,idx) in list" :key="idx">
                        <i class="iconfont" :class="y.icon"></i>
                        <span>{{y.Mname}}</span>
                        <b>{{y.right}}</b>
                    </li>
                </ul>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            money:'10000.00',
            list: [
                {
                    name: "top",
                    icon: "icon-qianbao",
                    Mname: "账户余额",
                    right: "＞"
                },
                {
                    name: "withdraw",
                    icon: "icon-daifukuan",
                    Mname: "提现",
                    right: "＞"
                }
            ]
        }
    },
    methods:{
        gotomoney(name){
            this.$router.push({
                name: name
            });
        },
        gotomine(){
             this.$router.push({
                name:'mine'
            });
        }
    }
};
</script>
<style scoped>
.account{
    width: 100%;
    height: 100%;
    background: #eee;
}
header{
    width: 100%;
    height: 30%;
    color: #fff;
    background: linear-gradient(to bottom ,#6dcaff,#419afc);
}
.header1{
    width: 100%;
    height: .9rem;
    line-height: .9rem;
    display: flex;
}
.header1>span{
    font-size: .4rem;
    flex:1;
}
.header1>span:nth-child(2){
    text-align: center;
}
.header2{
    height: .9rem;
    line-height: .9rem;
    margin-left: 90%;
}
.header3{
    width: 100%;
}
.header3 p{
    line-height: .5rem;
}
.header3>b{
  font-size: .52rem;
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


