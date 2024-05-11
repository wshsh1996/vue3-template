import type { ILoginRequest, ILoginResponse, IUserInfoResponse, RootObject } from '@/models/user'
import http from '@/utils/http'

/**
 * 登录.
 * @param data
 * @constructor
 */
export const ApiLogin = (data: ILoginRequest) => {
  return http.post<ILoginResponse, ILoginRequest>('/admin/login', data)
}

/**
 * 获取用户信息.
 * @constructor
 */
export const ApiUserInfo = () => {
  return http.get<IUserInfoResponse>('/admin/userinfo')
}

/**
 * 修改用户密码
 */
export const ApiChangePassword = (data: any) => {
  return http.put('/admin/userinfo/setting/update_password', data)
}

