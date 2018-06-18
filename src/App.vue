<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
*{
  margin:0;padding:0;font-size: 14px;
}
body,html{
  width: 100%;height: 100%;
  margin:0;padding:0;
}
#app {
 width: 100%;height: 100%;
  margin:0;padding:0;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}


</style>
