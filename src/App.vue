<template>
  <div id="app" v-bind:class="[state]">
    <header class="header">
      <!-- <search-box></search-box> -->
    </header>
    <router-view class="maincontent" id='view'></router-view>
  </div>
</template>

<script>
// import searchBox from './component/search/index.vue'
export default {
  name: 'app',
  data () {
    return {
      state: ''
    }
  },
  created(){},
  computed: {},
  mounted () {},
  methods: {
    rollDown: function () {
      this.state = 'roll-down'
    },
    rollUp: function () {
      this.state = 'roll-up'
    }
  },
  components: {
		// searchBox
	}
}
</script>

<style>
 * {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }
 a {
   text-decoration: none;
 }
 html,body {
   width: 100%;
   height: 100%;
   margin: 0;
   padding: 0;
	 background-color: #fff;
 }
 .header{
   border-bottom: 1px solid #c3c3c3
 }
 .header >.box{
   height: 38px;
 }
 .header >.box>p{
   font-size: 16px;
 }
 .nav> li{
   font-size: 12px;
 }

.maincontent{
	width: 100%;
	margin: 0 0 40px 0;
}

/* 引入外部的css文件 */
/* @import url('style/main.css'); */
/* @import 'style/main.css'; */
</style>