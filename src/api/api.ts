declare module 'axios' {
  interface AxiosRequestConfig {
    showLoading?: boolean
    showError?: boolean
  }
}

import { DashBoard } from '@/types/Dashboard'
import { Result } from '@/types/Result'
import { UserInfo } from '@/types/UserInfo'
import request from '@/utils/request'

export const login = (params: any) => {
  return request.post<string>('users/login', params, { showLoading: false, showError: false })
}
export const getUserInfo = () => {
  return request.get<UserInfo>('users/getUserInfo')
}
export const getReportData = () => {
  return request.get<DashBoard.Report>('order/dashboard/getReportData')
}
export const getLineData = () => {
  return request.get<DashBoard.Line>('order/dashboard/getLineData')
}
export const getPieData = () => {
  return request.get<DashBoard.Pie>('order/dashboard/getPieCityData')
}
export const getRadarData = () => {
  return request.get<DashBoard.Radar>('order/dashboard/getRadarData')
}
export const getUserList = () => {
  return request.get('users/list')
}
