import Error403 from '@/views/403'
import NotFound from '@/views/404'
import Login from '@/views/Login/Login'
import Welcome from '@/views/Welcome'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from '@/layout'

const router = [
  {
    path: '/',
    element: <Navigate to='/welcome' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '/403',
    element: <Error403 />
  }
]

export default createBrowserRouter(router)
