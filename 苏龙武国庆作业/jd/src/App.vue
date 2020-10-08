<template>
  <div id="app">
    <header>
      <div class="search">
        <input type="text" placeholder="请输入你要查找的内容" />
        <img src="@/assets/images/img/buy-logo.png" class="logo" />
        <img
          src="@/assets/images/img/ic_group_search_small.png"
          class="small"
        />
        <a href="#">登录</a>
      </div>
    </header>
    <Banner swiperID="swiperID001">
      <template #swiper-slide>
        <div class="swiper-slide">
          <img src="@/assets/images/img/1.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/img/2.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/img/3.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/img/4.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/img/5.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/img/6.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/img/7.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/img/8.jpg" alt="" />
        </div>
      </template>
    </Banner>
    <nav>
      <ul>
        <li>
          <img src="@/assets/images/icon/nav0.png" alt="" />
          <p>分类查询</p>
        </li>
        <li>
          <img src="@/assets/images/icon/nav1.png" alt="" />
          <p>物流查询</p>
        </li>
        <li>
          <img src="@/assets/images/icon/nav2.png" alt="" />
          <p>购物车</p>
        </li>
        <li>
          <img src="@/assets/images/icon/nav3.png" alt="" />
          <p>我的京东</p>
        </li>
        <li>
          <img src="@/assets/images/icon/nav4.png" alt="" />
          <p>京东生鲜</p>
        </li>
        <li>
          <img src="@/assets/images/icon/nav5.png" alt="" />
          <p>领券中心</p>
        </li>
        <li>
          <img src="@/assets/images/icon/nav6.png" alt="" />
          <p>京东超市</p>
        </li>
        <li>
          <img src="@/assets/images/icon/nav7.png" alt="" />
          <p>我的关注</p>
        </li>
      </ul>
    </nav>
    <div style="margin: 0.2rem 0">
      <img src="@/assets/images/img/fuli.jpg" alt="" width="100%" />
    </div>
    <div class="miaosha">
      <div>
        <img src="@/assets/images/img/seckill-icon.png" alt="" />
        <span class="red">掌上秒杀</span>
        <span>0 6 : 5 8 : 3 9</span>
        <span class="red fr">京选轮番秒</span>
      </div>
      <ul class="pro">
        <li>
          <img src="@/assets/images/img/pro01.jpg" alt="" />
          <p class="red">￥80</p>
          <p class="shan">￥150</p>
        </li>
        <li>
          <img src="@/assets/images/img/pro02.jpg" alt="" />
          <p class="red">￥10</p>
          <p class="shan">￥30</p>
        </li>
        <li>
          <img src="@/assets/images/img/pro03.jpg" alt="" />
          <p class="red">￥40</p>
          <p class="shan">￥100</p>
        </li>
        <li>
          <img src="@/assets/images/img/pro04.jpg" alt="" />
          <p class="red">￥80</p>
          <p class="shan">￥140</p>
        </li>
      </ul>
    </div>
    <div style="margin: 0.2rem 0">
      <img src="@/assets/images/img/aishenghuo.jpg" alt="" width="100%" />
    </div>
    <div class="gou">
      <img src="@/assets/images/img/cp1.jpg" alt="" width="50%" />
      <img src="@/assets/images/img/cp2.jpg" alt="" width="50%" />
      <img src="@/assets/images/img/cp3.jpg" alt="" width="50%" />
    </div>
    <div style="margin: 0.2rem 0">
      <img src="@/assets/images/icon/upload.png" style="vertical-align:middle"/>
      为您推荐
    </div>
    <div class="product">
      <ul>
        <li>
          <img src="@/assets/images/img/item01.jpg" alt="">
          <p class="prot">晋腾家用不锈钢手动压面机手摇多功能面条机</p>
          <p><strong>￥99</strong></p>
          <p class="haop">好评率94% <span>看相似</span> </p>
        </li>
        <li>
          <img src="@/assets/images/img/item02.jpg" alt="">
          <p class="prot">连衣裙长袖2018春装新款韩版时尚女装修身</p>
          <p><strong>￥198</strong></p>
          <p class="haop">好评率99% <span>看相似</span> </p>
        </li>
        <li>
          <img src="@/assets/images/img/item03.jpg" alt="">
          <p class="prot">LG 29WK600-W 29英寸 21:9 超宽屏 FHD</p>
          <p><strong>￥1988.0</strong></p>
          <p class="haop">好评率99% <span>看相似</span> </p>
        </li>
        <li>
          <img src="@/assets/images/img/item04.jpg" alt="">
          <p class="prot">劲仔小鱼 鱼干鱼仔 零食 辛辣味 15g*20包/盒</p>
          <p><strong>￥23.80</strong></p>
          <p class="haop">好评率99% <span>看相似</span> </p>
        </li>
      </ul>
    </div>
    <footer>
      <div>
        <a href="#">登录</a><span class="line">|</span> <a href="#">注册</a
        ><span class="line">|</span> <a href="#">反馈</a
        ><span class="line">|</span>
        <a href="#">返回顶部</a>
      </div>
      
      <p style="color:gray">Copyright &copy; 2004-2018京东JD.com 版权所有</p>
    </footer>

    <br />
    <br />
    <br />
    <router-view />

    <!-- <Tabbar v-if="$route.meta.tabbarShow"></Tabbar>  -->
    <Tabbar v-if="tabbarShow"></Tabbar>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import { obj } from "../static/util.js";
