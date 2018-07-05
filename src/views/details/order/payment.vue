<template>
    <div>
       <stores :data='arr' :datas="tui"></stores>
    </div>
</template>
<script>
import stores from '@/components/stores/stores'
export default {
    components:{
        stores
    },
    data(){
        return{
             arr:'付款',
             tui:'支付宝支付'
        }
    }
}
</script>
<style scoped>

</style>






