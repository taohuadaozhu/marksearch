<template>
  <div>
    <div class="service-item">
      <div class="stitle">
        <span>{{itemFirst.sortNum}}-{{dataList.firstClassTitle}}</span>
      </div>
      <div class="scontent">
        <dl v-for="item in dataList.secondClass" :key="item.similarCode">
          <dt @click="gotoDetails(itemFirst.id)">【{{item.similarCode}}】{{item.secondClassTitle}}</dt>
          <dd v-for="child in item.thirdClassType" :key="child.goodsCode">
            <template v-for="(text,index) in child.goodsName.split(search)" >
              <span>{{text}}</span><strong v-show="index!=child.goodsName.split(search).length-1">{{search}}</strong>
            </template>
            <span>&nbsp&nbsp{{child.goodsCode}} {{child.goodsName}}</span>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
  import {Tabbar, TabbarItem, Group, Cell, Icon} from 'vux'
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
        dataList: [],
        search:this.$store.state.searchString
      }
    },
    computed: {
      thirdList(){
        return this.itemFirst.secondClass;
      }
    },
    watch: {
      itemFirst: {
        handler: function (val, oldval) {

        },
        deep: true
      },
    },
    props: ['itemFirst','index'],
    methods: {
      getRed(value){
        let start = value.indexOf("手机");
        value = value.substring(0,start)+'<strong>'+"手机"+'</strong>'+value.substring(start+2,value.length)
        return value;
      },
      // guolv: function(){
      //   this.dataList.secondClass.thirdClassType.goodNames;
      //   this.arr.push(this.arr);
      //   str.indexof()
      // }
      gotoDetails(id){
        this.$router.push({path:'typeDetails',query:{id:id}})
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
    mounted: function () {
      document.body.scrollTop = 0;
      this.dataList = this.$options.propsData.itemFirst;

    }
  }
</script>
<style lang="less" scoped>
  .service-item {
    padding: .5rem;
    width: 100%;
    height: auto;
    font-size: 1rem;
    box-sizing: border-box;
    .stitle {
      width: 100%;
      height: 2.5rem;
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
      border: 0.01rem solid #000000;
      background-color: #f6f6f6;
      border-radius: 4px;
      font-size: .9rem;
      box-sizing: content-box;
      padding: .4rem;
      dl {
        dt {
          margin: .5rem 0;
          color:#19B5FE;
        }
        dd {
          font-size: .85rem;
          line-height: 1.5rem;
          margin-left: 15px;
          i {
            float: right;
            font-size: 1rem;
          }
        }
      }
      div {
        padding: 0 .5rem;
        line-height: 2rem;
        i {
          float: right;
          margin-top: .5rem;
        }
      }
      div:not(:first-child):after {
        content: " ";
        position: absolute;
        right: 0;
        height: 1px;
        border-top: 1px solid #D9D9D9;
        color: #D9D9D9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
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
