<template>
  <div class="footer">
    <ul v-for="lis in ul" v-bind:key="lis.li">{{lis.li}}</ul>
    <p>Copyright&nbsp;&copy;&nbsp;{{author}} - 2018 All rights reserved</p>
  </div>
</template>

<script>
export default {
  name: 'footerDiv',
  data () {
    return {
      ul: [
        { li: '琉璃之金' },
        { li: '朦胧之森' },
        { li: '缥缈之滔' },
        { li: '逍遥之火' },
        { li: '璀璨之沙' }
      ]
    }
  },
  computed: {
    author () {
      return this.$store.state.author
    }
  }
}
</script>

<style scoped>

</style>
