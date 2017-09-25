<template>
  <div>
    <topComponent :title="title" :showLeft='true'></topComponent>
    <div class="graypanel" style="margin-top:3.8rem;">
      <div class="propanel">
        <ul>
          <li :class="{'active':index===nowSelected1}" v-for="(item, index) in goodsList" @click.stop="selectGoods(item.id,index)">
            {{item.sort}}.{{item.title}}
          </li>
        </ul>
      </div>
      <div class="regionpanel">
        <ul>
          <li style="overflow: hidden;" v-for="(item, index) in erGoodsList">
            <label style="display: block;">
              {{item.title}}
              <!-- <input style="display: none;" v-model="goodsSimilar" type="checkbox" :value="item.similar_code" >
              <icon class="selItems" style="float: right;" type="success-no-circle"></icon> -->
            </label>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
      <div class="mover-footer" style="background-color: #f2f2f2;">
        <!-- <span @click="resetSim()">重置</span> -->
        <span @click="getSimCertain()">确定</span>
      </div>
    </div>
  </div>
</template>
<script>

import api from '../../fetch/api'
import { Tabbar, TabbarItem, Group, Icon, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Icon,
    Cell
  },
  data() {
    return {
      goodsList: [],
      title: '请选择行业',
      erGoodsList: [],
      nowSelected1: ''
    }
  },
  created() {

  },
  methods: {
    getFirst() {
      api.getFirstAllTitle().then((res) => {
        this.goodsList = res.dataList
        this.selectGoods(this.goodsList[0].id, 0)
      })
    },
    selectGoods(id, index) {
      this.nowSelected1 = index
      api.getErAllTitle(id).then((res) => {
        this.erGoodsList = res.dataList
        // console.log(this.erGoodsList)
      })
    },
  },
  mounted: function() {
    this.getFirst()
  }
}
</script>
<style lang="less" scoped>
.fixedbutton {
  position: fixed;
  background-color: #fff;
  height: 3rem;
  bottom: 0;
  width: 100%;
  z-index: 999;
  color: #666;
  line-height: 3rem;
  div {
    float: left;
    width: 50%;
    text-align: center;
    height: 100%;
  }
  .goon {
    background-color: #4037a8;
    color: #f9f9f9;
  }
}

.content {
  margin: 0;
  background-color: white;
  height: 100%;
  padding-bottom: 5rem;
  p {
    font-size: .95rem;
    margin-left: .5rem;
    line-height: 2rem;
  }
}

.graypanel {
  position: fixed;
  width: 100%;
  z-index: 9999;
  background-color: rgba(99, 99, 99, .5);
  height: 100%;
  overflow: auto;
  // top: 6.8rem;
  .propanel,
  .regionpanel {
    float: left;
    width: 40%;
    height: 45%;
    overflow: auto;
    background-color: white;
    li {
      font-size: 1rem;
      line-height: 2.3rem;
      padding-left: 8px;
      border-bottom: 0.5px solid #dcdcdc;
      border-right: 1px solid #dcdcdc;
    }
  }
  .regionpanel {
    width: 60%;
    background-color: #F2F2F2;
    li {
      font-size: .75rem;
      line-height: 2.3rem;
    }
  }
  .crossSearch {
    border-top: 1px solid #dcdcdc;
    background-color: #f2f2f2;
    padding: 10px;
    overflow: auto;
    label {
      font-size: 16px;
    }
    p {
      font-size: 14px;
      color: #999;
      text-indent: 28px;
    }
    .crossSearchResult {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      label {
        >span {
          display: inline-block;
          padding: 3px 10px;
          margin-top: 10px;
          font-size: 1rem;
          border: 1px solid #797979;
          margin-right: 10px;
        }
        input[type=checkbox]:checked+span {
          background-color: #19B5FE;
        }
      }
    }
  }
  .mover-footer {
    height: 5.38rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      font-size: 1rem;
      text-align: center;
      width: 6rem;
      line-height: 2.23rem;
      border-radius: 3px;
      border: 1px solid #797979;
      background-color: #4037A8;
      color: #fff;
    }
  }

  .mover {
    width: 100%;
    background: #ffffff;
    .mover-content {
      border-bottom: 1px solid #c0c0c0;
      .mover-header {
        padding: 1rem;
        padding-bottom: 0;
        text-align: center;
        >span {
          color: #6E6E6E;
          font-size: 1rem;
        }
      }
      .mover-btn {
        ul {
          padding: 1rem 0;
          overflow: hidden;
          li {
            padding: 0 1.3rem;
            line-height: 2.23rem;
            text-align: center;
            margin: 0 1.15rem;
            border-radius: 3px;
            float: left;
            list-style: none;
            font-size: .75rem;
            color: #999;
            border: 1px solid #999;
            &.liActive {
              color: #040378;
              border-color: #040378;
            }
          }
        }
      }
    }
  }
}

.graypanel2 {
  position: absolute;
  width: 100%;
  min-height: 100%;
  z-index: 8;
  overflow: auto;
  top: 6.8rem;
  .propanelInter {
    background-color: #fff;
    padding: 0.38rem 1.15rem 3.8rem;
    >ul {
      display: flex;
      flex-wrap: wrap;
      >li {
        overflow: hidden;
        list-style: none;
        flex: 1 40%;
        text-align: center;
        box-sizing: border-box;
        line-height: 4.08rem;
        color: #4037a8;
        background-color: #F2F2F2;
        margin-bottom: 0.38rem;
        border-radius: 5px;
        &:nth-child(2n) {
          margin-left: 0.38rem;
        }
        >label {
          input[type=checkbox]:checked+span {
            display: block;
            width: 100%;
            height: 100%;
            background-color: #534bb1;
            color: #fff;
          }
        }
      }
    }
  }
  .Inter-footer {
    height: 3.7rem;
    line-height: 3.7rem;
    font-size: 1.15rem;
    background-color: #fff;
    padding: 0 1.15rem;
    border-top: 1px solid #ccc;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    >label {
      padding-right: 1rem;
    }
    >button {
      width: 4.62rem;
      height: 2.46rem;
      border-radius: 5px;
      color: #fff;
      background-color: #4037A8;
      float: right;
      margin-top: 0.62rem;
    }
  }
}

.active {
  background-color: #F2F2F2;
  color: #19B5FE;
}

.active2 {
  color: #44C1FC;
}

.filter {
  position: fixed;
  top: 3.75rem;
  width: 100%;
  z-index: 9;
}

.clear {
  clear: both;
}

.classA {
  background-color: #19B5FE;
  color: white;
}

.filter-info {
  overflow: hidden;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  justify-content: space-around;
  background: white;
  dd {
    width: 20%;
    background: #F2F2F2;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    line-height: 1.8rem;
    font-size: 1rem;
    text-align: center;
    margin: .5rem .2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span::after {
      content: " ";
      display: inline-block;
      line-height: 1.2rem;
      height: 4px;
      width: 4px;
      border-width: 0 2px 2px 0;
      border-color: #333333;
      border-style: solid;
      -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: relative;
      top: -3px;
      left: 8px;
    }
  }
}

dd:last-child {
  border-right: 0;
}

.selItems {
  display: none;
}

input[type=checkbox]:checked+.selItems {
  display: block;
}
</style>
