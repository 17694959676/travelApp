<template>
  <div class="like">
    <div class="like-top">
      <img
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt=""
      />
      猜你喜欢
    </div>
    <ul>
      <li class="like-item border-bottom" v-for="item in likeList"
       @click="toDetails" :key="item.id" >
        <div class="like-img">
          <img
            :src="item.imgUrl"
          />
        </div>
        <div class="like-text">
          <div class="like-title">{{ item.title }}</div>
          <div class="like-message">{{ item.msg }}条评论</div>
          <div class="like-map">
            <span class="like-mark">￥<b>{{ item.pre }}</b></span>
            <span class="like-item-map">{{ item.map }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['likeList'],
  data() {
    return {
    };
  },
  methods:{
    toDetails() {
      this.$router.push("/detail")
    }
  }
};
</script>

<style scoped>
.like {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  background: #fff;
  padding: 0 0.2rem;
}
.like-top {
  padding: 0.2rem 0;
  font-size: 0.32rem;
}
.like-top img {
  width: 0.3rem;
  height: 0.3rem;
}
.like-item {
  position: relative;
  padding: 0.2rem 0;
  overflow: hidden;
}
.like-img {
  float: left;
  overflow: hidden;
}
.like-img img {
  width: 2rem;
  height: 2rem;
}
.like-text {
  padding-left: 2.3rem;
}
.like-title {
  font-size: 0.36rem;
  color: #212121;
  margin-top: 0.4rem;
}
.like-message {
  margin-top: 0.3rem;
  color: #616161;
  font-size: 0.24rem;
}
.like-map {
  margin-top: 0.3rem;
  color: #616161;
  position: relative;
}
.like-mark {
  color: #ff8300;
}
.like-mark b {
  font-size: 0.4rem;
}
.like-item-map {
  position: absolute;
  right: 0.2rem;
}
</style>