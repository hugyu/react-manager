import { useState, useEffect } from 'react'

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // 利用 Window.matchMedia() 方法监听系统的主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    // 符合dark模式
    setIsDarkMode(mediaQuery.matches)

    const handleChange = () => setIsDarkMode(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isDarkMode
}
