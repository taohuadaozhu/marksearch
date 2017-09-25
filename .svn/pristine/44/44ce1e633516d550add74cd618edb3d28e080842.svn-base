<template>
  <div>
    <div class="service-item">
      <div class="stitle">
        <span>{{itemFirst.sortNum}}-{{dataList.firstClassTitle}}</span>
      </div>
      <div class="scontent">
        <dl v-for="item in dataList.secondClass" :key="item.similarCode">
          <dt @click="selectAllChild(item)">【{{item.similarCode}}】{{item.secondClassTitle}}
            <img v-if="isAllselected(item.thirdClassType)" src="../assets/image/TrueStrokedIcon@2x.png">
            <img v-else src="../assets/image/TrueStrokedIcon1@2x.png">
          </dt>
          <dd v-for="child in item.thirdClassType" :key="child.goodsCode" @click="selectChild(child)">
            <span>{{child.goodsName}}</span>
            <img v-if="child.select" src="../assets/image/TrueStrokedIcon@2x.png">
            <img v-else src="../assets/image/TrueStrokedIcon1@2x.png">
            <!-- <icon v-if="child.select" type="success-circle"></icon>
              <icon v-else type="circle"></icon> -->
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell, Icon } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Icon
  },
  data() {
    return {
      region: '地区',
      showPanel: false,
      isOpenState: false,
      isOpenIndustry: false,
      dataList: []
    }
  },
  computed: {
    thirdList() {
      return this.itemFirst.secondClass;
    }
  },
  watch: {
    itemFirst: {
      handler: function(val, oldval) {

      },
      deep: true
    },
  },
  props: ['itemFirst', 'index'],
  methods: {
    isAllselected(children) {
      let isall = true;
      children.map(item => {
        if (!item.select) {
          isall = false;
          return isall;
        }
      })
      return isall;
    },
    selectAllChild(item) {
      if (this.isAllselected(item.thirdClassType)) {
        item.thirdClassType = item.thirdClassType.map(ii => {
          ii.select = false;
          return ii;
        })
      } else {
        item.thirdClassType = item.thirdClassType.map(ii => {
          ii.select = true;
          return ii;
        })
      }

    },
    selectChild(child) {
      child.select = !child.select;
      this.dataList.secondClass = this.dataList.secondClass.map(item => {
        item.thirdClassType = item.thirdClassType.map(ii => {
          if (ii.goodsCode === child.goodsCode) {
            ii.select = child.select;
          }
          return ii;
        })
        return item;
      })
    }

  },
  mounted: function() {
    document.body.scrollTop = 0;
    this.dataList = this.$options.propsData.itemFirst;

  }
}
</script>
<style lang="less" scoped>
.service-item {
  padding: .76rem;
  width: 100%;
  background-color: white;
  height: auto;
  box-sizing: border-box;
  box-shadow: 0 2px 5px 5px #f6f6f6;
  margin-bottom: .76rem;
  border-radius: 3px;
  .stitle {
    width: 100%;
    margin-bottom: 1.34rem;
    span {
      font-weight: bold;
    }
    div {
      float: right;
      background-color: #e4f9ff;
      color: #40bcfb;
      padding: .3rem;
    }
  }
  .scontent {
    border-radius: 4px;
    font-size: 1.1rem;
    box-sizing: content-box;
    color: #222;
    dl {
      margin-top: 1.34rem;
      dt {
        // margin: .5rem 0;
        margin-bottom: 1rem;
        img {
          float: right;
          font-size: 1rem;
          width: 1.2rem;
        }
      }
      dd {
        line-height: 1.5rem;
        margin-left: 5px;
        img {
          float: right;
          font-size: 1rem;
          width: 1.2rem;
        }
      }
    }
    div {
      padding: 0 .5rem;
      line-height: 2rem;
      img {
        float: right;
        margin-top: .5rem;
        width: 1.2rem;
      }
    }
    div:not(:first-child):after {
      content: " ";
      position: absolute;
      right: 0;
      height: 1px;
      border-top: 1px solid #D9D9D9;
      color: #D9D9D9;
      transform-origin: 0 0;
      transform: scaleY(0.5);
      left: 15px;
      right: 15px;
    }
  }
}

.graypanel {
  position: fixed;
  width: 100%;
  z-index: 9999;
  background-color: rgba(99, 99, 99, .5);
  top: 0;
  height: 100%;

  .graycontent {
    text-align: center;
    width: 50%;
    height: auto;
    max-height: 70%;
    margin: 25% 25%;
    vertical-align: middle;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: white;
    li {
      font-size: .75rem;
      line-height: 2rem;
      padding-left: 8px;
      border-bottom: 1px solid #dcdcdc;
    }
  }
}

.active {
  background-color: #dcdcdc;
}
</style>
