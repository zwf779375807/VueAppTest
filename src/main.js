// 这是 main.js 我们的项目js入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from './App.vue'
import 'mint-ui/lib/style.css'
import './lib/css/mui.css'
import {
    Header
} from 'mint-ui'

Vue.component(Header.name, Header)

var vm = new Vue({
    el: "#app",
    render: c => c(app)
})