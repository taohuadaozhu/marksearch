<template>
  <div class="container">
    <topComponent :title='title' :showLeft='true'></topComponent>
    <div class="container-header">
      <div v-for="item in headerData" @click="gotoPages(item.name)">
        <span><img :src="item.imgUrl" width="100%" height="100%"></span>
        <span>{{item.name}}</span>
      </div>
    </div>

    <div class="chartc">
      <div class="tool">
        <div class="charttitle">
          <span>商标注册量趋势</span>
          <span>更多分析</span>
        </div>
        <div>
          <dropDownMenu style="height: 1.9rem;width: 8.6rem;line-height: 1.9rem;" :options='provincesList' @setSelTop="setSelTop"></dropDownMenu>
          <!-- <select v-model="region1">
            <option v-for="(item, index) in provincesList" :key="item.index" :value="item.value">{{item.name}}</option>
          </select> -->
        </div>
      </div>
      <div class="chart" style="height: 24rem;" id="qushi"></div>
    </div>

    <div class="chartc">
      <div class="tool">
        <div class="charttitle">
          <span>商标代理公司代理量排名（Top20）</span>
          <span>更多分析</span>
        </div>
        <div>
          <select v-model="region1">
            <option v-for="item in provincesList" :key="item.id" :value="item.id">{{item.title}}</option>
          </select>
          <select v-model="region1">
            <option v-for="item in provincesList" :key="item.id" :value="item.id">{{item.title}}</option>
          </select>
        </div>
      </div>
      <div class="chart" style="height:20rem;" id="hangye"></div>
    </div>

    <div class="chartc">
      <div class="tool">
        <div class="charttitle">
          <span>各省驰名商标占全国驰名商标比例（Top20）</span>
          <span>更多分析</span>
        </div>
      </div>
      <div style="height: 15rem;" id="bili"></div>
    </div>

  </div>
