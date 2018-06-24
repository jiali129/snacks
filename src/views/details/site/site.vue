<template>
    <div class="sites">
        <header>
               <span @click="gotomine">＜</span>
                <span>收货地址</span>
                <span></span>
        </header>
        <div class="coutr">
            <editAddress></editAddress>
        </div>
        <div class='footer'>
            <button>+新增地址</button>
        </div>  
    </div>
</template>
<script>
import editAddress from '@/components/editAddress/editAddress'
export default {
    data(){
        return{
        }
    },
    methods:{
        gotomine(){
            this.$router.push({
                name:'mine'
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


