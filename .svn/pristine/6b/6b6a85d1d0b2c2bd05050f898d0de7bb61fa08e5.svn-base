export const mutations = {

  //改变商品服务项
  changeGoodsItems(state, param) {
    state.goodsItems = param;
  },

  //改变勾选的商品服务项
  changeGoodsItemsSelect(state, param) {
    state.goodsItems.map(item => {
      item.children.map(item1 => {
        item1.children.map(item11 => {
          if (param.id === item11.id) {
            item11.select = param.select;
          }
        })
      })
    })
  },

  // 改变当前搜索的字符串
  changeSearch(state, param) {
    state.searchString = param;
  },

  // 综合查询
  changeMultipleSearch(state, param) {
    state.multipleSearchParams = param;
  },

  //
  changeLoading(state){
    state.showLoading = !state.showLoading;
  }

}
