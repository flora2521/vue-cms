<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in news" :key="index">

                <router-link :to="{name:'newInfo',params:{id:item.id}}">
                    <div>
                        <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    </div>
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>

                        <p class='mui-ellipsis'>
                            {{ item.zhaiyao }}
                            <span>点击 {{item.click}} 次数</span>
                        </p>
                    </div>
                </router-link>

            </li>
        </ul>
    </div>
</template>

<script>
    import '../../assets/style.css'
    import {Toast} from 'mint-ui';

    export default {

        data() {
            return {
                news: []
            }
        },
        created() {
            this.getNews();
        },
        methods: {
            getNews() {

                this.$http.get("getAllNews")
                    .then((res) => {
                        if (res.body.code) {
                            return this.news = res.body.news
                        }
                        return Toast("服务器开小差中")
                    }, () => {
                        return Toast("服务器暂无响应")
                    })
            }
        }

    }


</script>

<style scoped>
    ul > li:last-child {
        margin-bottom: 50px;
    }

    h1 {
        font-size: 14px;
    }

    .mui-table-view {

    }

    img {
        width: 100%;
        height: 100%;
    }

    .mui-ellipsis {
        display: flex;
        justify-content: space-between;
        color: dodgerblue;
    }


</style>
