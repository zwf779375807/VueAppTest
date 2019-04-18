import VueRouter from 'vue-router'
import HomeContainer from './compand/Home.vue'
import MemberContainer from './compand/Member.vue'
import ShoppingContainer from './compand/Shopping.vue'
import SearchContainer from './compand/Search.vue'
var vueRouter = new VueRouter({
    routes: [{
            path: '/home',
            component: HomeContainer
        },
        {
            path: '/member',
            component: MemberContainer
        },
        {
            path: '/shopping',
            component: ShoppingContainer
        },
        {
            path: '/search',
            component: SearchContainer
        },
    ],
    linkActiveClass: "mui-active"
})

export default vueRouter