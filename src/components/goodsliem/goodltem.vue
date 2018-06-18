<template>
    <dl class="dlss" @click='gotoDetail'>
        <dt><img v-lazy="data.imageurl" alt=""></dt>
        <dd>
            <p class="pName">{{data.wname}}</p>
            <p>
                <span>￥ {{data.jdPrice}}</span>
                <span>
                    <i class="iconfont icon-jiubei" style="color:red"></i>
                </span>
            </p>
        </dd>
    </dl>

</template>
<script>
export default {
    props: {
        data: {
            required: true,
            type: Object
        }
    },
    methods: {
        gotoDetail() {
            //console.log(this.data);
            this.$router.push({
                name: "detail",
                query: {
                    url:encodeURIComponent(this.data.clickUrl)
                }
            });
        }
    }
};
</script>
<style scoped>
.dlss {
    width: 100%;
    display: inline-block;
}
.dlss dt {
    width: 100%;
}
.dlss dt img {
    width: 85%;
    margin-left: 7%;
}
.pName {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>


