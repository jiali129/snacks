<template>
    <div class="login">
        <div class="header">
            <span>＜</span>
            <span>717商城</span>
            <span @click="register">注册</span>
        </div>
        <div class="content">
            <p>
                <label for="username">用户名:</label><input id="username" v-model="username" type="text" placeholder="请输入用户名">
            </p>
            <p>
                <label for="password">密码:</label><input id="password" v-model="password" type="password" placeholder="请输入密码">
            </p>
            <button @click='gontoLogin' class="btn">登录</button>
        </div>
    </div>
</template>
<script>
import {setCookie} from '../../utils/utils.js'
export default {
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        gontoLogin() {
            let Phones = /^1[3578]\d{9}$/;
            if (!Phones.test(this.username)) {
                alert("请输入正确的手机号");
                return;
            }
            let passwords = /\d{6,}/;
            if (!passwords.test(this.password)) {
                alert("请输入正确的密码");
                return;
            }

            if (!this.username || !this.password) {
                alert("请填写所有信息");
                return;
            }
            this.$http
                .post("/user/login", {
                    username: this.username,
                    password: this.password
                })
                .then(res => {
                    //console.log(res)
                    if (res.code == 1) {
                        setCookie('token',res.token)
                        //document.cookie = `token=${res.token}`;
                        this.$router.push({
                            //重定向
                            name:this.$route.query.from || 'home'
                        })
                    }else{
                        console.log(res.msg)
                    }
                });
        },
        register(){
            this.$router.push({
                name:'register'
            })
        }
    },
    mounted() {
        console.log(this.$route);
    }
};
</script>
<style scoped>
.login{
    width: 100%;
    height: 100%;
    background: #eee;
}
.header {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
}
 .header>span:nth-child(2) {
    font-size: 22px;
    text-align: center;
} 
.header>span:nth-child(3) {
   color: red;
    text-align:right;
} 
.header span {
    width: 32%;
    display: inline-block;
}
.content{
    margin-top: 10px;
}
.content p {
    width: 100%;
    height: 40px;
     background: #fff;
    border-bottom: 1px solid #ccc;
}
.content p input {
    border: none;
    width: 70%;
    height: 39px;
    outline:none;/*去除获取焦点时的边框 */
}
.content p label{
    font-size: 16px;
    margin-left: 5%;
    margin-right: 2%;
}
.btn{
    margin-top: 100px;
    background: red;
    color: #fff;
    border: none;
    width: 70%;
    font-size: 18px;
    border-radius: 15px;
    margin-left: 15%;
    height: 40px;
}
</style>


