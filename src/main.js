// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import iview from 'iview'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
