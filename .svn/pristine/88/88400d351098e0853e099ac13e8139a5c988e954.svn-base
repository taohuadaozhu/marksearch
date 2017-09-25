<template>
  <div class="bigPic">
    <img :src="picUrl" @click="goBack">
  </div>
</template>
<script>
  export default {

    data () {
      return {
        picUrl: window.localStorage.mark_image

      }
    },
    methods: {
      goBack () {
        this.$router.back()
      }

    },
    props: ['itemdata'],
    mounted: function () {
      if (this.$options.propsData.back !== undefined) this.backTit = this.$options.propsData.back;			//如果传递了back,则左侧返回文字显示的是传入的值
      if (this.$options.propsData.showLeft !== undefined) this.iSshow = this.$options.propsData.showLeft;	//如果传递了showLeft(默认是true),则该值决定左侧是否显示
    }
  }
  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>
<style lang="less" scoped>
  .bigPic {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
  }
</style>
