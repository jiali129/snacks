<template>
    <div class="order">
       <header>
               <span @click="gotomine">＜</span>
                <span>我的订单</span>
                 <span class="iconfont icon-xiaoxi" @click="goinformation"></span>
        </header> 
        <div class="nav">
          <div class="navs">
            <router-link :to="{name:'all'}">全部</router-link>
            <router-link :to="{name:'payment'}">代付款</router-link>
            <router-link :to="{name:'deliver'}">代发货</router-link>
            <router-link :to="{name:'take'}">待收货</router-link>
            <router-link :to="{name:'after'}">售后</router-link>
        </div>
        <router-view></router-view>

        </div>
    </div>
</template>
<script>
export default {
    methods:{
        gotomine(){
            this.$router.push({
                name:'mine'
            })
        },  
        goinformation() { //跳转到消息页
            this.$router.push({
                name: "information"
            });
        }
    }
}
</script>
<style scoped>
.order{
    width: 100%;
    height: 100%;
    background: #eee;
    margin:0;padding:0;
    display: flex;
    flex-direction: column;
    
}
header{
    width: 100%;
    height: .9rem;
    line-height: .9rem;
    display: flex;
    background: #eee;
   justify-content: space-between;  /*直接两边的靠边 */
   border-bottom:.01rem solid firebrick;
}
header>span{
    font-size: .4rem;  
}
.navs{
    width: 100%;
    height: 0.9rem;
    line-height: .9rem;
    border-bottom:.01rem solid firebrick;
}
.navs a{
    text-decoration: none;
    display: inline-block;
    text-align: center;
    width: 19%;
}
.router-link-active{
   color: deeppink;
    border-bottom: .01rem solid deeppink;
}

</style>


