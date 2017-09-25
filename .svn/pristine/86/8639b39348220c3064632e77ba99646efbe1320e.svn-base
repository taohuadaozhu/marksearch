<template>
 <div>
  <topComponent :title='item.continentName' :showLeft='true' v-for="(item, index) in continent" :key='index'></topComponent>
  <div class="door">
    <div class="xdoor">
      <ul>
        <li v-for="item in continent" @click="gotoWeb(item.url)"><div class="images"><img :src="item.image" alt=""><span>{{item.countryName}}</span></div></li>
      </ul>
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
      title:'',
      query: true,
      register: false,
      query:'',
      dataList:'',
      continent:[],
    }
  },
  methods:{
    getList(){
        api.getInternationalInfo(this.$route.query.continentId).then((res) => {
          this.continent = res.dataList;
        });
    },
    gotoWeb(url){
      window.location.href = 'http://'+url;
    }
  },
  mounted(){
    this.getList()
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.door{
  width: 100%;
  margin-top: 3.8rem;
  border-top: 0.01rem solid black;
}
.xdoor{
  overflow: hidden;
  width: 21rem;
  margin:auto;
  padding-bottom: 2.6rem;
}
.xdoor ul li{
  width:5rem;
  height: 8rem;
  overflow: hidden;
  float:left;
  margin: 2rem 1rem 0rem 1rem;
  list-style: none;
  text-align: center;
}
.xdoor ul li div span{
  width: 2.5rem;
}
.images img{
  width: 4.8rem;
  height: 3.8rem;
  border: 1px solid gray;
  border-radius: 0.6rem;
}
</style>
