// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { ToastPlugin } from 'vux'
import VueScroller from 'vue-scroller'

Vue.use(ToastPlugin)
Vue.use(VueScroller)
Vue.config.productionTip = false

// 通过components下的index.js文件导入组件
import components from './components/';
// 对导入的组件进行全局组件注册
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})
// 路由拦截
router.beforeEach(({ meta, path }, from, next) => {
  if (path === '/' || path === '/analysis' || path === '/user') {
    router.app.isIndex = true
  } else {
    router.app.isIndex = false
  }
  // window.history.pushState({url:path},'title',path)
  let { auth = true } = meta
  let isLogin = Boolean(window.localStorage.mark_id) //true用户已登录， false用户未登录
  // if(path!=='/register'){
  //    if (auth && !isLogin && path !== '/login') {
  //       return next({path: '/login'})
  //     }

  //     if (isLogin && (path == '/login' || path == '/')) { //已登录过，则跳转到主页
  //       return next({path: '/firstpage'})
  //     }
  // }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App }
})
