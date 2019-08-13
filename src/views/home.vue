<template lang="html">
    <div class="">
    <searchBox></searchBox>
		<slide></slide>
		<div class="wrap-icon">
			<div class="item">
				<img src="../public/images/wrap-icon1.png" alt="">
				<span>每日推荐</span>
			</div>
			<div class="item">
				<img src="../public/images/wrap-icon2.png" alt="">
				<span>歌单</span>
			</div>
			<div class="item">
				<img src="../public/images/wrap-icon3.png" alt="">
				<span>排行榜</span>
			</div>
			<div class="item">
				<img src="../public/images/wrap-icon4.png" alt="">
				<span>电台</span>
			</div>
		</div>
		<div class="wrap-favorite">
			<div class="title">
				<span>推荐歌单</span>
			</div>
			<div class="cont" >
				<div class="child-item" v-for="item in favoritelist">
					<img :src="item.al.picUrl" alt="">
					<p class="name">{{item.al.name}}</p>
				</div>
			</div>
		</div>
		<div class="wrap-favorite">
			<div class="title">
				<span>推荐歌单</span>
			</div>
			<div class="cont" >
				<div class="child-item" v-for="item in favoritelist">
					<img :src="item.al.picUrl" alt="">
					<p class="name">{{item.name}}</p>
				</div>
			</div> 
		</div>
		<footernav></footernav>
    </div>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

import slide from "../component/slide/index.vue";
import footernav from "../component/nav/index.vue";
import searchBox from '../component/search/index.vue'

export default {
  data() {
    return {
      header: "",
      content: "",
      favoritelist: []
    };
  },
  created() {},
  computed: {},
  mounted() {
    this.getlist();   
  },
  methods: {
    getlist() {
      var _this = this;
      var _this = this;
      this.http.get('cloudmusic', { type: "playlist", id: "2022110447" }).then(res => {
        let data = res.data.playlist.tracks.slice(0, 8);
        _this.favoritelist = data;
      }) 
      // _this.$ajax
      //   .get(`https://api.imjad.cn/cloudmusic/?type=playlist&id=2022110447`)
      //   .then(res => {
      //     let data = res.data.playlist.tracks.slice(0, 8);
      //     console.log(data);
      //     _this.favoritelist = data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    }
  },
  components: {
    slide,
    footernav,
    searchBox
  }
};
</script>

<style lang="css">
.wrap-icon {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 8px 0px;
}

.wrap-icon > .item {
  width: 60px;
  height: 48px;
  position: relative;
}
.wrap-icon > .item > img {
  width: 30px;
  height: 30px;
  left: 16px;
  display: block;
  position: absolute;
}
.wrap-icon > .item span {
  font-size: 14px;
  color: #c3c3c3;
  text-align: center;
  display: inline-block;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.wrap-favorite {
  width: 96%;
  margin: 0 auto;
}
.wrap-favorite .title {
  display: flex;
}
.wrap-favorite .title span {
  font-size: 0.3rem;
  padding: 10px 0 6px 8px;
}
.wrap-favorite .cont {
  display: flex;
  flex-wrap: wrap;
}
.wrap-favorite .cont .child-item {
  width: 1.65rem;
  margin: 0 0 6px 6px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 6px 6px 3px #c3c3c3;
}
.wrap-favorite .cont .child-item img {
  width: 100%;
  height: 1.5rem;
}
.wrap-favorite .cont .child-item .name {
  font-size: 0.25rem;
  color: #d3d3d3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  width: 100%;
  padding: 3px;
}
</style>