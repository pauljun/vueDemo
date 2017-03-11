import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import community from '@/components/community/'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: index
		},{
			path:'/community',
			name:'community',
			component:community
		}
	]
})
