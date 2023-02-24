<template>
  <div class="header">
    <div class="header-left" @click='toHome'>
      <span class="iconfont">
        &#xe660;
      </span>
    </div>
    <div class="header-title">
      城市选择
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      toHome() {
        this.$router.push('./')
      }
    }
  }

</script>

<style scoped>

  .header{
    width: 100%;
    line-height: .88rem;
    background-color:#00bcd4;
    color: #fff;
    font-size: .32rem;
    position:relative;
  }
  .header-left {
    width: .4rem;
    padding:0rem .2rem;
    text-align: center;
    font-weight:bold;
    position:absolute;
  }
  .header-title {
    text-align:center;
  }
</style>>
</style>