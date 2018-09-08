<template>
	<div class="swiper-box">
		<div class="swiper-container">
			<div class="swiper-wrapper">

				<!--<div class="swiper-slide">
					<img src="../assets/banner_2.jpg" />
					
				</div>
				<div class="swiper-slide">
					<img src="../assets/banner1.jpg" />
				</div>-->

				<div class="swiper-slide" v-for="(item,index) in items" :key="index">
					<img :src="item.imgUrl" />
				</div>

			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>

			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import axios from "axios";
	export default {
		components: {
			name: "Swiper",
		},
		data() {
			return {
				items: []
			}
		},
		mounted() {
			axios.get("https://www.simplelinker.com/company/simple/getBanner")
				.then((response) => {
					this.items = response.data.result;
					this.$nextTick(() => { // 下一个UI帧再初始化swiper
						new Swiper('.swiper-container', {
							loop: true,
							speed: 1000,
							autoplay: {
								delay: 3000, //3秒切换一次
								disableOnInteraction: false
							},
							observer: true, //修改swiper自己或子元素时，自动初始化swiper
							observeParents: true, //修改swiper的父元素时，自动初始化swiper

							// 如果需要分页器
							pagination: {
								el: '.swiper-pagination',
							},
							// 如果需要前进后退按钮
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
						});
					})
				})
				.then((error) => {
					console.log(error)
				})

		},

	}
</script>

<style>
	.swiper-box {
		width: 100%;
		height: 700px;
		overflow: hidden;
	}
</style>