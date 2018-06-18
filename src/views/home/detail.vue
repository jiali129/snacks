<template>
    <div class="ifranme">
       <iframe class="iframe" :src="decodeURIComponent($route.query.url)" frameborder="0"></iframe>
    </div>
</template>
<script>
export default {
    mounted(){
       // console.log(this.$router.query.url)
    }
}
</script>
<style scoped>
.ifranme{
    height: 100%;
}
.iframe{
    width: 100%;height: 100%;
}
</style>


