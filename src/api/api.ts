declare module 'axios' {
  interface AxiosRequestConfig {
    showLoading?: boolean
    showError?: boolean
  }
}

import request from '@/utils/request'

export const login = (params: any) => {
  return request.post('users/login', params,{showLoading:false,showError:false});
}
