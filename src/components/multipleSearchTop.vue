<template>
  <div class="top">
    <div class="backcontent">
      <div @click='goBack' class="back" v-if='iSshow'></div>
    </div>

    <div class="topsearchdiv" v-show="!showInput">
      <span @click="showSelect=!showSelect">{{types}}</span>
      <img src="../assets/image/RightArrow@2x.png">
    </div>

    <div class="topsearch" :class="{active:showInput}">
      <input type="search" placeholder="请输入搜索内容" @focus='showInput=true' @blur="showInput=false" v-model="inputVal" v-on:keyup.13="setSearchKey">
    </div>

    <div class="btn-q" @click="change">
      <i class="iconfont icon-caidan" style="color: #fff;font-size: 1.54rem;"></i>
    </div>

    <div class="searchOption" :class="{active:showSelect}" v-show="!showInput">
      <ul>
        <li v-for="item in selOptions" @click.stop="selected(item)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['back', 'showLeft', 'searchtype', 'types'],
  data() {
    return {
      selOptions: [
        { name: '注册号', id: '1' },
        { name: '申请人', id: '2' },
        { name: '商标名', id: '0' }
      ],
      backTit: '返回',
      iSshow: true,
      showInput: false,
      showSelect: false,
      results: [],
      inputVal: ''
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    change() {
      this.$emit('increment')
    },
    selected(item) {
      this.$emit('setSearchTopTitle', item)
      this.showSelect = false
    },
    setSearchKey() {
      this.$emit('setSearchKey', this.inputVal)
    }
  },
  mounted() {

  }
}

</script>
<style lang="less" scoped>
.top {
  width: 100%;
  height: 3.8rem;
  line-height: 3.8rem;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdcdc;
  font-size: .75rem;
  color: #fff;
  background-image: url(../assets/image/top.png);
  background-size: cover;
  position: fixed;
  top: 0;
  z-index: 10;
  .backcontent {
    position: absolute;
    top: 50%;
    left: 1.15rem;
    transform: translateY(-50%);
    .back {
      height: 1.07rem;
      width: 1.07rem;
      box-sizing: border-box;
      border-width: 0px 0px 2px 2px;
      border-color: #fff;
      border-style: solid;
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    }
  }
  .topsearchdiv {
    height: 100%;
    text-align: center;
    >span {
      font-size: 1.25rem;
      margin-right: 10px;
      &+img {
        width: 1.1rem;
      }
    }
  }
  .topsearch {
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 1.15rem;
    overflow: hidden;
    position: absolute;
    top: 50%;
    right: 3.7rem;
    transform: translateY(-50%);
    transition: all 500ms;
    &.active {
      width: 77%;
    }
    >input {
      width: 100%;
      height: 100%;
      padding: 0 1.2rem;
      vertical-align: top;
      background: url(../assets/image/sousuo@2x.png) right center no-repeat;
      background-size: contain;
      background-color: #fff;
    }
  }
  .btn-q {
    height: 100%;
    position: absolute;
    top: 50%;
    right: 1.15rem;
    transform: translateY(-50%);
  }
  .searchOption {
    color: #fff;
    background-color: rgba(64, 55, 168, 0.95);
    height: 0;
    overflow: hidden;
    transition: all 500ms;
    >ul {
      li {
        font-size: 1.1rem;
        text-align: center;
      }
    }
    &.active {
      height: 11.4rem;
    }
  }
}
</style>
