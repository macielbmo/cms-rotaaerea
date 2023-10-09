import { createBrowserRouter } from 'react-router-dom'

import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import { Users } from './pages/Users'
import { Admin } from './pages/Admin'
import { Categories } from './pages/Categories'
import { News } from './pages/News'
import CreateNews from './pages/CreateNews'

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
        element: <Home />
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
      },
      {
        path: '/noticias/criar-noticia',
        element: <CreateNews />
      }
    ]
  }
])

export { router }
