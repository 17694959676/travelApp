<template>
  <div class="header">
    <!-- 返回按键-->
    <div class="header-return" v-show="showHeader">
      <span class="border-return"></span>
      <span class="iconfont return" @click="toHome"> &#xe660;</span>
    </div>

    <!-- 滑动后出现的头部样式 -->
    <div class="header-top" v-show="!showHeader">
      <div class="header-left">
        <span class="iconfont" @click="toHome">
          &#xe660;
        </span>
      </div>
      北京国际鲜花港
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHeader: true,
      styleOpacity:{
        opacity:0
      }
    }
  },
  mounted() {
    let That = this;
    window.addEventListener("scroll", function () {
      let top = document.documentElement.scrollTop;
      if (top > 45) {
        let opacity = top / 130;
        opacity = opacity > 1 ? 1 : opacity
        That.styleOpacity = { opacity }
        That.showHeader = false
      } else {
        That.showHeader = true
      }
    })
  },
  methods:{
    toHome (){
      this.$router.push("/")
    }
  }
}
</script>

<style>
.header-return {
  position: absolute;
  left: .1rem;
  top: .1rem;
  width: .72rem;
  height: .72rem;
  /* background: #000; */
}

.border-return {
  display: block;
  background: #000;
  width: .72rem;
  height: .72rem;
  opacity: .5;
  border-radius: .36rem;
}

.return {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  line-height: .72rem;
  text-align: left;
  text-indent: .18rem;
  font-size: .32rem;
  font-weight: bold;
}

.header-top {
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  line-height: .88rem;
  background-color: #00bcd4;
  color: #fff;
  font-size: .36rem;
}

.header-left {
  position: absolute;
  width: .4rem;
  padding: 0rem .2rem;
  text-align: center;
  font-weight: bold;
}
</style>