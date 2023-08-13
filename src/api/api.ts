declare module 'axios' {
  interface AxiosRequestConfig {
    showLoading?: boolean
    showError?: boolean
  }
}

import { UserInfo } from '@/types/UserInfo';
import request from '@/utils/request'

export const login = (params: any) => {
  return request.post<string>('users/login', params,{showLoading:false,showError:false});
}
export const getUserInfo = () => {
    return request.get<UserInfo>('users/getUserInfo');
}
