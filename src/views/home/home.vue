<script setup lang="ts">
import Echarts from '@/views/home/echart.vue'
import { ref } from 'vue'
import type { dataType, pieType, turnOverType } from '@/models/home'
import InitDialog from '@/views/home/initDialog.vue'
import NumberAnimation from '@/components/NumberAnimation.vue'

// 创建数据概览数据
const data = ref<dataType>({
  order_amount: 2000,
  order_count: 2000,
  after_sale_amount: 2000,
  after_sale_count: 2000,
  today_user_count: 2000
})
// 创建标签页
const dateNum = ref(1)
// 创建消费次数分析
const orderCustomCount = ref<turnOverType>({
  title: '',
  grid: {
    show: false,
    top: '16%', // 一下数值可为百分比也可为具体像素值
    right: '2%',
    bottom: '10%',
    left: '10%'
  },
  tooltip: {
    trigger: 'item',
    formatter: '人数 : {c}'
  },
  legend: [],
  xAxis: {
    type: 'category',
    data: ['未消费', '消费1次', '消费2次', '消费2-5次', '消费5次以上'],
    axisLabel: {
      interval: 0 // 显示所有轴标签
    }
  },
  yAxis: {
    name: '单位: 人',
    nameTextStyle: {
      align: 'right'
    }
  },
  series: [
    {
      type: 'bar',
      barWidth: '40%',
      data: [
        {
          value: 7,
          itemStyle: {
            color: '#165eff'
          }
        },
        {
          value: 1,
          itemStyle: {
            color: '#ff7070'
          }
        },
        {
          value: 1,
          itemStyle: {
            color: '#ff78ba'
          }
        },
        {
          value: 5,
          itemStyle: {
            color: '#f7ba1d'
          }
        },
        {
          value: 5,
          itemStyle: {
            color: '#8cd16a'
          }
        }
      ]
    }
  ]
})

// 创建商品分类销售占比
const orderCategoryInfo = ref<pieType>({
  title: '',
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)'
  },
  legend: {
    bottom: '5%',
    data: ['手机', '玩乐', '淘淘']
  },
  series: [
    {
      type: 'pie',
      radius: [30, 80],
      center: ['50%', '40%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      data: [
        {
          value: '15',
          name: '手机'
        },
        {
          value: '1',
          name: '玩乐'
        },
        {
          value: '8',
          name: '淘淘'
        }
      ]
    }
  ]
})
// 创建新增用户趋势
const orderAddUser = ref<turnOverType>({
  title: '',
  grid: {
    show: false,
    top: '16%', // 一下数值可为百分比也可为具体像素值
    right: '5%',
    bottom: '10%',
    left: '8%'
  },
  tooltip: {
    trigger: 'axis',
    formatter: '新增用户 : {c}'
  },
  legend: [],
  xAxis: {
    boundaryGap: false, // 坐标轴两端空白策略
    data: ['2024-04-08', '2024-04-10', '2024-04-11', '2024-04-13', '2024-04-15']
  },
  yAxis: {
    name: '单位: 人',
    nameTextStyle: {
      align: 'right'
    }
  },
  series: [
    {
      type: 'line',
      smooth: true,
      color: '#f18045',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#f3c9b3' // 100% 处的颜色
            },
            {
              offset: 1,
              color: '#fff' //   0% 处的颜色
            }
          ],
          global: false // 缺省为 false
        }
      },
      data: [1, 1, 6, 4, 8]
    }
  ]
})
// 创销售数据趋势
const orderSalesData = ref<turnOverType>({
  title: '',
  grid: {
    show: false,
    top: '16%', // 一下数值可为百分比也可为具体像素值
    right: '2%',
    bottom: '10%',
    left: '8%'
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params: any) {
      return `
      ${params[0].data.time}<br>
      订单金额：${params[0].data.value}<br>
      订单数量：${params[0].data.count}
      `
    }
  },
  legend: [],
  xAxis: {
    boundaryGap: false, // 坐标轴两端空白策略
    data: ['2024-03-13', '2024-04-10', '2024-04-11']
  },
  yAxis: {
    name: '单位: 元',
    nameTextStyle: {
      align: 'right'
    }
  },
  series: [
    {
      type: 'line',
      smooth: true,
      color: '#0256ff',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#89a6dc' // 100% 处的颜色
            },
            {
              offset: 1,
              color: '#fff' //   0% 处的颜色
            }
          ],
          global: false // 缺省为 false
        }
      },
      data: [
        {
          value: '0.9800',
          count: 1,
          time: '2024-03-13'
        },
        {
          value: '10.7900',
          count: 3,
          time: '2024-04-10'
        },
        {
          value: '18.5700',
          count: 2,
          time: '2024-04-11'
        }
      ]
    }
  ]
})
// 创建商品排行榜信息
const goodsRank = ref<any[]>([
  {
    id: 8,
    title: '茶几',
    sales_amount: 242.3,
    sales: 4
  },
  {
    id: 110,
    title:
      '华为畅享 70 Pro 1亿像素超清影像40W超级快充5000mAh大电池长续航 256GB 翡冷翠 鸿蒙智能手机',
    sales_amount: 8.37,
    sales: 12
  },
  {
    id: 112,
    title: '次卡',
    sales_amount: 3.47,
    sales: 7
  },
  {
    id: 111,
    title: '丰联卡 生活娱乐游戏充值卡 谨防诈骗',
    sales_amount: 3.41,
    sales: 7
  },
  {
    id: 95,
    title:
      '电影票兑换券全国通用实体电影券网上购票企业员工福利购买电影卡兑换卷团购观影礼品卡 电影次卡券35',
    sales_amount: 0.6,
    sales: 5
  },
  {
    id: 100,
    title: '美团电单车骑行卡 7天/15天 次数卡 填写绑定美团APP手机号充值 15天5次卡',
    sales_amount: 0.46,
    sales: 5
  }
])

