<template>
    <div class="header-container">
        <div class="l-content">
        </div>
        <div class="r-content">
            <el-dropdown @command="handleClick">
                <span class="el-dropdown-link">
                    <i class="el-icon-user" style="color: black; font-size: 30px;margin-right: 30px;"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>

    </div>
</template>

<script>
import Cookie from "js-cookie"
export default {
    data() {
        return {}
    },
    methods: {
        handleClick(command){
            if(command==='logout'){
                Cookie.remove('token')
                this.$router.push('/login')
            }
            
        }
    },
    
    
}
</script>
<style lang="less" scoped>
.header-container {
    padding: 0 20px;
    background-color: rgb(222, 222, 222);
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        color: white;
        font-size: 14px;
        margin-left: 10px;
    }

    .l-content {
        display: flex;
        align-items: center;

        .el-breadcrumb ::v-deep .el-breadcrumb__inner {
            color: rgb(113, 110, 110) !important;
            font-weight: 400 !important;
        }

        /* 被选中时的颜色 */
        .el-breadcrumb__item:last-child ::v-deep .el-breadcrumb__inner {
            color: black !important;
            font-weight: 450 !important;
        }
    }
}
</style>