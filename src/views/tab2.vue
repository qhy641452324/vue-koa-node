<template lang="html">
  <div>
    <div class="about">
      <p>视频</p>
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