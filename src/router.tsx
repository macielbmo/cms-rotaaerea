import { createBrowserRouter } from 'react-router-dom'

import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'
import { Layout } from './components/Layout'
import { Users } from './pages/users'
import { Admin } from './pages/Admin'
import { Categories } from './pages/categories'
import { News } from './pages/news'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <Layout />,
    children: [

      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/usuarios',
        element: <Users />
      },
      {
        path: '/admin',
        element: <Admin />
      },
      {
        path: '/categories',
        element: <Categories />
      },
      {
        path: '/noticias',
        element: <News />
      }
    ]
  }
])

export { router }
