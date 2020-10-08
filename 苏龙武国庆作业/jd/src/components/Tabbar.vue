<template>
  <div class="tabbarWrap">
    <Item mark="home"  :curr="currnav" @change="getVal">
      <template #normalImg>
        <img src="../assets/images/icon/icon-home.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/images/icon/icon-home-active.png" alt="" />
      </template>
    </Item>
    <Item mark="catergry"  :curr="currnav" @change="getVal">
      <template #normalImg>
        <img src="../assets/images/icon/icon-catergry.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/images/icon/icon-catergry-active.png" alt="" />
      </template>
    </Item>
    <Item mark="find"  :curr="currnav" @change="getVal">
      <template #normalImg>
        <img src="../assets/images/icon/icon-find.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/images/icon/icon-find-active.png" alt="" />
      </template>
    </Item>
    <Item mark="cart"  :curr="currnav" @change="getVal">
      <template #normalImg>
        <img src="../assets/images/icon/icon-cart.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/images/icon/icon-cart.png" alt="" />
      </template>
    </Item>
    <Item mark="me"  :curr="currnav" @change="getVal">
      <template #normalImg>
        <img src="../assets/images/icon/icon-me.png" alt="" />
      </template>
      <template #activeImg>
        <img src="../assets/images/icon/icon-me-active.png" alt="" />
      </template>
    </Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  components: { Item },
  data() {
    return {
      currnav: "home", //记录当前点击的是哪一个导航
    };
  },
  methods: {
    getVal(inmark) {
      this.currnav = inmark;
    },
  },
};
</script>

<style lang="less">
 .tabbarWrap{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 640/100rem;
    background: #fff;
    text-align: center;
    height: 90/100rem; 
    border-top: 1px solid #ccc;
 }
</style>