import axios from 'axios'
import Vue from 'vue'
import { ToastPlugin } from 'vux'

Vue.use(ToastPlugin)
let _this = this;
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = process.env.API_ROOT;
// axios.defaults.baseURL = 'http://10.10.10.119:8070/';
// axios.defaults.baseURL = 'http://znipe.tzecc.com:8070/';
// axios.defaults.baseURL = 'http://10.1.20.57:8070/';
// axios.defaults.baseURL = 'http://10.1.19.225:8070/';
// axios.defaults.baseURL = 'http://10.1.20.53:8070/';
// axios.defaults.baseURL = 'http://192.168.32.1:8070/';
axios.defaults.withCredentials = true;

//POST传参序列化------------------此方法没有
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    // config.data = qs.stringify(config.data);
  }
  return config
}, (error) => {
  //  _.toast("错误的传参", 'fail');
  return Promise.reject(error)
})

//返回状态判断
axios.interceptors.response.use((res) => {
  if (!(res.data.errorCode === "200")) {
    let code = res.data.errorCode;
    var apptoast = new Vue({
      el: '#toast'
    })
    /**
     * 3005验证码错误
     * 3007", errorMsg: "手机号已存在！
     * 3030", errorMsg: "密码错误
     * 3000", errorMsg: "用户名不存在
     * 3037","errorMsg":"无搜索结果
     */
    if (code === "3005" || code === "3007" || code === "3030" || code === "3030" || code === "3000" || code === "3037") {
      apptoast.$vux.toast.show({
        text: res.data.errorMsg,
        type: 'warn'
      })
    }
    if(code === "3051"){
      this.$vux.toast.hide()
    }else {
      apptoast.$vux.toast.show({
        text: '系统错误！',
        type: 'warn'
      })
    }
    return Promise.reject(res)
  }
  return res
}, (error) => {
  // console.log(888)
  return Promise.reject(error)
})

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  /**
   * 用户登录
   */
  login(params) {
    return post('login', params)
  },
  /**
   * 用户注册
   */
  mobileRegist(params) {
    return post('mobile/register', params)
  },
  getCapchar(tellphone) {
    return get('sendCaptcha/' + tellphone)
  },
  /**
   * 最近搜索查询
   */
  getNearSearchList(params) {
    return get('searchQuery/getNearSearchList/' + params)
  },
  /**
   * 请求热门商标
   */
  getPopularBrand() {
    return get('searchQuery/queryHotTopic/')
  },
  /**
   * 删除搜索
   */
  deleteCaption(params) {
    return post('searchQuery/clearNearSearch', params)
  },
  /**
   * 获取行业类型
   */
  getProfessionTypeList() {
    return get('profession/getProfessionTypeList/')
  },
  /**
   * 请求新闻列表
   */
  getNewList(params) {
    return post('news/listAllByNewsType/', params)
  },
    /**
   * 请求首页新闻列表
   */
  getFirstNew(params){
    return post('news/listHomeNews', params)
  },
    /**
   * 请求首页更多新闻列表
   */
  getNewMore(params){
    return post('news/listHomeNews', params)
  },
  /**
   * 请求城市列表
   */
  getCityList() {
    return get('address/listAddress')
  },
  /**
   * 请求收藏列表
   */
  getCollectList(param) {
    return post('user/trademark/allcollected', param)
  },
  /**
   * 请求新闻详情
   */
  getNewListcontent(params) {
    return get('news/findByNewsId/' + params)
  },
  /**
   * 收藏动作
   */
  collect(params) {
    return post('user/trademark/collect', params)
  },
  /**
   * 在搜索商品，返回商品相关尼斯类型
   */
  advancedSearchReturnType(params) {
    return post('searchQuery/advancedSearchReturnType', params)
  },
  /**
  * 获取尼斯第一分类标题列表
  */
  getFirstAllTitle(params) {
    return get('nice/getFirstAllTitle', params)
  },
  /**
   * 获取商品商标详细信息
   */
  getshopList(params) {
    return post('regBasic/getRegBasicInformation', params)
  },
  /**
   * 在搜索商品/商标返回商标数据结果集
   */
  getresultList(params) {
    return post('searchQuery/brandAdvancedSearch', params)
  },
  /**
   * 获取尼斯第二分类标题列表的头部
   */
  getTitleType(params) {
    return get('nice/getFirstLevelById/' + params)
  },
  /**
   * 获取尼斯第二分类标题列表
   */
  getErAllTitle(params) {
    return get('nice/getSecondTitle/' + params)
  },
  /**
   * 获取第二分类详细信息
   */
  getErcontent(params) {
    return get('nice/getSecondLevelById/' + params)
  },
  /**
   * 商标详情中的服务项
   */
  getMarkDetailService(params) {
    return post('regBasic/getGoodsCode', params)
  },
  /**
   * 在搜索商标返回商标数据结果集（近似搜索）
   */
  getMarkResultList(params) {
    return post('searchQuery/brandAdvancedSearchBybrandName', params)
  },
  /**
   * 保存最近搜索
   */
  saveNearSearch(params) {
    return post('searchQuery/saveNearSearch', params)
  },
  /**
   * 根据类似群列出类似群相关的类似群
   */
  getSecondRelationBySimilarCode(params) {
    return post('niceRelation/getSecondRelationBySimilarCode', params)
  },
  /**
   * 商标百科常见问题
   */
  getQuestion() {
    return get('cyclopedia/listQuestion')
  },
  /**
   * 商标百科常见问题详情
   */
  getQuestionDetails(params) {
    return get('cyclopedia/findQuestionById/' + params)
  },
  /**
   * 商标百科查询、注册、转让
   */
  getQuery(params) {
    return get('cyclopedia/listByProfessionType/' + params)
  },
  /**
   * 商标查询注册转让相关问题详情
   */
  getQueryDetails(params) {
    return get('cyclopedia/findById/' + params)
  },
  /**
   * 获取国际注册地址列表
   */
  getInternationalInfo(params) {
    return get('internationalInfo/listByContinentId/' + params)
  },
  /**
   * 获取国际注册问题列表
   */
  getlistQuestion(params) {
    return get('internationalInfo/listQuestionByTitleType/' + params)
  },
  /**
   * 获取国际注册问题详情列表
   */
  getQuestionDetailss(params) {
    return get('internationalInfo/getContentByQuestionId/' + params)
  },
  /**
   * 综合查询
   */
  synthesizeSearch(params) {
    return post('searchQuery/synthesizeSearch', params)
  },
  /**
  * 近似搜索后尼斯分类下拉菜单第一大类有多少个商标
  */
  getAllNiceClassAfterSearchBrandName(params) {
    return post('nice/getAllNiceClassAfterSearchBrandName', params)
  },
  /**
  * 各省驰名商标占全国驰名商标比例
  */
  resoundBrandRate() {
    return get('analysis/resoundBrandRate')
  },
  /**
  * 商标代理公司代理量排名
  */
  agentRank(params) {
    return get('analysis/agentRank', params)
  },
  /**
  * 商标注册量趋势
  */
  signinByProvinceCode(params) {
    return post('analysis/signinByProvinceCode', params)
  },
  /**
  * 商标注册量分布
  */
  signinByDate(params) {
    return post('analysis/signinByDate', params)
  },
  /**
  * 商标注册量分行业趋势分析
  */
  signinByProvinceCodeAndProfession(params) {
    return post('analysis/signinByProvinceCodeAndProfession', params)
  },
  /**
  * 商标注册量分行业排名
  */
  signinByindustry(params) {
    return post('analysis/signinByindustry', params)
  },
  /**
  * 商标注册量分类别趋势分析
  */
  signinByintClsRank(params) {
    return post('analysis/signinByintClsRank', params)
  },
  /**
  * 商标注册量分类别排名
  */
  signinByintClsRankByServiceType(params) {
    return post('analysis/signinByintClsRankByServiceType', params)
  },
  /**
  * 商标注册量分商标类型累计排名
  */
  signinBySigninType(params) {
    return post('analysis/signinBySigninType', params)
  },
  /**
  * 商标申请人通过不同渠道申请商标对比
  */
  // signinBySigninType() {
  //   return get('analysis/signinBySigninType')
  // },
  listYears(params) {
    return get('analysis/listYears', params)
  },
  listProvinces(params) {
    return get('analysis/listProvinces', params)
  },
}

