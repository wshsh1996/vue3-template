<template>
  <el-container class="layout-container layout-vertical">
    <el-aside v-if="windowWidth > 768" class="layout-sidebar" :class="sidebarClass">
      <Logo v-if="appStore.theme.isLogo" />
      <el-scrollbar>
        <div class="vertical-menu">
          <router-link to="/home">
            <div
              class="vertical-menu-item"
              :class="{
                active: defaultActive === '/home'
              }"
            >
              <menu-icon icon="home" />
              <span
                v-if="appStore.sidebarOpened"
                class="title"
                :class="{ active: defaultActive === '/home' }"
                >系统首页</span
              >
            </div>
          </router-link>
        </div>
        <el-menu
          :default-active="defaultActive"
          :collapse="!appStore.sidebarOpened"
          :unique-opened="appStore.theme.uniqueOpened"
          background-color="transparent"
          :collapse-transition="false"
          mode="vertical"
        >
          <menu-item
            v-for="menu in routerStore.menuRoutes"
            :key="menu.path"
            :menu="menu"
          ></menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <div v-else class="affix-menu-btn" @click="openDrawer = true">
      <el-icon size="34" color="var(--el-color-primary)"><ElIconMenu /></el-icon>
    </div>
    <el-container>
      <el-header class="layout-header" :style="layoutHeaderHeight">
        <div class="navbar-container" :class="headerClass">
          <NavbarLeft />
          <NavbarRight />
        </div>
        <Tabs v-if="theme.isTabsView" />
      </el-header>
      <Main />
    </el-container>

    <!--  窗口尺寸小于768px时，侧边栏弹窗  -->
    <el-drawer size="250px" append-to-body direction="ltr" v-model="openDrawer" :show-close="false">
      <template v-slot:header>
        <Logo v-if="appStore.theme.isLogo" />
      </template>
      <el-scrollbar>
        <div class="vertical-menu">
          <router-link to="/home">
            <div
              class="vertical-menu-item"
              :class="{
                active: defaultActive === '/home'
              }"
            >
              <menu-icon icon="home" />
              <span
                v-if="appStore.sidebarOpened"
                style="font-size: 14px"
                class="title"
                :class="{ active: defaultActive === '/home' }"
                >系统首页</span
              >
            </div>
          </router-link>
        </div>
        <el-menu
          :default-active="defaultActive"
          :collapse="!appStore.sidebarOpened"
          :unique-opened="appStore.theme.uniqueOpened"
          background-color="transparent"
          :collapse-transition="false"
          mode="vertical"
        >
          <menu-item
            v-for="menu in routerStore.menuRoutes"
            :key="menu.path"
            :menu="menu"
          ></menu-item>
        </el-menu>
      </el-scrollbar>
      <template v-slot:footer>
        <el-icon @click="openDrawer = false" style="cursor: pointer" size="28"
          ><ElIconFold
        /></el-icon>
      </template>
    </el-drawer>
  </el-container>
</template>

<script setup lang="ts">
import { appStore, routerStore } from '@/stores'
import NavbarLeft from '@/layout/components/Navbar/NavbarLeft.vue'
import NavbarRight from '@/layout/components/Navbar/NavbarRight.vue'
import Main from '@/layout/components/Main.vue'
import Tabs from '@/layout/components/Tabs.vue'
import Logo from '@/layout/components/Logo.vue'
import MenuItem from '@/layout/components/MenuItem.vue'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import MenuIcon from '@/components/menuIcon.vue'
import { useWindowSize } from '@vueuse/core'

const { width: windowWidth } = useWindowSize()
const openDrawer = ref(false)
const route = useRoute()
const defaultActive = computed(() => {
  const { path } = route
  return path
})

const headerClass = computed(() => (appStore.theme.headerStyle === 'theme' ? 'header-theme' : ''))

// 侧边栏样式
const sidebarClass = computed(() => {
  const sidebarOpened = appStore.sidebarOpened ? 'aside-expend' : 'aside-compress' // aside-expend 展开 aside-compress 收缩 layout.scss
  const isDark = appStore.theme.sidebarStyle === 'dark' ? 'sidebar-dark' : ''
  return sidebarOpened + ' ' + isDark
})

const theme = computed(() => appStore.theme)
const layoutHeaderHeight = computed(() => {
  if (!theme.value.isTabsView) {
    return 'height:var(--theme-header-height) !important'
  } else {
    return ''
  }
})
</script>

<style lang="scss" scoped>
.navbar-container {
  height: var(--theme-header-height);
  display: flex;
  align-items: center;
  background: var(--theme-header-bg-color);
  border-bottom: 1px solid var(--theme-border-color-light);
  color: var(--theme-header-text-color);
  ::v-deep(.svg-icon) {
    align-items: center;
    cursor: pointer;
    height: var(--theme-header-height);
    line-height: var(--theme-header-height);
    padding: 0 12px;
    svg {
      color: var(--theme-header-text-color) !important;
      font-size: 16px;
    }
    &:hover {
      background: var(--theme-header-hover-color);
    }
  }
}
// 展开侧边栏
.vertical-menu-item {
  padding: 0 44px 0 20px;
  display: flex;
  align-items: center;
  height: 50px;
  .title {
    margin-left: 10px;
    color: #b6b7ba;
    white-space: nowrap; // 不换行，优化首页menu展开样式
  }
}
.vertical-menu .title:hover {
  color: var(--theme-menu-hover-color);
}

.active {
  color: #fff !important;
  background-color: var(--el-color-primary);
}

.affix-menu-btn {
  position: fixed;
  bottom: 80px;
  right: 50px;
  width: 60px;
  height: 60px;
  z-index: 100;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
</style>
