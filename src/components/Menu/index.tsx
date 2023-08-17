import { Menu } from 'antd'
import { DesktopOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import logo from '@/assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
const SideMenu = () => {
  // 返回一个navigate对象
  const navigate=useNavigate()
  const handleLogoClick = () => {
    navigate('/welcome')
  }
  const items = [
    {
      label: (<Link to={"/dashboard"}>工作台</Link>),
      key: '1',
      icon: <DesktopOutlined />,
    },
    {
      label: '系统管理',
      key: '2',
      icon: <SettingOutlined />,
      children: [
        {
          label: '用户管理',
          key: '3',
          icon: <TeamOutlined />
        }
      ]
    }
  ]
  return (
    <div>
      <div className={styles.logo} onClick={handleLogoClick}>
        <img src={logo} alt="njupt" className={ styles.img} />
        <span>南邮货运</span>
      </div>
      <Menu mode='inline' theme='dark' items={items} />
    </div>
  )
}

export default SideMenu
