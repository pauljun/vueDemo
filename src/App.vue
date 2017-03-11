<template>
	<div id="app">
		<myheader></myheader>
		<router-view></router-view>
		<myfooter></myfooter>
	</div>
</template>

<script>
import myheader from './components/base/header'
import myfooter from './components/base/footer'
export default {
	name: 'app',
	components:{
		myheader,
		myfooter,
	}
}
</script>

<style>
	*{margin: 0;padding: 0;box-sizing: border-box;-webkit-box-sizing:border-box;-webkit-box-sizing:border-box;}
	html{height: 100%;}
	body{padding: 0;margin: 0;height: 100%;background: url(./assets/bg.jpg) fixed;font-family: Microsoft Yahei;}
	#app{position: relative;min-height:100%;padding-bottom: 100px;}
	a{text-decoration: none;}
	.w1000{margin-left: auto;margin-right: auto;width: 1000px;}
	.fl{float: left;}
	.fr{float: right;}
	.clearfix:after{content: "";clear: both;display: block;height: 0;}
	li{list-style: none;}
</style>
