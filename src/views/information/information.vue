<template>
    <div class="information">
        <div class="head">
            <span @click="gotomine">＜</span>
            <span>消息</span>
            <span></span> 
        </div>
        <div class="news">
            <dl v-for="(item,index) in dataArr" :key='index' class="detail">
                 <dd :style='{background:item.colors}'>   <!-- 给每个单独加颜色 -->
                    <i class="iconfont" :class="item.icon"></i>
                </dd>
                <dt>
                    <p><b>{{item.title}}</b><span>{{item.time}}</span></p>
                    <span>{{item.content}}</span>
                </dt>
            </dl>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dataArr:[
                {
                    type:'logistics',
                    icon:'icon-che',
                    colors:'green',
                    title:'订单物流信息',
                    time:'2017/2/28',
                    content:'订单已签收!您购买的浔阳楼礼盒酥糖特有风味，香甜可口'
                },
                {
                    type:'discounts',
                    icon:'icon-qianbao',
                    colors:'pink',
                    title:'优惠促销',
                    time:'2017/2/28',
                    content:'天天特惠!特价秒杀，满19.9元包邮，精品多多，过时不候哦~'
                },
                {
                    type:'system',
                    icon:'icon-xiaoxi',
                    colors:'orange',
                    title:'系统通知',
                    time:'2017/2/29',
                    content:'你申请的退货服务已同意，请前往我的页面'
                },
                {
                    type:'system',
                    icon:'icon-qianbao',
                    colors:'skyblue',
                    title:'我的奖金',
                    time:'2017/2/29',
                    content:'您昨天新增了一笔奖金收入'
                },
                {
                    type:'system',
                    icon:'icon-kefu',
                    colors:'purple',
                    title:'我的客服',
                    time:'2017/5/30',
                    content:'点击查看您与客服的沟通'
                }
            ]
        }
    },
    methods:{
        gotomine(){
            this.$router.push({
                name:'mine'
            })
        }
    }
}
</script>
<style scoped>
.information{
    width: 100%;height: 100%;
    display: flex;
    flex-direction: column;
}
.head{
 height: .8rem;
display: flex;
line-height: .8rem;
border-bottom: .01rem solid #eee;
}
.head span{
    flex: 1;
    font-size: .32rem;
}
.head span:nth-child(2){
    text-align: center;
}
.news{
    width: 100%;
    flex:1;
}
.detail{
    width: 100%;
    height: 1.7rem;
    display: flex;
    padding:.1rem;
    border-bottom: .01rem solid #ccc;
    box-sizing: border-box;
}
.detail dd{
  flex:1;
  border-radius:45%;
  text-align: center;
  line-height: 1.5rem;
 
}
.detail dd i{
     padding-top: 45%;
    font-size: .8rem;
    color: #fff;
   
}
.detail dt{
    flex:4;
    margin-left: .1rem;
}
.detail dt p b{
  font-size: .32rem;
}
.detail dt p>span{
    float: right;
}
.detail dt span{
    clear: both;
    line-height: .5rem;
}
</style>


