<script setup lang="ts">
import type { dataType } from '@/models/home'
import { ref } from 'vue'
import NumberAnimation from '@/components/NumberAnimation.vue'

// 创建数据概览数据
const data = ref<dataType>({
  order_amount: 2000,
  order_count: 2000,
  after_sale_amount: 2000,
  after_sale_count: 2000,
  today_user_count: 2000
})
</script>

<template>
  <el-row :gutter="20">
    <el-col :xl="5_5" :lg="5_5" :md="8" :sm="12" :xs="24">
      <el-card class="margin-bottom-sm" shadow="hover">
        <div class="flex justify-between">
          <div class="flex flex-direction justify-center">
            <div>订单金额</div>
            <NumberAnimation
              :to="Number(data.order_amount)"
              separator=""
              suffix="元"
              :value-style="{ fontSize: '24px', fontWeight: 'bold', color: '#333' }"
            ></NumberAnimation>
          </div>
          <div class="icon"><img src="@/assets/home/header_order_price.png" alt="" /></div>
        </div>
      </el-card>
    </el-col>
    <el-col :xl="5_5" :lg="5_5" :md="8" :sm="12" :xs="24">
      <el-card class="margin-bottom-sm" shadow="hover">
        <div class="flex justify-between">
          <div class="flex flex-direction justify-center">
            <div>订单数</div>
            <NumberAnimation
              :to="Number(data.order_count)"
              separator=""
              suffix="个"
              :value-style="{ fontSize: '24px', fontWeight: 'bold', color: '#333' }"
            ></NumberAnimation>
          </div>
          <div class="icon"><img src="@/assets/home/header_order_num.png" alt="" /></div>
        </div>
      </el-card>
    </el-col>
    <el-col :xl="5_5" :lg="5_5" :md="8" :sm="12" :xs="24">
      <el-card class="margin-bottom-sm" shadow="hover">
        <div class="flex justify-between">
          <div class="flex flex-direction justify-center">
            <div>退款金额</div>
            <NumberAnimation
              :to="Number(data.after_sale_amount)"
              separator=""
              suffix="元"
              :value-style="{ fontSize: '24px', fontWeight: 'bold', color: '#333' }"
            ></NumberAnimation>
          </div>
          <div class="icon"><img src="@/assets/home/header_refund_price.png" alt="" /></div>
        </div>
      </el-card>
    </el-col>
    <el-col :xl="5_5" :lg="5_5" :md="8" :sm="12" :xs="24">
      <el-card class="margin-bottom-sm">
        <div class="flex justify-between">
          <div class="flex flex-direction justify-center">
            <div>退款数</div>
            <NumberAnimation
              :to="Number(data.after_sale_count)"
              separator=""
              suffix="个"
              :value-style="{ fontSize: '24px', fontWeight: 'bold', color: '#333' }"
            ></NumberAnimation>
          </div>
          <div class="icon"><img src="@/assets/home/header_refund_num.png" alt="" /></div>
        </div>
      </el-card>
    </el-col>
    <el-col :xl="5_5" :lg="5_5" :md="8" :sm="12" :xs="24">
      <el-card class="margin-bottom-sm" shadow="hover">
        <div class="flex justify-between">
          <div class="flex flex-direction justify-center">
            <div>新增用户</div>
            <NumberAnimation
              :to="Number(data.today_user_count)"
              separator=""
              suffix="个"
              :value-style="{ fontSize: '24px', fontWeight: 'bold', color: '#333' }"
            ></NumberAnimation>
          </div>
          <div class="icon"><img src="@/assets/home/header_add_user.png" alt="" /></div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 1200px) {
  .el-col-lg-55 {
    max-width: 20%;
  }
}
</style>
