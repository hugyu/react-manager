import React from 'react'
import { Layout } from 'antd'
import NavHeader from '@/components/NavHeader'
import Menu from '@/components/Menu'
import { Outlet } from 'react-router-dom'
import styles from './index.module.less'

const { Content, Footer, Sider } = Layout

const App: React.FC = () => {
  return (
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
        <Content className={styles.content}>
          <div className={styles.wrapper}>
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default App
