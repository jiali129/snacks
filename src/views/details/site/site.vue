<template>
    <div class="sites">
        <header>
               <span @click="gotomine">＜</span>
                <span>收货地址</span>
                <span></span>
        </header>
        <div class="coutr" v-show='data.length==0'>
            <h3>您当前还没有地址可用哦！</h3>
        </div>
       <editAddress v-for="(x,idx) in data" :key="idx" v-bind="{datas:x,id:idx}"></editAddress>
        <div class='footer'>
            <button @click="newSite">+新增地址</button>
        </div>  
    </div>
</template>
<script>
import editAddress from '@/components/editAddress/editAddress'
import { getCookie } from "@/utils/utils";
export default {
    data(){
        return{
            
             data:[]
        }
    },
    created() {
        this.$http.post("/api/addrlist", { token: getCookie("token") }).then(res => {
            // console.log(res);
            this.data = res.data;
        });
    },
     methods:{
        gotomine(){
            this.$router.push({
                name:'mine'
            })
        },
        newSite(){ //点击添加
             this.$router.push({
                name:'addsite'
            })
        }    
    },
    components:{
        editAddress
    }
}
</script>
<style scoped>
.sites{
    width: 100%;
    height: 100%;
    background: #eee;
    display: flex;
    flex-direction: column;
}
header{
    width: 100%;
    height: .9rem;
    line-height: .9rem;
    display: flex;
    background: #fff;
}
header>span{
    font-size: .4rem;
    flex:1;
}
header>span:nth-child(2){
    text-align: center;
}
.coutr{
    width: 100%;
    flex:1;
    overflow-y: scroll;
   
}
.countr1{
     background: #fff;
     margin-bottom: .2rem;
}
.footer{
    width: 100%;
    height: 0.9rem;
    margin-top: .5rem;
}
.footer button{
    width: 70%;
    margin-left: 15%;
    background: red;
    border:none;
    color:#fff;
    height: .85rem;
    font-size: .36rem;
    border-radius: .4rem;
}
</style>


