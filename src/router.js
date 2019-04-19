import VueRouter from 'vue-router'
import HomeContainer from './compand/HomeContainer/Home.vue'
import MemberContainer from './compand/MemberContainer/Member.vue'
import ShoppingContainer from './compand/ShoppingContainer/Shopping.vue'
import SearchContainer from './compand/SearchContainer/Search.vue'
import HomeNewsList from './compand/homecontainer/news/HomeNewsList.vue'
import NewsDetail from './compand/homecontainer/newsdetail/Newsdetail.vue'
import PhotoView from './compand/homecontainer/photoview/PhotoView.vue'
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
        {
            path: "/home/newslist",
            component: HomeNewsList
        },
        {
            path: '/home/newslist/newsdetail/:id',
            component: NewsDetail
        },
        {
            path: '/home/photoview',
            component: PhotoView
        }
    ],
    linkActiveClass: "mui-active"
})

export default vueRouter