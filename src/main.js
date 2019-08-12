import Vue from 'vue'
import App from './App'
import router from './routes/index.js'
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
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
