import VueRouter from "vue-router";

import HomeContainer from "./components/tabbar/HomeContainer";
import MemberContainer from "./components/tabbar/MemberContainer";
import SearchContainer from "./components/tabbar/SearchContainer";
import ShopcarContainer from "./components/tabbar/ShopcarContainer";
import Crossdomain from "./components/tabbar/Crossdomain";
import NewList from "./components/news/NewList";
import NewInfo from "./components/news/NewInfo";

const router = new VueRouter({
    routes: [
        {path: "/", redirect: "/home/newlist"},
        {path: "/home", component: HomeContainer},
        {path: "/member", component: MemberContainer},
        {path: "/shopcar", component: ShopcarContainer},
        {path: "/search", component: SearchContainer},
        {path: "/Crossdomain", component: Crossdomain},
        {path: "/home/newlist", component: NewList},
        {path: "/home/newInfo",name:"newInfo", component: NewInfo}
    ],
    linkActiveClass: "mui-active" //覆盖默认的路由高亮类 默认的类叫做 router-link-active
});


export default router;
