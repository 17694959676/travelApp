<template>
  <div class="header-swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://img2.baidu.com/it/u=345670089,3951600800&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://gd-hbimg.huaban.com/c628e6c5728c5cd4912b1efc29a8a23b80ca6fce77244-nHaUUF_fw240webp" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://gd-hbimg.huaban.com/2c6f76144fa4a1ac6ff660c2c5bfe4ae003bdc1615b2b-4NLE6n_fw240webp" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div> -->
      <!-- <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
// import axios from 'axios'
export default {
  props:['swiperList'],
  data() {
    return {
      
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>
<style scoped>
/*  */
.header-swiper {
  width: 100%;
  height: 2rem;
}
.header-swiper img {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: 370px;
  height: 100px;
}
</style>