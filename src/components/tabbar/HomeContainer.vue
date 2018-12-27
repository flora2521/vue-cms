<template>
  <div>
    <h3>HomeContainer</h3>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbo();
    this.postPar();
  },
  methods: {
    getLunbo() {
      this.$http.get("http://localhost:6060/getImgList").then(result => {
        if (result.body.code === "ok") {
          // 成功了
          window.console.log(result.body.message);
          this.lunbotuList = result.body.message;
        } else {
          // 失败的
          Toast("获取轮播失败");
        }
      });
    },
    postPar() {
      this.$http
        .post(
          "http://localhost:6060/postPam",
          { name: "张三"},
          { emulateJSON: true }
        )
        .then(
          function(res) {
            window.console.log(res.body);
          },
          function(res) {
            window.console.log(res.body);
          }
        );
    }
  }
};
</script>

<style scoped>
.mint-swipe {
  height: 200px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
