// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入我们定义的router这个页面
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(ElementUI); 

Vue.prototype.$axios = axios; 
//定义的指令1
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="#"+Math.random().toString(16).slice(2,8);
  }
})
//定义的指令2
Vue.directive('theme',{
  bind(el,binding,vnode){
   if(binding.value=='wide'){
      el.style.maxWidth='1260px' 
   }else if(binding.value=='narrow'){
      el.style.maxWidth='800px' 
   }
   //添加指令参数
   if(binding.arg=='column'){
     el.style.background='#6677cc';
     el.style.padding='20px';

   }
  }
})

// 自定义过滤器,给所有的标题变为大写
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
})  
//自定义过滤器，来减少显示的内容
Vue.filter('snippet',function(value){
  return value.slice(0,100)+'...'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//在页面里面引入
  components: { App },
  template: '<App/>'
})
 