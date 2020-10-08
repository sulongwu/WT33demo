<template>
  <div :class="{headerWrap:true,green:bol}">
      <span>{{txt}}</span>
      <slot name="left"></slot>
      <slot name="right"></slot>
      <slot name="search"></slot>
  </div>
</template>

<script>
export default {
    props: ['txt','bol']
}
</script>

<style lang="less">
    .headerWrap{
        width: 100%;
        height: 80/100rem;
        border-bottom: 1px solid #ccc;
        background: #f7f7f7;
        text-align: center;
        line-height: 80/100rem;
        position: relative;
        img{
        width: 50/100rem;
        position: absolute;
        }
        .rightImg{
        top: 8px;
        right: 10px;
        }
        .leftImg{
        top: 8px;
        right: 50px;
        }
        .search {
            input{
                width: 85%;
                height: 30px;
                position: absolute;
                left: 5px;
                top: 8px;
                border-radius: 5px;
                border: none;
                text-indent: 4.5em;
            }
            img{
                position: absolute;
                width: 20px;
            }
            .searchImg{
                left: 10px;
                top: 13px;
            }
            .scanImg{
                left: 40px;
                top: 13px;
            }
        }
    }
    .green{
        background: #48bd5a;
    }
    
</style>