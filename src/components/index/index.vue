<template>
    <div class="w1000 lg-home">
		<ul class="clearfix">
			<li class="fl" v-for="item in lists">
				<a class="imgUrl" :href="item.url" target="_blank">
					<img :src="item.imgUrl" alt="">
				</a>
				<div class="title">
					<a :href="item.url" target="_blank">{{item.title}}</a>
				</div>
				<div class="desc" v-html="item.desc"></div>
				<div class="detail" v-html="item.detail"></div>
			</li>
		</ul>
		<div>{{count}}</div>
		<span @click=add>add</span>
    </div>
</template>

<script>

    export default {
        data () {
            return {
				//lists:[],
				//count:this.$store.state.count
            }
        },
		computed: {
			count () {
				return this.$store.state.count
			},
			lists (){
				return this.$store.state.lists
			}
		},
		mounted:function(){
			let that = this
//			axios.get('./static/index.json')
//				.then(function(res){
//					that.lists = res.data
//			})
		},
		methods:{
			add:function(){
				//this.$store.commit('increment')
				this.$store.dispatch("increment")
			}
		}
    }
</script>

<style scoped>
	.lg-home{color: #fff;padding: 30px;background: #fff;color: #666;}
	.lg-home li{width: 220px;margin-right: 20px;list-style: none;border: 1px solid #d8d8d8;padding: 5px;height: 340px;margin-bottom: 20px;}
	.lg-home li .imgUrl{display: block;height: 120px;overflow: hidden;}
	.lg-home li .imgUrl img{max-width: 100%;max-height: 100%;}
	.lg-home li:nth-child(4n){margin-right: 0;}
	div.title{text-align: center;font-size: 18px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
	div.desc{text-align: center;font-size: 14px;}
	div.detail{padding: 0 8px;margin-top: 10px;}
</style>