<template>
    <div class="cmt-container" style="margin-top: 15px">
        <hr style="background-color: #e8eaec;">
        <div class="textDemo">
            <Input v-model="comment" type="textarea" :rows="rows" placeholder="Enter something..." autosize
            />
        </div>
        <div :style="{'text-align': 'right'}">
            <Button size="large" type="default">Default</Button>
        </div>
        <Scroll :on-reach-bottom="handleReachEdge">
            <div class="cmt-list">
                <div class="cmt-item" v-for="(item,index) in comments" :key="index">
                    <div class="cmt-title">
                        第一楼 用户: {{item.user_name}} <span>发表时间:{{item.add_time}}</span>
                    </div>
                    <div>
                        {{item.content}}  id {{item.id}}
                    </div>
                </div>
            </div>
        </Scroll>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";

    export default {
        name: "comment",
        data() {
            return {
                comment: '',
                rows: 1,
                buttonflag: 'none',
                comments: [],
                commentsTest:[],
                page: 1
            }
        },
        created() {
            this.getAllComment(this.page);
        },

        methods: {
            getAllComment() {
                this.$http.post("queryComments", {
                    search: 'newsId:' + this.$route.query.newsId,
                    page: this.page
                }, {emulateJSON: true}).then((res) => {
                    window.console.log(res.body);
                    this.comments = res.body.data.list
                }, () => {
                    Toast("服务器异常");
                })
            },
            getAllCommentTest(){
                this.$http.post("queryComments", {
                    search: 'newsId:' + this.$route.query.newsId,
                    page: this.page
                }, {emulateJSON: true}).then((res) => {
                    window.console.log(res.body);
                    this.commentsTest = res.body.data.list
                }, () => {
                    Toast("服务器异常");
                })
            }
            ,
            handleReachEdge() {
                this.page++;
                window.console.log(this.page);
                return new Promise(resolve => {
                    setTimeout(() => {
                        this.getAllCommentTest(this.page);
                        for(var i = 0; i < this.commentsTest.length;i++){
                            this.comments.push(this.commentsTest[i])
                        }
                        resolve("获取成功");
                    }, 2000);
                });
            }

        }
    }
</script>

<style scoped>
    .cmt-container {
        min-width: 300px;
    }

    h3 {
        font-size: 18px;
    }

    .cmt-list {
        background-color: white;
        margin: 10px 0px;
    }

    .cmt-item {

    }

    .cmt-title {
        font-size: 14px;
        background-color: #aaaaaa;
        display: flex;
        justify-content: space-between;
    }


</style>
