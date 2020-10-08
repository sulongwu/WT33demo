<template>
  <div class="item" @click="fn">
      <template v-if="!flag"><slot name="normalImg"></slot></template>
      <template v-if="flag"><slot name="activeImg"></slot></template>
      <br/>
      <span :class="{active:flag}">{{txt}}</span>
  </div>
</template>

<script>
export default {
    props:['txt','mark','curr'],
    computed: {
        flag(){
            //如果名字和当前选中那个相同表示，被选中了
            // if(this.mark==this.curr){
            //     return true;
            // }
            // return false;
            return this.mark==this.curr; 
        }
    },
    methods: {
        fn(){
            //告诉父组件，当前点击的mark值是多少，让组件更新currnav
            this.$emit('change',this.mark);
            this.$router.push('/'+this.mark);
        }
    },
}
</script>

<style lang="less">
.item{
    text-align: center;
    flex:1;
    img{
        height: 100/100rem;
    }
    span{
        color:gray;
        font-size: 14px;
    }
    span.active{
        color: red;
    }
}   
</style>