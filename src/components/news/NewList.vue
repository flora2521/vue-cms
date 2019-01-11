<template>
  <div>
    <Card class="card" v-for="(item,index) in news" :key="index">
      <p slot="title">{{item.title}}</p>
      <a slot="extra">
        <Dropdown trigger="click" style="margin-left: 20px">
          <a href="javascript:void(0)">
            <router-link to="/home/newInfo">
              <Icon type="ios-more" size="20" class="Icon"/>
            </router-link>
          </a>
        </Dropdown>
      </a>
      <div style="margin-left: 20px">
        <Row>
          <Col :xs="0" :md="0" :lg="12">
            <div class="imgDiv">
              <img :src="item.imgUrl">
            </div>
          </Col>
          <Col :xs="24" :md="24" :lg="12">
            {{item.zhaiyao}}
            {{item.click}}
          </Col>
        </Row>
      </div>
    </Card>
  </div>
</template>

<script>
import "../../assets/style.css";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      news: []
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      this.$Spin.show();
      this.$http.get("queryNewss").then(
        res => {
          if (res.body.code === 20000) {
            setTimeout(() => {
              this.$Spin.hide();
            }, 2000);
            return (this.news = res.body.data);
          }
          return Toast("服务器开小差中");
        },
        () => {
          return Toast("服务器暂无响应");
        }
      );
    },
    handleSpinCustom() {
      this.$Spin.show({
        render: h => {
          return h("div", [
            h("Icon", {
              class: "demo-spin-icon-load",
              props: {
                type: "ios-loading",
                size: 18
              }
            }),
            h("div", "Loading")
          ]);
        }
      });
      setTimeout(() => {
        this.$Spin.hide();
      }, 3000);
    },
    getNewsInfo(newsId) {
      router.push("/home/newInfo");
    }
  }
};
</script>

<style scoped>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
img {
  width: 100%;
  height: 100%;
}

.imgDiv {
  width: 150px;
  height: 100px;
}
.card {
  margin: 20px 0px;
  overflow-y: auto;
  overflow-x: hidden;
}
.card:first-child {
  margin-top: 100px;
}
</style>
