import Vue from 'vue'
import App from './App.vue'

//引入路由模块
import VueRouter from 'vue-router'
//引入 Mint UI 库
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

//引入 iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

//导出 mui的样式

import './lib/mui/css/mui.min.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import './lib/mui/css/icons-extra.css'
//引入 路由组件
import router from './router.js'


//导入 vue-resource
import VueResource from 'vue-resource'
//安装 vue-resource
Vue.use(VueResource)




Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
