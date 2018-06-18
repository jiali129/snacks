<template>
    <div class="footer">
        <home :is="currentTab" keep-alive></home>
        <div class="tabs">
            <dl class="tab" @click="toggleTab('homes')">
                <dd><img src="../assets/ifon/125.png" alt=""></dd>
                <dt>首页</dt>
            </dl>
            <dl class="tab" @click="toggleTab('classify')">
                <dd><img src="../assets/ifon/124.png" alt=""></dd>
                <dt>分类</dt>
            </dl>
            <dl class="tab" @click="toggleTab('shopping')">
                <dd><img src="../assets/ifon/1267.png" alt=""></dd>
                <dt>购物车</dt>
            </dl>
            <dl class="tab" @click="toggleTab('mine')">
                <dd><img src="../assets/ifon/123.png" alt=""></dd>
                <dt>我的</dt>
            </dl>
        </div>

    </div>

</template>
 
<script>
// 子组件，显示不同的 tab
// is 特性动态绑定子组件
// keep-alive 将切换出去的组件保留在内存中
// 引入子组件
import homes from "./home.vue";
import classify from "./classify.vue";
import shopping from "./shopping.vue";
import mine from "./mine.vue";
export default {
    name: "tabs",
    data() {
        return {
            currentTab: "homes" // currentTab 用于标识当前触发的子组件
        };
    },
    components: {
        // 声明子组件
        homes,
        classify,
        shopping,
        mine
    },
    methods: {
        toggleTab: function(tab) {
            this.currentTab = tab; // tab 为当前触发标签页的组件名
        }
    }
};
</script>
<style scoped>
.footer {
    width: 100%;
    height: 40px;
}
.tabs {
    width: 100%;height: 40px;
}
.tab{
    display: inline-block;
    width: 23%;
    height: 40px;
}
.tab > dd {
    width: 50%;
    height: 50%;
}
.tab > dd > img {
    width: 100%;height: 100%;
    margin-left: -30%;
}
.tab > dt {
    text-align: center;
}
</style>
