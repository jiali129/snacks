<template>
    <div>
        <div class="fish">
            <p>小鱼的店</p>
            <dl>
                <dt><img src="../../assets/a3.jpg" alt=""></dt>
                <dd>
                    <p>薇薇嚼水果大豆帮四季度房价看</p>
                    <b>￥109.00</b>
                    <i>X 1</i>
                </dd>
            </dl>
        </div>
        <div class="fish">
            <dl>
                <dt><img src="../../assets/a3.jpg" alt=""></dt>
                <dd>
                    <p>薇薇嚼水果大豆帮四季度房价看</p>
                    <b>￥109.00</b>
                    <i>X 1</i>
                </dd>
            </dl>
            <div class="fahuo">
                <span>{{data}}</span> <span>{{datas}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['data','datas']
   
};
</script>
<style scoped>
.fish{
    width: 100%;
    background: #fff;
    border-bottom:.01rem solid firebrick;
}

.fish>p{
    line-height: .8rem;font-size: .36rem;
    height: 0.8rem;border-bottom:.01rem solid firebrick;
}
.fish dl{
    display: flex;
}
.fish>dl>dt{
    flex:1;
} 
.fish dl dt>img{
    width: 70%;
    margin: 5%;
} 
fish dl dd{
    flex:3;
}
.fish dl dd p{
     display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    padding-right: .3rem;
    box-sizing: border-box;
    line-height: .6rem;
}
.fahuo{
    margin-left: 3.5rem;
    margin-bottom: .5rem;
}
.fahuo>span{
    padding:.05rem .08rem;
    border: .01rem solid #ccc;
    margin-left: .1rem;
}

</style>