// 引入文件
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

// 全局路由守卫
router.beforeEach((to, from, next) => {
	let token = window.localStorage.getItem('token')
	if (to.meta.requireUser && to.meta.requireUser === 1) {
		// 判断用户登录
		if (token) {
			next()
		} else {
			next('/')
		}
	} else if (to.meta.requireUser && to.meta.requireUser === 2) {
		// 判断是否登录 登录了就不能进入当前页面
		if (token) {
			next('/usercenter')
		} else {
			next()
		}
	} else {
		// 不需要登录 直接进入首页
		next()
		// eslint-disable-next-line no-tabs
	}
})
Vue.use(Element)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
	router: router,
	// 挂载vue实例
	store,
  components: { App },
  template: '<App/>'
})
