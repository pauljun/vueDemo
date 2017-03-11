<template>
	<el-carousel :interval="5000" arrow="always" height="500px" v-loading.body="loading" :data="arr">
		<el-carousel-item v-for="item in arr">
			<img :src="item.url" alt="">
		</el-carousel-item>
	</el-carousel>
</template>
<script>
    export default {
        data () {
            return {
				arr:[{
						url:"http://www.ofweek.com/topic/company/2017/OSRAM/images/banner.jpg"
					},{
						url:"http://www.ofweek.com/topic/company/2017/OSRAM/images/banner.jpg"
				}],
				loading: true
            }
        },
        components: {
        },
		mounted:function(){
			setTimeout(() => {
          		this.loading = false;
        	}, 3000);
		}
    }
</script>
<style>  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>