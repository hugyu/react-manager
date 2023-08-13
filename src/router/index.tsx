import Error403 from '@/views/403'
import NotFound from '@/views/404'
import Login from '@/views/Login/Login'
import Welcome from '@/views/Welcome'
import {createHashRouter, Navigate,createBrowserRouter} from 'react-router-dom'


const router = [
  {
    path: '/',
    element: <Welcome/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '*',
    element: <Navigate to="/404"/>
  },
  {
    path: '/404',
    element: <NotFound/>
  },
  {
    path: '/403',
    element: <Error403/>
  }
]

export default createHashRouter(router)
