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


import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state: {
        car: car
    },
    mutations: {
        addtocar(state, goodsinfo) {
            var flag = false
            state.car.some(item => {
                if (item.id === goodsinfo.id) {
                    item.count += goodsinfo.count;
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsinfo)
            }

            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: {
        getCarCount(state) {
            var c = 0
            state.car.forEach(item => {
                if (item.selectedStatus) {
                    c += item.count
                }
            })
            return c
        },
        getCarInfo(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count;
            })
            return o;
        }
    }
})

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router,
    store
})