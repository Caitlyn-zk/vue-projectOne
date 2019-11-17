<template>
  <div>个人中心
		<input type="text" name="" id="" v-model="todo">
		<button @click="addTodo()">增加</button>
		<div v-for="(item,key) in list" :key="key">{{item}}---<button @click="removeData(key)">删除</button></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			todo: '',
			list: []
		}
	},
	methods: {
		addTodo () {
			// 1，获取输入框的值   2，把文本框的值push到list里面
			this.list.push(this.todo)
			this.todo = ''
		},
		removeData (key) {
			this.list.splice(key, 1)// splice      js操作数组的方法
		}
	}
}
</script>

<style>

</style>
