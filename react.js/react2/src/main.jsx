import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppUseState from './AppUseState.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppUseState />

  </StrictMode>,
)
