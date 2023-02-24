<template>
  <div class="banner">
    <div @click=" showSwiper">
      <div class="banner-img">
        <img
          src="https://img1.qunarzz.com/vs_ceph_b2c_001/6e8aa1e6-09ba-46a8-beba-8415f377d406.jpg_r_1280x840x95_ede02e41.jpg"
          alt="">
      </div>
      <div class="banner-title">
        金海湖风景区（AAA景区）
      </div>
    </div>

    <div class="img-swiper" v-show="imgSwiper" @click=" hideSwiper">
      <div class="header-swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://img1.qunarzz.com/vs_ceph_b2c_001/4812d1ec-a051-43dd-9236-bb52fb2be16a.jpg_r_1280x840x95_23bf60e3.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://img1.qunarzz.com/vs_ceph_b2c_001/4812d1ec-a051-43dd-9236-bb52fb2be16a.jpg_r_1280x840x95_23bf60e3.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://img1.qunarzz.com/vs_ceph_b2c_001/4812d1ec-a051-43dd-9236-bb52fb2be16a.jpg_r_1280x840x95_23bf60e3.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://img1.qunarzz.com/vs_ceph_b2c_001/4812d1ec-a051-43dd-9236-bb52fb2be16a.jpg_r_1280x840x95_23bf60e3.jpg" alt="">
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
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      bannerList:[
        {
          id:"01",
          imgUrl:"https://img1.qunarzz.com/vs_ceph_b2c_001/4812d1ec-a051-43dd-9236-bb52fb2be16a.jpg_r_1280x840x95_23bf60e3.jpg",
        },
        {
          id:"02",
          imgUrl:"https://img1.qunarzz.com/vs_ceph_b2c_001/4812d1ec-a051-43dd-9236-bb52fb2be16a.jpg_r_1280x840x95_23bf60e3.jpg",
        },
        {
          id:"03",
          imgUrl:"https://img1.qunarzz.com/vs_ceph_b2c_001/4812d1ec-a051-43dd-9236-bb52fb2be16a.jpg_r_1280x840x95_23bf60e3.jpg",
        },
      ],
      imgSwiper:false,
    }
  },
  methods: {
    showSwiper() {
      this.imgSwiper=true;
    },
    hideSwiper () {
      this.imgSwiper = false;
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
}
</script>

<style scoped>
.banner {
  position: relative;
}

.banner-img {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}

.banner-img img {
  width: 100%;
}

.banner-title {
  position: absolute;
  bottom: .4rem;
  left: .3rem;
  font-size: .36rem;
  color: #fff;
}

.img-swiper {
  background: #000;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-swiper img {
  width: 100%;

}
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
  /* width: 370px;
  height: 100px; */
  width: 100%;
  height: 100%;
}
</style>