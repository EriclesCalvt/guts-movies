import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import App from './App.jsx'
import './index.css'
import { MoviesProvider } from './context/MoviesContext.jsx'
import DetailedMovie from './pages/detailedMovie.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movie/:id',
        element: <DetailedMovie />,
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoviesProvider>
      <RouterProvider router={router} />
    </MoviesProvider>
  </StrictMode>,
)