// 切换标签页
const toggleDate = async (num: any, type: any) => {
  dateNum.value = num
  if (type === 'day') {
    orderSalesData.value.xAxis.data = ['2024-03-13', '2024-04-10', '2024-04-11']
    orderSalesData.value.series[0].data = [
      {
        value: '0.9800',
        count: 1,
        time: '2024-03-13'
      },
      {
        value: '10.7900',
        count: 3,
        time: '2024-04-10'
      },
      {
        value: '18.5700',
        count: 2,
        time: '2024-04-11'
      }
    ]
  }
  if (type === 'year') {
    orderSalesData.value.xAxis.data = [
      '2023-11',
      '2023-12',
      '2024-01',
      '2024-02',
      '2024-03',
      '2024-04'
    ]
    orderSalesData.value.series[0].data = [
      {
        value: '65875.9200',
        count: 17,
        time: '2023-11'
      },
      {
        value: '4901459.0000',
        count: 172,
        time: '2023-12'
      },
      {
        value: '719.8900',
        count: 100,
        time: '2024-01'
      },
      {
        value: '79.1000',
        count: 5,
        time: '2024-02'
      },
      {
        value: '2418.8000',
        count: 66,
        time: '2024-03'
      },
      {
        value: '29.3600',
        count: 5,
        time: '2024-04'
      }
    ]
  }
}
</script>

