<template>
  <div id="app" class="layout">
    <!-- 顶部 Header 区域  -->
    <div class="nav">
      <AppHeader></AppHeader>
    </div>
    <div class="layout-content">
      <Content :style="{padding: '0 50px'}">
        <transition>
          <router-view></router-view>
        </transition>
      </Content>
    </div>
    <!-- 底部 tabbar 区域 -->
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./components/Layout/AppHeader";
import AppFooter from "./components/Layout/AppFooter";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    AppHeader: AppHeader,
    AppFooter: AppFooter
  }
};
</script>

<style>
.layout {
  width: 60%;
  margin: 0 auto;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo {
  width: 80px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  width: 450px;
  margin: 0 auto;
  margin-right: 20px;
}

.layout-footer-center {
  text-align: center;
}
.layout-content {
  margin-top: 62px;
}
.nav {
  position: fixed; /*固定作用*/
  top: 0px;
  width: 60%;
  z-index: 999;
}
</style>

<style scoped>
</style>

