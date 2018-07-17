<template>
  <div class="container el-row">
    <header-div></header-div>
    <footer-div></footer-div>
  </div>
</template>

<script>
import HeaderDiv from '../header'
import FooterDiv from '../footer'
export default {
  name: 'index',
  data () {
    return {
      logoMsg: 'Ucenter'
    }
  },
  components: {
    HeaderDiv, FooterDiv
  }
}
</script>

<style scoped>
  .container{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
</style>
