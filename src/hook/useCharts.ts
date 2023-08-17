import * as echarts from 'echarts'
import { useEffect, useRef, useState } from 'react'

export const useCharts = (): [
  chartRef: React.RefObject<HTMLDivElement>,
  chartInstance:echarts.EChartsType|undefined
] => {
  const chartRef = useRef<HTMLDivElement>(null)
  const [chartInstance, setChartInstance] = useState<echarts.EChartsType>()
  // 页面加载完毕之后再去 寻找dom 节点 进行渲染
  useEffect(() => {
    const chart = echarts.init(chartRef.current as HTMLElement)
    setChartInstance(chart)
  },[])

  return [chartRef,chartInstance]
}
