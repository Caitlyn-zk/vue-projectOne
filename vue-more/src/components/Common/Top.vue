<template>
  <div class="zk-title">
    <img src="../stater/img/logo2.jpg" />
    <div class="zk-title-right">
      <div>
        <p>
          欢迎：
          <span class="zk-title-name">张三</span>
        </p>
        <div v-if="!isLogin">
					<router-link to="/login">登录</router-link>
					<a>注册</a>
				</div>
				<div v-else>
					<a>12334@qq.com</a>
					<a>退出登录</a>
				</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			isLogin: true
		}
	}
}
</script>

<style>
.zk-title {
  width: 88%;
  height: 84px;
  padding-left: 6%;
  padding-right: 6%;
  border-bottom: 1px solid red;
}
.zk-title img {
  width: 120px;
  height: 83px;
}
.zk-title-right {
  float: right;
}
.zk-title-name {
  color: crimson;
}
</style>
