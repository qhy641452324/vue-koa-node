<template lang="html">
	<div>
		<div class="vedio-box">
			<video-player id="myVideo" 
			class="video-player vjs-custom-skin" 
			ref="videoPlayer" 
			:playsinline="true" 
			:options="playerOptions">
			</video-player>
		</div>
		
		<div class="list-wrap">
			<div >
				<table class="item" >
					<thead class="title">
						<td><span class="index ">序号</span></td>
						<td colspan="2"><span class="song ml6">歌曲</span></td>
						<td><span class="singer ml6">歌手</span></td>
						<td><span class="zj ml6">专辑</span></td>
					</thead>
					<tbody>
						<tr v-for="(item, index) in listinfos">
							<td style="text-align: center"><span class="index">{{index+1}}</span></td>
							<td><img src="../public/images/video.png" alt=""></td>
							<td><span class="song">{{item.name}}
									<img v-if="item.mv!=0" v-on:click="play(item.mv)" src="../public/images/video3.png" alt="">
								</span>
							</td>
							<td><span class="singer">{{item.ar[0].name}}</span></td>
							<td><span class="zj">{{item.al.name}}</span></td>
						</tr>
					</tbody>
					
				</table>
			</div>
		</div>
		<footernav></footernav>
	</div>
</template>

<script>
	import Vue from 'vue'
	import footernav from '../component/nav/index.vue'
	import VideoPlayer from 'vue-video-player'
	require('video.js/dist/video-js.css')
	require('vue-video-player/src/custom-theme.css')
	Vue.use(VideoPlayer)
	export default {
		data() {
			return {
				listinfos: [],
				playerOptions:{}
			}
		},
		created() {

		},
		computed: {},
		mounted() {
			this.getlist();
			this.play();
		},
		methods: {
			getlist(){
				var _this = this;
				this.http.get('cloudmusic', { type: "playlist", id: "988690134" }).then(res => {
					let infos = res.data.playlist.tracks;
					_this.listinfos = infos;
				})
			},
			play(id) {
				var _this = this;
				var ids = id? id:'148005'
				_this.http.get('cloudmusic', { type: "mv", id: ids }).then(res => {
					let infos = res.data.data;
					_this.playerOptions = {
						aotoplay:true,
						controls:true,
						loop:true,
						muted: true,
						language: 'en',
						preload: 'auto', 
						playbackRates: [0.7, 1.0, 1.5, 2.0],
						sources: [{
							type: "video/mp4",
							src: infos.brs['240']
						}],
						notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
						poster: infos.cover
					}
				})
				setTimeout(() => {
					_this.$refs.videoPlayer.player.play()//播放
				}, 100);
				
			}
		},
		components: {
			footernav
		}
	}
</script>

<style>

.vedio-box{
	height: 240px;
}
.ml6{
	padding-left: 15px !important;
}
.list-wrap .title{
	background-color: #f7f7f7;
	height: 35px;
	line-height: 35px;
	font-weight: bold;
	border-bottom: 1px solid #c3c3c3;
}
.list-wrap .item{
	font-size: .26rem;
	color: #333;
	margin: 0 auto;
}
table{
	border: none;
	border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
}
 table tbody tr:nth-child(odd){
	background-color: #f7f7f7;
}
 table tbody tr{
	 height: 30px;
 }
.list-wrap .index{
	width: .6rem;
	text-align: center;
}
.list-wrap .item .song{
	width: 35%;
	text-align: left;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
	padding:0 6px;
}
.list-wrap .item img{
	width: 12px;
	height: 12px;
	contain: content;
	margin: 0 6px;
}
.singer{
	width: 1.5rem;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.zj{
	width: 35%;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
	margin-left: .3rem;
}
</style>