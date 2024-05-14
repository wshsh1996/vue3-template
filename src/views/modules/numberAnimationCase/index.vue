<script setup lang="ts">
import NumberAnimation from '@/components/NumberAnimation.vue'
import { ref } from 'vue'

function onStarted() {
  console.log('started')
}
function onFinished() {
  console.log('finished')
}
const animationRef = ref()

// 点击按钮开始动画, 需要配置from=0
function onClick() {
  animationRef.value.play()
}
</script>
<template>
  <el-card class="card-box">
    <h1 class="margin-bottom-sm">NumberAnimation 数值动画</h1>
    <h3 class="margin-bottom-sm">基本使用(value: 100000000.12345)</h3>
    <el-row :gutter="20">
      <el-col class="margin-bottom-sm" :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
        <p>一个小目标</p>
        <NumberAnimation ref="animationRef" :from="0" :to="100000000.12345" />
      </el-col>
      <el-col class="margin-bottom-sm" :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
        <p @click="onClick">一个小目标</p>
        <NumberAnimation ref="animationRef" :from="0" :to="100000000.12345" separator="" />
      </el-col>
    </el-row>
    <h3 class="margin-bottom-sm">精度(value: 100000000.12345)</h3>
    <el-row>
      <el-col class="margin-bottom-sm" :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
        <p>一个小目标</p>
        <NumberAnimation :to="100000000.12345" :precision="2" />
      </el-col>
      <el-col class="margin-bottom-sm" :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
        <p @click="onClick">一个小目标</p>
        <NumberAnimation
          ref="animationRef"
          :from="0"
          :to="100000000.12345"
          :precision="2"
          separator=""
        />
      </el-col>
    </el-row>
    <h3 class="margin-bottom-sm">自定义前缀 & 后缀(value:100000000.12345)</h3>
    <el-row :gutter="20">
      <el-col class="margin-bottom-sm" :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
        <p>一个小目标</p>
        <NumberAnimation :to="100000000.12345" prefix="￥" />
      </el-col>
      <el-col class="margin-bottom-sm" :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
        <p>一个小目标</p>
        <NumberAnimation :to="100000000.12345" suffix="元" separator="" />
      </el-col>
    </el-row>
    <h3 class="margin-bottom-sm">自定义样式(value:100000000.12345)</h3>
    <el-row :gutter="20">
      <el-col class="margin-bottom-sm" :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
        <p>一个小目标</p>
        <NumberAnimation
          :to="100000000.12345"
          :value-style="{ fontSize: '30px', fontWeight: 600, color: '#d4380d' }"
        />
      </el-col>
      <el-col class="margin-bottom-sm" :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
        <p>一个小目标</p>
        <NumberAnimation
          :to="100000000.12345"
          :value-style="{ fontSize: '30px', fontWeight: 600, color: '#d4380d' }"
          separator=""
        />
      </el-col>
    </el-row>
    <h3 class="margin-bottom-sm">自定义播放和动画时间(value:100000000.12345)</h3>
    <el-row>
      <el-col class="margin-bottom-sm" :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
        <p>一个小目标</p>
        <NumberAnimation
          ref="animationRef"
          :from="0"
          :to="100000000.12345"
          :duration="5000"
          :autoplay="false"
          @started="onStarted"
          @finished="onFinished"
        />
        <div>
          <el-button type="primary" @click="onClick">播放</el-button>
        </div>
      </el-col>
    </el-row>
    <a
      href="https://blog.csdn.net/Dandrose/article/details/132688495"
      target="_blank"
      class="github-corner"
      aria-label="View source on GitHub"
      >详情查看</a
    >
  </el-card>
</template>

<style lang="scss" scoped>
.card-box {
  position: relative;
}
.detail {
  position: absolute;
  top: 2%;
  right: 1%;
}
.github-corner {
  position: absolute;
  top: 2%;
  right: 1%;
  color: #507bff;
}
</style>