<template>
  <div class="home_container">
    <!-- 今日数据概览 -->
    <div class="today_overview" v-if="data">
      <div class="header">
        <h4 class="title">今日数据概览</h4>
      </div>
      <div class="overview_content">
        <div class="card_box">
          <div class="card_info">
            <p class="name">订单金额</p>
            <NumberAnimation
              :to="Number(data.order_amount)"
              separator=""
              :value-style="{ fontSize: '24px', fontWeight: 'bold', color: '#333' }"
            ></NumberAnimation>
            <span class="price">元</span>
          </div>
          <img src="@/assets/home/header_order_price.png" alt="" />
        </div>
        <div class="card_box">
          <div class="card_info">
            <p class="name">订单数</p>
            <NumberAnimation
              :to="Number(data.order_count)"
              separator=""
              :value-style="{ fontSize: '24px', fontWeight: 'bold', color: '#333' }"
            ></NumberAnimation>
            <span class="price">个</span>
          </div>
          <img src="@/assets/home/header_order_num.png" alt="" />
        </div>
        <div class="card_box">
          <div class="card_info">
            <p class="name">退款金额</p>
            <NumberAnimation
              :to="Number(data.after_sale_amount)"
              separator=""
              :value-style="{ fontSize: '24px', fontWeight: 'bold', color: '#333' }"
            ></NumberAnimation>
            <span class="price">元</span>
          </div>
          <img src="@/assets/home/header_refund_price.png" alt="" />
        </div>
        <div class="card_box">
          <div class="card_info">
            <p class="name">退款数</p>
            <NumberAnimation
              :to="Number(data.after_sale_count)"
              separator=""
              :value-style="{ fontSize: '24px', fontWeight: 'bold', color: '#333' }"
            ></NumberAnimation>
            <span class="price">个</span>
          </div>
          <img src="@/assets/home/header_refund_num.png" alt="" />
        </div>
        <div class="card_box">
          <div class="card_info">
            <p class="name">新增用户</p>
            <NumberAnimation
              :to="Number(data.today_user_count)"
              separator=""
              :value-style="{ fontSize: '24px', fontWeight: 'bold', color: '#333' }"
            ></NumberAnimation>
            <span class="price">个</span>
          </div>
          <img src="@/assets/home/header_add_user.png" alt="" />
        </div>
      </div>
    </div>
    <!-- two_row -->
    <div class="two_row">
      <div class="cost_times">
        <div class="header">
          <h4 class="cost_times_name">消费次数分析</h4>
        </div>
        <div class="cost_times_echarts">
          <echarts
            :height="280"
            v-if="orderCustomCount.series[0].data.length > 0"
            :order="orderCustomCount"
          />
          <el-empty v-else></el-empty>
        </div>
      </div>
      <div class="sale_rate">
        <div class="header">
          <h4 class="sale_rate_name">商品分类销售占比</h4>
        </div>
        <div class="sale_rate_echarts">
          <echarts
            :height="280"
            v-if="orderCategoryInfo.series[0].data.length > 0"
            :order="orderCategoryInfo"
          />
          <el-empty v-else></el-empty>
        </div>
      </div>
      <div class="add_user">
        <div class="header">
          <h4 class="add_user_name">新增用户趋势</h4>
        </div>

        <div class="add_user_echarts">
          <echarts
            :height="280"
            v-if="orderAddUser.series[0].data.length > 0"
            :order="orderAddUser"
          />
          <el-empty v-else></el-empty>
        </div>
      </div>
    </div>

    <!--  three_row  -->
    <div class="four_row">
      <!-- 销售数据趋势 -->
      <div class="sale_trend">
        <div class="sale_trend_header">
          <div class="header">
            <h4 class="sale_trend_name">销售数据趋势</h4>
          </div>
          <div class="sale_trend_date">
            <el-tabs>
              <el-button
                style="border-radius: 40px"
                @click="toggleDate(1, 'day')"
                :type="dateNum === 1 ? 'primary' : ''"
                >近30日</el-button
              >
              <el-button
                style="border-radius: 40px"
                @click="toggleDate(2, 'year')"
                :type="dateNum === 2 ? 'primary' : ''"
                >近1年</el-button
              >
            </el-tabs>
          </div>
        </div>
        <div class="sale_trend_echarts">
          <echarts
            :height="280"
            v-if="orderSalesData.series[0].data.length > 0"
            :order="orderSalesData"
          />
          <el-empty v-else></el-empty>
        </div>
      </div>
      <div class="sale_rank">
        <div class="header">
          <h4 class="sale_rank_name">商品销售排行榜</h4>
        </div>
        <div class="sale_rank_echarts">
          <el-table
            :data="goodsRank"
            height="260"
            :cell-style="{ textAlign: 'center' }"
            :header-cell-style="{ textAlign: 'center' }"
            show-overflow-tooltip
          >
            <el-table-column prop="title" label="商品名称">
              <template #default="{ row }">
                <el-text truncated>{{ row.title }}</el-text>
              </template>
            </el-table-column>
            <el-table-column prop="sales_amount" label="销售额（元）"></el-table-column>
            <el-table-column prop="sales" label="销量"></el-table-column>
            <template #empty>
              <el-empty></el-empty>
            </template>
          </el-table>
        </div>
      </div>
    </div>
  </div>
  <init-dialog></init-dialog>
