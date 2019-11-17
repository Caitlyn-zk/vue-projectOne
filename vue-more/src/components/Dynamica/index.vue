<template>
  <div>
      <router-link to="/dynamica/tech">技术方向</router-link>
      <router-link to="/dynamica/pro">行政方向</router-link>
      <router-view></router-view>
      <div>aj;oigfrah;eghra</div>
			<div>{{counts}}</div>
      <router-view name="indexList"></router-view>
			<div></div>
  </div>
</template>

<script>
export default {
	computed: {
		counts () {
			return this.$store.state.counts
		}
	}
}
</script>

<style>

</style>
