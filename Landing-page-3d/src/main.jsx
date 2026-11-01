import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LangProvider } from './i18n'

// A visitor who chose English once is taken to the English home page the next time they open "/".
// (Search engines have no stored choice, so they always see the Indonesian page at "/".)
try {
  if (window.location.pathname === '/' && localStorage.getItem('lang') === 'en') {
    window.location.replace('/en/' + window.location.search + window.location.hash)
  }
} catch { /* storage unavailable: stay on the Indonesian page */ }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
)
