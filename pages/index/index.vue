<template>
  <div>
    <Header />
    <div id="editor" ></div>
    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  export default {
    name: "index",
    components: {
      Header,
      Footer
    },
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
