import { Navigate, Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { createContext, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import PasswordReset from './pages/PasswordReset'
import Tickets from './pages/Tickets'
import Ticket from './pages/Ticket'
import Store from './pages/Store'
export const  ContextApi =  createContext(null)

function App() {
  // const [store, setStore] = useState([])
  // console.log(store)

  const [ticket, setTicket]=useState([])
  console.log(ticket)
  const Id_pass = {
    email: 'admin123@gmail.com',
    password: 'admin'
  };
  /* ============== outlet ============== */
  const Layout = () => {
    const Navigate = useNavigate()
    const [logoutPop, setLogoutPop] = useState(false)
    const handleLogoutNo = () => {
      setLogoutPop(false)
    }
    const handleLogoutYes = () => {
      localStorage.setItem('auth', JSON.stringify(false))
      Navigate('/')
      window.location.reload();
      setLogoutPop(false);
    }
    return (
      <>
        <div style={{ display: `${logoutPop === true ? "" : "none"}` }} className='logoutPop' >
          <div>
            <p>Do you want logout?</p>
            <div>
              <button className='Btn1' onClick={handleLogoutYes} >Yes</button>
              <button className='Btn2' onClick={handleLogoutNo} >No</button>
            </div>
          </div>
        </div>
        <main style={{ display: 'flex' }} >
          <Sidebar setLogoutPop={setLogoutPop} />
          <div style={{  width: "100%", marginLeft:"248px" }}>
            <Outlet />
          </div>
        </main>
      </>
    )
  }

  /* ============== protect route ============== */
  const localStorageValue = JSON.parse(localStorage.getItem("auth"));
  const ProtectedRoute = ({ children }) => {
    if (!localStorageValue) {
      return <Navigate to='/login' />
    }
    return children;
  }

  /* ============== create Route ============== */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute>
        <Layout />
      </ProtectedRoute>,
      children: [
        
        {
          path: '/',
          element: <Tickets />
        },
        {
          path: '/ticket',
          element: <Ticket />
        },
        {
          path: '/store',
          element: <Store/>
        },
      ]

    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/forgot',
      element: <PasswordReset />,
    },
    

  ])
  return (
    <>
      <ContextApi.Provider value={{Id_pass, setTicket, ticket}} >
        <RouterProvider router={router} />
      </ContextApi.Provider>
    </>
  )
}

export default App

