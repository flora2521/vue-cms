<template>
    <div>
        <h3>新闻详情</h3>
        {{id}}
        {{ newInfo.content }}
    </div>
</template>

<script>
    import '../../assets/style.css'
    import {Toast} from 'mint-ui';

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
                        "getNewInfo",
                        {id: this.id},
                        {emulateJSON: true})
                    .then((res) => {
                        this.newInfo = res.body.newInfo
                    }, () => {
                        Toast("服务器暂无响应")
                    })
            }
        }
    }
</script>

<style scoped>

</style>
