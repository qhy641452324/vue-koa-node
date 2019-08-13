<template lang="html">
  <div class="search-box">
		<span class="p">搜索 </span>
		<input class="ipt" />
		<img src="../../public/images/search.png"></img>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {
  },
  components: {}
}
</script>

<style lang="css" >
.search-box{
    height: 38px;
		display: flex;
		background: lightgrey;
}
.search-box .p{
	display: inline-block;
	color: #999;
	font-size: 15px;
	padding: 8px;
}
.search-box .ipt{
	border: 0;  
	outline: none; 
	/* background-color: rgba(0, 0, 0, 0);// 透明背景 */
	display:block;
	border: 1px solid #C3C3C3;
	border-radius: 15px;
	height: 30px;
	width: 5.5rem;
	margin-top: 4px;
	padding: 0 15px;
}
.search-box input:focus{
       outline: none;
}
.search-box img{    
   width: 20px;
  height: 18px;
  margin: 8px;}
</style>