import { Button, Form, Input, message } from 'antd'
import './index.less'
import {login} from '@/api/api'
import storage from '@/utils/storage';
import { LoginParams } from '@/types/LoginParams';
function Login() {
  // 登录成功后写token
  const onFinish = async(values:LoginParams) => {
   const data= await login(values);
    storage.set('token', data)
    // 显示提示信息
    message.success('登录成功')
    // 保留登录后的页面状态
    const params = new URLSearchParams(location.search)
    params.get('callback')||'/welcome'
  }
  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='title'>系统登录</div>
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
            <Button block type='primary' htmlType='submit'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default Login
