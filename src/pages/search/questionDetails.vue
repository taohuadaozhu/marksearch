<template>
  <div>
    <topComponent :title="title" :showLeft='true'></topComponent>
    <div class="title">
        <div class="content-title">
          <div>{{question.question}}</div>
        </div>
        <div v-html="question.content" style="padding:2rem 0.5rem;font-size:0.7rem"></div>
    </div>
  </div>
</template>

<script>
import api from '../../fetch/api'
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  data () {
    return {
      showMenus: false,
      question:'',
      title:'国际注册'
    }
  },
  methods: {
      getdatalistcontent(){
        api.getQuestionDetailss(this.$route.query.id).then((res) => {
          this.question = res.data
        })
      },
  },
  mounted(){
    this.getdatalistcontent()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.overwrite-title-demo {
  margin-top: 5px;
}
.title{
  padding: 3.8rem 0.5rem;
  font-size:0.8rem;
}
.content-title{
  border-bottom: 1px solid gray;
  padding:1rem 0.5rem;
  font-size: 1rem;
}
</style>
