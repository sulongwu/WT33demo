<template>
  <button @click="add">+ {{this.$store.state.num}}</button>
</template>

<script>
//方式二
import {mapMutations} from 'vuex';
export default {
  methods: {
    ...mapMutations(['add'])
    // add() {
    // //   store.commit("add");
    //     this.$store.commit('add')
    // },
  },
};
</script>

<style>
</style>