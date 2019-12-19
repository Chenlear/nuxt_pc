<template>
  <div>
      <Header />
      <nuxt-child />
      <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Cookie from 'js-cookie'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {

    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    async getInfo () {
      let {data} = await this.$axios.get('/web/pc/server/index/pc/index-queryEveryDay')
      this.$store.commit('setToken','123456123456123456')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
