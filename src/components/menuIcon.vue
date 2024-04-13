<template>
  <img v-if="props.icon" class="img-icon" :src="getImageUrl(props.icon)" alt="" />
</template>

<script setup lang="ts">
defineOptions({
  name: 'SvgIcon'
})
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})

// 动态使用本地图片
const getImageUrl = (code: any) => {
  return new URL(`../assets/menu/${code}.png`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
.img-icon {
  margin: 0 10px;
  width: 16px;
  height: 16px;
  color: #b6b7ba;
}
</style>
