import Vue from 'vue';
import App from './App.vue';
import {router} from './router'
import 'swiper/dist/css/swiper.css';
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
  ak: 'ELvijxXQq17ukiBNABb8Qvy0coAcNiMP'
})

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);


new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
