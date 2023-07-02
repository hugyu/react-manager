export default {
  /**
   *storage存储
   * @param key
   * @param value
   */
  set(key: string, value:any) {
    localStorage.setItem(key,JSON.stringify(value))
  },
  /**
   *storage读取
   * @param key
   * @returns
   */
  get(key: string) {
    const value = localStorage.getItem(key)
    if (!value) return ''
    try {
      return JSON.parse(value)
    } catch (err) {
      return value
    }
  },
  /**
   * localStorage删除
   * @param key
   */
  remove(key: string) {
    localStorage.removeItem(key)
  },
  /**
   * 清空localStorage的值
   */
  clear() {
    localStorage.clear()
  }
 }
