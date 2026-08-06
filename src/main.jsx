import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Pages serves this as a project site under /Prateeek73/, so the router has
        to strip that prefix before matching. BASE_URL comes from vite.config.js,
        keeping the two in sync. */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
