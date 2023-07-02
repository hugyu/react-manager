# react-manager
react18通用后台管理
### 路由管理 router/index
``` ts
import {createHashRouter, Navigate,createBrowserRouter} from 'react-router-dom'


const router = [
  {
    path: '/',
    element: <div >Welcome</div>
  },
  {
    path: '/login',
    element: <div>Login</div>
  },
  {
    path: '*',
    element: <Navigate to="/404"/>
  },
  {
    path: '/404',
    element: <div>404 Not Found</div>
  }
]

export default createHashRouter(router)

```
#### 主页面
```ts
import {RouterProvider} from 'react-router-dom'
import router from './router'
import './App.css'

function App() {
  return <RouterProvider router={router}/>
}

export default App
```