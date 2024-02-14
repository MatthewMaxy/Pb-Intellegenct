<template>
    <div>
        <el-container>
            <el-aside width=auto>
                <CommandAside/>
            </el-aside>
            <el-container>
                <el-header>
                    <CommandHeader/>
                </el-header>
                <el-main>
                    <router-view ></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommandAside from "../components/CommandAside.vue"
import CommandHeader from "../components/CommandHeader.vue"
export default {
    data() {
        return {}
    },
    components:{
        CommandAside,
        CommandHeader
    }
}
</script>
<style scoped>
.el-header{
    padding:0;
}
</style>