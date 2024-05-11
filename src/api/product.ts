import http from '@/utils/http'

// 获取商品分类
export const ApiCategoryGood = () => {
  return http.get('/admin/goods-categories')
}
