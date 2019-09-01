<template>
  <div>
    <my-header></my-header>
    <!-- 传值：string,boolean,number
    和传引用 :array,object
    -->
    <my-box :list='lists' @deleteI = 'deleteLi($event)'></my-box>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
export default{
  data(){
    return {
      lists:[
        {title:'html',desc:'超文本标记语言（英语：HyperText Markup Language，简称：HTML）',moreUrl:'',showMore:false},
        {title:'css',desc:'层叠样式表 (Cascading Style Sheets)',moreUrl:'',showMore:false},
        {title:'javascript',desc:'互联网上最流行的脚本语言',moreUrl:'',showMore:false},
        {title:'vue',desc:'一套构建用户界面的渐进式框架',moreUrl:'',showMore:false},
        {title:'react',desc:'一个用于构建用户界面的 JAVASCRIPT 库',moreUrl:'',showMore:false},
        {title:'angular',desc:'一款开源JavaScript库，由Google维护，用来协助单一页面应用程序运行',moreUrl:'',showMore:false},
      ],
    }
  },
  methods:{
    deleteLi:function(item){
      console.log(item);
      this.lists.pop();
    }
  },
  created(){
    //   使用http请求
        this.$http.get('https://jsonplaceholder.typicode.com/users').then(
            data=>{
                console.log(data);
                // this.lists = data.body;
            }
        ).catch(err=>{
            console.log(err);
        })
    },
  // 注册局部组件
  components:{
    'my-footer':Footer,
    'my-header':Header,
  }
}
</script>

<style scoped>

</style>
