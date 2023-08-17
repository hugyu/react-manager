import { Button, Card, Descriptions, DescriptionsProps } from 'antd'
import styles from './index.module.less'
import * as echarts from 'echarts'
import { useEffect, useState } from 'react'
import user from '@/assets/user.jpg'
import store from '@/store'
import { getLineData, getPieData, getRadarData, getReportData } from '@/api/api'
import { DashBoard } from '@/types/Dashboard'
import { formatNum } from '@/utils'
import { useCharts } from '@/hook/useCharts'
import { type } from 'os'
export default function DashBoardPage() {
  // 报告的返回信息
  const [reportData, setReportData] = useState<DashBoard.Report>()
  // 初始化折线图
  const [lineRef,lineChart] =useCharts()
 // 初始化饼图
  const [pieRef1, pieChart1] = useCharts()
  const [pieRef2,pieChart2]=useCharts()
// 初始化雷达图
  const [radarRef,radarChart]=useCharts()
  const getReportDataReq = async () => {
    const reportData = await getReportData()
    setReportData(reportData)
  }
  useEffect(() => {
    getReportDataReq()
  }, [])
  // 当lineChart渲染好 不再为空  监测到变化的时候 再渲染
  useEffect(() => {
      getLineData().then(lineData => {
      lineChart?.setOption({
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: 50,
          right: 50,
          bottom: 20
        },
        legend: {
          data:['订单','流水']
        },
        xAxis: {
          data: lineData.label
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '订单',
            type: 'line',
            data: lineData.order
          },
          {
            name: '流水',
            type: 'line',
            data: lineData.money
          }
        ]
      })
      })
    getPieData().then(pieData => {
      let legendData=pieData.map(obj=>obj['name'])
      pieChart1?.setOption({
        tooltip: {
          trigger:'item'
        },
        grid: {
          left: 50,
          right: 50,
          bottom: 20
        },
        legend: {
          orient: 'vertical',
          left: 20,
          top: 20,
          data:legendData
        },

        series: [
          {
            type: 'pie',
            data: pieData
          }
        ]
      })
      pieChart2?.setOption({
        tooltip: {
          trigger:'item'
        },
        grid: {
          left: 50,
          right: 50,
          bottom: 20
        },
        legend: {
          orient: 'vertical',
          left: 20,
          top: 20,
          data:legendData
        },
        series: [
          {
            type: 'pie',
            data: pieData
          }
        ],
        roseType: 'area'
      })
    })
    getRadarData().then(radarData => {
      radarChart?.setOption({
        tooltip: {
          trigger:'item'
        },
        legend: {
          data: ['司机模型诊断']
        },
        radar: {
          // shape: 'circle',
          indicator: radarData.indicator
        },
        series: [
          {
            name: '司机模型诊断',
            type: 'radar',
            data:radarData.data
          }
        ]
      })
    })

  }, [lineChart])
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '用户ID',
      children: 1000002
    },
    {
      key: '2',
      label: '邮箱',
      children: 'admin@imooc.com'
    },
    {
      key: '3',
      label: '状态',
      children: '在职'
    },
    {
      key: '4',
      label: '手机号',
      children: '17600000000'
    },
    {
      key: '5',
      label: '岗位',
      children: '架构师'
    },
    {
      key: '6',
      label: '部门',
      children: '大前端'
    }
  ]
  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img src={user} alt='用户' className={styles.userImg} />
        <Descriptions title={`欢迎 ${store.userInfo.userName} 同学, 每天都要开心`} items={items} />
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div>司机数量</div>
          <div className={styles.data}>{formatNum(reportData?.orderCount)}个</div>
        </div>
        <div className={styles.card}>
          <div>总流水</div>
          <div className={styles.data}>{formatNum(reportData?.totalMoney)}元</div>
        </div>
        <div className={styles.card}>
          <div>总订单</div>
          <div className={styles.data}>{formatNum(reportData?.driverCount)}单</div>
        </div>
        <div className={styles.card}>
          <div>开通城市</div>
          <div className={styles.data}>{formatNum(reportData?.cityNum)}座</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Card title='订单和流水走势图' extra={<Button type='primary'>刷新</Button>}>
          <div ref={lineRef} className={styles['item-line']}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='司机分布' extra={<Button type='primary'>刷新</Button>}>
          <div ref={pieRef1} className={styles['item-pie']}></div>
          <div ref={pieRef2} className={styles['item-pie']}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='模型诊断' extra={<Button type='primary'>刷新</Button>}>
          <div ref={radarRef} className={styles['item-line']}></div>
        </Card>
      </div>
    </div>
  )
}
