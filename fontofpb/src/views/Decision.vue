<template>
    <div>
      <div style="font-size: 30px;text-align: center;margin-bottom: 40px;">
        参数设置
      </div>
      <el-form ref="elForm" :model="formData" size="medium" label-width="70px">
        <el-row type="flex" justify="center" align="middle" >
          <el-col :span="8" style="margin-bottom: 30px;">
            <el-form-item label="气候区">
              <el-select v-model="formData.qhq" placeholder="请选择气候区" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in weatherOptions" :key="index" :label="item.label" :value="item.value"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" align="middle" >
          <el-col :span="8">
            <el-form-item label-width="120px" label="窗墙比">
              <el-input v-model="formData.cqb" placeholder="占比" clearable :style="{ width: '100%' }">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="反射型屋顶">
              <el-input v-model="formData.fsxwd" placeholder="请输入反射型屋顶" clearable :style="{ width: '100%' }">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="反射型外墙">
              <el-input v-model="formData.fsxwq" placeholder="请输入反射型外墙" clearable :style="{ width: '100%' }">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label-width="120px" label="天窗面积">
              <el-input v-model="formData.tcmj" placeholder="" clearable :style="{ width: '100%' }">
                <template slot="append">平方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="内部节能照明">
              <el-input v-model="formData.nbzm" placeholder="0.01～0.8" clearable :style="{ width: '100%' }">
                <template slot="append">瓦/平方米</template>
              </el-input>
            </el-form-item>
          </el-col>
  
          <el-col :span="8">
            <el-form-item label-width="120px" label="外部节能照明">
              <el-input v-model="formData.wbzm" placeholder="0～1" clearable :style="{ width: '100%' }">
                <template slot="append">瓦/平方米</template>
              </el-input>
            </el-form-item>
          </el-col> 
          
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label-width="120px" label="绿化屋顶">
              <el-input v-model="formData.lhwd" placeholder="0~1" clearable :style="{ width: '100%' }">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="外墙保温">
              <el-input v-model="formData.wqbw" placeholder="0.01～0.8" clearable :style="{ width: '100%' }">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="地面保温">
              <el-input v-model="formData.dmbw" placeholder="0.01~8" clearable :style="{ width: '100%' }">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label-width="120px" label="空气渗透率">
              <el-input v-model="formData.kqstl" placeholder="0~1" clearable :style="{ width: '100%' }">
              </el-input>
            </el-form-item>
          </el-col>
         
          <el-col :span="8">
            <el-form-item label-width="120px" label="玻璃效率">
              <el-input v-model="formData.blxl" placeholder="0.01～0.8" clearable :style="{ width: '100%' }">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="屋顶隔热">
              <el-input v-model="formData.wdgr" placeholder="0.01~8" clearable :style="{ width: '100%' }">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label-width="120px" label="生活热水预热">
              <el-input v-model="formData.shrsyr" placeholder="0～1" clearable :style="{ width: '100%' }">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="外部遮阳装置">
              <el-input v-model="formData.wbzy" placeholder="0～1" clearable :style="{ width: '100%' }">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="功率因数补偿">
              <el-input v-model="formData.glys" placeholder="0.01～0.8" clearable :style="{ width: '100%' }">
              </el-input>
            </el-form-item>
          </el-col>
          
         
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label-width="120px" label="供暖系统效率">
              <el-input v-model="formData.gnxt" placeholder="0~1" clearable :style="{ width: '100%' }">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="制冷系统效率">
              <el-input v-model="formData.zlxt" placeholder="0~1" clearable :style="{ width: '100%' }">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="新风预处理">
              <el-input v-model="formData.xfycl" placeholder="0~1" clearable :style="{ width: '100%' }">
              </el-input>
            </el-form-item>
          </el-col>
          
  
          
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label-width="120px" label="节能器设置">
              <el-select v-model="formData.jnq" placeholder="" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in jnqOptions" :key="index" :label="item.label" :value="item.value"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="变速驱动器">
              <el-select v-model="formData.bsqdq" placeholder="" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in bsOptions" :key="index" :label="item.label" :value="item.value"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="恒温阀设置">
              <el-select v-model="formData.hwf" placeholder="" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in hwfOptions" :key="index" :label="item.label" :value="item.value"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          
          
  
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label-width="120px" label="照明控制系统">
              <el-select v-model="formData.zmkz" placeholder="" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in zmkzOptions" :key="index" :label="item.label" :value="item.value"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="120px" label="吊扇设置">
              <el-select v-model="formData.ds" placeholder="" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in fanOptions" :key="index" :label="item.label" :value="item.value"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          
  
          <el-col :span="8">
            <el-form-item label-width="120px" label="能源计量表">
              <el-select v-model="formData.jlb" placeholder="" clearable :style="{ width: '100%' }">
                <el-option v-for="(item, index) in jlbOptions" :key="index" :label="item.label" :value="item.value"
                  :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div style="margin-top: 20px;text-align: center;">
        <el-button type="primary" @click="submitForm">案例查询</el-button>
    </div>
    </div>
  </template>
  <script>
  import user from "../utils/user"
  export default {
    components: {},
    props: [],
    data() {
      return {
        formData: {
          qhq: 0,
          cqb: 50,
          fsxwd: 45,
          fsxwq: 45,
          wbzy: 0,
          wdgr: 0.4,
          dmbw: 0.49,
          lhwd: 0,
          wqbw: 0.6,
          blxl: 2.4,
          kqstl: 0.14,
          ds: 0,
          zlxt:2.7,
          bsqdq:0,
          xfycl:0,
          gnxt:0.556,
          hwf:0,
          shrsyr:0,
          jnq:0,
          nbzm:7.97,
          wbzm:1.1,
          zmkz:0,
          tcmj:0,
          jlb:0,
          glys:0,
        },
        weatherOptions: [{
          "label": "亚热带季风气候",
          "value": 0
        }, {
          "label": "温带季风气侯",
          "value": 1
        }, {
          "label": "热带季风气侯",
          "value": 2
        }, {
          "label": "温带大陆性气侯",
          "value": 3
        },{
          "label": "高原山地气侯",
          "value": 4
        },],
        fanOptions: [{
          "label": "无吊扇",
          "value": 0
        }, {
          "label": "有吊扇",
          "value": 1
        }],
        bsOptions: [{
          "label": "无变速驱动器",
          "value": 0
        }, {
          "label": "有变速驱动器",
          "value": 1
        }],
        hwfOptions: [{
          "label": "无恒温阀",
          "value": 0
        }, {
          "label": "有恒温阀",
          "value": 1
        }],
        jnqOptions: [{
          "label": "无节能器",
          "value": 0
        }, {
          "label": "有节能器",
          "value": 1
        }],
        zmkzOptions: [{
          "label": "无照明控制系统",
          "value": 0
        }, {
          "label": "有照明控制系统",
          "value": 1
        }],
        jlbOptions: [{
          "label": "无能源计量智能表",
          "value": 0
        }, {
          "label": "有能源计量智能表",
          "value": 1
        }],
        
      }
    },
    methods: {
      submitForm() {
        user.submit(this.formData).then((response)=>{
          console.log(response.data)
          var result = response.data
          localStorage.setItem('result', JSON.stringify(result))
          this.$router.push({ path: '/File' })
        })
      },
    }
  }
  
  </script>
  <style></style>
    