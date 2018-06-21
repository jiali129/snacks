<template>
    <div class="mine">
        <div class='header'>
            <p>
                <span class="iconfont icon-shezhi"></span>
                <span>我的717商城</span>
                <span class="iconfont icon-xiaoxi"></span>
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
                <dl>
                    <dd><i class="iconfont icon-daifukuan"></i></dd>
                    <dt>代付款</dt>
                </dl>
                 <dl>
                    <dd><i class="iconfont icon-ziyuan"></i></dd>
                    <dt>代发货</dt>
                </dl>
                 <dl>
                    <dd><i class="iconfont icon-che"></i></dd>
                    <dt>代收货</dt>
                </dl>
                 <dl>
                    <dd><i class="iconfont icon-shouhou"></i></dd>
                    <dt>售后</dt>
                </dl>
                 <dl>
                    <dd><i class="iconfont icon-dingdan"></i></dd>
                    <dt>我的订单</dt>
                </dl>
            </div>
            <div class="center">
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.mine{
    width: 100%;height: 100%;background: #eee;
}
.header{
    color: #fff;
    width: 100%;
    font-size: .32rem;
  background: url(../../assets/as1.png)
}
.header p span{
    width: 32%;
    display: inline-block;
}
.header p span:nth-child(2){
    text-align: center;
    font-size: .36rem;
}
.header p span:nth-child(3){
    text-align: right;
}
.header>dl{
    padding:.1rem 0;
    box-sizing: border-box;
    text-align: center;
}
.header>dl>dt{
 width: 25%;
 margin-left: 37%;
}
.header>dl>dt>img{
    width: 100%;
    border-radius: 50%;
}
.nav{
    width: 100%;
    height: 2.3rem;
    background: #fff;
}
.nav p{
    color:red;
    font-size: .4rem;
    height: .9rem;
    line-height: .9rem;
    border-bottom: .01rem solid #ccc;
}
.nav p i{
    font-size: .6rem;
}
.nav p span{
    display: inline-block;
    width: 80%;
}
.dls{
width: 100%;
height: 1.4rem;
}
.dls dl{
    text-align: center;
    width: 18%;
    display: inline-block;
}
.dls dl>dd>i{
 font-size: .6rem;
}

</style>


