<template>
	<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		<div class="w1000">
			<router-link to="/">
				<img src="" alt="">
			</router-link>
			<el-menu-item index="1">
				<router-link to="/">首页</router-link>
			</el-menu-item>
			<el-menu-item index="2">
				<router-link to="/module">组件</router-link>
			</el-menu-item>
			<el-menu-item index="3">
				<router-link to="/community">社区</router-link>
			</el-menu-item>
			<el-menu-item index="4">
				<router-link to="/center">个人中心</router-link>
			</el-menu-item>
		</div>
	</el-menu>
</template>

<script>
    export default {
        data () {
            return {
				activeIndex: '1',
				//activeIndex2: '1'
            }
        },
        components: {
			
        },
		methods:{
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
    }
</script>

<style scoped>
.el-menu--dark{background: #fcfcfc;border-bottom: 1px solid #d8d8d8;}
.el-menu-item, .el-submenu__title{font-size: 16px;}
.el-menu--horizontal .el-menu-item:hover, .el-menu--horizontal .el-submenu.is-active .el-submenu__title, .el-menu--horizontal .el-submenu:hover .el-submenu__title{border-bottom: 5px solid #20a0ff;}
</style>