import Vue from 'vue'
import App from './App'
import router from './routes/index.js'
import store from './store/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import axios from 'axios'  
import qs from 'qs'     
Vue.prototype.$ajax=axios 
Vue.prototype.$qs=qs 

import http from './config/http'
Vue.prototype.http = http   //放入全局


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App},
  router,
  store
})
function responsive() {
  if (window.innerWidth > 750) {
    document.getElementsByTagName('html')[0].style.fontSize = 100 + 'px';
  } else {
    document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 7.5 + 'px';
  }
};
responsive();
window.onresize = responsive;
