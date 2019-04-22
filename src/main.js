// 这是 main.js 我们的项目js入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResoure from 'vue-resource'
import moment from 'moment'
Vue.use(VueResoure)
Vue.use(VueRouter)
import app from './App.vue'
import 'mint-ui/lib/style.css'
import './lib/css/mui.css'
import './lib/css/icons-extra.css'
/* import {
    Header,Button
} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
import {
    Swipe,
    SwipeItem
} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem); */
import Mint from 'mint-ui';
Vue.use(Mint);


import router from './router.js'



Vue.filter('formatDate', function (date, pattern = 'YYYY-MM-DD hh:mm:ss') {
    return moment(date).format(pattern)
})
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})