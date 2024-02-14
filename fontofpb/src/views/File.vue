<template>
    <div>
        <div style="font-size: 30px;text-align: center;margin-bottom: 30px;margin-top: 30px;">
            历史相似案例（Top8）
        </div>
        <el-table :data="result" :stripe="true" style="width: 100%">
            <el-table-column fixed prop="bh" label="编号" width="50">
            </el-table-column>
            <el-table-column prop="qhq" label="气候区" width="140">
            </el-table-column>
            <el-table-column prop="cqb" label="窗墙比" width="85">
            </el-table-column>
            <el-table-column prop="wbzy" label="外部遮阳" width="85">
            </el-table-column>
            <el-table-column prop="fsxwd" label="反射型屋顶" width="95">
            </el-table-column>
            <el-table-column prop="fsxwq" label="反射型外墙" width="95">
            </el-table-column>
            <el-table-column prop="wdgr" label="屋顶隔热" width="85">
            </el-table-column>
            <el-table-column prop="dmbw" label="地面保温" width="85">
            </el-table-column>
            <el-table-column prop="lhwd" label="绿化屋顶" width="85">
            </el-table-column>
            <el-table-column prop="wqbw" label="外墙保温" width="85">
            </el-table-column>
            <el-table-column prop="blxl" label="玻璃效率" width="85">
            </el-table-column>
            <el-table-column prop="kqstl" label="空气渗透率" width="95">
            </el-table-column>
            <el-table-column prop="ds" label="吊扇" width="85">
            </el-table-column>
            <el-table-column prop="zlxt" label="制冷系统" width="85">
            </el-table-column>
            <el-table-column prop="bsqdq" label="变速驱动器" width="95">
            </el-table-column>
            <el-table-column prop="xfycl" label="新风预处理" width="95">
            </el-table-column>
            <el-table-column prop="gnxt" label="供暖系统" width="85">
            </el-table-column>
            <el-table-column prop="hwf" label="恒温阀" width="85">
            </el-table-column>
            <el-table-column prop="shrsyr" label="生活热水预热" width="105">
            </el-table-column>
            <el-table-column prop="jnq" label="节能器" width="85">
            </el-table-column>
            <el-table-column prop="nbzm" label="内部照明" width="85">
            </el-table-column>
            <el-table-column prop="wbzm" label="外部照明" width="85">
            </el-table-column>
            <el-table-column prop="zmkz" label="照明控制系统" width="105">
            </el-table-column>
            <el-table-column prop="tcmj" label="天窗面积" width="85">
            </el-table-column>
            <el-table-column prop="jlb" label="计量智能表" width="95">
            </el-table-column>
            <el-table-column prop="glys" label="功能效率" width="85">
            </el-table-column>
            <el-table-column prop="zznysy" label="最终能源使用" width="105">
            </el-table-column>
            <el-table-column prop="zzys" label="最终用水" width="85">
            </el-table-column>
            <el-table-column prop="zzco2" label="最终运营CO2" width="110">
            </el-table-column>
            <el-table-column prop="zzc" label="最终隐含碳" width="95">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
import user from "../utils/user"
export default {
    data() {
        return {
            result: [],
            
        }

    },
    mounted() {
        this.result = JSON.parse(localStorage.getItem('result'))
        console.log(this.result)
    },
    methods: {
      handleClick(row) {
        user.recoCompany(row).then((response)=>{
            var company = response.data
            localStorage.setItem('company', JSON.stringify(company))
            this.$router.push({ path: '/Company' })
        })
      }
    },

}
</script>