<template>
  <div class="icons">
    <div class="icon-item" v-for="item in iconsList" :key="item.id">
      <img :src="item.imgUrl" alt="" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  props:['iconsList'],
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.icons {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.icon-item {
  width: 25%;
  padding-bottom: 25%;
  height: 0;
  float: left;
}
.icon-item img {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.2rem;
}
.icon-item p {
  margin-top: 0.1rem;
  font-size: 0.28rem;
  text-align: center;
  color: #212121;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>