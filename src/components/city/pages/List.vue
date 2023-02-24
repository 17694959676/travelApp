<template>
  <div ref="container" class="container">
    <div>
      <!-- hot -->
      <div class="hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">
          <li class="hot-item" v-for="item in hotCityList" :key="item.id" @click="changeCityName(item.cityName)">{{
            item.cityName }}</li>
        </ul>
      </div>
      <!-- sort -->
      <div class="sort">
        <div class="sort-title">字母排序</div>
        <ul class="sort-list">
          <li class="sort-item" v-for="item in cityList" :key="item.id"
           @click="changeSort(item.title )">{{ item.title }}</li>
        </ul>
      </div>
      <!-- list -->
      <div class="list">
        <div v-for="item in cityList" :key="item.id">
          <div class="list-title">{{ item.title }}</div>
          <ul class="list-msg">
            <li class="list-item" v-for="it in item.lists" @click="changeCityName(it)">{{ it }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import BScroll from 'better-scroll'
export default {
  props: ['cityList', 'hotCityList'],
  methods: {
    changeCityName(cityName) {
      this.changeCity(cityName);
      this.$router.push('/')
    },
    changeSort(sort) {
      console.log(sort);
    },
    ...mapMutations(['changeCity'])
  },
  data() {
    return {
      scroll: ''
    }
  },
  mounted() {
    let container = this.$refs['container']
    this.scroll = new BScroll(container)
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;
  top: .88rem;
  background-color: #f5f5f5;
}

.list-title {
  font-size: .24rem;
  color: #212121;
  padding: .2rem .3rem;
}

.list-msg {
  background-color: #fff;
  position: relative;
  overflow: hidden;
}

.list-msg::before {
  content: "";
  position: absolute;
  left: 25%;
  width: 25%;
  height: 100%;
  border-left: .02rem solid #ddd;
  border-right: .02rem solid #ddd;
}

.list-msg:after {
  content: "";
  position: absolute;
  left: 75%;
  width: 0;
  height: 100%;
  border-right: .02rem solid #ddd;
}

.list-item {
  position: relative;
  width: 25%;
  font-size: .28rem;
  text-align: center;
  line-height: .9rem;
  float: left;
  border-bottom: .02rem solid #ddd;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.hot-title {
  font-size: .24rem;
  color: #212121;
  padding:.2rem .3rem;
}

.hot-list {
  background: #fff;
  font-size: .28rem;
  position: relative;
  overflow: hidden;
  color: #212121;
}

.hot-list::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 33.3333%;
  left: 33.3333%;
  border-left: .02rem solid #ddd;
  border-right: .02rem solid #ddd;
}

.hot-item {
  position: relative;
  width: 33.3333%;
  text-align: center;
  height: .9rem;
  line-height: .9rem;
  float: left;
  border-bottom: .02rem solid #ddd;
}

.sort-title {
  font-size: .24rem;
  color: #212121;
  padding: .2rem .3rem;
}

.sort-list {
  background: #fff;
  font-size: .28rem;
  position: relative;
  overflow: hidden;
  color: #212121;
}

.sort-item {
  width: 16.6666%;
  text-align: center;
  height: .9rem;
  line-height: .9rem;
  float: left;
}
</style>