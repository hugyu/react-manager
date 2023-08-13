import { UserInfo } from '@/types/UserInfo'
import resso from 'resso'

const store = resso({
  token: '',
  userInfo: {
    userEmail: '',
    userName:''
  },
  updateUserInfo(userInfo: UserInfo) {
    store.userInfo = userInfo
  }
})
export default store
