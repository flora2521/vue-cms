<template>
    <div id="app" class="container">
        <!-- 顶部 Header 区域  -->
        <div>
            <AppHeader></AppHeader>
        </div>
        <div class="app-header-fixed">
            <div class="app-aside">左边</div>
            <div class="app-content-body" style="display: table">
                <Content>
                    <div class="center-part">
                        <div class="wrapper">
                            <header>
                                <h1>出来挨打</h1>
                                <small style="font-size: 12px">说了出来挨打</small>
                            </header>
                        </div>
                        <div class="app-center-routingview">
                            <router-view></router-view>
                        </div>
                    </div>
                    <div class="aside-bar" style="display: table-cell; width: 239px">右边</div>
                    <!--
                    <Row>
                        <Col :lg="18" :md="17" :sm="24" :xs="24">
                            <div class="center-part">
                                <div class="wrapper">
                                    <header>
                                        <h1>出来挨打</h1>
                                        <small style="font-size: 12px">说了出来挨打</small>
                                    </header>
                                </div>
                                <div class="app-center-routingview">
                                    <router-view></router-view>
                                </div>
                            </div>
                        </Col>
                        <Col :lg="6" :md="7" :sm="0" :xs="0">
                            <div class="aside-bar">右边</div>
                        </Col>
                    </Row>
                    -->
                </Content>
            </div>
        </div>
        <div class="app-footer">
            <!-- 底部 tabbar 区域 -->
            <AppFooter></AppFooter>
        </div>
    </div>
</template>

<script>
    import AppHeader from "./components/Layout/AppHeader";
    import AppFooter from "./components/Layout/AppFooter";

    export default {
        name: "app",
        data() {
            return {};
        },
        components: {
            AppHeader: AppHeader,
            AppFooter: AppFooter
        }
    };
</script>

<style>
    /*容器头部*/
    .app-header-fixed {
        margin-top: 60px;
    }

    /*容器*/
    .container {
        box-shadow: 0 0 30px rgba(0, 0, 0, .3);
        margin: 0 auto;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        height: auto;
        min-height: 100%;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }

    /*头部*/
    .app-header {
        z-index: 499;
        position: fixed;
        margin-top: -1px;
        max-height: 60px;
    }

    /*导航栏*/
    .navbar {
        min-width: 1300px;
    }

    /*内容正文*/
    .app-content-body {
        margin-left: 199px;
        display: table;

        border-spacing: 0;
    }

    /*中心*/
    .center-part {
        display: table-cell;
    }

    /*右边旁栏*/
    .aside-bar {
        background-color: #EDF1F2;
        min-height: 100%;
        background: #FFFFFF;
    }

    /* 页角*/
    .app-footer {
        position: absolute;
        bottom: 0;
        background: #6cf;
        clear: both;
        border-top: 1px solid #dee5e7;
        width: 100%;
    }

    /*左边*/
    .app-aside {
        background-color: #EDF1F2;
        min-width: 199px;
        margin-top: -1px;
        position: fixed;
        z-index: 50;
        min-height: 100%;
    }

    /*包装器*/
    .wrapper {
        font-weight: 300;
        border-bottom: 1px solid #dee5e7;
        background-color: #f6f8f8;
        padding: 20px;
    }


    .layout-logo {
        width: 80px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    .app-center-routingview {
        margin-top: 20px;
        padding: 0px 15px;
    }


    @media (min-width: 768px) {
        .container {
            max-width: 750px;
        }


        .center-part {
            min-width: calc(750px - (201px));
            max-width: calc(750px - (201px));
        }
        /*右边旁栏*/
        .aside-bar {
            display: none!important;
        }

        .navbar {
            min-width: 750px;
        }
    }

    @media (max-width: 768px) {
        .app-content-body {
            margin-left: 0px;
        }
        .app-aside{
        display: none;
        }
        .app-footer {
            padding-left: 0px !important;
            text-align: center;
        }

        .center-part {
            min-width: 768px;
        }

        .navbar {
            min-width: 768px;
        }

    }

    @media (min-width: 992px) {
        .container {
            max-width: 960px;
        }

        .center-part {
            min-width: calc(960px - (199px + 238px));
        }

        /*右边旁栏*/
        .aside-bar {
            display: table-cell!important;
        }


        .navbar {
            min-width: 960px;
        }
    }

    @media (min-width: 1200px) {
        .container {
            max-width: 1140px;
        }

        .center-part {
            min-width: calc(1140px - (199px + 238px));
        }

        .navbar {
            min-width: 1140px;
        }
    }

    @media (min-width: 1800px) {
        .container {
            max-width: 1300px;
        }

        .center-part {
            min-width: calc(1300px - (199px + 238px));
        }

        .navbar {
            min-width: 1300px;
        }

        .app-center-routingview {
            padding: 0px 30px;
        }
    }

</style>

<style scoped>
</style>

