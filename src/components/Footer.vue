<template>
  <tabbar>
    <tabbar-item selected link="/">
      <!-- <i slot="icon"></i> -->
      <span style="font-size: 26px;" slot="label" class="iconfont icon-shouye"></span>
    </tabbar-item>
    <!-- <tabbar-item link="analysis">
      <i slot="icon" ></i>
      <span style="font-size: 26px;" slot="label" class="iconfont icon-fenxi"></span>
    </tabbar-item> -->
    <tabbar-item link="user">
      <!-- <i slot="icon"></i> -->
      <span style="font-size: 26px;" slot="label" class="iconfont icon-wode"></span>
    </tabbar-item>
  </tabbar>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
<style>

</style>
