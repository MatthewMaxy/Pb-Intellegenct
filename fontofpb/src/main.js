import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router'
import Cookie from 'js-cookie';

Vue.use(VueAxios,axios)
Vue.config.productionTip = false
Vue.use(ElementUI)

// 全局前置导航守卫
// router.beforeEach((to, from, next) => {
//   const token = Cookie.get('token')
//   if(!token && to.name !== 'login'){
//     next({name:'login'})
//   }else if(token && to.name === 'login'){
//     next({ name:'home'})
//   }else{
//     next()
//   }
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
