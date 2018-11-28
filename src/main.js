// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import App from './components/main/main'
import 'vue-layer-mobile/need/layer.css'
import layer from 'vue-layer-mobile'
import VueAnalytics from 'vue-analytics'
import '@/assets/css/reset.css'
import '@/assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import 'babel-polyfill'
import promise from 'es6-promise'
import router from './router/index.js'

Vue.use(layer)
Vue.use(ElementUI)
promise.polyfill()

Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-122476824-1'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
