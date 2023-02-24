<template>
  <div class="city">
  <city-header></city-header>
  <city-list 
  :cityList="cityList" 
  :hotCityList="hotCityList"
  >
  </city-list>
  </div>
</template>

<script type="text/javascript">
  import CityHeader from './pages/Header'
  import CityList from './pages/List'
  export default {
    data() {
      return {
        hotCityList:[],
        cityList:{},
      }
    },
    components: {
      CityHeader,
      CityList,
    },
    mounted(){
      this.$http.get('/api/allCity.json').then((res) => {
        let data = res.data;
        this.hotCityList = data.hotCityList
        this.cityList = data.cityList   
      })
    }
  }
</script>

<style>
  .city {
    background-color:#f5f5f5;
  }
</style>