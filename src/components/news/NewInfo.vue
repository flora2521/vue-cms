<template>
    <div class="newsinfo-container">
        <h3>新闻详情</h3>
        
        <p class="subtitle">
            <!-- 内容区域 -->
            
        </p>

        <hr>
        <!-- 评论子组件区域 --->
        <comment-box></comment-box>

    </div>
</template>

<script>
    import '../../assets/style.css'
    import {Toast} from 'mint-ui';
    import comment from '../subcomponents/comment'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                newInfo: {}
            }
        },
        created() {
            this.getNewInfo(this.id);
        },
        methods: {
            getNewInfo() {
                this.$http
                    .post(
                        "",
                        {id: this.id},
                        {emulateJSON: true})
                    .then((res) => {
                        this.newInfo = res.body.data.data
                    }, () => {
                        Toast("服务器暂无响应")
                    })
            }
        },
        components: {
            'comment-box': comment
        }
    }
</script>

<style scoped>
    .newsinfo-container {
        margin-bottom: 52px;
    }

    .subtitle {
        height: 800px;
    }
</style>
