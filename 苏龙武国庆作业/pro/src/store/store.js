import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex); //引入插件 
//定义仓库
export let store = new Vuex.Store({
    //状态，存储要共享的数据
    state:{  num:2 },
    //类似事件，用于操作共享数据
	mutations:{
       add(state){ 
           state.num ++;
       },
       minus(state){ 
           state.num --;
       }
   },
   //异步操作
   actions:{
       changeNum:(state,params1)=>{
           console.log('changeNum');
         setTimeout(function(){
             state.commit('add') ;// 调用mutations
         },3000)
       }
   },
   getters:{
       formatNum(state){
           return '***'+state.num+"****";
       }
   }
})