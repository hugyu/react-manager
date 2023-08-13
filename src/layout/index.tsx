import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, theme } from 'antd'
import NavHeader from '@/components/NavHeader'
import Menu from '@/components/Menu'

const { Content, Footer, Sider } = Layout

const App: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

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
        <Menu/>
      </Sider>
      <Layout>
        <NavHeader />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default App
