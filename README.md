# vue-cms

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### 制作首页app
```
1.完成 Header 区域 使用 Mint-UI 中的 Header 组件
2.制作底部的 Tabbar 区域 使用的的是 Mui 的 Tabbar
3.要在 中间 放i个 router-vive 来 展示路由匹配到的组件
```
### 改造 tabbar 为 router-link

### 设置 路由高亮

### 点击 tabbar 中的路由链接展示 对应的路由组件

### 制作首页轮播图

### 加载首页轮播的数据
```
1.获取数据 使用 vue-resource 
2.vue-resource 的 this.$ttp.get 获取数据
3.获取数据 保存到 data 上 
4. 使用 v-for 循环渲染 每一个 组件的 v-for 需要指定一个 key值 
```

### 新闻资讯 页面 制作
```
1.绘制页面
2.使用 vue-resource 获取数据
3.渲染数据
```

### 实现新闻资讯列表点击跳转到新闻详情
```$xslt
1.把列表的每一项改造为 router-link 同时在调准的时候应该提供唯一的ID标识符
2.创建新闻详细的组件页面 newsInfo
3.在路由模块中讲新闻详情的路由地址和组件页面对应起来
```
### 单独封装一个 comment.vue 评论子组件 
```
1.先创建一个单独的 comment.vue 组件模块
2.在需要的 comment 组件的页面中 手动导入 comment 组件
3.import comment from './comment.vue'
4.在父组件中 使用 comment 属性 将刚才导入的 comment组件 注册为自己子组件
5.在注册子组件的时候 注册名称 以标签形式 在页面引入即可
``` 
