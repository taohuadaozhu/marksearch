<template>
    <div class="container">
        <topComponent title='我的收藏' :showLeft='true'>
        </topComponent>
        <div style="margin-top:3.8rem;">
            <collectItem v-for="(item,index) in dataList" :key='index' :itemdata="item"></collectItem>
        </div>
    </div>
</template>
<script>
import api from '../../fetch/api'
import { Group, Cell, CellBox } from 'vux'
export default {
    components: {
        Group, Cell, CellBox
    },
    data() {
        return {
            dataList: [],
            userId: window.localStorage.mark_id
        }
    },
    methods: {

    },
    created: function() {
        if (this.userId) {
            let data = { userId: this.userId }
            api.getCollectList(data).then((res) => {
                this.dataList = res.dataList;
            })
        } else {
            this.$router.push('login');
        }

    }
}
</script>
<style lang="less" scoped>

</style>
