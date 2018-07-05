<template>
    <div class="roots">
        <router-view class="view"></router-view>
        <div class="footer">
            <router-link :to="{name:'home'}">
                <dl>
                    <dt><i class="iconfont icon-tubiaozhizuomoban"></i></dt>
                    <dd>首页</dd>
                </dl>
            </router-link>
            <router-link :to="{name:'classify'}">
                <dl>
                    <dt><i class="iconfont icon-fenlei"></i></dt>
                    <dd>分类</dd>
                </dl>
            </router-link>
            <router-link :to="{name:'shopping'}">
                <dl>
                    <dt><i class="iconfont icon-gouwuchekong"></i></dt>
                    <dd>购物车</dd>
                </dl>
            </router-link>
            <router-link :to="{name:'mine'}">
                <dl>
                    <dt><i class="iconfont icon-wode"></i></dt>
                    <dd>我的</dd>
                </dl>
            </router-link>
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
     -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
-webkit-user-select: none;
-moz-user-focus: none;
-moz-user-select: none; 
}
</style>


