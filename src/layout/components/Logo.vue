<template>
  <div class="sidebar-logo sidebar-logo-expend">
    <div class="logo_icon">
      <menu-icon icon="logo"></menu-icon>
    </div>
    <span class="logo-title">{{ appStore.text.minTitle }}</span>
  </div>
</template>

<script setup lang="ts">
import { appStore } from '@/stores'
import MenuIcon from '@/components/menuIcon.vue'
</script>

<style lang="scss" scoped>
.sidebar-logo {
  margin-left: 13px;
  width: 200px !important;
  height: var(--theme-header-height);
  line-height: var(--theme-header-height);
  display: flex;
  align-items: center;
  //justify-content: center;
  box-shadow: rgb(0 21 41 / 2%) 0 1px 4px;
  color: var(--theme-logo-text-color);
  font-size: 18px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .logo-title {
  }
}
.sidebar-logo-expend {
  width: 100% !important;
}
</style>
<style lang="scss">
.logo_icon {
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
}
.logo_name {
  font-size: 16px;
  font-weight: bold;
}
</style>
