<template>
  <div class="navbar-left">
    <span class="logo-title" v-if="appStore.theme.layout === 'columns'">{{
      appStore.text.title
    }}</span>
    <div v-if="appStore.theme.layout === 'vertical'">
      <el-icon
        v-if="appStore.sidebarOpened"
        class="icon-left"
        @click="appStore.sidebarOpened = false"
        ><Fold
      /></el-icon>
      <el-icon v-else class="icon-left" @click="appStore.sidebarOpened = true"><Expand /></el-icon>
    </div>
    <Breadcrumb v-if="appStore.theme.isBreadcrumb" />
  </div>
</template>

<script setup lang="ts">
import { appStore } from '@/stores'
import { Expand, Fold } from '@element-plus/icons-vue'
import Breadcrumb from './Breadcrumb.vue'
</script>

<style lang="scss" scoped>
.navbar-left {
  flex: 1;
  height: inherit;
  display: flex;
  align-items: center;
  .logo-title {
    margin-left: 20px;
    margin-right: 10px;
    box-shadow: rgb(0 21 41 / 2%) 0 1px 4px;
    color: var(--theme-logo-text-color);
    font-size: 18px;
  }
  .icon-left {
    margin-left: 15px;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
