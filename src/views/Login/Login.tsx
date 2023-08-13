import { Button, Card, Form, Input, message } from 'antd'
import classNames from 'classnames'
import './index.module.less'
import styles from './index.module.less'
import { login } from '@/api/api'
import storage from '@/utils/storage'
import { LoginParams } from '@/types/LoginParams'
import { useDarkMode } from '@/hook'
import { useState } from 'react'
function Login() {
  //  userName: '562168176', userPwd: '123456'
  // 获取系统是否为暗黑主题
  const isDarkMode = useDarkMode()
  const backgroundColor = isDarkMode ? '#252525' : 'white'
  const [isLoading,setIsLoading] = useState(false)
  // 登录成功后写token
  const onFinish = async (values: LoginParams) => {
    setIsLoading(true)
    const data:any = await login(values)
    if (data.code!==0) {
      return message.error('登录失败')
    }
    setIsLoading(false)
    storage.set('token', data)
    // 显示提示信息
    message.success('登录成功')
    // 保留登录后的页面状态
    const params = new URLSearchParams(location.search)
    params.get('callback') || '/welcome'
  }
  // 组合命名
  const loginWrapperClass = classNames({
    [styles.loginWrapper]: true,
    [styles.dark]: isDarkMode
  })
  return (
    <div className={styles.login} style={{ backgroundColor }}>
      <Card className={loginWrapperClass}>
        <div className={styles.title}>系统登录</div>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item<any> name='userName' rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item<any> name='userPwd' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button block type='primary' htmlType='submit' loading={isLoading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login
