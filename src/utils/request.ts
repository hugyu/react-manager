import { Result } from "@/types/Result";
import { message } from "antd";
import axios, { AxiosError } from "axios";
import { showLoading ,hideLoading} from "./loading";
import storage from "./storage";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 8000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials:true
})
// 添加请求拦截器
instance.interceptors.request.use(config => {
  showLoading()
  const token = storage.get('token');
  if (token) {
    config.headers.Authorization = 'Token::' + token
  }
  config.headers.icode='8EC18757D8EF738B'
  return {
    ...config
  }
},
  (error: AxiosError) => {
    return Promise.reject(error)
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    const data:Result = response.data
    hideLoading()
    if (data.code === 500001) {
      message.error(data.msg)
      storage.remove('token')
      location.href='/login'
    } else if (data.code != 0) {
      message.error(data.msg)
      return Promise.reject(data)
    }
    return data.data
  },
  error => {
    hideLoading()
    message.error(error.message)
    return Promise.reject(error.message)
  }
);
export default {
  get<T>(url: string, params?: object):Promise<T> {
    return instance.get(url,{params})
  },
  post<T>(url: string, params?: object):Promise<T> {
    return instance.post(url,params)
  }
}
