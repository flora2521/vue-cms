import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
const router = new VueRouter({
    routes: [
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shopcar', component: SearchContainer},
        {path: '/search', component: ShopcarContainer}
    ],
    linkActiveClass: 'mui-active'  //覆盖默认的路由高亮类 默认的类叫做 router-link-active
})




export default router