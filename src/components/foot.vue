<template>
    <div class="footer">
        <router-link :to="{name:item.name}" v-for="(item,index) in dataArr" :key='index'>{{item.type}}</router-link>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            dataArr:[
                {
                    name:'home',
                    type:'首页'
                },
                {
                    name:'classify',
                    type:'分类'
                },
                {
                    name:'shopping',
                    type:'购物车'
                },
                {
                    name:'mine',
                    type:'我的'
                }

               
            ]
        }
    }
}
</script>
<style scoped>
.footer{
    
}

</style>


