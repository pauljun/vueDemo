import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		count:0,
		lists:[]
	},
	mutations:{
		increment(state){
			state.count++
		},
		getList(state,arr){
			state.lists = arr
		}
	},
	getter:{
		count: state=>state.count,
		lists: state=>state.lists
	},
	actions: {
		increment (context) {
			context.commit('increment')
		},
		getList (context,data) {
			context.commit('getList',data)
		}
	}
});
store.dispatch('increment')

//首页列表页
axios.get('./static/index.json')
	.then(function(res){
		store.dispatch("getList",res.data)
})
export default store;