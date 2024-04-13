<template>
  <div class="sidebar-logo sidebar-logo-expend">
    <div class="logo_icon">
      <menu-icon class="logo_icon_item" icon="logo"></menu-icon>
    </div>
    <span v-if="appStore.sidebarOpened" class="logo-title">{{ appStore.text.minTitle }}</span>
  </div>
</template>

<script setup lang="ts">
import { appStore } from '@/stores'
import MenuIcon from '@/components/menuIcon.vue'
</script>

<style lang="scss" scoped>
.sidebar-logo {
  width: 200px !important;
  height: var(--theme-header-height);
  line-height: var(--theme-header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 21 41 / 2%) 0 1px 4px;
  color: var(--theme-logo-text-color);
  font-size: 18px;
  .logo_icon {
    display: flex;
    align-items: center;
    .logo_icon_item {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .logo-title {
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
  }
}
.sidebar-logo-expend {
  width: 100% !important;
}
</style>
