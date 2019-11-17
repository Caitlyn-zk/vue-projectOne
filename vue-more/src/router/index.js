/**
 * 1.安装vue-router
 * 2.创建router文件 创建index.js配置文件
 * 3.在路由文件中引入配置文件 挂载路由
 * 4. 在组件要显示的地方挂载 <router-view></router-view>
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Right from 'components/Right'
import Left from 'components/Common/left'
import Index from 'components/Index'
import IndexList from 'components/Index/IndexList.vue'
import Dynamica from 'components/Dynamica'
import Tech from 'components/Dynamica/tech.vue'
import Pro from 'components/Dynamica/pro.vue'
import Detail from 'components/Right/details.vue'
import User from 'components/User'
import Login from 'components/Index/login.vue'

Vue.use(VueRouter)

/* eslint-disable no-new */
export default new VueRouter({
  // routes 书写路由列表
  routes: [{
    path: '/Index',
    components: {
      // 默认显示的组件
      default: Index,
			IndexList: IndexList,
			Left: Left
    }
  }, {
    path: '/',
    components: {
			default: Right,
			Left: Left
		}
  }, {
    path: '/dynamica',
    components: {
      default: Dynamica,
			Index: Index,
			Left: Left
    },
    children: [{
      // 1. 二级路由为空 默认继承父级路由 ‘’
      // 2. 当第个字符不是/时 继承父级路由 加上当前字符Tech
      // 3. / 表示根路径 和父级没有关系
      path: 'tech',
			component: Tech,
			meta: {
				requireUser: false
			}
    }, {
      // 1. 二级路由为空 默认继承父级路由 ‘’
      // 2. 当第个字符不是/时 继承父级路由 加上当前字符Tech
      // 3. / 表示根路径 和父级没有关系
      path: 'pro',
      component: Pro,
      meta: {
        requireUser: false
      }
    }]
  }, {
		// path: '/detail:id',
		path: '/detail',
    component: Detail
  }, {
    path: '/usercenter',
		components: {
			default: User,
			Left: Left
		},
    meta: {
      requireUser: 1
    }
    // 路由守卫方法
    // beforeEnter: (to, from, next) => {
    //   let token = window.localStorage.getItem('token')
    //   if (token) {
    //     next()
    //   } else {
    //     next('/index')
    //   }
    //   // next()
    // }
	}, {
		path: '/login',
		component: Login,
		meta: {
			requireUser: 2
		}
	}]
})
