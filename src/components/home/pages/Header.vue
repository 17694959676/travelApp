<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">
        &#xe660;
      </span>
    </div>
    <div class="header-search">
      <span class="iconfont">
        &#xe7eb;
      </span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <router-link to="/city">
        {{city}} <span class="iconfont">&#xe600;</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

  .header{
    width: 100%;
    line-height: .88rem;
    background-color:#00bcd4;
    color: #fff;
    font-size: .36rem;
    display: flex;
  }
  .header-left {
    width: .4rem;
    padding:0rem .2rem;
    text-align: center;
    font-weight:bold;
  }
  .header-search {
    flex: 1;
    background-color:#fff;
    height: .6rem;
    margin: .14rem 0;
    border-radius: .15rem;
    color: #e4e7ea;
    line-height:.6rem;
    font-size:.28rem;
    padding-left: .2rem;
  }
  .header-right {
    font-size: .28rem;
    padding: 0 .2rem;
  }
  .header-right a {
    color:#fff;
  }
</style>>
</style>

<script type="text/javascript">
import {mapState} from 'vuex'


export default {
  computed:{
    ...mapState(['city'])
  },
}
</script>