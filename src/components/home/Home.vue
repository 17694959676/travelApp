<template>
  <div class="home">
    <Home-Header></Home-Header>
    <Home-Swiper :swiperList="swiperList"></Home-Swiper>
    <Home-Icon :iconsList="iconsList"></Home-Icon>
    <Home-Location></Home-Location>
    <Home-Activity></Home-Activity>
    <Home-hot :hotList="hotList"></Home-hot>
    <Home-like :likeList="likeList"></Home-like>
    <Home-vacation :vacationList="vacationList"></Home-vacation>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import HomeHeader from './pages/Header.vue'
import HomeSwiper from './pages/SwiperDemo'
import HomeIcon from './pages/Icons'
import HomeLocation from './pages/Location'
import HomeActivity from './pages/Activity'
import HomeHot from './pages/Hot'
import HomeLike from './pages/Like'
import HomeVacation from './pages/Vacation'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeLocation,
    HomeActivity,
    HomeHot,
    HomeLike,
    HomeVacation,
  },
  data() {
    return {
      swiperList: [],
      iconsList: [],
      hotList: [],
      likeList: [],
      vacationList: [],
      changeCity:''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHttp() {
      this.$http.get("/api/dataHome.json")
        .then((res) => {
          const data = res.data.data;
          data.forEach((item, index) => {
            if (item.city == this.city) {
              this.swiperList = item.swiperList;
              this.iconsList = item.iconsList;
              this.hotList = item.hotList;
              this.likeList = item.likeList;
              this.vacationList = item.vacationList;
            }
          });
        })
    }
  },
  mounted() {
    this.changeCity = this.city
    this.getHttp()
  },
  activated() {
    // console.log(this.city,this.changeCity);
   if(this.changeCity != this.city ){
    this.getHttp();
    this.changeCity = this.city
   }
  }
}
</script>
<style scoped>
.home {
  background-color: #f5f5f5;
}
</style>