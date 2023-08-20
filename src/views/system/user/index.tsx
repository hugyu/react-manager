import { Button, Form, Input, Select, Space, Table } from 'antd'
import './index.less'
export default function UserList() {
  const columns = [
    { title: '用户ID', dataIndex: 'userId', key: 'userId' },
    { title: '用户名称', dataIndex: 'userName', key: 'userName' },
    { title: '用户邮箱', dataIndex: 'userEmail', key: 'userEmail' },
    { title: '用户角色', dataIndex: 'role', key: 'role' },
    { title: '用户状态', dataIndex: 'state', key: 'state' },
    { title: '注册时间', dataIndex: 'createTime', key: 'createTime' },
    { title: '操作', dataIndex: 'address', key: 'address' }
  ]
  return (
    <div className='user-list'>
      <Form className='search-form' layout='inline' initialValues={{ state: 1 }}>
        <Form.Item name='userId' label='用户ID'>
          <Input placeholder='请输入用户ID' />
        </Form.Item>
        <Form.Item name='userName' label='用户名称'>
          <Input placeholder='请输入用户名称' />
        </Form.Item>
        <Form.Item name='state' label='状态'>
          <Select
            style={{ width: 120 }}
            options={[
              { value: 0, label: '所有' },
              { value: 1, label: '在职' },
              { value: 2, label: '试用期' },
              { value: 3, label: '离职' }
            ]}
          ></Select>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type='primary'>搜索</Button>
            <Button type='primary'>重置</Button>
          </Space>
        </Form.Item>
      </Form>
      <div className='base-table'>
        <div className='header-wrapper'>
          <div className='title'>用户列表</div>
          <div className='action'>
            <Button type='primary'>新增</Button>
            <Button type='primary' danger style={{ marginLeft: 15 }}>
              批量删除
            </Button>
          </div>
        </div>
        <Table columns={columns}></Table>
      </div>
    </div>
  )
}
