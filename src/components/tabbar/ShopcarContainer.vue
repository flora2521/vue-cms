<template>
    <div>
        <div class="top">
            <Page :total="total" :page-size="pageSize" :current="current" @on-change="changePage"/>
        </div>
        <div class="Card-div">
            <Card class="Card studentCard" v-for="(item,index) in stuList" :key="index" style>
                <p slot="title">Student</p>
                <a slot="extra">
                    <Dropdown trigger="click" style="margin-left: 20px">
                        <a href="javascript:void(0)">
                            <Icon type="ios-more" size="20" class="Icon"/>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>编辑</DropdownItem>
                            <DropdownItem><a @click="deleteByStuId(item.stuId)">删除</a></DropdownItem>
                            <DropdownItem>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </a>
                <div style="margin-left: 20px">
                    <div>
                        <Tag color="red">
                            <Icon type="ios-person" size="20"/>
                            stuName
                        </Tag>
                        <span>{{ item.stuName }}</span>
                    </div>
                    <div>
                        <Tag color="red">
                            <Icon type="md-transgender" size="20"/>
                            gender
                        </Tag>
                        <span>{{ item.gender }}</span>
                    </div>
                    <div>
                        <Tag color="red">
                            <Icon type="logo-snapchat" size="20"/>
                            age
                        </Tag>
                        <span>{{ item.age }}</span>
                    </div>
                    <div>
                        <Tag color="red">
                            <Icon type="md-home" size="20"/>
                            address
                        </Tag>
                        <span>{{ item.address }}</span>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>
<script>
    import '../../assets/style.css'
    import { Toast } from 'mint-ui';
    export default {
        data() {
            return {
                flag: -2,
                visible: false,
                stuList: [],
                total: 0, //总条数
                pageSize: 7, //每页显示多少条
                current: 1 //设置 默认显示那一页
            };
        },
        created() {
            this.getStuList(1, 7);
        },
        methods: {
            deleteByStuId(stuId) {
                window.console.log("进入删除方法");
                this.$http
                    .post("http://localhost:6060/deleteStu",
                        {stuId: stuId},
                        {emulateJSON: true}).then(function (res) {
                    if (res.body.code == "200") {
                        Toast('删除成功');
                        window.console.log(res.body.stuId);
                        this.getStuList(1,7);
                    }
                }, function () {
                    window.console.log("error");
                })
            },
            isShow(isflag, index) {
                window.console.log(isflag);
                window.console.log(index);
                this.flag == index;
                window.console.log("显示");
            },
            getStuList(pageNo, pageSize) {
                this.$Loading.start();
                this.handleSpinCustom();
                this.$http
                    .get("http://localhost:6060/queryPage", {
                        params: {
                            pageNo,
                            pageSize
                        }
                    })
                    .then(
                        function (res) {

                            setTimeout(() => {
                                this.$Loading.finish();
                                this.$Spin.hide();
                                this.stuList = res.body.stuList;
                                this.total = res.body.total;
                                this.pageSize = 7;

                            }, 750);
                            window.console.log(res.body);
                        },
                        function () {
                            setTimeout(() => {
                                this.$Loading.error();
                                this.$Spin.hide();
                                window.console.log("error");
                            }, 750);

                        }
                    );
            },
            changePage(index) {
                window.console.log(index);
                this.getStuList(index, 7);
            },
            handleSpinCustom() {
                //加载动画
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
            },
            handleOpen() {
                this.visible = true;
            },
            handleClose() {
                this.visible = false;
            }
        }
    };
</script>

<style scoped>


    .studentCard {
        margin-bottom: 20px;
        border-color: #e8eaec;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    }

    .Card {
        width: 300px;
        height: 202px;
    }

    .Card-div {
        margin-bottom: 50px;
        position: absolute;
        left: 10%;
    }

    .Icon {
        position: relative;
    }

    span {
        float: right;
        padding-right: 50px;
    }

    ul {
        list-style: none;
    }

    li {
        margin: 0;
        line-height: normal;
        clear: both;
        color: #515a6e;
        font-size: 12px !important;
        white-space: nowrap;
        list-style: none;
        cursor: pointer;
    }

    .top {
        z-index: 30;
        margin-bottom: 50px;
        text-align: center;
        padding-top: 50px;
    }
</style>

