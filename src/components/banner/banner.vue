<template>
    <div class="banners">
        <dl v-for="(x,idx) in this.banner" :key='idx'>
            <dd>
                <i :class="x.class" :style="{background:x.style}"></i>
            </dd>
            <dt>{{x.title}}</dt>
        </dl>
    </div>
</template>
<script>
export default {
    data() {
        return {
            banner: [
                {
                    class: "iconfont icon-icon-test",
                    title: "家乡味道",
                    style:'yellow'
                },
                {
                    class: "iconfont icon-jiubei",
                    title: "进口食品",
                    style:'purple'
                },
                {
                    class: "iconfont icon-xiaomai",
                    title: "牛乳制品",
                    style:'orange'
                },
                {
                    class: "iconfont icon-chabei",
                    title: "茶果冲饮",
                    style:'cyan'
                },
                {
                    class: "iconfont icon-lingshi",
                    title: "休闲食品",
                    style:'pink'
                },
                {
                    class: "iconfont icon-icon-test",
                    title: "米面粮油",
                    style:'skyblue'
                },
                {
                    class: "iconfont icon-xiaomai",
                    title: "调味调料",
                    style:'yellow'
                },
                {
                    class: "iconfont icon-chabei",
                    title: "酒水饮料",
                    style:'green'
                }
            ]
        }
    }
};
</script>
<style scoped>
.banners{
    width: 100%;
    height: auto;
}
.banners dl{
    text-align: center;
    display: inline-block;
    width: 25%;
    margin-top: 10px;
}
.banners dl>dd{
    text-align: center;
}
.banners dl>dd>i{
    font-size: .7rem;
    display: inline-block;
    border-radius: 100%;
    padding:0.2rem;
    color:#fff;
}
.banners dl>dt{
    line-height: 30px;
}
</style>


