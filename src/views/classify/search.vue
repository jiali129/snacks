<template>
    <div>
        <header>
            <span @click='gotoback'>取消</span>
            <input type="text" @input='search' v-model='keywords' placeholder="搜一搜" @blur='dataValue'>
        </header>
        <ul v-html='htmls'></ul>
        <div class="addspan">
            <span v-for="(x,id) in dvulue" :key="id">{{x}}</span>
            <button @click="clears">清空浏览记录</button>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            keywords: "",
            htmls: "",
            dvulue: []
        };
    },
    methods: {
        gotoback() {
            this.$router.back({
                name: "classify"
            });
        },
        clears(){
             this.dvulue=[];
        },
        search() {
            this.$http
                .get(
                    `https://m.gome.com.cn/index.php?ctl=index&act=keywordsPromptNew&keystr=${
                        this.keywords
                    }&dotime=1528960286000`
                )
                .then(res => {
                    // console.log(res)
                    this.htmls = res;
                });
        },
        dataValue(e) {
            let values = e.target.value;
            console.log(values);
            if (this.dvulue.indexOf(values) == -1) {
                this.dvulue.push(values);
            }
        }
    }
};
</script>
<style scoped>
.addspan{
    margin-top: .4rem;
}
.addspan>span{
    padding: 0.03rem;
    border: 0.02rem solid orange;
    border-radius: 0.07rem;
    margin-left: 0.1rem;
}
.clears{
    margin-left: .3rem;
    background: #eee;
}
</style>


