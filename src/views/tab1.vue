<template lang="html">
  <div>
    <div class="about">
      <p>发现</p>
	<span>vuex中的count：{{this.$store.state.count}}</span>
    </div>
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
	  computed: {}, 
	  mounted () {
		  
	  },
	  methods: {
		},
	  components: {
			footernav
	  }
	}
</script>

<style>
	.fs16{
		font-size: 16px;
	}
</style>