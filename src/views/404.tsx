import {Button, Result} from 'antd'
import { useNavigate } from 'react-router-dom';
function NotFound() {
  const navigate=useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return <Result status={404} title="404" subTitle={"页面不存在"} extra={<Button type="primary" onClick={handleClick}>回到首页</Button> } />
}
export default NotFound;
