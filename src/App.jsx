import {
  LoginForm
} from './pages/auth'

import {
  ListUsers,
  ListBooks,
  EditUser,
  StarPage,
  ReadUser,
  EditBook,
  ReadBook,
  ListSales,
  CreateSale
} from './pages/admin'



import {
  HeaderNavigation,
  SideBarMenu
} from './components/navigation'

import {
  useRoutes,
  Navigate
} from 'react-router-dom'


function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <HeaderNavigation/>,
      children: [
        {
          path: "/",
          element: <Navigate to="/login"/>
        },
        {
          path: "login",
          element: <LoginForm/>
        },
        {
          path: "admin",
          element: <SideBarMenu/>,
          children: [
            {
              path: "/admin",
              element: <Navigate to="/admin/home" />
            },
            {
              path: "home",
              element: <StarPage/>
            },
            {
              path: "users",
              element: <ListUsers/>,
            },
            {
              path: "books",
              element: <ListBooks/>
            },
            {
              path: "user",
              children: [
                {
                  path: "/admin/user",
                  element: <Navigate to='/admin'/>
                },
                {
                  path: "edit/:id",
                  element: <EditUser/>
                },
                {
                  path: "read/:id",
                  element: <ReadUser/>
                }
              ]
            },
            {
              path: 'book',
              children: [
                {
                  path: '/admin/book',
                  element: <Navigate to='/admin'/>
                },
                {
                  path: 'edit/:id',
                  element: <EditBook/>
                },
                {
                  path: 'read/:id',
                  element: <ReadBook/>
                }
              ]
            },
            {
              path: 'sales',
              element: <ListSales/>, 
            },
            {
              path: 'sale',
              children: [
                {
                  path:'/admin/sale',
                  element:<Navigate to='/admin'/>
                },{
                  path: 'create',
                  element: <CreateSale/>
                }
              ]
            }
          ]

        },
      ]
    }
  ])
  return(
    <>
      {element}
    </>
  )
}

export default App
