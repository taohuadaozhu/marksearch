<template>
  <div class="top">
    <div class="backcontent">
      <div @click='goBack' class="back" v-if='iSshow'></div>
    </div>
    <slot name="left"></slot>
    <h1>{{title}}</h1>
    <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      backTit: '返回',
      iSshow: true,
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  },
  props: ['title', 'back', 'showLeft'],
  mounted: function() {
    if (this.$options.propsData.back !== undefined) this.backTit = this.$options.propsData.back;			//如果传递了back,则左侧返回文字显示的是传入的值
    if (this.$options.propsData.showLeft !== undefined) this.iSshow = this.$options.propsData.showLeft;	//如果传递了showLeft(默认是true),则该值决定左侧是否显示
  }
}
</script>
<style lang="less" scoped>
.top {
  font-size: .875rem;
  height: 3.8rem;
  line-height: 2.75rem;
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
  color: white;
  .backcontent {
    position: absolute;
    top: 23%;
    left: 9px;
    margin-top: -4px;
    padding: 10px;
    .back {
      height: 12px;
      width: 12px;
      border-width: 0px 0px 2px 2px;
      border-color: #fff;
      border-style: solid;
      -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: relative;
      top: -2px;
    }
  }
  background: url(../assets/image/top.png) center no-repeat;
  background-size: cover;
  a,
  span {
    text-decoration: none;
    position: absolute;
    left: .9375rem;
    top: 0;
    cursor: pointer;
  }
  h1 {
    text-align: center;
    font-size: 1.38rem;
    line-height: 3.8rem;
    font-weight: normal;
  }
}
</style>