</template>
<script>
import api from '../../fetch/api'
var echarts = require('echarts');
var chartcolors = ['#1bbc9b', '#f5ab35', '#ef4836', '#8e44ad', '#0099cc', '#ff6666', '#990066', '#666699', '#999933'];
var chart1, chart2, chart3;
export default {
  data() {
    return {
      title: '综合分析',
      headerData: [
        { name: '注册分析', imgUrl: require('../../assets/image/zhucefenxi@2x.png') },
        { name: '代理分析', imgUrl: require('../../assets/image/dailifenxi@2x.png') },
        { name: '驰名商标', imgUrl: require('../../assets/image/chimingshangbiao@2x.png') }
      ],
      active1: 'month',
      datay: [5, 20, 36, 10, 10, 20],
      datax: ["2010年", "2011年", "2012年", "2013年", "2014年", "2015年"],
      hangye1: '402894815e0370af015e037261840003',
      year2: '2017',
      year3: '2017',
      region4: '1',
      years: [
        { id: '2017', title: '2017年' }
        , { id: '2016', title: '2016年' }
        , { id: '2015', title: '2015年' }
        , { id: '2014', title: '2014年' }
        , { id: '2013', title: '2013年' }
      ],
      provincesList: [],
      provinceSel: '0',
      pieData3: [
        { value: '2017', name: '农、林、牧、渔业' }
        , { value: '216', name: '电力、热力、燃气及水生产和供应业' }
        , { value: '1015', name: '信息传输、软件和信息技术服务业' }
        , { value: '514', name: '水利、环境和公共设施管理业' }
        , { value: '913', name: '福建1' }
      ],
      region1: '1',
    }
  },
  watch: {
    year2: function(val) {
      this.pieData2 = this.pieData2All.filter(item => {
        return item.year === val
      })[0].dataYear
      // 我在 这里犯过一个特别蠢的错误。。 图表没有加载是因为我this.pieData2没有值，不是需要clear 更不需要dispose
      //而一个echarts实例只需要init一次就够了
      this.drawchart2();
    }
  },
  methods: {
    gotoPages(name) {
      if (name === '注册分析') {
        this.$router.push('analysis/register')
      } else if (name === '代理分析') {
        this.$router.push('analysis/agent')
      } else if (name === '驰名商标') {
        this.$router.push('analysis/famous')
      }
    },
    setSelTop(item) {
      this.provinceSel = item.value
    },
    listProvinces() {
      api.listProvinces().then(res => {
        this.provincesList = res.dataList
      })
    },
    drawchart1() {
      chart1 = echarts.init(document.getElementById('qushi'));
      chart1.setOption({
        // 提示框
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        // 图例
        legend: {
          data: ['销量']
        },
        // 区域缩放
        dataZoom: {
          show: false,
          start: 0,
          end: 100
        },
        // 内绘图网格
        grid: {
          top: '20%',
          left: '1%',
          right: '1%',
          bottom: '15%',
          containLabel: true,
          show: false,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            max: 800,
            min: 0,
            splitLine: {
              show: false
            },
            splitNumber: 8,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: 'value',
            scale: true,
            max: 1200,
            min: 0,
            splitLine: {
              show: false
            },
            boundaryGap: [0.2, 0.2]
          }
        ],
        // 系列列表
        series: [
          {
            name: '销量',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: '#F8CD77'
              }
            },
            data: (function() {
              var res = [];
              var len = 10;
              while (len--) {
                res.push(Math.round(Math.random() * 1000));
              }
              return res;
            })()
          },
          {
            name: '最新成交价',
            type: 'line',
            itemStyle: {
              normal: {
                color: '#4037A8'
              }
            },
            data: (function() {
              var res = [];
              var len = 0;
              while (len < 10) {
                res.push((Math.random() * 800 + 5).toFixed(1) - 0);
                len++;
              }
              return res;
            })()
          }
        ]
      });
    },
    drawchart2() {
      var myChart = echarts.init(document.getElementById('hangye'));
      myChart.setOption({
        color: chartcolors,
        grid: {
          top: 40,
          bottom: 20
        },
        tooltip: {},
        xAxis: {
          show: false,
          data: this.datax
        },
        legend: {
          orient: 'vertical',
          bottom: 0,
          data: this.pieData3.map(item => {
            return item.name
          })
        },
        yAxis: { show: false },
        series: [{
          name: '',
          type: 'pie',
          radius: [0, 75],
          itemStyle: {
            normal: {
              borderWidth: 3,
              borderColor: '#fff'
            }
          },
          center: ['45%', '30%'],
          roseType: 'radius',
          data: this.pieData3,
          label: {
            normal: {
              show: false
            }
          },
        }]
      });
    },
    drawchart3(dataList) {
      var chart3 = echarts.init(document.getElementById('bili'));
      chart3.setOption({
        grid: {
          top: '3%',
          left: '3%',
          right: '7%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLabel: {
            formatter: '{value} %'
          }
        },
        yAxis: {
          type: 'category',
          data: dataList.map(item => item.name),
        },
        series: [
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#4036A8'
              }
            },
            data: dataList.map(item => item.value)
          }
        ]
      });
    },
    changeTime1(type) {
      this.active1 = type;
      this.drawchart1();
    }
  },
  mounted: function() {
    document.body.scrollTop = 0;
    this.listProvinces()
    this.drawchart1()
    this.drawchart2()
    // api.agentRank().then(res => {
    //   this.drawchart2(res.dataList);
    // })
    api.resoundBrandRate().then(res => {
      this.drawchart3(res.dataList);
    })

  }
}
</script>
<style lang="less" scoped>
select {
  width: 8.6rem;
  height: 1.9rem;
  color: #333;
  border: #666 1px solid;
  padding-left: 10%;
}

.container {
  padding-bottom: 5rem;
  .container-header {
    display: flex;
    height: 8rem;
    align-items: center;
    justify-content: space-around;
    margin-top: 3.85rem;
    background-color: #F9F9F9;
    >div {
      display: flex;
      flex-direction: column;
      align-items: center;
      >span {
        &:first-child {
          width: 3.85rem;
          height: 3.85rem;
          margin-bottom: 0.88rem;
        }
      }
    }
  }

  .chartc {
    width: 100%;
    padding: 1.27rem 1.19rem;
    box-sizing: border-box;
    .tool {
      width: 100%;
      .charttitle {
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.15rem;
        >span:last-child {
          font-size: 0.85rem;
          color: #4037A8;
          padding-right: 1.4rem;
          background: url(../../assets/image/right-arrow@2x.png) right no-repeat;
        }
      }
    }
    .chart {
      div {
        width: 100%;
        height: 100%;
      }
    }
    &:after {
      content: " ";
      height: 1px;
      border-bottom: 1px solid #D9D9D9;
      color: #D9D9D9;
      margin-top: 1rem;
      transform-origin: 0 0;
      transform: scaleY(0.5);
      position: absolute;
      left: 15px;
      right: 15px;
    }
  }
}
</style>
