<template>
    <dl class="dlss" @click='gotoDetail'>
        <dt><img v-lazy="data.imageurl" alt=""></dt>
        <dd>
            <p class="pName">{{data.wname}}</p>
            <p>
                <span>￥ {{data.jdPrice}}</span>
                <span @click.stop="addCart">
                    <i class="iconfont icon-gouwuchekong" style="color:red"></i>
                </span>
            </p>
        </dd>
    </dl>

</template>
<script>
import { getCookie } from "../../utils/utils.js";
export default {
    props: {
        data: {
            required: true,
            type: Object
        }
    },
    methods: {
        addCart() {
            if (!getCookie("token")) {
                this.$router.push({
                    name: "login"
                })
                return;
            }
            this.$http
                .post("/api/addcart", {
                    token: getCookie("token"),
                    data: this.data
                }).then(res => {
                    if (res.code === 1) {
                         console.log('添加成功')
                    } else {
                        console.log(res.msg);
                    }
                });
                
        },
        gotoDetail() {
            //console.log(this.data);
            this.$router.push({
                name: "detail",
                query: {
                    url: encodeURIComponent(this.data.clickUrl)
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
    margin-left: 6%;
}
.pName {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>


