<template>
    <div class="addsite">
        <header>
            <span @click="gotomine">＜</span>
            <span>收货地址</span>
            <span></span>
        </header>
        <div class="content">
            <input type="text" v-model="name" placeholder="收货人姓名">
            <input type="text" v-model="phone" placeholder="手机号">
            <div class="select-area">
                <div class="href">
                    <multiselect @select="prochange" v-model="province" :options="provlist" label='name' placeholder="请选择省份"></multiselect>
                </div>
                <div class="href">
                    <multiselect @select="citychange" v-model="city" :options="citylist" placeholder="请选择市" label='name'></multiselect>
                </div>
                <multiselect v-model="area" :options="arealist" placeholder="请选择地区"></multiselect>
                <input type="text" v-model="textarea" placeholder="详细地址">
            </div>
            <button class="btn" @click="btn">保存</button>
            <Toast></Toast>
        </div>
    </div>
</template>
<script>
import Multiselect from "vue-multiselect";
import { getCookie } from "@/utils/utils";
import { anotherInstance } from "@/utils/request";
import "vue-multiselect/dist/vue-multiselect.min.css"; //引入样式
export default {
    //添加收件人信息
    data() {
        return {
            name: "",
            phone: "",
            province: "",
            city: "",
            area: "",
            textarea: "",
            provlist: [],
            citylist: [],
            arealist: []
        };
    },
    created() {
        //放在要用它的上面
        let {type,name,phone,province,city,area,textarea} = this.$route.query;
        if(type=='edit'){
            this.name= name,
            this.phone=phone,
            this.province={name:decodeURI(province)},
            this.city={name:decodeURI(city)},
            this.area=decodeURI(area),
            this.textarea=decodeURI(textarea)
        }
        anotherInstance.get("/server/pcrdata/pcr.json").then(res => {
            this.provlist = res.data;
        });
    },
    methods: {
        gotomine() {
            this.$router.push({
                name: "site"
            });
        },
        prochange(a, b) {
            //省
            //console.log(this.province)
            this.citylist = a.city;
            (this.city = ""), (this.area = "");
        },
        citychange(a) {
            //地区
            // console.log(a)
            this.arealist = a.area;
            this.area = "";
        },
        btn() {
            let data = {
                name: this.name,
                phone: this.phone,
                province: this.province.name,
                city: this.city.name,
                area: this.area,
                textarea: this.textarea
            };
            //判断有没有
            if (
                !data.name ||
                !data.phone ||
                !data.province ||
                !data.city ||
                !data.area ||
                !data.textarea
            ) {
                this.$toastBus.$emit("toast", "请把详细信息填写完");
                return;
            }
            //验证手机号
            let phones = /^1[35789]\d{9}$/;
            if (!phones.test(data.phone)) {
                this.$toastBus.$emit("toast", "手机号码格式不正确");
                return;
            }
            //添加数据
            this.$http.post("/api/addaddr", {
                    token: getCookie("token"),
                    data
                }).then(res => {
                    //console.log(res)
                    if (res.code == "1") {
                       this.$toastBus.$emit('toast',res.msg)
                       setTimeout(() => {
                            this.$router.push({
                                name: "site"
                            })
                        },1500)
                    }
                    if (res.code == 0) {
                        this.$toastBus.$emit("toast", res.msg);
                        setTimeout(() => {
                            this.$router.push({
                                name: "login",
                                // query: {
                                //     from:"addsite"
                                // }
                            })
                        },1500)
                    }
                });
        }
    },
    components: {
        Multiselect
    }
};
</script>
<style scoped>
/* @import 是引入内部样式可以用 */
/* @import url('vue-multiselect/dist/vue-multiselect.min.css'); */
.addsite {
    width: 100%;
    height: 100%;
    background: #eee;
    display: flex;
    flex-direction: column;
}
header {
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    display: flex;
    background: #fff;
    font-size: 0.4rem;
    justify-content: space-between;
}
.content input {
    height: 0.8rem;
    border: none;
    background: #fff;
    padding-left: 0.2rem;
    width: 94%;
    margin-left: 2%;
    margin-top: 0.3rem;
}
.select-area {
    width: 100%;
    margin-top: 0.2rem;
}
.href {
    width: 49%;
    display: inline-block;
}
.btn {
    margin-top: 1rem;
    width: 70%;
    margin-left: 15%;
    background: red;
    border: none;
    color: #fff;
    height: 0.85rem;
    font-size: 0.36rem;
    border-radius: 0.4rem;
}
</style>


