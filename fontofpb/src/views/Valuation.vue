<template>
  <div>
    <div style="font-size: 30px;text-align: center;margin-bottom: 20px;">
      案例评估
    </div>
    <el-form ref="elForm" :model="formData" size="medium" label-width="70px">
      <el-row type="flex" justify="start" align="middle">
        <el-col :span="8">
          <el-form-item label-width="120px" label="建筑气候区划">
            <el-select v-model="formData.weather" placeholder="请选择气候区" clearable :style="{ width: '100%' }">
              <el-option v-for="(item, index) in weatherOptions" :key="index" :label="item.label" :value="item.value"
                :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="120px" label="建筑类型">
            <el-select v-model="formData.buildingType" placeholder="请选择建筑类型" clearable :style="{ width: '100%' }">
              <el-option v-for="(item, index) in buildingTypes" :key="index" :label="item.label" :value="item.value"
                :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="120px" label="评估标准">
            <el-select v-model="formData.criterionType" placeholder="请选择评估标准" clearable :style="{ width: '100%' }">
              <el-option v-for="(item, index) in criterionTypes" :key="index" :label="item.label" :value="item.value"
                :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :span="8">
          <el-form-item label-width="120px" label="建筑面积">
            <el-input v-model="formData.jzmj1" placeholder="请输入建筑面积" clearable :style="{ width: '100%' }">
              <template slot="append">m<sup>2</sup></template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="120px" label="建筑使用面积">
            <el-input v-model="formData.jzmj2" placeholder="请输入建筑使用面积" clearable :style="{ width: '100%' }">
              <template slot="append">m<sup>2</sup></template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="120px" label="建筑辅助面积">
            <el-input v-model="formData.jzmj3" placeholder="请输入建筑辅助面积" clearable :style="{ width: '100%' }">
              <template slot="append">m<sup>2</sup></template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :span="8">
          <el-form-item label-width="120px" label="建筑人流量">
            <el-input v-model="formData.rll" placeholder="请输入建筑人流量" clearable :style="{ width: '100%' }">
              <template slot="append">人 / 日</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="120px" label="建筑高度">
            <el-input v-model="formData.height" placeholder="请输入建筑高度" clearable :style="{ width: '100%' }">
              <template slot="append">m</template>
            </el-input>
          </el-form-item>

        </el-col>
        <el-col :span="8">
          <el-form-item label-width="120px" label="建筑朝向">
            <el-select v-model="formData.face" placeholder="请选择建筑朝向" clearable :style="{ width: '100%' }">
              <el-option v-for="(item, index) in faces" :key="index" :label="item.label" :value="item.value"
                :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>

        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="middle">
        <el-col :span="6">
          <el-form-item label-width="120px" label="建筑地上层数">
            <el-input-number v-model="formData.up" @change="handleChange" :min="1" :max="10" label="描述文字"
              style="width: 130px;">
            </el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="120px" label="建筑地下层数">
            <el-input-number v-model="formData.down" @change="handleChange" :min="1" :max="15" label="描述文字"
              style="width: 130px;">
            </el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="120px" label="周运行天数">
            <el-input-number v-model="formData.day" @change="handleChange" :min="1" :max="7" label="描述文字"
              style="width: 130px;">
            </el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="120px" label="年运行月数">
            <el-input-number v-model="formData.month" @change="handleChange" :min="1" :max="12" label="描述文字"
              style="width: 130px;">
            </el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-collapse accordion>
      <el-collapse-item title="安全耐久评分项" name="1">
        <el-form ref="form" :model="formData" label-width="400px" label-position="left"
          style="margin-top: 8px;margin-bottom: 8px;">
          <el-form-item label="采取措施提高阳台、外窗、窗台、防护栏杆等安全防护水平">
            <el-radio-group v-model="formData.select1.radio1">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="利用场地或景观形成可降低坠物风险的缓冲区、隔离带">
            <el-radio-group v-model="formData.select1.radio2">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="采取人车分流措施，且步行和自行车交通系统有充足照明">
            <el-radio-group v-model="formData.select1.radio3">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="耐久性设计年限">
            <el-input v-model="formData.select1.input1" style="width: 200px">
              <template slot="append">年</template>
            </el-input>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item title="生活便利评分项" name="2">
        <el-form ref="form" :model="formData" label-width="500px" label-position="left"
          style="margin-top: 8px;margin-bottom: 8px;">
          <el-form-item label="建筑室内公共区域的墙、柱等处的阳角均为圆角，并设有安全抓杆或扶手">
            <el-radio-group v-model="formData.select2.radio1">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="设有可容纳担架的无障碍电梯">
            <el-radio-group v-model="formData.select2.radio2">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="填写室外健身场地面积">
            <el-input v-model="formData.select2.input1" style="width: 200px">
              <template slot="append">m<sup>2</sup></template>
            </el-input>
          </el-form-item>
          <el-form-item label="设置PM10、PM2.5、CO2浓度的空气质量监测系统">
            <el-radio-group v-model="formData.select2.radio3">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item title="健康舒适评分项" name="3">
      </el-collapse-item>
      <el-collapse-item title="资源节约评分项" name="4">
      </el-collapse-item>
      <el-collapse-item title="环境宜居评分项" name="5">
      </el-collapse-item>
      <el-collapse-item title="提高与创新加分项" name="6">
      </el-collapse-item>
    </el-collapse>
    <div style="margin-top: 40px;text-align: center;">
      <el-button type="success" @click="submitValuation">提交评估</el-button>
    </div>
    <el-dialog title="评估结果" :visible.sync="dialogTableVisible" width="1000px">
      <div style="text-align: center;">
        <el-progress type="circle" :percentage="59" color=#F56C6C stroke-width="15" :format="format"></el-progress>
      </div>
      <div style="text-align: center;margin-top: 20px;font-size: 20px;margin-bottom: 40px;">
        绿色建筑划分等级：<span style="color: green;">基本级</span>
      </div>
      <div style="text-align: center;margin-top: 30px;font-size: 30px;margin-bottom: 30px;">
        具体得分
      </div>
      <el-table :data="gridData">
        <el-table-column property="d1" label="控制项基础分值" width="140" header-align="center" align="center"></el-table-column>
        <el-table-column property="d2" label="安全耐久分值" width="140" header-align="center" align="center"></el-table-column>
        <el-table-column property="d3" label="健康舒适分值" width="140" header-align="center" align="center"></el-table-column>
        <el-table-column property="d4" label="生活便利分值" width="140" header-align="center" align="center"></el-table-column>
        <el-table-column property="d5" label="资源节约" width="130" header-align="center" align="center"></el-table-column>
        <el-table-column property="d6" label="环境宜居" width="130" header-align="center" align="center"></el-table-column>
        <el-table-column property="d7" label="提高与创新加分项" width="140" header-align="center"
          align="center"></el-table-column>
      </el-table>
      <div style="text-align: center;margin-top: 30px;font-size: 30px;margin-bottom: 30px;">
        <el-row>
          <el-button type="primary" plain>返回主页</el-button>
          <el-button type="success" @click="GoDo" plain>前往智能决策</el-button>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      formData: {
        weather: null,
        buildingType: null,
        criterionType: null,
        select1: {
          radio1: null,
          radio2: null,
          radio3: null,
          input1: null,
        },
        select2: {
          radio1: null,
          radio2: null,
          radio3: null,
          input1: null,
        },
        day: 3,
        month: 6,
        rll: null,
        jzmj1: null,
        jzmj2: null,
        jzmj3: null,
        up: 3,
        down: null,
        height: null,
        face: null,
      },
      loading: true,
      gridData: [{
        d1: 400,
        d2: 50,
        d3: 30,
        d4: 20,
        d5: 70,
        d6: 20,
        d7: 0
      }
      ],
      dialogTableVisible: false,
      weatherOptions: [{
        "label": "夏热冬冷地区",
        "value": 0
      }, {
        "label": "严寒地区",
        "value": 1
      }, {
        "label": "寒冷地区",
        "value": 2
      }, {
        "label": "温和地区",
        "value": 3
      }, {
        "label": "夏热冬暖地区",
        "value": 4
      }],
      buildingTypes: [{
        "label": "酒店",
        "value": 1
      }, {
        "label": "公寓",
        "value": 2
      }, {
        "label": "医疗",
        "value": 3
      }, {
        "label": "教育",
        "value": 4
      }, {
        "label": "办公楼",
        "value": 5
      }, {
        "label": "综合体",
        "value": 6
      },],
      criterionTypes: [{
        "label": "绿色建筑评价标准",
        "value": 1
      }, {
        "label": "建筑节能与可再生能源利用通用规范",
        "value": 2
      }, {
        "label": "近零能耗建筑技术标准",
        "value": 3
      }],
      faces: [{
        "label": "东",
        "value": 1
      }, {
        "label": "南",
        "value": 2
      }, {
        "label": "西",
        "value": 3
      }, {
        "label": "北",
        "value": 4
      }],

    }
  },
  methods: {
    submitValuation() {
      this.dialogTableVisible = true
    },
    format(percentage) {
      return "59分"
    },
    GoDo() {
      this.$router.push({ path: '/Decision' })
    }
  }

}
</script>