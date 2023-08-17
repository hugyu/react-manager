import React, { useEffect } from 'react'
import { Layout, Watermark } from 'antd'
import NavHeader from '@/components/NavHeader'
import Menu from '@/components/Menu'
import { Outlet } from 'react-router-dom'
import styles from './index.module.less'
import store from '@/store'
import { getUserInfo } from '@/api/api'
import DashBoard from '@/views/Dashboard'
const { Content, Footer, Sider } = Layout

const App: React.FC = () => {
  // 获取用户信息
  const getUserInfoReq = async() => {
    const data = await getUserInfo()
    console.log(data);
    // 全局状态管理
    store.updateUserInfo(data)
  }
  useEffect(() => {
    getUserInfoReq()
  },[])
  return (
    <Watermark content={store.userInfo.userName}>
      <Layout>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={broken => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <Menu />
      </Sider>
      <Layout>
        <NavHeader />
          <div className={styles.wrapper}>
              <Outlet></Outlet>
          </div>
        <Footer style={{ textAlign: 'center' ,color: '#b0aeae'}}>Copyright ©2023 React18通用后台课程 All Rights Reserved.</Footer>
      </Layout>
    </Layout>
    </Watermark>
  )
}

export default App
