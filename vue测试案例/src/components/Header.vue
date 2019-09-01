<template>
  <h2 @click = 'changeTitle'>{{title}}</h2>
</template>

<script>
export default {
  data() {
    return {
      title: "HELLO VUE"
    };
  },
  methods:{
      changeTitle(){
          this.title = '我被改变了';
      }
  },
//   beforeCreate: function() {
//     alert("组件实例化之前执行的函数");
//   },
//   created: function() {
//     alert("组件实例化完毕，但页面还未显示");
//   },
//   beforeMount: function() {
//     alert("组件挂载前，页面仍未显示，但是虚拟dom已经配置");
//   },
//   mounted: function() {
//     alert("组件挂载后，此方法执行后，页面显示");
//   },
//   beforeUpdate: function() {
//     alert("组件更新前，页面仍未更新，但是虚拟dom已经配置");
//   },
//   updated: function() {
//     alert("组件更新，此方法执行后，页面显示");
//   },
//   beforeDestroy: function() {
//     alert("组件销毁前");
//   },
//   destroyed: function() {
//     alert("组件销毁完成");
//   }
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
  line-height: 50px;
  background-color: #6cc2ca;
  color: rgb(39, 39, 39);
}
</style>