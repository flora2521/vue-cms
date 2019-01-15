<template>
    <div  class="app-header">
        <Header class="navbar">
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="DrawerShow">
                    <div class="Drawer">
                        <a>
                            <Icon type="ios-radio-button-on" size="25" color="#808695" @click="value2 = true"/>
                        </a>
                        <Drawer title="导航菜单" placement="left" :closable="false" v-model="value2">
                            <Menu>
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-home"/>
                                        Home
                                    </template>
                                    <MenuItem name="1-1" to="/home/newlist">新闻资讯</MenuItem>
                                    <MenuItem name="1-2" to="/search">下拉框</MenuItem>
                                    <MenuItem name="1-3">新闻资讯</MenuItem>
                                    <MenuItem name="1-4">新闻资讯</MenuItem>
                                    <MenuItem name="1-5">新闻资讯</MenuItem>
                                </Submenu>
                            </Menu>
                        </Drawer>
                    </div>

                </div>
                <div class="layout-nav">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-home"/>
                            Home
                        </template>
                        <MenuItem name="1-1" to="/home/newlist">新闻资讯</MenuItem>
                        <MenuItem name="1-2" to="/search">下拉框</MenuItem>
                        <MenuItem name="1-3">新闻资讯</MenuItem>
                        <MenuItem name="1-4">新闻资讯</MenuItem>
                        <MenuItem name="1-5">新闻资讯</MenuItem>
                    </Submenu>

                    <MenuItem name="2">
                        <Icon type="ios-contact"/>
                        Member
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-cart"/>
                        Shop
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-search"/>
                        Search
                    </MenuItem>
                </div>
            </Menu>
        </Header>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                value2: false
            };
        }
    };
</script>

<style scoped>
    @media screen and (max-width: 768px) {
        .layout-nav {
            display: none;
        }

        .DrawerShow {
            display: flex;
            justify-content: space-between;
        }

        .Drawer {
            display: block !important;
            z-index: 500;
        }
    }
    .layout-nav {
        width: 450px;
        margin: 0 auto;
    }
    .Drawer {
        display: none;
    }
</style>
