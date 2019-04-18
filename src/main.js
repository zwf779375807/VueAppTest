// 这是 main.js 我们的项目js入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResoure from 'vue-resource'
Vue.use(VueResoure)
Vue.use(VueRouter)
import app from './App.vue'
import 'mint-ui/lib/style.css'
import './lib/css/mui.css'
import './lib/css/icons-extra.css'
import {
    Header
} from 'mint-ui'

import {
    Swipe,
    SwipeItem
} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from './router.js'

Vue.component(Header.name, Header)

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})