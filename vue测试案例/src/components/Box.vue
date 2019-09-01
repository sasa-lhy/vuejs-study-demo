<template>
  <div>
      <button @click = 'deleteItem()'>删除</button>
      <ul>
          <template v-for="(item,index) in list">
              <li :key='index' @click.stop = 'item.showMore = !item.showMore'>
                  <h4>{{item.title}}</h4>
                  <p v-if = 'item.showMore'>{{item.desc}}</p>
              </li>
          </template>
      </ul>
  </div>
</template>

<script>
import { EventEmitter } from 'events';
export default {
    name:'user',
    props:{
        list:{
            type:Array,
            required:true,
        }
    },
    methods:{
        deleteItem:function(){
            this.$emit('deleteI','传的参数放这');
        }
    }
}
</script>

<style scoped>
    ul{
        width:80%;
        margin:50px auto;
        display:flex;
        flex-wrap: wrap;
        padding:20px;
    }
    
    li{
        text-align: center;
        list-style: none;
        width:200px;
        padding:10px;
        /* 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大 */
        flex-grow: 1;
        margin: 10px;
        background-color:#fff;
        border-radius: 20px;
        box-shadow: 0 2px 5px 0 #999;
    }
    li:hover{
        box-shadow: 0 2px 10px 0 #999;
    }
    p{
        margin-top:5px;
        color:#666;
        font-size:12px;
    }
</style>