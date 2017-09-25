<template>
  <div class="container">
    <topComponent :title='title' :showLeft='true'></topComponent>

    <div class="chartc">
      <div class="tool">
        <div class="charttitle">
          <span>商标注册量趋势</span>
        </div>
        <div>
          <select v-model="region1">
            <option v-for="item in regions1" :key="item.id" :value="item.id">{{item.title}}</option>
          </select>
        </div>
      </div>
      <div class="chart" style="height: 20rem;" id="qushi"></div>
    </div>

    <div class="chartc">
      <div class="tool">
        <div class="charttitle">
          <span>商标注册量分布（Top20）</span>
          <span>
            <select v-model="region1">
              <option v-for="item in regions1" :key="item.id" :value="item.id">{{item.title}}</option>
            </select>
          </span>
        </div>
      </div>
      <div class="chart" style="height: 15rem;" id="fenbu"></div>
    </div>

    <div class="chartc">
      <div class="tool">
        <div class="charttitle">
          <span>商标注册量分行业趋势分析</span>
        </div>
        <div>
          <select v-model="region1">
            <option v-for="item in regions1" :key="item.id" :value="item.id">{{item.title}}</option>
          </select>
          <select v-model="region1">
            <option v-for="item in regions1" :key="item.id" :value="item.id">{{item.title}}</option>
          </select>
        </div>
      </div>
      <div class="chart" style="height:20rem;" id="hangye"></div>
    </div>

    <div class="chartc">
      <div class="tool">
        <div class="charttitle">
          <span>商标注册量分行业排名</span>
        </div>
        <div>
          <select v-model="region1">
            <option v-for="item in regions1" :key="item.id" :value="item.id">{{item.title}}</option>
          </select>
          <select v-model="region1">
            <option v-for="item in regions1" :key="item.id" :value="item.id">{{item.title}}</option>
          </select>
        </div>
      </div>
      <div class="chart" style="height:20rem;" id="paiming"></div>
    </div>

    <div class="chartc">
      <div class="tool">
        <div class="charttitle">
          <span>商标注册量分类别趋势分析</span>
        </div>
        <div>
          <select v-model="region1">
            <option v-for="item in regions1" :key="item.id" :value="item.id">{{item.title}}</option>
          </select>
          <select v-model="region1">
            <option v-for="item in regions1" :key="item.id" :value="item.id">{{item.title}}</option>
          </select>
        </div>
      </div>
      <div class="chart" style="height:20rem;" id="leibie"></div>
    </div>

    <div class="chartc">
      <div class="tool">
        <div class="charttitle">
          <span>商标注册量分类别排名</span>
          <span>
            <select v-model="region1">
              <option v-for="item in regions1" :key="item.id" :value="item.id">{{item.title}}</option>
            </select>
          </span>
        </div>
      </div>
      <div class="chart" style="height: 15rem;" id="lbpaiming"></div>
    </div>

    <div class="chartc">
      <div class="tool">
        <div class="charttitle">
          <span>商标注册量分商标类型累计排名</span>
          <span>
            <select v-model="region1">
              <option v-for="item in regions1" :key="item.id" :value="item.id">{{item.title}}</option>
            </select>
          </span>
        </div>
      </div>
      <div class="chart" style="height: 15rem;" id="lxljpaiming"></div>
    </div>

    <div class="chartc">
      <div class="tool">
        <div class="charttitle">
          <span>商标申请人通过不同渠道申请商标对比</span>
        </div>
      </div>
      <div class="chart" style="height: 15rem;" id="duibi">
      </div>
    </div>

  </div>
