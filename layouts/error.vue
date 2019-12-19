<template>
  <div class="warp">
    <h2 v-if="error.statusCode == 404">404页面不存在</h2>
    <h2 v-else>500服务器错误</h2>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: "error",
    props: ['error'],
  }
</script>

<style lang="scss" scoped>
  .warp{
    text-align: center;
    padding: 200px;
  }
</style>

