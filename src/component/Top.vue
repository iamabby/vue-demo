<template>
	<div class="topBar">
		<div class="mainContent">
			<div class="welcom">欢迎光临本店</div>
			<div class="topRight">
				<router-link to="/login">登录</router-link>
				<router-link to="/register">注册</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
			name: "Top",
		}
	}
</script>

<style>
	.topBar {
		width: 100%;
		padding: 10px 0;
		font-size: 14px;
		color: #fff;
		background: #3c3b3a;
	}
	
	.mainContent {
		width: 1400px;
		margin: 0 auto;
	}
	
	.welcom {
		display: inline-block;
		vertical-align: center;
		width: 40%;
		text-align: left;
	}
	
	.topRight {
		display: inline-block;
		vertical-align: center;
		width: 58%;
		text-align: right;
	}
</style>