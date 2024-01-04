import ChatRoom from "./components/ChatRoom"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Root from "./Root"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children : [
        {
          path: '/',
          element: <ChatRoom/>
        },
        {
          path: 'signup',
          element: <SignUp/>
        },
        {
          path: 'login',
          element: <Login/>
        },
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App

