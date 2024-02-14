<template>
    <div class="base">
        <!-- 注册登录界面 -->
        <div class="loginAndRegist">
            <!--登录表单-->
            <div class="Area">
                <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut" appear>
                    <!-- 标语 -->
                    <div v-show="isShow" class="title">
                        用户登录
                    </div>
                </transition>
                <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut" appear>
                    <!-- 密码框和用户名框 -->
                    <div v-show="isShow" class="pwdArea">
                        <div style="flex: 1;justify-content: center;display: flex;align-items: center">
                            用户名：<el-input class="username" v-model="form.username" style="width: 180px;"
                                placeholder="用户名"></el-input>
                        </div>
                        <div style="flex: 1;justify-content: center;display: flex;align-items: center">
                            密&nbsp;&nbsp;&nbsp;&nbsp;码：<el-input placeholder="密码" v-model="form.password"
                                style="width: 180px;" type="password"></el-input>
                        </div>
                        <div style="flex: 1;justify-content: center;display: flex;align-items: center">
                            身&nbsp;&nbsp;&nbsp;&nbsp;份：<el-select style="width: 180px;" v-model="identity" placeholder="请选择用户类型">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </transition>
                <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut" appear>
                    <!-- 登录注册按钮 -->
                    <div v-show="isShow" class="btnArea">
                        <el-button type="success" round style="background-color: #257B5E;letter-spacing: 5px"
                            @click="submit">&nbsp;登录</el-button>
                    </div>
                </transition>
            </div>
            <!-- 注册表单 -->
            <div class="Area">
                <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut" appear>
                    <!--注册表头-->
                    <div v-show="!isShow" class="title">
                        用户注册
                    </div>
                </transition>
                <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut" appear>
                    <!--注册表单-->
                    <div v-show="!isShow" class="Form">
                        <div style="flex: 1;display: flex;justify-content: center;align-items: center;
                  margin-top: 20px;">
                            用&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;名:
                            <el-input placeholder="请输入用户名" v-model="regAdmin.regID" style="width: 165px;
                              margin-left: 10px;">
                            </el-input>
                        </div>
                        <div style="flex: 1;display: flex;justify-content: center;align-items: center;">
                            密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:
                            <el-input placeholder="请输入密码" style="width: 165px;margin-left: 10px;
                      " v-model="regAdmin.regPwd" type="password"></el-input>
                        </div>
                        <div style="flex: 1;display: flex;justify-content: center;align-items: center;">
                            授&nbsp;&nbsp;&nbsp;权&nbsp;&nbsp;&nbsp;码:
                            <el-input placeholder="请输入管理员授权码" style="width: 165px;margin-left: 10px;
                      " v-model="regAdmin.licenseCode" type="password"></el-input>
                        </div>
                    </div>
                </transition>
                <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut" appear>
                    <!--注册按钮-->
                    <div v-show="!isShow" class="btnArea">
                        <el-button type="success" round style="background-color: #257B5E;letter-spacing: 5px"
                            @click="userRegister(regAdmin)">&nbsp;注册</el-button>
                    </div>
                </transition>
            </div>
            <!-- 信息展示界面 -->
            <div id="aaa" class="showInfo" :style="{
                borderTopRightRadius: styleObj.bordertoprightradius,
                borderBottomRightRadius: styleObj.borderbottomrightradius,
                borderTopLeftRadius: styleObj.bordertopleftradius,
                borderBottomLeftRadius: styleObj.borderbottomleftradius,
                right: styleObj.rightDis
            }" ref="showInfoView">

                <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut" appear>
                    <!-- 没有用户输入用户名或者找不到用户名的时候 -->
                    <div v-show="isShow"
                        style="display: flex;flex-direction: column;align-items: center;justify-content: center;width: 100%;height: 100%">
                        <!-- 欢迎语 -->
                        <div
                            style="flex: 2;display: flex;align-items: center;font-size: 22px;color: #3f4140 ;font-weight: bold">
                            公共建筑节能改造智能决策
                        </div>
                        <!-- 欢迎图片 -->
                        <div style="flex: 2">
                            <el-button type="success" style="background-color:#257B5E;border: 1px solid #ffffff;" round
                                @click="changeToRegiest">还没有账户？点击注册</el-button>
                        </div>
                    </div>
                </transition>
                <!-- 用户输入用户名时展示头像以及姓名 -->
                <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut" appear>
                    <!-- 用户注册的时候展示信息 -->
                    <div v-show="!isShow"
                        style="display: flex;flex-direction: column;align-items: center;justify-content: center;width: 100%;height: 100%">
                        <!-- 欢迎语 -->
                        <div
                            style="flex: 2;display: flex;align-items: center;font-size: 22px;color: #3f4140;font-weight: bold">
                            公共建筑节能改造智能决策
                        </div>
                        <!-- 欢迎图片 -->
                        <div style="flex: 2">
                            <el-button type="success" style="background-color:#257B5E;border: 1px solid #ffffff;" round
                                @click="changeToLogin">已有账户？点击登录</el-button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>

    </div>
