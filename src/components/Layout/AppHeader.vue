<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="DrawerShow">
                <div class="Drawer">
                   <!-- <Button type="primary" @click="value2 = true">Primary</Button>-->
                    <a>

                        <Icon type="ios-radio-button-on" size="25" color="#808695" @click="value2 = true" /></a>
                    <Drawer title="导航菜单" placement="left" :closable="false" v-model="value2">
                        <Menu>
                            <Submenu name="1">
                                <template slot="title">
                                    <Icon type="ios-home"/>
                                    Home
                                </template>
                                <MenuItem name="1-1" to="/home/newlist">
                                    新闻资讯
                                </MenuItem>
                                <MenuItem name="1-2">新闻资讯</MenuItem>
                                <MenuItem name="1-3">新闻资讯</MenuItem>
                                <MenuItem name="1-4">新闻资讯</MenuItem>
                                <MenuItem name="1-5">新闻资讯</MenuItem>
                            </Submenu>
                        </Menu>

                    </Drawer>
                </div>
                <div class="layout-logo">
                </div>
            </div>
            <div class="layout-nav">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-home"/>
                        Home
                    </template>
                    <MenuItem name="1-1" to="/home/newlist">
                        新闻资讯
                    </MenuItem>
                    <MenuItem name="1-2">新闻资讯</MenuItem>
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
</template>

<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                value2: false
            }
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 1133px) {
        .layout-nav {
            display: none;
        }
        .DrawerShow{
            display: flex;
            justify-content: space-between;
        }
        .Drawer {
            display: block!important;
        }

    }

    .Drawer {
        display: none;
    }
</style>
