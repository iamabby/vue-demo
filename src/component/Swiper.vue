<template>
	<div class="swiper-box">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"  v-for="(item,index) in items" :key="index">
					<img :src="item.imgUrl" alt="" />
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
		data(){
			return{
				items:[]
			}
		},
		mounted() {
			new Swiper('.swiper-container', {
				direction: 'horizontal',
				loop: true,
				autoplay: "auto",

				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},

				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},

			})
			axios.get("https://www.simplelinker.com/company/simple/getBanner")
				.then((response) => {
                    this.items=response.data.result;
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