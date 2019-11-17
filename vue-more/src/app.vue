<template>
  <div>
    <Top></Top>
    <div class="content">
     <router-view name="Left"></router-view>
      <div class="conten-right">
        <div>
          <router-view></router-view>
        </div>
        <router-view name="Index"></router-view>
        <router-view name="IndexList"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import Index from 'components/Index'
import Top from 'components/Common/Top.vue'
// import Left from 'components/Common/left.vue'
import Index from 'components/Index/index.vue'

export default {
  components: {
    // Index,
    Top,
    Index
  }
}
</script>

<style>
.content {
  height: 100%;
  width: 100%;
}
.content-left {
  width: 30%;
  float: left;
  height: 300%;
}
.content-right {
  width: 70%;
  float: right;
  height: 100%;
}
</style>
