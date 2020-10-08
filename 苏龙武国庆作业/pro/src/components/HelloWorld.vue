<template>
  <div class="hello">
     {{num}}
    <addbtn></addbtn>
    <minusbtn></minusbtn>
    <button @click="changeNum">调用actions</button>
    <div>
      显示getters：{{this.$store.getters.formatNum}}
    </div>
    <div> {{formatNum}}  </div>
  </div>
</template> 
<script> 
import addbtn  from './addbtn'
import minusbtn  from './minusbtn'
 //访问state 方式2
import {mapState,mapActions,mapGetters} from 'vuex' 
export default { 
  components:{ 
    addbtn,minusbtn
  } ,
  computed: {
    ...mapState(['num']),
    ...mapGetters(['formatNum'])
    // num(){
    //   //访问state 方式1 
    //   return this.$store.state.num;
    // }
  },
  methods: {
    ...mapActions(['changeNum'])
    // changeNum(){
    //   this.$store.dispatch('changeNum');
    // }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
