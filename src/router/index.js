import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/other/Home'
import frame from '@/components/Frame'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      component: resolve => require(['../pages/other/login'], resolve)
    },
    {
      path: '/register',
      component: resolve => require(['../pages/other/register'], resolve)
    },

    {
      path: '/',
      component: Home,
      children: [{
        path: '/',
        component: resolve => require(['../pages/search/index'], resolve)
      },
      {
        path: 'search',
        component: resolve => require(['../pages/search/markSearch'], resolve)
      },
      {
        path: 'multipleSearch',
        component: resolve => require(['../pages/search/multipleSearch'], resolve)
      },
      { // regNum  intCls
        path: 'markdetail',
        component: resolve => require(['../pages/search/markDetail'], resolve),
        children: [
          {
            path: 'bigpic',
            component: resolve => require(['../pages/search/bigPicture'], resolve)
          }
        ]
      },
      {
        path: 'searchresult',
        component: resolve => require(['../pages/search/searchResults'], resolve),
        children: [{ // regNum  intCls
          path: 'markdetail',
          component: resolve => require(['../pages/search/markDetail'], resolve),
          children: [
            {
              path: 'bigpic',
              component: resolve => require(['../pages/search/bigPicture'], resolve)
            }
          ]
        }]
      },
      {
        path: 'markSearchResults',
        component: resolve => require(['../pages/search/markSearchResults'], resolve),
        children: [{ // regNum  intCls
          path: 'markdetail',
          component: resolve => require(['../pages/search/markDetail'], resolve),
          children: [
            {
              path: 'bigpic',
              component: resolve => require(['../pages/search/bigPicture'], resolve)
            }
          ]
        }]
      },
      {
        path: 'multipleSearchResult',
        component: resolve => require(['../pages/search/multipleSearchResult'], resolve),
        children: [{ // regNum  intCls
          path: 'markdetail',
          component: resolve => require(['../pages/search/markDetail'], resolve),
          children: [
            {
              path: 'bigpic',
              component: resolve => require(['../pages/search/bigPicture'], resolve)
            }
          ]
        }]
      },

      {
        path: 'goodsItem',
        component: resolve => require(['../pages/search/goodsItem'], resolve)
      },
      {
        path: 'newsList',
        component: resolve => require(['../pages/search/newsList'], resolve)
      },
      {
        path: 'moreNews',
        component: resolve => require(['../pages/search/moreNews'], resolve)
      },
      {
        path: 'newsDetail',
        component: resolve => require(['../pages/search/newsDetail'], resolve)
      },
      {
        path: 'typesearch',
        component: resolve => require(['../pages/search/typeSearch'], resolve)
      },
      {
        path: 'typeDetails',
        component: resolve => require(['../pages/search/typeDetails'], resolve)
      },
      {
        path: 'trademarkencyclopedia',
        component: resolve => require(['../pages/search/trademarkEncyclopedia'], resolve)
      },
      {
        path: 'trademarkdetails',
        component: resolve => require(['../pages/search/trademarkDetails'], resolve)
      },
      {
        path: 'encyclopediasDetails',
        component: resolve => require(['../pages/search/encyclopediasDetails'], resolve)
      },
      {
        path: 'typeItem',
        component: resolve => require(['../pages/search/typeItems'], resolve)
      },
      {
        path: 'internationalRegister',
        component: resolve => require(['../pages/search/internationalRegister'], resolve)
      },
      {
        path: 'continent',
        component: resolve => require(['../pages/search/continent'], resolve)
      },
      {
        path: 'questionDetails',
        component: resolve => require(['../pages/search/questionDetails'], resolve)
      },
      {
        path: 'explain',
        component: resolve => require(['../pages/search/explain'], resolve)
      },
      {
        path: 'industry',
        component: resolve => require(['../pages/search/industry'], resolve)
      }
      ]
    },
    {
      path: '/analysis',
      component: Home,
      children: [{
        path: '/',
        component: resolve => require(['../pages/analysis/index'], resolve)
      },
      // 商标代理分析
      {
        path: 'agent',
        component: resolve => require(['../pages/analysis/agent'], resolve)
      },
      // 驰名商标分析
      {
        path: 'famous',
        component: resolve => require(['../pages/analysis/famous'], resolve)
      },
      // 商标注册分析
      {
        path: 'register',
        component: resolve => require(['../pages/analysis/register'], resolve)
      }
      ]
    },
    {
      path: '/user',
      component: Home,
      children: [{
        path: '/',
        component: resolve => require(['../pages/user/index'], resolve)
      }, {
        path: '/collect',
        component: resolve => require(['../pages/user/collectList'], resolve)
      }]
    },
    {
      path: '*',
      component: resolve => require(['../pages/search/index'], resolve)
    }
  ]
})
