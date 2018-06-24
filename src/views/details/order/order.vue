<template>
    <div class="order">
       <header>
               <span @click="gotomine">＜</span>
                <span>收货地址</span>
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
    display: flex;
    
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

</style>