</template>

<style lang="scss" scoped>
.home_container {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
}

// 今日概览
.today_overview {
  margin-bottom: 20px;
  .header {
    display: flex;
    align-items: center;
    .title {
      padding-left: 15px;
      font-size: 15px;
    }
    .title::before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 14px;
      background-color: #2682f8;
      margin-right: 10px;
    }
  }

  .overview_content {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    .card_box {
      padding: 28px 24px 28px 28px;
      display: flex;
      align-items: center;
      width: 317px;
      height: 123px;
      border-radius: 5px;
      background-color: #fff;
      .card_info {
        margin-right: 95px;
        width: 123px;
        height: 66px;
        .name {
          margin-bottom: 10px;
          width: 68px;
          height: 20px;
          font-size: 16px;
          color: #999999;
        }
        .info {
          font-size: 24px;
          font-weight: bold;
          color: #333333;
          .price {
            font-size: 14px;
            font-weight: 400;
            color: #999999;
          }
        }
      }
      img {
        width: 48px;
        height: 48px;
      }
    }
  }
}

// 第二行
.two_row {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;

  .cost_times {
    width: 499px;

    .header {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      .cost_times_name {
        padding-left: 15px;
        font-size: 15px;
      }
      .cost_times_name::before {
        content: '';
        display: inline-block;
        width: 5px;
        height: 14px;
        background-color: #2682f8;
        margin-right: 10px;
      }
    }

    .cost_times_echarts {
      width: 100%;
      height: 280px;
      border-radius: 5px;
      background-color: #fff;
    }
  }
  .sale_rate {
    width: 476px;
    .header {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      .sale_rate_name {
        padding-left: 15px;
        font-size: 15px;
      }
      .sale_rate_name::before {
        content: '';
        display: inline-block;
        width: 5px;
        height: 14px;
        background-color: #2682f8;
        margin-right: 10px;
      }
    }
    .sale_rate_echarts {
      width: 100%;
      height: 280px;
      border-radius: 5px;
      background-color: #fff;
    }
  }
  .add_user {
    width: 665px;
    .header {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      .add_user_name {
        padding-left: 15px;
        font-size: 15px;
      }
      .add_user_name::before {
        content: '';
        display: inline-block;
        width: 5px;
        height: 14px;
        background-color: #2682f8;
        margin-right: 10px;
      }
    }

    .add_user_echarts {
      width: 100%;
      height: 280px;
      border-radius: 5px;
      background-color: #fff;
    }
  }
}

// 第san行
.four_row {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  // 销售数据趋势
  .sale_trend {
    width: 59.5%;
    .sale_trend_header {
      padding-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      .header {
        display: flex;
        align-items: center;
        .sale_trend_name {
          padding-left: 15px;
        }
        .sale_trend_name::before {
          content: '';
          display: inline-block;
          width: 5px;
          height: 14px;
          background-color: #2682f8;
          margin-right: 10px;
        }
      }
    }
    .sale_trend_echarts {
      width: 100%;
      height: 280px;
      border-radius: 5px;
      background-color: #fff;
    }
  }
  .sale_rank {
    width: 39.3%;
    .header {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      height: 32px;
      .sale_rank_name {
        padding-left: 15px;
        font-size: 15px;
      }
      .sale_rank_name::before {
        content: '';
        display: inline-block;
        width: 5px;
        height: 14px;
        background-color: #2682f8;
        margin-right: 10px;
      }
    }

    .sale_rank_echarts {
      width: 100%;
      height: 280px;
      border-radius: 5px;
      background-color: #fff;
    }
  }
}
:deep(.el-tabs) {
  display: flex;
  align-items: center;
}

.padding-top {
  padding-top: 80px;
}
</style>
