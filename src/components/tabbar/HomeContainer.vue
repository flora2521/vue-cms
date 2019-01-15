<template>
    <div class="card">
        <Carousel v-model="value1" loop autoplay >
            <CarouselItem v-for="(item,index) in imgList" :key="index">
                <div class="CarouselItem">
                    <img :src="item" />
                </div>
            </CarouselItem>

        </Carousel>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";

    export default {
        data() {
            return {
                imgList: [],
                value1: 0
            };
        },
        created() {
            this.getImgs();
        },
        methods: {
            getImgs() {
                this.$http.get("queryImgs").then(result => {
                    if (result.body.code === 20000) {
                        // 成功了
                        this.imgList = result.body.data;
                    } else {
                        // 失败的
                        Toast("获取轮播失败");
                    }
                });

            }
        }
    };
</script>

<style scoped>
    .CarouselItem{
        height: 250px;
    }
    img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
    }
    .card {
        margin: 20px 0px;
    }


</style>
