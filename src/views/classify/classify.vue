<template>
    <div class="classify">
        <div class="search">
            <input type="text" @click='goToSearch' placeholder="输入您想购买的商品">
            <i class="iconfont icon-lingshi"></i>
        </div>
        <div class="center">
            <aside class="scroller" id='leftScroller'>
                <ol class="list">
                    <li @click="getData($event)" data-id="17951827" :class="code==17951827?'active':''">热门分类</li>
                    <li @click="getData($event)" data-id="17951828" :class="code==17951828?'active':''">手机数码</li>
                    <li @click="getData($event)" data-id="17951829" :class="code==17951829?'active':''">电脑办公</li>
                    <li @click="getData($event)" data-id="17951830" :class="code==17951830?'active':''">电视影音</li>
                    <li @click="getData($event)" data-id="17951831" :class="code==17951831?'active':''">空调冰洗</li>
                    <li @click="getData($event)" data-id="17951832" :class="code==17951832?'active':''">厨房卫浴</li>
                    <li @click="getData($event)" data-id="17951833" :class="code==17951833?'active':''">生活电器</li>
                    <li @click="getData($event)" data-id="17951834" :class="code==17951834?'active':''">食品酒水</li>
                    <li @click="getData($event)" data-id="17951835" :class="code==17951835?'active':''">美妆个护</li>
                    <li @click="getData($event)" data-id="17951836" :class="code==17951836?'active':''">母婴玩具</li>
                    <li @click="getData($event)" data-id="17951837" :class="code==17951837?'active':''">医疗保健</li>
                    <li @click="getData($event)" data-id="17951838" :class="code==17951838?'active':''">服饰鞋帽</li>
                    <li @click="getData($event)" data-id="17951839" :class="code==17951839?'active':''">运动户外</li>
                    <li @click="getData($event)" data-id="17951840" :class="code==17951840?'active':''">箱包奢品</li>
                    <li @click="getData($event)" data-id="17951841" :class="code==17951841?'active':''">钟表首饰</li>
                    <li @click="getData($event)" data-id="17951842" :class="code==17951842?'active':''">住宅家具</li>
                    <li @click="getData($event)" data-id="17951843" :class="code==17951843?'active':''">家装建材</li>
                    <li @click="getData($event)" data-id="17951844" :class="code==17951844?'active':''">家居日用</li>
                    <li @click="getData($event)" data-id="17951845" :class="code==17951845?'active':''">床品家纺</li>
                    <li @click="getData($event)" data-id="17951846" :class="code==17951846?'active':''">汽车用品</li>
                    <li @click="getData($event)" data-id="17951847" :class="code==17951847?'active':''">黄金收藏</li>
                    <li @click="getData($event)" data-id="17951849" :class="code==17951848?'active':''">智能家居</li>
                    <li @click="getData($event)" data-id="17951850" :class="code==17951850?'active':''">金融理财</li>
                    <li @click="getData($event)" data-id="17951851" :class="code==17951851?'active':''">生活服务</li>
                </ol>
            </aside>
            <div class="cotent-box">
                <div v-for="item in shoplist" :key="item.goodsTypeId">
                    <div class="floor">
                        <p class="title">{{item.goodsTypeName}}</p>
                        <dl v-for="(x,idx) in item.goodsTypeList" :key='idx'>
                            <dt><img :src="x.goodsTypeImgUrl" alt=""></dt>
                            <dd>{{x.goodsTypeName}}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            code:17951827
        };
    },
    computed:{
        shoplist(){
            return this.$store.state.catagoryData[this.code]
        }
    },
    methods: {
        getData(e) {
            let id=e.target.getAttribute('data-id');
            this.code=id;
           // console.log(this.$store) 打印出来数据
            this.$store.dispatch('fetchList',id)
        },
        goToSearch(){
            this.$router.push({
                name:'search'
            })
        }
    },
    mounted() {

    }
};
</script>
<style scoped>
.classify {
    flex: 1;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}
.search {
    width: 100%;
    height: 1rem;
}
.search input {
    width: 70%;
    margin-left: 10%;
    height: 0.7rem;
    border-radius: 0.08rem;
    border: none;
    outline: none; /*取消聚焦时的默认样式 */
    background: #ccc;
}
.search i {
    margin-left: 5%;
    font-size: 0.8rem;
}
.center {
    flex: 1;
    overflow-y: scroll;
    display: flex;
}
#leftScroller {
    width: 1.5rem;
    font-size: 0.6rem;
    line-height: 0.8rem;
     overflow: auto;
}
.list {
    background: #eee;
   
}
.cotent-box{
    width: 80%;
   overflow: auto;
}
.floor dl{
    display: inline-block;
    width: 30%;
    margin-left: 1.2%;
    background: #eee;
    overflow:hidden;
}
.floor dl>dt{
    width: 100%;
}
.floor dl>dt>img{
    width: 80%;
    margin-left: 10%;
}
.floor dl>dd{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}
.title{
    height: .7rem;
    line-height: .7rem;
}
.active{
    border-left:.03rem solid fuchsia;
    background: #fff;
}
</style>


