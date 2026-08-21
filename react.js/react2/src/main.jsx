import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppUseState from './AppUseState.jsx'
import "@radix-ui/themes/styles.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppUseState />

  </StrictMode>,
)
