// 入口文件
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root = 'http://www.liulongbin.top:3005';

// 导入mui的样式

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
import {Header, Swipe, SwipeItem, Button} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(Button.name, Button);
Vue.component(SwipeItem.name, SwipeItem);



import app from './App.vue'
import router from './router.js'
import moment from 'moment'

Vue.filter("resetDate", function(date, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(date).format(pattern)
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})