</template>
<script>
var echarts = require('echarts');
var chartcolors = ['#1bbc9b', '#f5ab35', '#ef4836', '#8e44ad', '#0099cc', '#ff6666', '#990066', '#666699', '#999933'];
var chart1, chart2, chart3, chart4;
export default {
  data() {
    return {
      title: '商标注册分析',
      headerData: [
        { name: '注册分析', imgUrl: require('../../assets/image/zhucefenxi@2x.png') },
        { name: '代理分析', imgUrl: require('../../assets/image/dailifenxi@2x.png') },
        { name: '驰名商标', imgUrl: require('../../assets/image/chimingshangbiao@2x.png') }
      ],
      active1: 'month',
      datay: [5, 20, 36, 10, 10, 20],
      datax: ["2010年", "2011年", "2012年", "2013年", "2014年", "2015年"],
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
      //
      pieData2: [
        {
          "provinceCode": "35",
          "name": "福建省",
          "value": "179778"
        },
        {
          "provinceCode": "43",
          "name": "湖南省",
          "value": "90219"
        },
        {
          "provinceCode": "44",
          "name": "广东省",
          "value": "709977"
        },
        {
          "provinceCode": "45",
          "name": "广西省",
          "value": "36074"
        },
        {
          "provinceCode": "46",
          "name": "海南省",
          "value": "13901"
        }
      ],
      pieData2All: [
        {
          "year": "2017",
          "dataYear": [
            {
              "provinceCode": "35",
              "name": "福建省",
              "value": "74106"
            },
            {
              "provinceCode": "43",
              "name": "湖南省",
              "value": "36755"
            },
            {
              "provinceCode": "44",
              "name": "广东省",
              "value": "274802"
            },
            {
              "provinceCode": "45",
              "name": "广西省",
              "value": "14329"
            },
            {
              "provinceCode": "46",
              "name": "海南省",
              "value": "5056"
            }
          ]
        },
        {
          "year": "2016",
          "dataYear": [
            {
              "provinceCode": "35",
              "name": "福建省",
              "value": "179778"
            },
            {
              "provinceCode": "43",
              "name": "湖南省",
              "value": "90219"
            },
            {
              "provinceCode": "44",
              "name": "广东省",
              "value": "709977"
            },
            {
              "provinceCode": "45",
              "name": "广西省",
              "value": "36074"
            },
            {
              "provinceCode": "46",
              "name": "海南省",
              "value": "13901"
            }
          ]
        },
        {
          "year": "2015",
          "dataYear": [
            {
              "provinceCode": "35",
              "name": "福建省",
              "value": "125078"
            },
            {
              "provinceCode": "43",
              "name": "湖南省",
              "value": "64844"
            },
            {
              "provinceCode": "44",
              "name": "广东省",
              "value": "555039"
            },
            {
              "provinceCode": "45",
              "name": "广西省",
              "value": "25988"
            },
            {
              "provinceCode": "46",
              "name": "海南省",
              "value": "10799"
            }
          ]
        },
        {
          "year": "2014",
          "dataYear": [
            {
              "provinceCode": "35",
              "name": "福建省",
              "value": "104194"
            },
            {
              "provinceCode": "43",
              "name": "湖南省",
              "value": "52335"
            },
            {
              "provinceCode": "44",
              "name": "广东省",
              "value": "417254"
            },
            {
              "provinceCode": "45",
              "name": "广西省",
              "value": "19222"
            },
            {
              "provinceCode": "46",
              "name": "海南省",
              "value": "10588"
            }
          ]
        },
        {
          "year": "2013",
          "dataYear": [
            {
              "provinceCode": "35",
              "name": "福建省",
              "value": "96511"
            },
            {
              "provinceCode": "43",
              "name": "湖南省",
              "value": "41483"
            },
            {
              "provinceCode": "44",
              "name": "广东省",
              "value": "324978"
            },
            {
              "provinceCode": "45",
              "name": "广西省",
              "value": "16702"
            },
            {
              "provinceCode": "46",
              "name": "海南省",
              "value": "7544"
            }
          ]
        }
      ],
      pieData3: [
        { value: '2017', name: '农、林、牧、渔业' }
        , { value: '216', name: '电力、热力、燃气及水生产和供应业' }
        , { value: '1015', name: '信息传输、软件和信息技术服务业' }
        , { value: '514', name: '水利、环境和公共设施管理业' }
        , { value: '913', name: '福建1' }
      ],
      region1: '1',
      regions1: [
        { id: '1', title: '广东' }
        , { id: '2', title: '福建' }
        , { id: '3', title: '湖南' }
        , { id: '4', title: '广东1' }
        , { id: '5', title: '福建1' }
      ]
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
        this.$router.push('/')
      } else if (name === '代理分析') {
        this.$router.push('analysis/agent')
      } else if (name === '驰名商标') {
        this.$router.push('analysis/famous')
      }
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
      chart2 = echarts.init(document.getElementById('fenbu'));
      chart2.setOption({
        grid: {
          top: '3%',
          left: '3%',
          right: '7%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['河南省', '江苏省', '上海市', '北京市', '广东省']
        },
        series: [
          {
            name: '2012年',
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#4036A8'
              }
            },
            data: [19325, 23438, 31000, 121594, 134141]
          }
        ]
      });
    },
    drawchart3() {
      var myChart = echarts.init(document.getElementById('hangye'));
      var symbolSize = 5;
      var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
      myChart.setOption({
        grid: {
        },
        xAxis: {
          min: -100,
          max: 80,
          type: 'value',
          axisLine: { onZero: false }
        },
        yAxis: {
          min: -30,
          max: 60,
          type: 'value',
          axisLine: { onZero: false }
        },
        series: [
          {
            id: 'a',
            type: 'line',
            smooth: false,
            itemStyle: {
              normal: {
                color: '#4036A8'
              }
            },
            symbolSize: symbolSize,
            data: data
          }
        ]
      });
    },
    drawchart4() {
      var myChart = echarts.init(document.getElementById('paiming'));
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
          itemStyle: {
            normal: {
              borderWidth: 3,
              borderColor: '#fff'
            }
          },
          radius: [0, 75],
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
    drawchart5() {
      var myChart = echarts.init(document.getElementById('leibie'));
      var symbolSize = 5;
      var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
      myChart.setOption({
        grid: {
        },
        xAxis: {
          min: -100,
          max: 80,
          type: 'value',
          axisLine: { onZero: false }
        },
        yAxis: {
          min: -30,
          max: 60,
          type: 'value',
          axisLine: { onZero: false }
        },
        series: [
          {
            id: 'a',
            type: 'line',
            smooth: false,
            itemStyle: {
              normal: {
                color: '#4036A8'
              }
            },
            symbolSize: symbolSize,
            data: data
          }
        ]
      });
    },
    drawchart6() {
      chart2 = echarts.init(document.getElementById('lbpaiming'));
      chart2.setOption({
        grid: {
          top: '3%',
          left: '3%',
          right: '7%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['河南省', '江苏省', '上海市', '北京市', '广东省']
        },
        series: [
          {
            name: '2012年',
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#4036A8'
              }
            },
            data: [19325, 23438, 31000, 121594, 134141]
          }
        ]
      });
    },
    drawchart7() {
      var chart7 = echarts.init(document.getElementById('lxljpaiming'));
      chart7.setOption({
        legend: {
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '3%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月']
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0]
          },
          {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8]
          }
        ]
      });
    },
    drawchart8() {
      var chart8 = echarts.init(document.getElementById('duibi'));
      chart8.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    changeTime1(type) {
      this.active1 = type;
      this.drawchart1();
    }
  },
  mounted: function() {
    document.body.scrollTop = 0;
    this.drawchart1();
    this.drawchart2();
    this.drawchart3();
    this.drawchart4();
    this.drawchart5();
    this.drawchart6();
    this.drawchart7();
    this.drawchart8();
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
  padding-top: 4rem;
  padding-bottom: 5rem;
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
