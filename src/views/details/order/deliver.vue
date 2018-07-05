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
             arr:'提醒卖家发货',
             tui:'申请退款'
        }
    }
}
</script>
<style scoped>

</style>





