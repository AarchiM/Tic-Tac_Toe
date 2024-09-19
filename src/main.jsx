import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WelcomePage from './components/WelcomePage.jsx'
import PlaySelf from './components/PlaySelf.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  children : [
    {
      path: "",
      element: <WelcomePage />
    }, {
      path: "/play",
      element: <PlaySelf />
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
