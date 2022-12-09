import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from '@/routes/router'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
