// 没有加路径就是，从包文件（node_modules）里面去引入vue
import Vue from 'vue';
import App from './App.vue';
import Box from './components/Box.vue';
import Home from './components/Home.vue';
import HelloWorld from './components/HelloWorld.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 注册全局组件
Vue.component('my-box',Box);
Vue.use(VueRouter);//路由
Vue.use(VueResource);//http请求
// 配置路由
const router = new VueRouter({
  routes:[
    {path:'/',component:Home},
    {path:'/helloworld',component:HelloWorld},
  ],
  mode:'history',// 去掉地址栏中的#
});
console.log(App);
// render：是一个函数，接收一个函数h({})作为参数，h(App)生成一个虚拟Dom对象，最后获得真实的dom去替换这个挂载的这个div。
//$mount将这种实例挂载到id为app的元素上
new Vue({ 
  router,
  render: h => h(App),
}).$mount('#app')
// 把这个新建的vue实例挂载到index.html中的#app上
