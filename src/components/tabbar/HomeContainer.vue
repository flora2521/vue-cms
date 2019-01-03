<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
                <img :src="item.img" alt>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 到 六宫格 -->
        <div>
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/newlist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body-font-size mui-media-body ">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"></span>
                    <div class="mui-media-body">图片分享</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                </a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";

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
                this.$http.get("getImgList").then(result => {
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
                        "postPam",
                        {name: "张三"},
                        {emulateJSON: true}
                    )
                    .then(
                        function (res) {
                            window.console.log(res.body);
                        },
                        function () {
                            window.console.log('error');
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

    .mui-media-body-font-size {
        font-size: 12px;
    }

</style>
