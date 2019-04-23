import VueRouter from 'vue-router'
import HomeContainer from './compand/HomeContainer/Home.vue'
import MemberContainer from './compand/MemberContainer/Member.vue'
import ShoppingContainer from './compand/ShoppingContainer/Shopping.vue'
import SearchContainer from './compand/SearchContainer/Search.vue'
import HomeNewsList from './compand/homecontainer/news/HomeNewsList.vue'
import NewsDetail from './compand/homecontainer/newsdetail/Newsdetail.vue'
import PhotoView from './compand/homecontainer/photoview/PhotoView.vue'
import PhotoViewDetail from './compand/homecontainer/photoviewdetails/PhotoViewDetails.vue'
import GoodsLists from './compand/homecontainer/goods/GoodsLists.vue'
import GoodsDetails from './compand/homecontainer/goodsdetails/GoodsDetails.vue';
import GoodsDesc from './compand/homecontainer/goodsdesc/GoodsDesc.vue';
import GoodComment from './compand/homecontainer/goodscomment/GoodComment.vue';
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
        },
        {
            path:'/home/photoview/photodetails/:id',
            component:PhotoViewDetail
        },{
            path:'/home/goodslists',
            component: GoodsLists
        },{
            path:'/home/goodslists/goodsdetails/:id',
            component:GoodsDetails
        },{
            path:'/home/goodslists/goodsdetails/goodsdesc/:id',
            component:GoodsDesc,
            name:'goodsdesc'
        },{
            path:'/home/goodslists/goodsdetails/goodscomment/:id',
            component:GoodComment,
            name:'goodscomment'
        }
    ],
    linkActiveClass: "mui-active"
})

export default vueRouter