<template>
	<div class="about">
		<img src="../assets/about-banner.jpg" alt="" class="banner" />
		<div class="mainContent">

			<div class="aboutImg">
				<img src="../assets/aboutimg2.jpg" alt="" />
			</div>

			<div class="aboutContent">
				<img src="../assets/aboutimg4.png" alt="" />
				<div class="txt">
					<p>佛山市芯谱电子科技有限公司（简称芯谱）是由专业技术专家组建，专业从事物联网（IOT）相关产品与解决方案的研发、开发、销售和工程技术服务的高科技公司。</p>
					<p>芯谱定位为创新性研发型高新技术企业，公司80%员工为技术研发人员，技术实力强，并与多家上市企业结合成为战略合作伙伴，推动传统产业产品升级，提升市场竞争力。</p>
					<p>芯谱的产品主要是IOT+小程序管理+客管系统组成，IOT有NB-IOT、LoRa、2G/3G/4G、Bluetooth、WIFI、Sub-1G等，开发各种频段的模块、标签、基站和网关产品，形成了完整的产品架构。小程序负责对本地设备的收集及控制管理，我们通过云端服务器，针对具体传统产品的应用，管理客户圈，实现产品闭环。</p>
					<p>芯谱的行业落地系统有：门锁管理系统、金融保险箱管理系统、摩托车ECU检测系统、共享车位系统等。 </p>
					<p>芯谱的使命是：用心谱写传统产业升级新时代！</p>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.about {
		width: 100%;
		overflow: hidden;
		clear: both;
	}
	
	.aboutImg {
		float: left;
		width: 30%;
		margin: 70px 0;
	}
	
	.aboutContent {
		float: right;
		width: 70%;
		margin: 70px 0;
	}
	
	.txt p {
		line-height: 38px;
		text-align: left;
		text-indent: 2em;
	}
	
	.txt p:nth-child(2) {
		line-height: 34px;
		text-align: left;
	}
</style>