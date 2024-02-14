<template>
  <div>
    <div style="font-size: 30px;text-align: center;margin-bottom: 30px;margin-top: 30px;">
      服务公司推荐
    </div>
    <el-table :data="company" :stripe=true style="width: 100%">
      <el-table-column prop="bh" label="编号" width="180" header-align="center" align="center">
      </el-table-column>
      <el-table-column prop="icon" label="LOGO" header-align="center" width="300" align="center">
                <template v-slot:default="scope">
                    <el-image style="height: 40px;" :src="scope.row.icon"/>
                </template>
      </el-table-column>
      <el-table-column prop="name" label="公司名" width="400" header-align="center" align="center">
      </el-table-column>
      <el-table-column prop="website" label="公司官网" width="300" align="center">
                <template v-slot:default="scope">
                    <el-link :href="scope.row.website" target="_blank">{{scope.row.website }}</el-link>
                </template>          
      </el-table-column>
    </el-table>
    <div style="text-align: center;margin-top: 30px;font-size: 30px;margin-bottom: 30px;">
      <el-button type="primary" @click="back" plain>返回相似案例</el-button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
        company:[],
    }
  },
  mounted() {
        this.company = JSON.parse(localStorage.getItem('company'))
        console.log(this.company)
  },
  methods:{
    back(){
      this.$router.push('/File')
    }
  }
  

}
</script>