<template>
  <button @click="minus">-{{this.$store.state.num}}</button>
</template>

<script>
export default {
  methods: {
    minus() {
       // store.commit("minus");
       this.$store.commit('minus')
    },
  },
};
</script>

<style>
</style>