<template>
    <div>
        <Row>
            <Col  :lg="3" :md="2" :sm="4">
                <div class="zhanwei">占位符</div>
            </Col>
            <Col  :lg="18" :md="20" :sm="16">
                <Div  class="comment">
                <div class="imgDiv comment"
                     :style="{'background-image':'url('+newInfo.img_url+')','-moz-background-size':'100% 100%','background-size':'100% 100%'}">
                </div>
                <div :style="{'margin-top':'10px'}"><h1>{{newInfo.title}}</h1></div>
                <div :style="{'margin-top':'5px'}">{{newInfo.content}}</div>
                </Div>
                <comment-box></comment-box>
            </Col>
            <Col  :lg="3" :md="2" :sm="4">
                <div>wdawdasdw</div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";
    import comment from "../subcomponents/comment";

    export default {
        data() {
            return {
                newsId: this.$route.query.newsId,
                newInfo: {}
            };
        },
        created() {
            this.getNewInfo(this.newsId);
        },
        methods: {
            getNewInfo() {
                this.$http
                    .post("queryNewsInfo", {newsId: this.newsId}, {emulateJSON: true})
                    .then(
                        res => {
                            this.newInfo = res.body.data;
                            window.console.log(res.body.data);
                        },
                        () => {
                            Toast("服务器暂无响应");
                        }
                    );
            }
        },
        components: {
            "comment-box": comment
        }
    };
</script>

<style scoped>
    .comment {
        text-align: center;
        min-width: 300px;
        background-color: white
    }

    .zhanwei{
        width: 3000px ; text-align: center
    }
    h1 {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        font-size: 16px;
    }



    @media screen and (min-width: 1200px){
        .imgDiv {
            height: 300px;
        }
    }

    @media screen and (max-width: 1200px){
        .imgDiv {
            height: 300px;
        }
    }

    @media screen and (max-width: 992px) {
        .imgDiv {
            height: 200px;
            transition: height 1.5s;

        }
    }


    @media screen and (max-width: 768px) {
        .imgDiv {
            display: none;
        }
    }

</style>
