<template lang="html">
  <div>
    <div class="about">
	  <button><router-link to='/about/child'>嵌套路由测试</router-link></button>
      <p>About Me</p>
	<h3>{{$store.state.count}}</h3>
	<div>
		<button @click="handleAddClick(10)">增加</button>
		<button @click="handleReduceClick(10)">减少</button>
	</div>
	<div>
		<button @click="handleActionsAdd(10)">异步增加</button>
		<button @click="handleActionsReduce(10)">异步减少</button>
	</div>
    </div>
	<router-view></router-view>
	<footernav></footernav>
  </div>
</template>

<script>
	import footernav from '../component/nav/index.vue'
	
	export default {
	  data () {
	    return {
	      header:'',
	      content:'',
				favoritelist:[]
	    }
	  },
	  created (){
	
	  },
	  computed: {
		  count() {
			  return this.$store.getters.getterCount
		  }
	  }, 
	  mounted () {
	  },
	  methods: {
		  //状态管理测试
		  handleAddClick(n) {
			  this.$store.commit('mutationsAddCount', n);
		  },
		  handleReduceClick(n) {
			  this.$store.commit('mutationsReduceCount', n);
		  },
		  //actions
		  handleActionsAdd(n) {
			  this.$store.dispatch('actionsAddCount', n)
		  },
		  handleActionsReduce(n) {
			  this.$store.dispatch('actionsReduceCount', n)
		  }
	  },
	  components: {
			footernav
	  }
	}
</script>