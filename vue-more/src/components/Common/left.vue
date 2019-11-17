<template>
  <div class="content-left">
		<div class="zk-list">
			<el-row class="tac">
				<el-col :span="24">
					<el-menu
						default-active="2"
						class="el-menu-vertical-demo"
						@open="handleOpen"
						@close="handleClose"
					>
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span><router-link to="Index">首页</router-link></span>
							</template>
						</el-submenu>
						<el-menu-item index="2">
							<i class="el-icon-menu"></i>
							<span slot="title"><router-link to="/">星河新闻</router-link></span>
						</el-menu-item>
						<el-menu-item index="3">
							<i class="el-icon-document"></i>
							<span slot="title"><router-link to="/dynamica">业务动态</router-link></span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-document"></i>
							<span slot="title"><router-link to="/usercenter">个人中心</router-link></span>
						</el-menu-item>
						<el-menu-item index="5">
							<i class="el-icon-setting"></i>
							<span slot="title">系统管理</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.zk-list {
  height: 100%;
  width: 100%;
  background: #eeeeee;
}
.zk-list ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.zk-list li {
  height: 50px;
  line-height: 48px;
  padding-left: 1em;
  list-style: none;
  border-bottom: 1px solid #e2e2e2;
}
</style>
