import VueRouter from 'vue-router'
import HomeContainer from './compand/HomeContainer/Home.vue'
import MemberContainer from './compand/MemberContainer/Member.vue'
import ShoppingContainer from './compand/ShoppingContainer/Shopping.vue'
import SearchContainer from './compand/SearchContainer/Search.vue'
var vueRouter = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
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