<template>
  <div class="detail-content">
    <div>
    <div class="title">{{newContent.title}}</div>
    <div class="timeFrom">
       <div class="from">{{newContent.platform}}</div>
       <div class="time">2017-08-10</div>
       <div class="clear"></div>
    </div>
    <div class="img">
      <img :src="newContent.image" style="width: 100%"/>
    </div>
    <div class="text" v-html="newContent.content">
    </div>
  </div>
  </div>
</template>

<script>
  import api from '../fetch/api'
  import {Tabbar, TabbarItem, Group, Cell} from 'vux'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      api
    },
    data () {
      return {
        newContent: ''
      }
    },
    methods: {
      getdatalistcontent () {
        api.getNewListcontent(this.$route.query.id).then((res) => {
          this.newContent = res.data
        })
      }
    },
    mounted: function () {
      this.getdatalistcontent()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .detail-content{
    padding-bottom: 2.8rem;
    .title{
      font-size: 1rem;
      line-height: 1.5;
    }
    .timeFrom {
      border-bottom: 1px solid #ccc;
      padding: .5rem;
      .from,
      .time {
        color: #ababab;
        font-size: .9rem;
        float: left;
        margin-right: .5rem;
      }
      .time{
        margin-top:.1rem
      }
      .clear{ clear:both}
    }
    .img{
      margin: 1rem;
      text-align: center;
    }
    .text{
      font-size: .9rem;
      line-height: 1.5;
      text-indent:2em
    }
  }
</style>