import Tabbar from "@/components/Tabbar";
import Banner from "@/components/banner";

export default {
  name: "App",
  components: {
    Tabbar,
    Banner,
  },
  data() {
    return {
      tabbarShow: true,
    };
  },
  mounted() {
    obj.setRem();
  },
  watch: {
    $route(to, from) {
      console.log("watch $route(to,from), ", to, from);
      if (to.name == "login") {
        this.tabbarShow = false;
      } else {
        this.tabbarShow = true;
      }
    },
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px;
  /* margin: 0 auto; */
}
body {
  font-size: 16px;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.swiper-slide {
  img {
    width: 100%;
  }
}
header {
  position: absolute;
  top: 0;
  z-index: 9;
  input {
    position: relative;
    top: 0.15rem;
    left: 0.15rem;
    border: 1px solid white;
    border-radius: 25px;
    font-size: 0.28rem;
    width: 85%;
    height: 0.5rem;
    line-height: 0.5rem;
    background: white;
    padding-left: 1.3rem;
  }
  .logo {
    position: absolute;
    top: 0.18rem;
    left: 0.35rem;
    width: 0.4rem;
  }
  .small {
    position: absolute;
    top: 0.2rem;
    left: 0.95rem;
    width: 0.4rem;
  }
  a {
    position: absolute;
    top: 0.2rem;
    right: -1.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    color: white;
  }
}
nav {
  width: 100%;
  border-bottom: 1px solid gainsboro;
  ul {
    overflow: hidden;
    li {
      float: left;
      font-size: 0.28rem;
      text-align: center;
      width: 25%;
      padding: 0.1rem 0;
      img {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }
}
.miaosha {
  border: 1px solid gainsboro;
  overflow: hidden;
  div {
    text-align: left;
    // height: 0.5rem;
    line-height: 0.5rem;
    img {
      width: 0.4rem;
      vertical-align: middle;
      padding: 0.1rem;
    }
    .red {
      color: red;
    }
    .fr {
      float: right;
      margin: 0.1rem;
    }
  }
  .pro {
    overflow: hidden;
    li {
      float: left;
      width: 25%;
      padding-bottom: 0.2rem;
      img {
        width: 1.5rem;
      }
      .red {
        color: red;
      }
      .shan {
        text-decoration: line-through;
      }
    }
  }
}
.gou {
  overflow: hidden;
  img {
    float: left;
    border: 1px solid gainsboro;
    box-sizing: border-box;
  }
}
.product{
  ul{
    // overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li{
      //float: left;

      width: 48%;
      border: 1px solid gainsboro;
      text-align: left;
      padding-bottom: 0.2rem;
      margin-bottom: 0.2rem;
      img{
        width: 100%;
      }
      p{
        padding: 0.1rem;
      }
      .prot{
        font-weight: bold;
      }
      strong{
        color: red;
        font-size: 0.38rem;
      }
      .haop{
        color: gray;
        font-size: 0.26rem;
        span{
          color: black;
          border: 1px solid gray;
          border-radius: 5px;
          padding: 0.05rem;
          float: right;
        }
      }
    }
  }
}
footer {
  overflow: hidden;
  
  div {
    display: flex;
    border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
    a {
      flex: 1;
      padding: 0.2rem 0;
      color: gray;
    }
    .line{
      padding: 0.2rem 0;
    }
    
  }
}
</style>
