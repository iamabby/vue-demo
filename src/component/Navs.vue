<template>
	<div>
		<!--<top></top>-->
		<div class="nav">
			<div class="mainContent">
				<img src="../assets/logo.png" alt="" class="logo" />

				<ul>
					<li>
						<router-link to="/home">首页</router-link>

					</li>

					<li>
						<router-link to="/product">产品专区</router-link>
						<!--<ul class="item">
							<li>
								<router-link to="/product/bluetooth">蓝牙模块</router-link>
							</li>
							<li>
								<router-link to="/product/apps">小程序</router-link>
							</li>
						</ul>-->
					</li>
					<li>
						<router-link to="/home">蓝牙方案</router-link>
					</li>

					<li>
						<router-link to="/home">服务支持</router-link>
					</li>

					<!--<li>
						<router-link to="/newslist">新闻动态</router-link>
					</li>-->

					<li>
						<router-link to="/about">关于我们</router-link>
					</li>

				</ul>
			</div>

		</div>
	</div>
</template>

<script>
	import Top from "./Top";
	export default {
		components: {
			name: "Navs",
			Top,
		}
	}
</script>

<style>
	.nav {
		position: relative;
		width: 100%;
		padding: 20px 0;
		background: #fff;
		border-bottom: 1px solid #ededed;
		box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
	}
	
	.mainContent {
		width: 1400px;
		margin: 0 auto;
	}
	
	.logo {
		width: 14%;
		display: inline-block;
		vertical-align: middle;
	}
	
	.nav ul {
		display: inline-block;
		vertical-align: middle;
		width: 85%;
		text-align: right;
	}
	
	.nav ul li {
		display: inline-block;
		vertical-align: middle;
		margin: 0;
		padding: 10px 40px;
		text-align: center;
	}
	
	.nav ul li a {
		display: block;
	}
	
	.nav ul li .item {
		position: absolute;
		z-index: 999;
		top: 70px;
		left: 0;
		zoom: 1;
		width: 100%;
		text-align: center;
		padding-bottom: 50px;
		line-height: 70px;
		background: rgba(255, 255, 255, 0.7);
		border-bottom: .5px solid #e5e5e5;
		display: none;
	}
	
	.nav ul li:hover .item {
		display: block;
	}
	
	.nav ul li a {
		color: #999;
	}
	
	.nav ul li:hover a {
		color: #000;
	}
	
	.nav ul li:hover ul li a:hover {
		color: red;
	}
</style>