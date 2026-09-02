import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { RouterProvider } from "react-router";
import './index.css'
// import AppUseState from './AppUseState.jsx'
// import  { router } from './router'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