</template>
  
<script>
import user from "../utils/user"
import Cookie from "js-cookie"
export default {
    data() {
        return {
            identity:'',
            options: [
                {
                    label:'节能改造业主',
                    value:1,
                },
                 {
                    label:'政府监管部门',
                    value:2,
                },
                 {
                    label:'节能改造公司',
                    value:3,
                },
            ],
            form: {
                username: '',
                password: ''
            },
            regAdmin: {
                regID: "",
                regPwd: '',
                licenseCode: ""
            },
            styleObj: {
                bordertoprightradius: '15px',
                borderbottomrightradius: '15px',
                bordertopleftradius: '0px',
                borderbottomleftradius: '0px',
                rightDis: '0px'
            },
            isShow: true
        }
    },
    methods: {
        changeToRegiest() {
            this.styleObj.bordertoprightradius = '0px'
            this.styleObj.borderbottomrightradius = '0px'
            this.styleObj.bordertopleftradius = '15px'
            this.styleObj.borderbottomleftradius = '15px'
            this.styleObj.rightDis = '50%'
            this.isShow = !this.isShow
        },
        changeToLogin() {
            this.styleObj.bordertoprightradius = '15px'
            this.styleObj.borderbottomrightradius = '15px'
            this.styleObj.bordertopleftradius = '0px'
            this.styleObj.borderbottomleftradius = '0px'
            this.styleObj.rightDis = '0px'
            this.isShow = !this.isShow
        },
        //管理员登录
        submit() {
            var password = this.form.password
            var username = this.form.username
            var data = {
                'username': username,
                'password': password
            }
            user.login(data).then(response => {
                if (response.data.status === 200) {
                    const token = response.data.token
                    Cookie.set('token', token)
                    this.$router.push({ path: '/home' })
                } else {
                    alert(response.data.message)
                }
            })

        },
        //用户注册
        userRegister(data) {
            user.register(data).then((response) => {
                if (response.data.status === 200) {
                    alert("注册成功")
                    location.reload()
                } else {
                    alert(response.data.message)
                }
            })

        }
    },

}
</script>
  
<style lang="less">
/* @import '../assets/css/Login.css' */
.base {
    height: 100vh;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../public/images/background.jpeg");
    background-size: cover;
}

.showInfo {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    position: absolute;
    height: 400px;
    width: 350px;
    z-index: 2;
    top: 0;
    right: 0;
    background-image: url("../../public/images/change.jpeg");
    background-size: 100%;
}

.loginAndRegist {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.Area {
    background-color: rgba(255, 255, 255, 0.8);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    height: 400px;
    width: 350px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
}

.showInfo:hover {
    background-size: 100%;
    background-position: -30px -30px;
}

.title {
    width: 70%;
    flex: 1;
    border-bottom: 1px solid #257B5E;
    display: flex;
    align-items: center;
    color: #257B5E;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    justify-content: center;
}

#aaa {
    transition: 0.3s linear;
}

.btnArea {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.Form {
    flex: 2;
    display: flex;
    flex-direction: column;
    color: #257B5E;
    font-size: 16px;
}

.pwdArea {

    flex: 1;
    display: flex;
    flex-direction: column;
    color: #257B5E;
    font-size: 16px;
    padding-top: 10px;

}

.pwdArea input {

    outline: none;
    height: 30px;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 14px;
    border: 1px solid gray;
}

.pwdArea input:focus {
    border: 2px solid #257B5E;
}

.Form input {
    outline: none;
    height: 25px;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 14px;
    border: 1px solid gray;
}

.Form input:focus {
    border: 2px solid #257B5E;
}

#elselect:focus {
    border: 2px solid #257B5E;
}
</style>