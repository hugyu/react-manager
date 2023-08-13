import { Button, Checkbox, Form, Input } from 'antd'
import './index.less'
function Login() {
  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='title'>系统登录</div>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item<any> name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item<any> name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
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
