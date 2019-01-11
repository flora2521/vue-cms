<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输出要BB的内容(最多吐槽120个字)"
                  maxlength="120">

        </textarea>

        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼 用户: 匿名用户 <span>发表时间:2017-12-12 12:12:12</span>
                </div>
                <div>
                    锄禾日当午
                </div>
            </div>
        </div>

        <mt-button plain size="large" type="danger">加载更多</mt-button>
    </div>
</template>

<script>

    export default {
        name: "comment",
        data() {
            return {}
        },
        created() {
            this.getALlComment();
        },

        methods: {
            getALlComment() {
                this.$http.post("getcomments",{newsId:1,pageNo:1},{emulateJSON: true}).then((res) => {
                    window.console.log(res.body)
                }, () => {

                })
            }
        }
    }
</script>

<style scoped>
    .cmt-container {

    }

    h3 {
        font-size: 18px;
    }

    textarea {
        font-size: 14px;
        height: 85px;
        margin-bottom: 0px;
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
