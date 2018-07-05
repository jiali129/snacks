<template>
    <div class="sets">
        <header>
            <span @click="gotomine">＜</span>
            <span>设置</span>
            <span></span>
        </header>
        <div class="sect">
            <ul>
                <li>
                    <p>我的头像</p>
                    <span>
                        <img src="@/assets/a3.jpg" alt=""> >
                    </span>
                </li>
                <li>
                    <p>用户名</p>
                    <span>
                        路飞 >
                    </span>
                </li>
                <li>
                    <p>我的二维码名片</p>
                    <span>
                        ▓▓ >
                    </span>
                </li>
            </ul>
        </div>
        <p class="btn">
            <button @click="quit">退出登录</button>
            <Toast></Toast>
        </p>
    </div>
</template>
<script>
import { delCookie } from "@/utils/utils.js";
export default {
    methods: {
        gotomine() {
            //返回主页
            this.$router.push({
                name: "mine"
            });
        },
        quit() {
            //退出登录
            if (confirm("您确定要退出吗?")) {
                delCookie("token"); //退出
                this.$toastBus.$emit("toast", "你已经退出,返回首页");
                setTimeout(() => {
                    this.$router.push({
                        name: "home"
                    });
                }, 1500);
            }
        }
    }
};
</script>
<style scoped>
.sets {
    width: 100%;
    height: 100%;
    background: #eee;
}
header {
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    display: flex;
    background: #fff;
    justify-content: space-between; /*直接两边的靠边 */
}
header > span {
    font-size: 0.4rem;
}
.sect {
    width: 100%;
    background: #fff;
}
.sect ul li {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.01rem solid #ccc;
}
.sect ul li p {
    font-size: 0.36rem;
}

.sect ul li span {
    width: 15%;
}
.sect ul li span img {
    width: 70%;
    border-radius: 100%;
}
.btn {
    margin-top: 2rem;
    width: 80%;
    height: 0.9rem;
    margin-left: 15%;
}
.btn button {
    width: 80%;
    height: 0.9rem;
    border: none;
    background: red;
    color: #fff;
    border-radius: 0.4rem;
    outline: none;
}
</style>


