<template>
  <div id="app" v-bind:class="[state]">
    <header class="header">
      <div class="box">
        <p>app</p>
      </div>
    </header>
    <router-view class="view" id='view'></router-view>
    <footer class="footer">
      <ul>
          <li><router-link to='/home'>首页</router-link></li>
          <li><router-link to='/tab1'>tab1</router-link></li>
          <li><router-link to='/tab2'>tab2</router-link></li>
          <li><router-link to='/about'>关于</router-link></li>
      </ul>
    </footer>
  </div>
</template>

<script>
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
  components: {}
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
   overflow: hidden;
   margin: 0;
   padding: 0;
 }
 .header{
   border: 1px solid #c3c3c3
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


.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 38px;
    line-height: 38px;
    border-top: 1px solid #c3c3c3;
}
.footer li{
    float: left;
    text-decoration: none;
    font-size: 14px;
    width: 25%;
    text-align: center;
    padding:0;
    margin:0;
    list-style:none
}

</style>