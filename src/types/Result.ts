//返回结果参数定义
export interface Result<T = any > {
  code:number
  data: T
  msg: string
}

// 返回结果数据的定义
export interface ResultData<T = any> {
  list: T[],
  page: {
    pageNum: number,
    pageSize: number,
    total:number|0,
  }
}
