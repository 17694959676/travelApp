// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入最快毫秒点击的JS文件
import FastClick  from 'fastclick'
FastClick.attach(document.body)
// CSS
import "./assets/css/reset.css"
import "./assets/css/iconfont.css"

// 轮播图组件引入
import Swiper from "swiper";
import 'swiper/css/swiper.min.css'

//axios
import axios from 'axios'
Vue.prototype.$http = axios

// vuex
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
