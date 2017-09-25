<template>
 <div style="background:#fff">
  <topComponent :title='title' :showLeft='true'></topComponent>
  <div class="content">
    <tab style="margin:auto;":line-width=3 active-color='#4438ab' custom-bar-width=5rem>
      <tab-item selected @on-item-click="onItemClick"  style="margin:0 0.69rem;">申请注册</tab-item>
      <tab-item @on-item-click="onItemClick"style="margin:0 0.69rem">制度法规</tab-item>
    </tab>
  </div>
  <div style="height:23.85rem;">
    <!-- 申请注册 -->
    <div class="query" v-if="query">
      <ul>
        <li v-for="item in query" @click="gotoNews(item.id)"><span>{{item.question}}</span><span>{{item.createTime}}</span></li>
      </ul>
    </div>
  </div>
  <!-- 商标局入口 -->
  <div class="door">
    <span class="doorTitle">商标局官方入口</span>
    <div class="flexBox">
      <div @click="gotoContinent(0)"><img src="../../assets/image/yazhou@2x.png" alt=""></div>
      <div @click="gotoContinent(1)"><img src="../../assets/image/ou@2x.png" alt=""></div>
      <div @click="gotoContinent(2)"><img src="../../assets/image/fei@2x.png" alt=""></div>
    </div>
    <div class="flexBox">
      <div @click="gotoContinent(3)"><img src="../../assets/image/beimei@2x.png" alt=""></div>
      <div @click="gotoContinent(4)"><img src="../../assets/image/nanmei@2x.png" alt=""></div>
      <div @click="gotoContinent(5)"><img src="../../assets/image/dayang@2x.png" alt=""></div>
    </div>
  </div>
</div>
</template>
<script>
import api from '../../fetch/api'
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'

export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      title:'国际注册',
      query: true,
      register: false,
      query:[],
      dataList:'',
      continent:[]
    }
  },
  created(){

  },
  methods:{
    getList(){
        api.getlistQuestion().then((res) => {
          this.query = res.dataList;
        });
    },
    get(){
      var divName = document.getElementsByClassName("door")[0];
      var divWidth = divName.offsetWidth;
      console.log(divWidth);
      var spanName = document.getElementsByClassName("doorTitle")[0];
      var spanWidth = spanName.offsetWidth;
      spanName.style.left = (divWidth-spanWidth)/2 + 'px';
      var positionLeft = (spanName.style.left)/26 + 'rem';
      spanName.style.left = positionLeft;
    },
    onItemClick(index){
      if (index == 0) {
        this.query = true,
          this.register = false,
        api.getlistQuestion(index).then((res) => {
          this.query = res.dataList;
        });
      }
      if (index == 1) {
        this.query = false,
          this.register = true
        api.getlistQuestion(index).then((res) => {
          this.query = res.list;
        });
      }
    },
    //跳转问题详情
    gotoNews(id){
      this.$router.push({path:'questionDetails',query: { id: id }})
    },
    // 跳转洲际
    gotoContinent(continentId){
      this.$router.push({path:'continent',query: { continentId: continentId }})
    }
  },
  mounted(){
    this.get()
      api.getlistQuestion(0).then((res) => {
        this.query = res.dataList;
      });
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.content{
  margin-top: 3.8rem;
  padding: 0;
}
.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
.door{
  position: relative;
  padding-bottom: 3.6rem;
  padding-top: 1.42rem;
}
.doorTitle{
  position: absolute;
  top: -1.34rem;
  background: #fff;
  z-index: 1;
  padding: 0 0.5rem;
  font-size: 1.23rem;
  color:#333;
}
.query ul li{
  margin-top: 1.92rem;
  font-size: 1.08rem;
  padding: 0 1.08rem;
  color: #333;
  list-style-type: none;
}
.query ul li span:nth-child(2){
  float:right;
}
.vux-tab .vux-tab-item.vux-tab-selected{
  color:#4438ab;
  font-size: 1.24rem;
  height: 2.92rem;
  line-height: 2.92rem;
  width: 2.92rem;
}
.vux-tab .vux-tab-item{
  font-size: 1.24rem;
  color: #999;
  height: 2.92rem;
  line-height: 2.92rem;
  width: 4.7rem;
}
.vux-tab{
  height: 2.92rem;
  line-height: 2.92rem;
  width: 13.3rem;
  bar-active-color: #4438ab!important;
}
.flexBox{
  display: flex;
  padding: 0rem 2.77rem 0 2.7rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.42rem;
}
.flexBox div{
  width: 4.615rem;
  height:4.615rem;
  border: 0.05rem solid #4438ab;
  border-radius: 0.7rem;
  text-align: center;
  line-height: 4.615rem;
}
.flexBox div img{
  height: 1.38rem;
  margin: auto;
}
</style>
