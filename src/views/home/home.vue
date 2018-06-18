<template>
    <div class="home">
        <div class="head">
            <span class="headS"><img src="../../assets/images/a1_03.png" alt=""></span>
            <input type="text" placeholder="请输入您想要的商品" @click='gotoSearch'>
            <dl class="dls">
                <dd><img src="../../assets/images/a2.png" alt=""></dd>
                <dt>我的店铺</dt>
            </dl>
            <dl class="dls">
                <dd><img src="../../assets/images/a2.png" alt=""></dd>
                <dt>消息</dt>
            </dl>
        </div>
        <div class="contents" @scroll='onScroll' ref="wrap">
            <div class="swiper-container" ref="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../../assets/images/girl.png" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../../assets/images/jia.png" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../../assets/images/bc.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../../assets/images/a1.jpg" alt="">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="banner" ref="banner">
                <Banner></Banner>
            </div>
            <div class="swiperShopp" ref="row">
                <span>商城<br/>动态</span>
                <div class="swiper-container a1" ref="swiper2" id="a1">
                    <div class="swiper-wrapper a2" id="a2">
                        <div class="a3 swiper-slide">
                            <p>
                                <i>热评 </i>&nbsp;&nbsp;
                                <span>潮,50后妈妈痴迷洛丽塔,穿萝莉装</span>
                            </p>
                            <p>
                                <i>热评 </i>&nbsp;&nbsp;
                                <span>经常穿这鞋子的妹子腿会越来越粗</span>
                            </p>
                        </div>
                        <div class="a3 swiper-slide ">
                            <p>体重超过110，请放弃这些零食</p>
                            <p>女生长期涂素颜霜，皮肤会有什么</p>
                        </div>
                        <div class="a3 swiper-slide">
                            <p>夏天脸上有这4个信号，证排毒了</p>
                            <p>穿裙子，记住'4'不要</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="day" ref="day">
                <span>
                    <i>天天特惠</i>每天都有惊喜</span>
                <a href="#">更多></a>
            </div>
            <ul ref="list" class="uls">
                <li v-for='(item,idx) in list' :key='idx'>
                    <Goodsliem :data='item'></Goodsliem>
                </li>
            </ul>
            <p class="tips">{{tips}}</p>
        </div>
    </div>
</template>
<script>
//direction: 'vertical'
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import Goodsliem from "@/components/goodsliem/goodltem";
import Banner from "@/components/banner/banner";
import jsonp from "@/utils/jsonp";
export default {
    data() {
        return {
            list: [],
            canIQuery: true,
            page: 1,
            tips:'正在为你加载更多数据....'
        };
    },
    methods: {
        gotoSearch() {
            this.$router.push({
                name: "register"
            });
        },
        onScroll() {
            let winH = this.$refs.wrap.offsetHeight;
            let docH =
                this.$refs.swiper.offsetHeight +
                this.$refs.banner.offsetHeight +
                this.$refs.row.offsetHeight +
                this.$refs.day.offsetHeight +
                this.$refs.list.offsetHeight;
            let scrollH = this.$refs.wrap.scrollTop;
            //console.log(winH,docH,scrollH)
            if (docH - winH - scrollH < 30 && this.canIQuery) {
                //console.log('jiejin')
                this.page++;
                this.canIQuery = false;
                this.$http.get(`/index/recommend.action?page=${this.page}`).then(
                    res => {
                        if(res.code === 1000){
                            this.tips='我是有底线的'
                        }else{
                              this.list = [
                              ...this.list,
                              ...JSON.parse(JSON.parse(res).recommend)
                                .wareInfoList
                            ];
                        }
                        
                        this.canIQuery = true;
                        //console.log(this.list)
                    }
                );
            }
        }
    },
    mounted() {
        let swi = new Swiper(this.$refs.swiper, {
            autoplay: true, //可选选项，自动滑动
            loop: true,
            speed: 100,
            pagination: {
                //出现小圆点
                el: ".swiper-pagination"
            }
        });
        let swipers = new Swiper(this.$refs.swiper2, {
            autoplay: true, //可选选项，自动滑动
            loop: true,
            speed: 100, //不加这个不会自动轮播
            direction: "vertical"
        });
        //列表商品初始请求
        this.$http.get(`/index/recommend.action?page=${this.page}`).then(res => {
            this.list = JSON.parse(JSON.parse(res).recommend).wareInfoList;
            //console.log(this.list)
        });
        this.$http.post('/user/login?name=123').then(res=>{
            console.log(res)
        })
          
    },
    components: {
        Goodsliem,
        Banner
    }
};
</script>
<style scoped>
.uls li {
    width: 49%;
    display: inline-block;
    border-bottom: 1px solid #ccc;
}
.uls li:nth-child(odd) {
    border-right: 1px solid #ccc;
}
.home {
    width: 100%;
    padding: 0;
    display: flex;
    overflow: hidden;
    flex-direction: column;
}
.head {
    width: 100%;
    height: 40px;
    display: flex;
}
.headS {
    width: 21%;
}
.headS > img {
    width: 90%;
    margin-left: 5%;
}
.head > input {
    border: none;
    background: #ccc;
    margin-top: 5px;
    width: 45%;
    height: 30px;
    border-radius: 3px;
}
.contents {
    height: 100%;
    overflow-y: scroll;
}
.dls {
    color: red;
    width: 17%;
}
.dls > dd {
    width: 60%;
    margin-left: 20%;
}
.dls > dd > img {
    width: 60%;
    margin-left: 20%;
}
.dls > dt {
    font-size: 12px;
    text-align: center;
}
.content {
    width: 100%;
}
.swiper-container {
    height: 3.5rem;
}
.swiper-slide {
    height: 3.5rem;
}
.swiper-slide > img {
    width: 100%;
    height: 100%;
}
.swiperShopp {
    width: 100%;
    height: 1rem;
}
.swiperShopp > span {
    color: orange;
    width: 15%;
    float: left;
    font-size: 0.4rem;
}

#a1 {
    width: 84%;
    height: 1rem;
    border: 0.01rem solid pink;
    border-radius: 0.07rem;
}
.a3 {
    width: 100%;
    height: 1rem !important;
}
.a3 p {
    line-height: 26px;
}
.a3 p i {
    font-style: normal;
    color: orange;
    padding: 0 0.02rem;
    border: 0.01rem solid orange;
}
.day {
    width: 100%;
    height: 0.8rem;
    clear: both;
    margin-top: 0.06rem;
}
.day > span {
    color: orange;
    float: left;
}
.day > span > i {
    color: orange;
    font-size: 0.4rem;
    font-style: normal;
}
.day > a {
    text-decoration: none;
    color: 999;
    float: right;
}
</style>


