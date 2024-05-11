import http from '@/utils/http'
// 初始化
export const ApiInit = () => {
  return http.get('/admin/init')
}


// 获取协议详情
export const ApiGetAgreement = (id: any) => {
  return http.get(`/admin/protocols/${id}`)
}

// 编辑协议
export const ApiEditAgreement = (id: any, data: any) => {
  return http.put(`/admin/protocols/${id}`, data)
}

// 应用中心启用/禁用
export const ApiAppStatus = (data: any) => {
  return http.post('/admin/plugins', data)
}
