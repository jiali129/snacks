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
             arr:'查看物流',
             tui:'申请退货'
        }
    }
}
</script>
<style scoped>

</style>






