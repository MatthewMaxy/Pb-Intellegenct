<template>
    <el-menu 
        :default-active="this.$route.path"
        router
        class="el-menu-vertical-demo" 
        background-color="#61CAC4"
        text-color="#fff"
        collapse:true
        active-text-color="#75664d"
        active-text-weight="40px">
        <img src="../../public/logo.png" alt="">
        <el-menu-item @click="clickMenu(item)" v-for="item in menuData" :key="item.name" :index="item.name">
            <i :class="`el-icon-${item.icon}`" style="color: white"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
    </el-menu>
</template>
<style lang="less" scoped>
.el-menu{
    height: 100vh;
    h3{
        color: #fff;
        text-align: center;
        margin-top: 2.5vh;
        margin-bottom: 2.3vh;
        line-height: 48px;
        font-size: 30px;
        font-weight: 400;
    };
    img{
        margin-left: 10px;
        margin-right: 15px;
        width: 175px;
        justify-content: center;
        margin-top: 2vh;
        margin-bottom: 1vh;
    }
}
</style>
  
<script>
export default {
    data() {
        return {
            menuData: [
                {
                    path: "/home",
                    name: "/Home",
                    label: "首页",
                    icon: "s-home",
                    url: "Home/Home",
                },
                {
                    path:"/valuation",
                    name:"/Valuation",
                    label: "智能评估",
                    icon:"tickets",
                    url:"Valuation/Valuation"
                },
                {
                    path: "/decision",
                    name: "/Decision",
                    label: "智能决策",
                    icon: "s-opportunity",
                    url: "Decision/Decision",
                },
                {
                    path: "/file",
                    name: "/File",
                    label: "参考案例",
                    icon: "document",
                    url: "File/File",
                },
                {
                    path: "/company",
                    name: "/Company",
                    label: "服务公司推荐",
                    icon: "office-building",
                    url: "Company/Company",
                },
            ],
            activeNum:"home",
        };
    },
    methods: {
        clickMenu(item){
            // 
            if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/')) ){
                this.$router.push(item.path)
            }
        },
    },

}
</script>