<template>
  <div>
    我是home的子页面
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  export default {
    name: "index",
    data () {
      return {
        editor: null
      }
    },
    mounted() {
      var E = require('wangeditor')
      this.editor = new E('#editor')
      this.editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      this.editor.customConfig.menus = [
        'image'
      ]
      this.editor.create()
    }
  }
</script>

<style scoped>

</style>
