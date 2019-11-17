<template>
	<div>
		<a>编辑</a>
		<a @click="deleteRow">删除</a>
	</div>
</template>

<script>
export default {
	// 搜索一个id 接受父组件上绑定的属性
	// props 接收的值跟data一样使用 可以用数组的方式和对象的方式
	// props: ['id','aa','deleteArr'],
	props: {
		id: Number,
		deleteArr: Function,
		aa: {
			type: String
		},
		index: Number
	},
	mounted () {
		console.log(this.aa)
		console.log(this.deleteArr)
	},
	methods: {
		deleteRow (id) {
			// console.log(this.id)
			this.deleteArr(this.index)
			// this.$emit('aaaa', this.index)
		}
	}
}
</script>

<style>
	a {
		cursor: pointer;
	}
</style>
