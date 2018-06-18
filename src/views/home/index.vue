<template>
    <div class="roots">
        <router-view class="view"></router-view>
        <div class="footer">
            <router-link :to="{name:'home'}">首页</router-link>
            <router-link :to="{name:'classify'}">分类</router-link>
            <router-link :to="{name:'shopping'}">购物车</router-link>
            <router-link :to="{name:'mine'}">我的</router-link>
        </div>

    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.roots {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.view {
    flex: 1;
}
.footer {
    width: 100%;
    height: 40px;
}
.footer > a {
    display: inline-block;
    width: 24%;
    text-align: center;
    text-decoration: none;
    color: #000;
}
</style>


