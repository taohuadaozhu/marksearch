<template>
  <div class="container">
    <topComponent title='我的' :showLeft='true'>
        </topComponent>
        <div style="margin-top:30%;">
    <group>
      <cell class="aaaa" title="我的收藏" value="" is-link @click.native="gotoCollect"></cell>
      </group>
      <group>
      <cell title="退出" value="" @click.native="loginOut"></cell>
    </group>
    </div>
  </div>
</template>
<script>

  import {Group, Cell, CellBox} from 'vux'
  export default {
    components: {
     Group, Cell, CellBox
    },
    data () {
      return {
        fage: false,
        userId:window.localStorage.mark_id
      }
    },
    methods: {
      dj: function () {
        this.fage = !this.fage
      },
      gotoCollect(){
        if (this.userId) {
           this.$router.push('collect');
        } else {
            this.$router.push('login');
        }
      },
      loginOut () {
        window.localStorage.removeItem('mark_id');
        window.localStorage.removeItem('mark_mobile');
        this.$router.push('login')	//暂时不做处理只去登录页面
      },

      lisLogFn (data) {
        if (data) {
          this.login = 'true'
        }
      }
    },
    mounted: function () {
      document.body.scrollTop = 0
    }
  }
</script>
<style lang="less" scoped>

</style>
