// 获取状态信息
export const getters = {
  getItems(state) {
    return state.goodsItems
  },
  getSearchString(state) {
    return state.searchString
  },
  getMultipleSearchParms(state) {
    return state.multipleSearchParams
  },
  getshowLoading(state) {
    return state.showLoading
  }
}
