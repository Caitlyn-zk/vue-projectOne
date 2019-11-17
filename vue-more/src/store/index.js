import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// vuex 中存储的数据
	state: {
		counts: 0,
		chengeFormadd: [{
			name: '张三',
			age: 23,
			id: 1
		}]
	},
	// 只有通过mutations中的方法去改变state
	mutations: {
		chengeCount (state) {
			state.counts++
		}
	},
	actions: {
	},
	getters: {

	}
})
